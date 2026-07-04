from datetime import date
from typing import Optional

from pydantic import BaseModel


class DebtBase(BaseModel):
    creditor_name: str
    loan_type: str
    principal_amount: float
    remaining_balance: float
    interest_rate: float
    monthly_emi: float
    due_date: Optional[date] = None
    status: str = "ACTIVE"


class DebtCreate(DebtBase):
    user_id: int


class DebtUpdate(BaseModel):
    creditor_name: Optional[str] = None
    loan_type: Optional[str] = None
    principal_amount: Optional[float] = None
    remaining_balance: Optional[float] = None
    interest_rate: Optional[float] = None
    monthly_emi: Optional[float] = None
    due_date: Optional[date] = None
    status: Optional[str] = None


class DebtResponse(DebtBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True