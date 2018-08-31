from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy import ForeignKey
from dailysms.errors import DbError, TokenGenerationError
from dailysms.extensions import db
from .base import DailySMSModel


class MessageModel(DailySMSModel, db.Model):
    __tablename__ = 'messages'

    id = Column(Integer, primary_key=True)
    text = Column(String, nullable=False)
    send_time = Column(String, nullable=False)
    active = Column(Boolean, nullable=False, default=True)
    frequency = Column(String, nullable=False)

    user_id = Column(Integer, ForeignKey('users.id'))
    user = db.relationship('UserModel')

    def __init__(self, user_id, text, send_time, frequency, active=None):
        self.user_id = user_id
        self.text = text
        self.send_time = send_time
        self.frequency = frequency

        if active == None:
            self.active = True

    @property
    def json(self):
        return {
            'id': self.id,
            'text': self.text,
            'send_time': self.send_time,
            'active': self.active,
            'frequency': self.frequency
        }

    @classmethod
    def find_by_message_id(cls, message_id):
        return cls.query.filter_by(id=message_id).first()
