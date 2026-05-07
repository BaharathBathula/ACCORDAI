from pydantic import BaseModel


class CopilotRequest(BaseModel):
    question: str
    context: dict = {}
