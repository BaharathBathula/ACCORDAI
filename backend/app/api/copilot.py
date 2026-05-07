from fastapi import APIRouter

from app.schemas.copilot import CopilotRequest
from app.services.copilot_service import generate_copilot_response

router = APIRouter(
    prefix="/copilot",
    tags=["AI Copilot"]
)


@router.post("/ask")
def ask_copilot(request: CopilotRequest):
    return generate_copilot_response(
        question=request.question,
        context=request.context
    )
