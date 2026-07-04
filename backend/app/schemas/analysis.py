from pydantic import BaseModel


class FinancialAnalysisRequest(BaseModel):
    user_id: int
    monthly_income: float


class FinancialAnalysisResponse(BaseModel):
    financial_score: int
    risk_level: str
    total_debt: float
    monthly_emi: float
    debt_income_ratio: float
    strategy: str
    recommendation: str