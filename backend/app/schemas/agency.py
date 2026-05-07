from pydantic import BaseModel


class AgencyCreate(BaseModel):
    name: str
    domain: str
    plan: str = "starter"
    status: str = "active"


class AgencyResponse(AgencyCreate):
    id: int

    class Config:
        from_attributes = True
