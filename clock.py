from apscheduler.schedulers.blocking import BlockingScheduler
from dailysms.services.utils import format_job_params
from dailysms.services.run import run_print_hey
from dailysms.services.twilio import TwilioService
from rq import Queue
from worker import conn

import logging
import sys

logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)

scheduler = BlockingScheduler()

q = Queue(connection=conn)


def send_sms(**args):
    print(args)
    q.enqueue(twilio.send_sms(**args))


def add_job(*args):
    job_params = format_job_params(*args)
    to_number = job_params['to_number']
    message, _ = args

    try:
        scheduler.add_job(send_sms, trigger='cron', args=[to_number, message.text], **job_params)
    except DailySMSError as e:
        print(e)
        raise AddJobError(f'Unable to add job with message id: {message.id}')


# scheduler.add_job(print_hey, trigger='interval', seconds=5)

scheduler.start()
