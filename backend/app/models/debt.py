from datetime import datetime

from sqlalchemy import Column, Integer, String, Float, Date, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from app.database import Base


class Debt(Base):
    __tablename__ = "debts"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    creditor_name = Column(String(150), nullable=False)
    loan_type = Column(String(100), nullable=False)

    principal_amount = Column(Float, nullable=False)
    remaining_balance = Column(Float, nullable=False)

    interest_rate = Column(Float, nullable=False)
    monthly_emi = Column(Float, nullable=False)

    due_date = Column(Date, nullable=True)

    status = Column(String(50), default="ACTIVE")

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    # Relationships
    user = relationship("User", back_populates="debts")
    creditors = relationship(
        "Creditor",
        back_populates="debt",
        cascade="all, delete-orphan"
    )
    payments = relationship(
        "Payment",
        back_populates="debt",
        cascade="all, delete-orphan"
    )
    settlements = relationship(
        "Settlement",
        back_populates="debt",
        cascade="all, delete-orphan"
    )