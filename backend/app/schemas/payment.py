from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class PaymentBase(BaseModel):
    debt_id: int
    amount: float
    payment_method: str
    status: str = "PENDING"
    transaction_reference: Optional[str] = None


class PaymentCreate(PaymentBase):
    pass


class PaymentUpdate(BaseModel):
    amount: Optional[float] = None
    payment_method: Optional[str] = None
    status: Optional[str] = None
    transaction_reference: Optional[str] = None


class PaymentResponse(PaymentBase):
    id: int
    payment_date: datetime
    created_at: datetime

    class Config:
        from_attributes = True