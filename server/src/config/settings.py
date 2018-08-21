import os

# TODO: import settings from app.config instead of env variables


class AuthySettings:
    @property
    def key():
        return os.environ.get('TWILIO_AUTHY_KEY')


class TwilioSettings:
    @property
    def account_sid():
        return os.environ.get('TWILIO_ACCOUNT_SID')

    @property
    def auth_token():
        return os.environ.get('TWILIO_AUTH_TOKEN')

    @property
    def phone_number():
        return os.environ.get('TWILIO_NUMBER')
