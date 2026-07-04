from sqlalchemy.orm import Session

from app.models.debt import Debt


def analyze_user_finances(db: Session, user_id: int, monthly_income: float):
    debts = db.query(Debt).filter(Debt.user_id == user_id).all()

    if not debts:
        return {
            "message": "No debts found for this user."
        }

    total_debt = sum(d.remaining_balance for d in debts)
    total_emi = sum(d.monthly_emi for d in debts)

    ratio = total_debt / monthly_income

    if ratio >= 10:
        risk = "Very High"
        score = 20
        strategy = "Debt Settlement"
        recommendation = "Immediate restructuring is recommended."
    elif ratio >= 5:
        risk = "High"
        score = 40
        strategy = "Debt Avalanche"
        recommendation = "Pay highest-interest loans first."
    elif ratio >= 2:
        risk = "Medium"
        score = 70
        strategy = "Debt Snowball"
        recommendation = "Clear smaller loans before larger ones."
    else:
        risk = "Low"
        score = 90
        strategy = "Maintain Payments"
        recommendation = "Your financial health is good."

    return {
        "financial_score": score,
        "risk_level": risk,
        "total_debt": total_debt,
        "monthly_emi": total_emi,
        "debt_income_ratio": round(ratio, 2),
        "strategy": strategy,
        "recommendation": recommendation
    }