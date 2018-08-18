from flask import Flask, request, got_request_exception, jsonify
from twilio.twiml.messaging_response import MessagingResponse
from flask_restful import Resource, reqparse
from flask_restful import Api
from flask_cors import CORS

from resources.message import Message, MessageList
from services.message_worker import MessageWorker
from errors import Error
from utils import with_xml


app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'changeme'  # CHANGE

api = Api(app, prefix='/api')


@app.errorhandler(Error)
def handle_error(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response


api.add_resource(MessageWorker, '/sms')
api.add_resource(Message, '/message/<int:user_id>',
                 '/message/<int:user_id>/<int:message_id>')
api.add_resource(MessageList, '/messages/<int:id>')


if __name__ == '__main__':
    app.run(debug=True)
