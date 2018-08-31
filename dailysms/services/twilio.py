from dailysms.config import TwilioSettings
from dailysms.errors import DailySMSError, TwilioServiceError
from twilio.rest import Client

REGISTRATION_SUCCESS = 'Congrats, you are now verified!'


class TwilioService:
    client = None

    def __init__(self):
        if TwilioService.client is None:
            TwilioService.client = Client(
                TwilioSettings.account_sid(), TwilioSettings.auth_token())

    def send_registration_success_sms(self, to_number):
        self.send_sms(to_number, REGISTRATION_SUCCESS)

    def send_add_message_success_sms(self, to_number, data):
        fields = ['text', 'send_time', 'frequency']
        text, send_time, frequency = [
            v for k, v in data.items() if k in fields]

        message = f'You will receive the following text: "{text}" {frequency.lower()} at {send_time} '

        self.send_sms(to_number, message)

    def send_sms(cls, to_number, message):
        try:
            cls.client.messages.create(
                body=message,
                from_=TwilioSettings.phone_number(),
                to=to_number
            )
        except DailySMSError as e:
            print(e)
            TwilioServiceError("Couldn't send text message.")
