from flask import make_response

# TODO: use context manager? class?


def with_xml(resp):
    blob = make_response(str(resp))
    blob.headers['Content-Type'] = 'application/xml'
    return blob
