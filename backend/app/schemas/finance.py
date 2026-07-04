from pydantic import BaseModel


class FinanceRequest(BaseModel):
    monthly_income: float
    monthly_expenses: float
    savings: float


class FinanceResponse(BaseModel):
    balance: float
    savings_rate: float
    financial_health: str