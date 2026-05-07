from fastapi import APIRouter

from app.services.policy_ai_service import analyze_policy

router = APIRouter(
    prefix="/policy-ai",
    tags=["Policy AI"]
)


@router.post("/analyze")
def analyze_policy_endpoint(
    policy_data: dict
):
    return analyze_policy(policy_data)
