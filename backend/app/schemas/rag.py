from pydantic import BaseModel
from typing import Dict, Any


class RAGIngestRequest(BaseModel):
    document_id: str
    text: str
    metadata: Dict[str, Any] = {}


class RAGSearchRequest(BaseModel):
    query: str
    top_k: int = 5
