from dailysms.services import TwilioService
from dailysms.extensions import scheduler
from flask_apscheduler.json import jsonify
from dailysms.errors import DailySMSError, AddJobError
from dailysms.utils import format_job_params


class Cron(object):
    _scheduler = scheduler
    trigger = 'cron'

    def __init__(self):
        self.twilio = TwilioService()

    def add_job(self, *args):
        job_params = format_job_params(self.trigger, *args)
        message, _ = args

        try:
            self._scheduler.add_job(str(message.id), self.twilio.send_sms, **job_params)
        except DailySMSError as e:
            print(e)
            raise AddJobError(f'Unable to add job with message id: {message.id}')
