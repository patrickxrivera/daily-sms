from flask import make_response


# TODO: use context manager? class? decorator?
def with_xml(resp):
    blob = make_response(str(resp))
    blob.headers['Content-Type'] = 'application/xml'
    return blob


def add_to_parser(parser, field, type, required=False, error_message=None):
    if error_message is None:
        error_message = f'{field} is required.'
    parser.add_argument(field, type=type, required=required, help=error_message,
                        location='json')
