from dailysms.services import TwilioService
from dailysms.extensions import scheduler
from flask_apscheduler.json import jsonify
from dailysms.errors import DailySMSError, AddJobError


def send_sms(text, to_number):
    twilio = TwilioService()
    twilio.send_sms(to_number, text)


class Cron(object):
    _scheduler = scheduler
    trigger = 'cron'

    def __init__(self):
        pass

    @classmethod
    def add_job(cls, message, to_number):
        time = cls.format_time(message.send_time)

        job_params = {
            'trigger': cls.trigger,
            'args': [message.text, to_number],
            'day_of_week': cls.format_day_of_week(message.frequency),
            **time
        }

        try:
            cls._scheduler.add_job(str(message.id), send_sms, **job_params)
        except DailySMSError as e:
            print(e)
            raise AddJobError('Unable to add job with id: 1')

    @classmethod
    def format_time(cls, time):
        clock, period = time.split(' ')
        hour, minute = clock.split(':')

        hour = cls.format_hour(hour, period)

        return {'hour': hour, 'minute': minute}

    @staticmethod
    def format_hour(hour, period):
        hour = int(hour) if period == 'AM' else int(hour) + 12
        return hour - 12 if hour == 12 or hour == 24 else hour

    @staticmethod
    def format_day_of_week(frequency):
        MAPPINGS = {
            'Every day': 'mon-sun',
            'Weekdays': 'mon-fri',
            'Weekends': 'sat-sun'
        }

        return MAPPINGS[frequency]
