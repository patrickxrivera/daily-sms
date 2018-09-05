def format_job_params(message, to_number, timezone='US/Pacific', replace_existing=True):
    """
    Formats params before adding job to jobstore.

    :param trigger - type of job. i.e., cron, interval, etc.
    :param message - Message class object
    :param to_number - User phone number to send message to
    :return formatted params object with trigger, args, day_of_week, hour, and minute properties
    """

    time = format_time(message.send_time)

    return {
        'replace_existing': replace_existing,
        'timezone': timezone,
        'args': [to_number, message.text],
        'day_of_week': format_day_of_week(message.frequency),
        **time
    }


def format_time(time):
    """
    Formats time from what's in our database to something our cron job can understand.

    Examples:
    '8:30 AM' => {'hour': '8', 'minute': '30'} 
    '2:40 PM' => {'hour': '14', 'minute': '40'} 

    param: time - string with hour, minute, and period
    return dict with hour and minute properties
    """

    clock, period = time.split(' ')
    hour, minute = clock.split(':')

    hour = format_hour(hour, period)

    return {'hour': hour, 'minute': minute}


def format_hour(hour, period):
    hour = int(hour) if period == 'AM' else int(hour) + 12
    return hour - 12 if hour == 12 or hour == 24 else hour


def format_day_of_week(frequency):
    DAY_MAP = {
        'Every day': 'mon-sun',
        'Weekdays': 'mon-fri',
        'Weekends': 'sat-sun'
    }

    return DAY_MAP[frequency]
