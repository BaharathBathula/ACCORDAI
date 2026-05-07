from pydantic import BaseModel


class PolicyCreate(BaseModel):
    customer_id: int
    policy_number: str
    line_of_business: str
    carrier: str
    premium: float
    status: str = "active"
    effective_date: str
    expiration_date: str


class PolicyResponse(PolicyCreate):
    id: int

    class Config:
        from_attributes = True
