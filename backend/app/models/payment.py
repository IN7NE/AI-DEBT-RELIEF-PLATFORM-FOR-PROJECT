from datetime import datetime

from sqlalchemy import Column, Integer, Float, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from app.database import Base


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)

    debt_id = Column(Integer, ForeignKey("debts.id"), nullable=False)

    amount = Column(Float, nullable=False)

    payment_method = Column(String(50), nullable=False)

    status = Column(String(50), default="PENDING")

    transaction_reference = Column(String(100), nullable=True)

    payment_date = Column(DateTime, default=datetime.utcnow)

    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationship
    debt = relationship("Debt", back_populates="payments")