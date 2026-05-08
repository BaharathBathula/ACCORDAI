from pydantic import BaseModel
from typing import Dict, Any


class RecommendationRequest(BaseModel):
    entity_type: str
    entity_id: str
    payload: Dict[str, Any]
