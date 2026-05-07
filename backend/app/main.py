from fastapi import FastAPI

from app.api.health import router as health_router
from app.api.auth import router as auth_router
from app.api.customers import router as customers_router
from app.api.policies import router as policies_router
from app.api.policy_ai import router as policy_ai_router
from app.api.claims import router as claims_router
from app.api.fraud_ai import router as fraud_ai_router

app = FastAPI(
    title="ACCORDAI API",
    description="AI-native insurance agency management platform backend.",
    version="1.0.0"
)

app.include_router(health_router)
app.include_router(auth_router)
app.include_router(customers_router)
app.include_router(policies_router)
app.include_router(policy_ai_router)
app.include_router(claims_router)
app.include_router(fraud_ai_router)


@app.get("/")
def root():
    return {
        "platform": "ACCORDAI",
        "status": "active",
        "service": "insurance-ai-platform"
    }
