from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from datetime import datetime
from app.db.database import Base


class Policy(Base):
    __tablename__ = "policies"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey("customers.id"))
    policy_number = Column(String, unique=True, index=True)
    line_of_business = Column(String)
    carrier = Column(String)
    premium = Column(Float)
    status = Column(String, default="active")
    effective_date = Column(String)
    expiration_date = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
