import os

# TODO: import settings from app.config instead of env variables so you can use prod tokens


class AuthySettings:
    def key():
        return os.environ.get('TWILIO_AUTHY_KEY')


class TwilioSettings:
    def account_sid():
        return os.environ.get('TWILIO_ACCOUNT_SID')

    def auth_token():
        return os.environ.get('TWILIO_AUTH_TOKEN')

    def phone_number():
        return os.environ.get('TWILIO_NUMBER')
