from src.config import AuthySettings
from authy.api import AuthyApiClient


class AuthyService:
    client = None

    def __init__(self):
        if AuthyService.client is None:
            AuthyService.client = AuthyApiClient(AuthySettings.key)
