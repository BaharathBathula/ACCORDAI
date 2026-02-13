from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID


class ClientCreate(BaseModel):
    client_type: str  # individual or business
    name: str
    email: Optional[EmailStr] = None
    phone: Optional[str] = None


class ClientResponse(BaseModel):
    id: UUID
    client_type: str
    name: str
    email: Optional[EmailStr] = None
    phone: Optional[str] = None

    class Config:
        from_attributes = True