from .message import Message, MessageList
from .user import UserRegistration, UserLogin
from .user import UserLogoutAccess, UserTokenRefresh
from .user import UserVerify
from .test import Test
from flask_restful import Api


def init_api(app):
    api = Api(app, prefix='/api')

    api.add_resource(Test, '/')
    api.add_resource(UserRegistration, '/register')
    api.add_resource(UserVerify, '/verify/<int:user_id>')
    api.add_resource(UserLogin, '/login')
    api.add_resource(UserLogoutAccess, '/logout')
    api.add_resource(UserTokenRefresh, '/refresh')
    api.add_resource(Message, '/message/<int:user_id>',
                     '/message/<int:user_id>/<int:message_id>')
    api.add_resource(MessageList, '/messages/<int:user_id>')
