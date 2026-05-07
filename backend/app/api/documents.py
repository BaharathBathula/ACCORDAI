from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.models.document import Document

from app.schemas.document import (
    DocumentCreate,
    DocumentResponse
)

router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)


@router.post("/", response_model=DocumentResponse)
def create_document(
    document: DocumentCreate,
    db: Session = Depends(get_db)
):
    new_document = Document(
        **document.model_dump()
    )

    db.add(new_document)

    db.commit()

    db.refresh(new_document)

    return new_document


@router.get("/", response_model=list[DocumentResponse])
def list_documents(
    db: Session = Depends(get_db)
):
    return db.query(Document).all()


@router.get("/{document_id}", response_model=DocumentResponse)
def get_document(
    document_id: int,
    db: Session = Depends(get_db)
):
    return (
        db.query(Document)
        .filter(Document.id == document_id)
        .first()
    )
