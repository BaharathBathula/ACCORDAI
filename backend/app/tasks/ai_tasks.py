from app.core.celery_app import celery_app

from app.services.document_ai_service import (
    analyze_document
)

from app.services.fraud_detection_service import (
    analyze_claim_fraud
)

from app.services.policy_ai_service import (
    analyze_policy
)


@celery_app.task
def analyze_document_task(
    document_data: dict
):
    return analyze_document(
        document_data
    )


@celery_app.task
def analyze_claim_fraud_task(
    claim_data: dict
):
    return analyze_claim_fraud(
        claim_data
    )


@celery_app.task
def analyze_policy_task(
    policy_data: dict
):
    return analyze_policy(
        policy_data
    )
