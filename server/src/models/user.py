from flask_jwt_extended import create_access_token, create_refresh_token
from sqlalchemy import Column, Integer, String, Boolean
from src.errors import DbError, TokenGenerationError
from src.extensions import db


class UserModel(db.Model):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    phone_number = Column(Integer, unique=True, nullable=False)
    country_code = Column(String, nullable=False)
    verified = Column(Boolean, nullable=False, default=False)
    verification_code = Column(String, nullable=True)

    def __init__(self, phone_number, country_code):
        self.phone_number = phone_number
        self.country_code = country_code

    @classmethod
    def find_by_phone_number(cls, phone_number):
        return cls.query.filter_by(phone_number=phone_number).first()

    @property
    def json_id(self):
        return self.as_dict()['id']

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

    def save_to_db(self):
        try:
            db.session.add(self)
            db.session.commit()
        except:
            raise DbError('Error saving to db.')

    def delete_from_db(self):
        try:
            db.session.delete(self)
            db.session.commit()
        except:
            raise DbError('Error saving to db.')

    def __repr__(self):
        """For better error messages"""
        return f'<{self.__class__.__name__} {self.phone_number}>'
