from src.services.message_worker import MessageWorker
from src.api.message import Message, MessageList
from src.api.user import UserRegistration, UserLogin
from src.api.user import UserLogoutAccess, UserTokenRefresh
from src.api.user import Verify
from flask_restful import Api


def init_api(app):
    api = Api(app, prefix='/api')

    api.add_resource(UserRegistration, '/register')
    api.add_resource(Verify, '/verify/<int:user_id>')
    api.add_resource(UserLogin, '/login')
    api.add_resource(UserLogoutAccess, '/logout')
    api.add_resource(UserTokenRefresh, '/refresh')
    api.add_resource(MessageWorker, '/sms')
    api.add_resource(Message, '/message/<int:user_id>',
                     '/message/<int:user_id>/<int:message_id>')
    api.add_resource(MessageList, '/messages/<int:user_id>')
