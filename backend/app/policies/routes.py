from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.orm import Session

from app.policies.schemas import PolicyCreate, PolicyResponse
from app.policies.models import Policy
from app.common.db.deps import get_db

router = APIRouter(prefix="/policies", tags=["Policies"])


@router.post("", response_model=PolicyResponse)
def create_policy(payload: PolicyCreate, db: Session = Depends(get_db)):
    policy = Policy(
        client_id=payload.client_id,
        line_of_business=payload.line_of_business,
        policy_number=payload.policy_number,
        carrier=payload.carrier,
        effective_date=payload.effective_date,
        expiration_date=payload.expiration_date,
    )
    db.add(policy)
    db.commit()
    db.refresh(policy)
    return policy


@router.get("", response_model=List[PolicyResponse])
def list_policies(db: Session = Depends(get_db)):
    return db.query(Policy).all()