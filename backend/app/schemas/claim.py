from pydantic import BaseModel


class ClaimCreate(BaseModel):
    customer_id: int
    policy_id: int
    claim_number: str
    claim_type: str
    status: str = "open"
    reserve_amount: float
    loss_date: str
    ai_risk_score: float = 0


class ClaimResponse(ClaimCreate):
    id: int

    class Config:
        from_attributes = True
