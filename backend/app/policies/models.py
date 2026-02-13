import uuid
from sqlalchemy import Column, String, Date, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.common.db.session import Base


class Policy(Base):
    __tablename__ = "policies"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    client_id = Column(
        UUID(as_uuid=True),
        ForeignKey("clients.id", ondelete="CASCADE"),
        nullable=False,
    )

    policy_number = Column(String(100), nullable=True)
    line_of_business = Column(String(50), nullable=False)
    carrier = Column(String(100), nullable=True)

    status = Column(String(30), nullable=False, default="quoted")
    effective_date = Column(Date, nullable=True)
    expiration_date = Column(Date, nullable=True)

    client = relationship("Client", backref="policies")