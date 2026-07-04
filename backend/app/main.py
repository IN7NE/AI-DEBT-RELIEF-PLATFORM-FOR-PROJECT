from fastapi import FastAPI

from app.database import Base, engine

# Import all models
import app.models.user
import app.models.debt
import app.models.creditor
import app.models.payment
import app.models.settlement

# Import routers
from app.routers.health import router as health_router
from app.routers.auth import router as auth_router
from app.routers.debt import router as debt_router
from app.routers.payment import router as payment_router
from app.routers.settlement import router as settlement_router
from app.routers.creditor import router as creditor_router
from app.routers.analysis import router as analysis_router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Debt Relief & Financial Recovery Platform",
    version="1.0.0"
)

# Register routers
app.include_router(health_router)
app.include_router(auth_router)
app.include_router(debt_router)
app.include_router(payment_router)
app.include_router(settlement_router)
app.include_router(creditor_router)
app.include_router(analysis_router)


@app.get("/")
def home():
    return {
        "project": "AI Debt Relief Platform",
        "status": "Running"
    }