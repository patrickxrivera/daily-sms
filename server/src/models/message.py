from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy import ForeignKey
from src.errors import DbError, TokenGenerationError
from src.extensions import db


class MessageModel(db.Model):
    __tablename__ = 'messages'

    id = Column(Integer, primary_key=True)
    text = Column(String, nullable=False)
    send_time = Column(String, nullable=False)
    active = Column(Boolean, nullable=False, default=True)
    _frequency = Column(String, nullable=False)

    user_id = Column(Integer, ForeignKey('users.id'))
    user = db.relationship('UserModel')

    def __init__(self, user_id, text, send_time, frequency, active):
        self.user_id = user_id
        self.text = text
        self.send_time = send_time
        self.frequency = frequency

        if active == None:
            self.active = True

    @property
    def frequency(self):
        return [day for day in self._frequency.split(', ')]

    @frequency.setter
    def frequency(self, days):
        self._frequency = days

    def save_to_db(self):
        # try:
        db.session.add(self)
        db.session.commit()
        # except:
        #     raise DbError('Error saving to db.')

    def delete_from_db(self):
        try:
            db.session.delete(self)
            db.session.commit()
        except:
            raise DbError('Error saving to db.')

    def __repr__(self):
        """For better error messages"""
        return f'<{self.__class__.__name__} {self.id}>'
