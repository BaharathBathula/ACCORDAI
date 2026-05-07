from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.policy import Policy
from app.schemas.policy import (
    PolicyCreate,
    PolicyResponse
)

router = APIRouter(
    prefix="/policies",
    tags=["Policies"]
)


@router.post("/", response_model=PolicyResponse)
def create_policy(
    policy: PolicyCreate,
    db: Session = Depends(get_db)
):
    new_policy = Policy(**policy.model_dump())

    db.add(new_policy)
    db.commit()
    db.refresh(new_policy)

    return new_policy


@router.get("/", response_model=list[PolicyResponse])
def list_policies(
    db: Session = Depends(get_db)
):
    return db.query(Policy).all()


@router.get("/{policy_id}", response_model=PolicyResponse)
def get_policy(
    policy_id: int,
    db: Session = Depends(get_db)
):
    return (
        db.query(Policy)
        .filter(Policy.id == policy_id)
        .first()
    )
