from flask_restful import Resource, reqparse
from src.utils import add_to_parser
from src.errors import ExistingUserError
from src.models.user import UserModel
import json

parser = reqparse.RequestParser()


class UserRegistration(Resource):
    add_to_parser(parser, 'phone_number', int)

    @staticmethod
    def post():
        data = parser.parse_args()

        if UserModel.find_by_phone_number(data['phone_number']) is not None:
            raise ExistingUserError('User already exists')

        user = UserModel(**data)
        user_id = user.save()

        return {'user_id': user_id, 'message': 'successfully created a user!'}, 201
