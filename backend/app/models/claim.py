from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from datetime import datetime
from app.db.database import Base


class Claim(Base):
    __tablename__ = "claims"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey("customers.id"))
    policy_id = Column(Integer, ForeignKey("policies.id"))
    claim_number = Column(String, unique=True, index=True)
    claim_type = Column(String)
    status = Column(String, default="open")
    reserve_amount = Column(Float)
    loss_date = Column(String)
    ai_risk_score = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
