from sqlalchemy import Column, Integer, String
from src.errors import DbError
from src.extensions import db


class RevokedTokenModel(db.Model):
    __tablename__ = 'revoked_tokens'

    id = Column(Integer, primary_key=True)
    token = Column(String(120))

    def add_to_blacklist(self):
        try:
            db.session.add(self)
            db.session.commit()
        except:
            DbError('Error saving to db.')

    @classmethod
    def is_token_blacklisted(cls, token):
        is_blacklisted = cls.query.filter_by(token=token).first()
        return bool(is_blacklisted)
