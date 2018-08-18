from flask_restful import Resource, reqparse

from errors import DbError, UpdateMessageError

message_counter = 1  # REMOVE: only for rapid prototyping
db = []


class Message(Resource):
    parser = reqparse.RequestParser()

    # TODO: dry this up
    parser.add_argument('text',
                        type=str,
                        help='This field cannot be left blank!'
                        )
    parser.add_argument('send_time',
                        type=str,
                        help='This field cannot be left blank!'
                        )
    parser.add_argument('frequency',
                        type=list,
                        location='json',
                        help='This field cannot be left blank!'
                        )
    parser.add_argument('active',
                        type=bool,
                        help='This field cannot be left blank!'
                        )

    def post(self, user_id):
        """Create a daily message"""
        data = Message.parser.parse_args()
        data['user_id'] = user_id
        data['message_id'] = message_counter

        try:
            db.append(data)
        except RuntimeError:
            raise DBError('Error saving to DB.')

        return data, 201

    def put(self, user_id, message_id):
        """Update daily message properties"""
        messages = [message for message in db if message['message_id'] == id]

        if not messages:
            raise UpdateMessageError(user_id, message_id)

        return messages


class MessageList(Resource):
    def get(self, id):
        """Return all messages for given user"""
        return [message for message in db if message['user_id'] == id]
