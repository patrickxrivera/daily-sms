from flask_restful import Resource, reqparse

from src.utils import add_to_parser
from src.errors import ExistingUserError
from src.models.user import UserModel


class User(Resource):
    parser = reqparse.RequestParser()
    add_to_parser(parser, 'phone_number', int)

    def post(self):
        data = User.parser.parse_args()
        print(data)
        if UserModel.find_by_phone_number(data['phone_number']) is not None:
            raise ExistingUserError('User already exists')

        user = UserModel(**data)
        user.save_to_db()

        return {'user': user, 'message': 'successfully created a user!'}, 201
