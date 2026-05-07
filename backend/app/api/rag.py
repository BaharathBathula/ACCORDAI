from fastapi import APIRouter

from app.schemas.rag import (
    RAGIngestRequest,
    RAGSearchRequest
)

from app.services.rag_service import (
    ingest_document,
    retrieve_context
)

router = APIRouter(
    prefix="/rag",
    tags=["RAG"]
)


@router.post("/ingest")
def ingest(
    request: RAGIngestRequest
):
    return ingest_document(
        document_id=request.document_id,
        text=request.text,
        metadata=request.metadata
    )


@router.post("/search")
def search(
    request: RAGSearchRequest
):
    return retrieve_context(
        query=request.query,
        top_k=request.top_k
    )
