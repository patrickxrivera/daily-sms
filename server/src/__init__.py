from flask import Flask, request, got_request_exception, jsonify
from twilio.twiml.messaging_response import MessagingResponse
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS
from dotenv import load_dotenv
from src.api.message import Message, MessageList
from src.extensions import db
from src.api.user import UserRegistration
from src.services.message_worker import MessageWorker
from src.errors import Error
from src.utils import with_xml
import os

load_dotenv()


def create_app():
    app = Flask(__name__)

    CORS(app)

    # TODO: move to config file w/ test, dev, and prod
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['PROPAGATE_EXCEPTIONS'] = True
    app.secret_key = os.environ['SECRET_KEY']

    init_extensions(app)
    init_api(app)
    init_decorators(app)

    return app


def init_extensions(app):
    db.init_app(app)


def init_api(app):
    api = Api(app, prefix='/api')

    api.add_resource(UserRegistration, '/register')
    api.add_resource(MessageWorker, '/sms')
    api.add_resource(Message, '/message/<int:user_id>',
                     '/message/<int:user_id>/<int:message_id>')
    api.add_resource(MessageList, '/messages/<int:id>')


def init_decorators(app):

    @app.before_first_request
    def create_tables():
        db.create_all()

    @app.errorhandler(Error)
    def handle_error(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response
