from fastapi import FastAPI
from app.api.health import router as health_router

app = FastAPI(
    title="ACCORDAI API",
    description="AI-native insurance agency management platform backend.",
    version="1.0.0"
)

app.include_router(health_router)


@app.get("/")
def root():
    return {
        "platform": "ACCORDAI",
        "status": "active",
        "service": "insurance-ai-platform"
    }
