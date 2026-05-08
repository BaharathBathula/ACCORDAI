from fastapi import APIRouter

from app.schemas.chat import ChatRequest

from app.services.conversational_copilot_service import (
    run_conversational_copilot
)

router = APIRouter(
    prefix="/chat",
    tags=["Conversational Copilot"]
)


@router.post("/ask")
def ask_chat(
    request: ChatRequest
):
    return run_conversational_copilot(
        session_id=request.session_id,
        message=request.message,
        context=request.context
    )
