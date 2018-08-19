from flask_restful import Resource, reqparse
from flask_jwt_extended import (create_access_token, create_refresh_token,
                                jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from src.utils import add_to_parser
from src.errors import ExistingUserError, InvalidLoginError
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
