from flask_restful import Resource, reqparse

from src.errors import DbError, UpdateMessageError, DeleteMessageError
from src.utils import add_to_parser
from src.models import MessageModel


class Message(Resource):
    parser = reqparse.RequestParser()

    add_to_parser(parser, 'text', str)
    add_to_parser(parser, 'send_time', str)
    add_to_parser(parser, 'frequency', str)
    add_to_parser(parser, 'active', bool)

    @classmethod
    def post(cls, user_id):
        """Create a daily message"""
        data = cls.parser.parse_args()

        message = MessageModel(user_id, **data)
        message.save_to_db()

        return {'success': 'ok'}, 201

    @classmethod
    def put(cls, user_id, message_id):
        """Update message fields"""
        data = cls.parser.parse_args()
        valid_fields = {k: v for k, v in data.items() if v != None}

        message = MessageModel.find_by_message_id(message_id)

        for key in valid_fields.keys():
            setattr(message, key, valid_fields[key])

        message.save_to_db()

        return {'success': 'ok'}, 202

    def delete(self, user_id, message_id):
        """Delete specific message"""
        for idx, message in enumerate(db):
            if self._is_target_message(message, user_id, message_id):
                self._delete_message(idx)
                break
        else:
            raise DeleteMessageError(user_id, message_id)

        return {'success': 'ok'}, 202


class MessageList(Resource):
    def get(self, id):
        """Return all messages for given user"""
        return [message for message in db if message['user_id'] == id]
