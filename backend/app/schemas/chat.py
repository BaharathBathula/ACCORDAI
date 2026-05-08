from pydantic import BaseModel
from typing import Dict, Any


class ChatRequest(BaseModel):
    session_id: str
    message: str
    context: Dict[str, Any] = {}
