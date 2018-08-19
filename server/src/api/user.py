from flask_jwt_extended import jwt_required, jwt_refresh_token_required
from flask_jwt_extended import get_raw_jwt
from src.errors import ExistingUserError, InvalidLoginError
from src.models.revoked_token import RevokedTokenModel
from flask_restful import Resource, reqparse
from src.utils import add_to_parser
from src.models.user import UserModel

import json

parser = reqparse.RequestParser()


class UserRegistration(Resource):
    add_to_parser(parser, 'phone_number', int)

    @staticmethod
    def post():
        data = parser.parse_args()

        if UserModel.find_by_phone_number(data['phone_number']) is not None:
            raise ExistingUserError('User already exists.')

        user = UserModel(**data)
        user.save_to_db()

        return user.generate_tokens(), 201


class UserLogin(Resource):
    def post(self):
        data = parser.parse_args()

        current_user = UserModel.find_by_phone_number(data['phone_number'])

        if not current_user:
            raise InvalidLoginError(
                f"User with phone number {data['phone_number']} doesn't exist.")

        return current_user.generate_tokens()


class UserLogoutAccess(Resource):
    @jwt_required
    def post(self):
        # bug may be caused since I used 'token' instead of 'jti'
        token = get_raw_jwt()['token']

        revoked_token = RevokedTokenModel(token=token)
        revoked_token.add_to_blacklist()

        return {'message': 'Access token has been revoked'}


class UserLogoutRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        # bug may be caused since I used 'token' instead of 'jti'
        token = get_raw_jwt()['token']

        revoked_token = RevokedTokenModel(token=token)
        revoked_token.add_to_blacklist()

        return {'message': 'Refresh token has been revoked'}
