from fastapi import APIRouter

from app.schemas.workflow import (
    WorkflowRequest
)

from app.services.workflow_engine import (
    get_workflows
)

from app.services.renewal_workflow import (
    run_policy_renewal_workflow
)

from app.services.claim_triage_workflow import (
    run_claim_triage_workflow
)

router = APIRouter(
    prefix="/workflows",
    tags=["Workflows"]
)


@router.post("/renewal")
def renewal_workflow(
    request: WorkflowRequest
):

    return run_policy_renewal_workflow(
        request.payload
    )


@router.post("/claim-triage")
def claim_triage_workflow(
    request: WorkflowRequest
):

    return run_claim_triage_workflow(
        request.payload
    )


@router.get("/")
def workflows():
    return get_workflows()
