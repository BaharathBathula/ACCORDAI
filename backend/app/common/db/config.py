from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+psycopg2://accordai:accordai@localhost:5432/accordai"

settings = Settings()
