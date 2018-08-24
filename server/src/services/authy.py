from src.errors import VerificationCodeNotSentError
from src.errors import FailedVerificationError
from src.config import AuthySettings
from authy.api import AuthyApiClient


class AuthyService:
    client = None

    def __init__(self):
        if AuthyService.client is None:
            AuthyService.client = AuthyApiClient(AuthySettings.key())

    def request_phone_verification_code(self, user):
        if user.authy_user_id == None:
            self._register_user_under_authy(user)

        sms = AuthyService.client.users.request_sms(
            user.authy_user_id, {'force': True})

        return not sms.ignored()

    @classmethod
    def _register_user_under_authy(cls, user):
        # TODO: figure out how to not require email
        authy_user = cls.client.users.create(
            'patrick.x.rivera@gmail.com', user.phone_number, user.country_code)

        if authy_user.ok():
            user.authy_user_id = authy_user.id
        else:
            raise VerificationCodeNotSentError(authy_user.errors())

    @classmethod
    def confirm_phone_number(cls, user, verification_code):
        # TODO: clean this up
        try:
            verification = cls.client.tokens.verify(
                user.authy_user_id, verification_code)
            print(verification.ok())
            if verification.ok():
                return True
            else:
                print(verification.errors())
                raise FailedVerificationError(verification.errors())

        except:
            FailedVerificationError(
                'Token must be between 6 and 12 characters.')
