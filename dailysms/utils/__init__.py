from flask import make_response


def to_title_case(word):
    return word[:1].upper() + word[1:]


def title_cased_list(field):
    return [to_title_case(word) if idx == 0 else word for idx, word in enumerate(field.split('_'))]


def title_case(field):
    """
    Takes a field from snake case to titlecase so it can be shown on the frontend to the end user

    Examples: 
    'phone_number' => 'Phone number'
    'verified' => 'Verified'


    :param field - all fields from the passed in dict
    :return titlecased string
    """
    return ' '.join(title_cased_list(field))


def add_to_parser(parser, field, type, required=False, error_message=None):
    if error_message is None:
        title_cased_field = title_case(field)
        error_message = f'{title_cased_field} is required.'
    parser.add_argument(field, type=type, required=required, help=error_message, location='json')


def format_job_params(trigger, message, to_number):
    """
    Formats params before adding job to jobstore.

    :param trigger - type of job. i.e., cron, interval, etc.
    :param message - Message class object
    :param to_number - User phone number to send message to
    :return formatted params object with trigger, args, day_of_week, hour, and minute properties
    """

    time = format_time(message.send_time)

    return {
        'trigger': trigger,
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
    MAPPINGS = {
        'Every day': 'mon-sun',
        'Weekdays': 'mon-fri',
        'Weekends': 'sat-sun'
    }

    return MAPPINGS[frequency]
