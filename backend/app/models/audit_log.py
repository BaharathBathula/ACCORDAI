from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.db.database import Base


class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    actor_email = Column(String)
    action = Column(String, nullable=False)
    resource_type = Column(String)
    resource_id = Column(String)
    ip_address = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
