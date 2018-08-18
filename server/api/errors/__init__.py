class Error(Exception):
    """Base class for exceptions in this API."""
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


class DbError(Error):
    pass


class MessageError(Exception):
    def __init__(self, user_id, message_id, payload=None):
        self.user_id = user_id
        self.message_id = message_id
        self.message = f'No messages for user {user_id} and message {message_id}.'
        self.payload = payload


class UpdateMessageError(MessageError):
    pass


class DeleteMessageError(MessageError):
    pass
