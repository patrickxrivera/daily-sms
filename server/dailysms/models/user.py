from flask_jwt_extended import create_access_token, create_refresh_token
from sqlalchemy import Column, Integer, String, Boolean, BigInteger
from dailysms.errors import DbError, TokenGenerationError
from dailysms.extensions import db
from .base import DailySMSModel


class UserModel(DailySMSModel, db.Model):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    phone_number = Column(BigInteger, unique=True, nullable=False)
    country_code = Column(String, nullable=False)
    verified = Column(Boolean, nullable=False, default=False)
    authy_user_id = Column(String, nullable=True)

    messages = db.relationship('MessageModel', lazy='dynamic')

    def __init__(self, phone_number, country_code):
        self.phone_number = phone_number
        self.country_code = country_code

    @classmethod
    def find_by_phone_number(cls, phone_number):
        return cls.query.filter_by(phone_number=phone_number).first()

    @classmethod
    def find_by_user_id(cls, user_id):
        return cls.query.filter_by(id=user_id).first()

    @property
    def json_id(self):
        return self.as_dict()['id']

    @property
    def formatted_phone_number(self):
        return f'+{self.country_code}{self.phone_number}'

    @property
    def tokens(self):
        try:
            return {
                'access_token': create_access_token(self.phone_number),
                'refresh_token': create_refresh_token(self.phone_number)
            }
        except:
            raise TokenGenerationError('Error generating JWT tokens.')

    @property
    def is_verified(self):
        try:
            return self.verified
        except:
            raise DBError('Error fetching from db.')

    def as_dict(self):
        """Serializes SQLAlchemy row to JSON so the row can be returned"""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def save(self, *data):
        self.save_to_db()
        return self.json_id
