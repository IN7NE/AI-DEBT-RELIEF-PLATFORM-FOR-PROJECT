from datetime import datetime

from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from app.database import Base


class Creditor(Base):
    __tablename__ = "creditors"

    id = Column(Integer, primary_key=True, index=True)

    debt_id = Column(Integer, ForeignKey("debts.id"), nullable=False)

    name = Column(String(150), nullable=False)
    email = Column(String(150), nullable=True)
    phone = Column(String(20), nullable=True)

    settlement_offer = Column(Float, nullable=True)

    status = Column(String(50), default="PENDING")

    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationship
    debt = relationship("Debt", back_populates="creditors")