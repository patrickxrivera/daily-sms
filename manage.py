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


if __name__ == '__main__':
    cli()
