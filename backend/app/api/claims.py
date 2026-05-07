from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.claim import Claim
from app.schemas.claim import (
    ClaimCreate,
    ClaimResponse
)

router = APIRouter(
    prefix="/claims",
    tags=["Claims"]
)


@router.post("/", response_model=ClaimResponse)
def create_claim(
    claim: ClaimCreate,
    db: Session = Depends(get_db)
):
    new_claim = Claim(**claim.model_dump())

    db.add(new_claim)
    db.commit()
    db.refresh(new_claim)

    return new_claim


@router.get("/", response_model=list[ClaimResponse])
def list_claims(
    db: Session = Depends(get_db)
):
    return db.query(Claim).all()


@router.get("/{claim_id}", response_model=ClaimResponse)
def get_claim(
    claim_id: int,
    db: Session = Depends(get_db)
):
    return (
        db.query(Claim)
        .filter(Claim.id == claim_id)
        .first()
    )
