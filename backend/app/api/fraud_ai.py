from fastapi import APIRouter

from app.services.fraud_detection_service import (
    analyze_claim_fraud
)

router = APIRouter(
    prefix="/fraud-ai",
    tags=["Fraud AI"]
)


@router.post("/analyze")
def fraud_analysis_endpoint(
    claim_data: dict
):
    return analyze_claim_fraud(claim_data)
