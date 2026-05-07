from fastapi import APIRouter

from app.services.insurance_ai_service import (
    summarize_policy,
    reason_about_claim,
    summarize_document
)

router = APIRouter(
    prefix="/insurance-ai",
    tags=["Insurance AI"]
)


@router.post("/policy-summary")
def policy_summary(policy_data: dict):
    return summarize_policy(policy_data)


@router.post("/claim-reasoning")
def claim_reasoning(claim_data: dict):
    return reason_about_claim(claim_data)


@router.post("/document-summary")
def document_summary(document_data: dict):
    return summarize_document(document_data)
  
