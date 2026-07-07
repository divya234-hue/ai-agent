from pathlib import Path

from pydantic import ConfigDict
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    model_config = ConfigDict(env_file='.env', extra='ignore')

    app_env: str = 'development'
    app_secret: str = 'local-secret'
    backend_cors_origins: str = 'http://localhost:5173'
    upload_dir: str = './uploads'
    jwt_algorithm: str = 'HS256'
    jwt_access_token_expire_minutes: int = 60

    @property
    def parsed_backend_cors_origins(self) -> list[str]:
        return [origin.strip() for origin in self.backend_cors_origins.split(',') if origin.strip()]


settings = Settings()
ROOT_DIR = Path(__file__).resolve().parents[2]
