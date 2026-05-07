from typing import TypedDict, Optional


class AgentState(TypedDict):
    user_question: str
    intent: Optional[str]
    context: dict
    response: Optional[str]
