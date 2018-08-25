import unittest
from flask.cli import FlaskGroup
from src import create_app, db
from src.models.user import UserModel

app = create_app()

cli = FlaskGroup(create_app=create_app)


@cli.command()
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()


@cli.command()
def test():
    """Runs the tests without code coverage"""
    tests = unittest.TestLoader().discover('src/tests', pattern='test_message.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


@cli.command()
def seed_db():
    """Seeds the database."""
    db.session.add(UserModel(phone_number=1))
    db.session.add(UserModel(phone_number=2))
    db.session.commit()


if __name__ == '__main__':
    cli()
