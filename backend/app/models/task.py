from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime
)

from datetime import datetime

from app.db.database import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)

    description = Column(String)

    priority = Column(String, default="medium")

    status = Column(String, default="open")

    assigned_to = Column(String)

    due_date = Column(String)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )
