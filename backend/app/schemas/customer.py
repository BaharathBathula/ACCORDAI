from pydantic import BaseModel


class CustomerCreate(BaseModel):
    name: str
    email: str
    phone: str
    customer_type: str
    status: str = "active"


class CustomerResponse(CustomerCreate):
    id: int

    class Config:
        from_attributes = True
