import os
import google.generativeai as genai

from dotenv import load_dotenv
from sqlalchemy.orm import Session

from app.models.debt import Debt

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash")


def analyze_user_finances(db: Session, user_id: int, monthly_income: float):

    debts = db.query(Debt).filter(Debt.user_id == user_id).all()

    if not debts:
        return {
            "financial_score": 0,
            "risk_level": "Unknown",
            "total_debt": 0,
            "monthly_emi": 0,
            "debt_income_ratio": 0,
            "strategy": "N/A",
            "recommendation": "No debts found."
        }

    total_debt = sum(d.remaining_balance for d in debts)
    total_emi = sum(d.monthly_emi for d in debts)

    ratio = total_debt / monthly_income if monthly_income else 0

    prompt = f"""
You are an expert financial advisor.

User Details:

Monthly Income: {monthly_income}

Total Debt: {total_debt}

Monthly EMI: {total_emi}

Debt Income Ratio: {ratio:.2f}

Provide:

1. Risk Level
2. Financial Score (0-100)
3. Best Debt Strategy
4. Settlement Recommendation
5. Monthly Savings Advice
6. Negotiation Tips

Return in simple readable English.
"""

    response = model.generate_content(prompt)

    if ratio >= 10:
        score = 20
        risk = "Very High"
        strategy = "Debt Settlement"

    elif ratio >= 5:
        score = 40
        risk = "High"
        strategy = "Debt Avalanche"

    elif ratio >= 2:
        score = 70
        risk = "Medium"
        strategy = "Debt Snowball"

    else:
        score = 90
        risk = "Low"
        strategy = "Maintain Payments"

    return {
        "financial_score": score,
        "risk_level": risk,
        "total_debt": total_debt,
        "monthly_emi": total_emi,
        "debt_income_ratio": round(ratio, 2),
        "strategy": strategy,
        "recommendation": response.text
    }