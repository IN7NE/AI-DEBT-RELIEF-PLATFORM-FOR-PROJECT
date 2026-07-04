from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class SettlementBase(BaseModel):
    debt_id: int
    offered_amount: float
    negotiated_amount: Optional[float] = None
    status: str = "PENDING"


class SettlementCreate(SettlementBase):
    pass


class SettlementUpdate(BaseModel):
    offered_amount: Optional[float] = None
    negotiated_amount: Optional[float] = None
    status: Optional[str] = None


class SettlementResponse(SettlementBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True