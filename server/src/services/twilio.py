from src.config import TwilioSettings
from twilio.rest import Client


class TwilioService:
    client = None

    def __init__(self):
        if TwilioService.client is None:
            TwilioService.client = Client(
                TwilioSettings.account_sid(), TwilioSettings.auth_token())

    @classmethod
    def send_registration_success_sms(cls, to_number):
        message = cls.client.messages.create(
            body='Congrats, you are now verified!',
            to=to_number,
            from_=TwilioSettings.phone_number()
        )
