from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_ENV: str = "development"
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 8000
    DEBUG: bool = True

    FRONTEND_URL: str = "http://localhost:3000"
    OPENCCTV_API_URL: str = "https://opencctv.org/api"

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
