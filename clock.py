from dailysms.utils import format_job_params
from dailysms.services.twilio import TwilioService
from dailysms.errors import DailySMSError, AddJobError
from dailysms.extensions import scheduler
from rq import Queue
from worker import conn

import logging
import sys

logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)

q = Queue(connection=conn)

twilio = TwilioService()


def send_sms(*args):
    print(args)
    q.enqueue(twilio.send_sms, *args)


def add_job(*args):
    job_params = format_job_params(*args)
    message, to_number = args

    try:
        scheduler.add_job(str(message.id), send_sms, **job_params)
    except Exception as e:
        print(e)
        raise AddJobError(f'Unable to add job with message id: {message.id}')
