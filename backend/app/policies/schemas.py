from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import date


class PolicyCreate(BaseModel):
    client_id: UUID
    line_of_business: str
    policy_number: Optional[str] = None
    carrier: Optional[str] = None
    effective_date: Optional[date] = None
    expiration_date: Optional[date] = None


class PolicyResponse(BaseModel):
    id: UUID
    client_id: UUID
    line_of_business: str
    policy_number: Optional[str] = None
    carrier: Optional[str] = None
    status: str
    effective_date: Optional[date] = None
    expiration_date: Optional[date] = None

    class Config:
        from_attributes = True