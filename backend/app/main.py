from fastapi import FastAPI

from app.database import Base, engine
from app.routers.health import router as health_router
from app.routers.auth import router as auth_router
import app.models.user
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Debt Relief & Financial Recovery Platform",
    version="1.0.0"
)

app.include_router(health_router)
app.include_router(auth_router)


@app.get("/")
def home():
    return {
        "project": "AI Debt Relief Platform",
        "status": "Running"
    }