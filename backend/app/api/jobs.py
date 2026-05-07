from fastapi import APIRouter

from celery.result import AsyncResult

from app.core.celery_app import celery_app

from app.tasks.ai_tasks import (
    analyze_document_task,
    analyze_claim_fraud_task,
    analyze_policy_task
)


router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"]
)


@router.post("/document-analysis")
def queue_document_analysis(
    document_data: dict
):
    task = analyze_document_task.delay(
        document_data
    )

    return {
        "job_id": task.id,
        "status": "queued",
        "job_type": "document_analysis"
    }


@router.post("/fraud-analysis")
def queue_fraud_analysis(
    claim_data: dict
):
    task = analyze_claim_fraud_task.delay(
        claim_data
    )

    return {
        "job_id": task.id,
        "status": "queued",
        "job_type": "fraud_analysis"
    }


@router.post("/policy-analysis")
def queue_policy_analysis(
    policy_data: dict
):
    task = analyze_policy_task.delay(
        policy_data
    )

    return {
        "job_id": task.id,
        "status": "queued",
        "job_type": "policy_analysis"
    }


@router.get("/{job_id}")
def get_job_status(
    job_id: str
):
    result = AsyncResult(
        job_id,
        app=celery_app
    )

    return {
        "job_id": job_id,
        "status": result.status,
        "result": result.result
    }
