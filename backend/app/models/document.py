from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime
)

from datetime import datetime

from app.db.database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)

    file_name = Column(String, nullable=False)

    document_type = Column(String)

    uploaded_by = Column(String)

    customer_name = Column(String)

    ai_summary = Column(String)

    status = Column(String, default="uploaded")

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )
