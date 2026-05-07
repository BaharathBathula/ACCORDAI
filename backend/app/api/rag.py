from fastapi import APIRouter

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
    payload: dict
):
    return ingest_document(
        document_id=payload["document_id"],
        text=payload["text"],
        metadata=payload.get(
            "metadata",
            {}
        )
    )


@router.post("/search")
def search(
    payload: dict
):
    return retrieve_context(
        query=payload["query"]
    )
