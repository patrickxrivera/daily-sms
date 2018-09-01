from flask_jwt_extended import jwt_required, jwt_refresh_token_required
from flask_jwt_extended import get_raw_jwt, get_jwt_identity
from flask_restful import Resource, reqparse
from dailysms.errors import ExistingUserError, InvalidLoginError
from dailysms.errors import VerificationCodeNotSentError
from dailysms.errors import InvalidVerificationCodeError
from dailysms.errors import UserNotFoundError
from dailysms.models import RevokedTokenModel
from dailysms.services import AuthyService, TwilioService
from dailysms.utils import add_to_parser
from dailysms.models import UserModel


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
            return {**user.tokens, 'user_id': user.id, 'verified': user.verified}, 201

        raise VerificationCodeNotSentError(
            'There was an issue requesting the verification code. Try again.')


class UserVerify(Resource):
    parser = reqparse.RequestParser()

    add_to_parser(parser, 'verification_code', str, required=True)

    @classmethod
    def post(cls, user_id):
        data = cls.parser.parse_args()
        user = UserModel.find_by_user_id(user_id)

        if user is None:
            raise UserNotFoundError('Invalid user ID.')

        authy_service = AuthyService()
        confirmation = authy_service.confirm_phone_number(
            user, data['verification_code'])

        if not confirmation['success']:
            raise InvalidVerificationCodeError(
                confirmation['message'])

        user.verified = True
        user.save_to_db()

        twilio_service = TwilioService()
        twilio_service.send_registration_success_sms(
            user.formatted_phone_number)

        return {'success': 'ok'}


class UserLogin(Resource):
    parser = reqparse.RequestParser()

    add_to_parser(parser, 'phone_number', int, required=True)

    @classmethod
    def post(cls):
        data = cls.parser.parse_args()

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
