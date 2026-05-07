from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.db.database import Base


class Agency(Base):
    __tablename__ = "agencies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    domain = Column(String, unique=True, index=True)
    plan = Column(String, default="starter")
    status = Column(String, default="active")
    created_at = Column(DateTime, default=datetime.utcnow)
