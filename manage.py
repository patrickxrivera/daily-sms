import unittest
from flask.cli import FlaskGroup
from dailysms import create_app, db
from dailysms.models import UserModel, MessageModel

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
    tests = unittest.TestLoader().discover(
        'dailysms/tests', pattern='test_message.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


@cli.command()
def seed_db():
    """Seeds the database."""
    seed_user = {'phone_number': '1', 'country_code': '1'}
    seed_message_one = {'user_id': '1', 'text': 'Rise and shine!',
                        'send_time': '08:30', 'frequency': 'Every day'}
    seed_message_two = {'user_id': '1', 'text': 'Early bird gets the worm',
                        'send_time': '05:30', 'frequency': 'Every day'}

    db.session.add(UserModel(**seed_user))
    db.session.add(MessageModel(**seed_message_one))
    db.session.add(MessageModel(**seed_message_two))
    db.session.commit()


if __name__ == '__main__':
    cli()
