from pydantic import BaseModel
from typing import Dict, Any


class WorkflowRequest(BaseModel):
    workflow_type: str
    payload: Dict[str, Any]


class WorkflowResponse(BaseModel):
    workflow_id: str
    status: str
    workflow_type: str
