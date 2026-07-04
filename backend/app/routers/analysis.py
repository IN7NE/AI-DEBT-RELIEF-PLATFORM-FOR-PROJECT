from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.analysis import (
    FinancialAnalysisRequest,
    FinancialAnalysisResponse,
)
from app.services.ai_analysis import analyze_user_finances

router = APIRouter(
    prefix="/analysis",
    tags=["AI Analysis"]
)


@router.post("/", response_model=FinancialAnalysisResponse)
def analyze_finances(
    data: FinancialAnalysisRequest,
    db: Session = Depends(get_db),
):
    return analyze_user_finances(
        db=db,
        user_id=data.user_id,
        monthly_income=data.monthly_income,
    )