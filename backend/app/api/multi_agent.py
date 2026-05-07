from fastapi import APIRouter

from app.schemas.copilot import CopilotRequest
from app.services.multi_agent_service import run_multi_agent

router = APIRouter(
    prefix="/multi-agent",
    tags=["Multi-Agent AI"]
)


@router.post("/ask")
def ask_multi_agent(
    request: CopilotRequest
):
    return run_multi_agent(
        question=request.question,
        context=request.context
    )
