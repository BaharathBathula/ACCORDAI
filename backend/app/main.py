from fastapi import FastAPI

from app.api.health import router as health_router
from app.api.auth import router as auth_router
from app.api.customers import router as customers_router
from app.api.policies import router as policies_router
from app.api.policy_ai import router as policy_ai_router
from app.api.claims import router as claims_router
from app.api.fraud_ai import router as fraud_ai_router
from app.api.copilot import router as copilot_router
from app.api.tasks import router as tasks_router
from app.api.documents import router as documents_router
from app.api.document_ai import router as document_ai_router
from app.api.insurance_ai import router as insurance_ai_router
from app.api.agencies import router as agencies_router
from app.api.realtime import router as realtime_router
from app.api.multi_agent import router as multi_agent_router
from app.api.rag import router as rag_router
from app.middleware.request_monitor import (
    RequestMonitoringMiddleware
)
from app.api.metrics import (
    router as metrics_router
)
from app.api.jobs import router as jobs_router
from app.api.admin import (
    router as admin_router
)

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
app.include_router(copilot_router)
app.include_router(tasks_router)
app.include_router(documents_router)
app.include_router(document_ai_router)
app.include_router(insurance_ai_router)
app.include_router(agencies_router)
app.include_router(realtime_router)
app.include_router(multi_agent_router)
app.include_router(rag_router)
app.add_middleware(
    RequestMonitoringMiddleware
)
app.include_router(metrics_router)
app.include_router(jobs_router)
app.include_router(admin_router)

@app.get("/")
def root():
    return {
        "platform": "ACCORDAI",
        "status": "active",
        "service": "insurance-ai-platform"
    }
