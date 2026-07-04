from fastapi import APIRouter

from app.schemas.finance import FinanceRequest, FinanceResponse
from app.services.finance import analyze_finance

router = APIRouter(
    prefix="/finance",
    tags=["Finance"]
)


@router.post("/", response_model=FinanceResponse)
def finance(data: FinanceRequest):
    return analyze_finance(
        data.monthly_income,
        data.monthly_expenses,
        data.savings
    )