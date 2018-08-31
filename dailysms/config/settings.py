import os


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
