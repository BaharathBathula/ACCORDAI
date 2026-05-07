from fastapi import APIRouter

from app.services.document_ai_service import (
    analyze_document
)

router = APIRouter(
    prefix="/document-ai",
    tags=["Document AI"]
)


@router.post("/analyze")
def analyze_document_endpoint(
    document_data: dict
):
    return analyze_document(
        document_data
    )
