import uuid

from datetime import datetime


workflow_store = []


def create_workflow(
    workflow_type: str,
    payload: dict
):

    workflow = {
        "workflow_id": str(uuid.uuid4()),

        "workflow_type": workflow_type,

        "payload": payload,

        "status": "running",

        "created_at": str(datetime.utcnow())
    }

    workflow_store.append(
        workflow
    )

    return workflow


def complete_workflow(
    workflow_id: str
):

    for workflow in workflow_store:

        if workflow["workflow_id"] == workflow_id:

            workflow["status"] = "completed"

            return workflow

    return None


def get_workflows():
    return workflow_store
