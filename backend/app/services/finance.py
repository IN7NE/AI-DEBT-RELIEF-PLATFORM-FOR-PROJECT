def analyze_finance(monthly_income, monthly_expenses, savings):
    balance = monthly_income - monthly_expenses
    savings_rate = (savings / monthly_income) * 100 if monthly_income else 0

    if savings_rate >= 30:
        health = "Excellent"
    elif savings_rate >= 20:
        health = "Good"
    elif savings_rate >= 10:
        health = "Average"
    else:
        health = "Poor"

    return {
        "balance": balance,
        "savings_rate": round(savings_rate, 2),
        "financial_health": health,
    }