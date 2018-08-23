from flask_jwt_extended import jwt_required, jwt_refresh_token_required
from flask_jwt_extended import get_raw_jwt, get_jwt_identity
from src.errors import ExistingUserError, InvalidLoginError
from src.errors import VerificationCodeNotSentError
from src.errors import UserNotFoundError
from flask_restful import Resource, reqparse
from src.models import RevokedTokenModel
from src.services import AuthyService, TwilioService
from src.utils import add_to_parser
from src.models import UserModel


class UserRegistration(Resource):
    parser = reqparse.RequestParser()

    add_to_parser(parser, 'phone_number', int, required=True)
    add_to_parser(parser, 'country_code', str, required=True)

    @classmethod
    def post(cls):
        data = cls.parser.parse_args()

        if UserModel.find_by_phone_number(data['phone_number']) is not None:
            raise ExistingUserError('User already exists.')

        user = UserModel(**data)

        authy_service = AuthyService()

        if authy_service.request_phone_verification_code(user):
            user.save_to_db()
            return {**user.tokens, 'user_id': user.id}, 201

        raise VerificationCodeNotSentError(
            'There was an issue requesting the verification code. Try again.')


class Verify(Resource):
    parser = reqparse.RequestParser()

    add_to_parser(parser, 'verification_code', int, required=True)

    @classmethod
    def post(cls, user_id):
        data = cls.parser.parse_args()
        user = UserModel.find_by_user_id(user_id)

        if user is None:
            raise UserNotFoundError('Invalid user ID.')

        authy_service = AuthyService()

        if not authy_service.confirm_phone_number(user, data['verification_code']):
            raise InvalidVerficationCodeError(
                'Verification code is invalid. Please try again.')

        user.verified = True
        user.save_to_db()

        twilio_service = TwilioService()
        twilio_service.send_registration_success_sms(
            user.formatted_phone_number)

        return {'success': 'ok'}


class UserLogin(Resource):
    parser = reqparse.RequestParser()

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
