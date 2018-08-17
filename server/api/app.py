from flask import Flask, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from utils.utils import with_xml
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'changeme'

api = Api(app, prefix='/api')

db = []


class Error(Exception):
    """Base class for exceptions in this module."""
    pass


class DbError(Exception):
    pass


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

    def post(self, id):
        """Create a daily message"""
        data = Message.parser.parse_args()
        data['id'] = id

        try:
            db.append(data)
        except RuntimeError:
            raise DBError('Error saving to DB.')

        return data, 201


class MessageList(Resource):
    def get(self, id):
        return [message for message in db if message['id'] == id]


class MessageWorker(Resource):
    def post(self):
        resp = MessagingResponse()
        resp.message('Wassup bruh')
        return with_xml(str(resp))


api.add_resource(MessageWorker, '/sms')
api.add_resource(Message, '/message/<int:id>')
api.add_resource(MessageList, '/messages/<int:id>')


if __name__ == '__main__':
    app.run(debug=True)
