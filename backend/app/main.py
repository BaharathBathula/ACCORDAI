from fastapi import FastAPI

from app.api.customers import router as customers_router
app.include_router(customers_router)

app = FastAPI(
    title="ACCORDAI API",
    description="AI-native insurance agency management platform backend.",
    version="1.0.0"
)

app.include_router(health_router)
app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "platform": "ACCORDAI",
        "status": "active",
        "service": "insurance-ai-platform"
    }
