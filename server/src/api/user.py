from flask_jwt_extended import jwt_required, jwt_refresh_token_required
from flask_jwt_extended import get_raw_jwt, get_jwt_identity
from src.errors import ExistingUserError, InvalidLoginError
from src.models.revoked_token import RevokedTokenModel
from flask_restful import Resource, reqparse
from src.utils import add_to_parser
from src.models.user import UserModel

parser = reqparse.RequestParser()


class UserRegistration(Resource):
    add_to_parser(parser, 'phone_number', int, required=True)
    add_to_parser(parser, 'country_code', str, required=True)

    @staticmethod
    def post():
        data = parser.parse_args()

        if UserModel.find_by_phone_number(data['phone_number']) is not None:
            raise ExistingUserError('User already exists.')

        user = UserModel(**data)
        user.save_to_db()

        return {**user.tokens, 'verified': user.is_verified}, 201


class UserLogin(Resource):
    add_to_parser(parser, 'phone_number', int, required=True)

    @staticmethod
    def post():
        data = parser.parse_args()

        current_user = UserModel.find_by_phone_number(data['phone_number'])

        if not current_user:
            raise InvalidLoginError(
                f"User with phone number {data['phone_number']} doesn't exist.")

        return current_user.tokens


class UserLogoutAccess(Resource):
    @jwt_required
    def post(self):
        token = get_raw_jwt()['jti']

        revoked_token = RevokedTokenModel(token=token)
        revoked_token.add_to_blacklist()

        return {'message': 'Access token has been revoked.'}


class UserTokenRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        current_user = get_jwt_identity()
        return {'access_token'}
