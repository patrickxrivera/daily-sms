from src.extensions import db


class DailySMSModel(object):
    """Base Model that all models inherit from"""

    # TODO: DRY this up
    def save_to_db(self):
        try:
            db.session.add(self)
            db.session.commit()
        except OperationalError as e:
            print(e)
            db.session.rollback()
            raise DbError('Error saving to db.')

    def delete_from_db(self):
        try:
            db.session.delete(self)
            db.session.commit()
        except OperationalError as e:
            print(e)
            db.session.rollback()
            raise DbError('Error saving to db.')

    def __repr__(self):
        """For better error messages"""
        return f'<{self.__class__.__name__}>'
