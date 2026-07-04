from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.crud.debt import (
    create_debt,
    get_all_debts,
    get_debt_by_id,
    update_debt,
    delete_debt,
)
from app.schemas.debt import DebtCreate, DebtUpdate, DebtResponse

router = APIRouter(
    prefix="/debts",
    tags=["Debt"]
)


@router.post("/", response_model=DebtResponse)
def create_new_debt(debt: DebtCreate, db: Session = Depends(get_db)):
    return create_debt(db, debt)


@router.get("/", response_model=list[DebtResponse])
def read_all_debts(db: Session = Depends(get_db)):
    return get_all_debts(db)


@router.get("/{debt_id}", response_model=DebtResponse)
def read_debt(debt_id: int, db: Session = Depends(get_db)):
    debt = get_debt_by_id(db, debt_id)

    if not debt:
        raise HTTPException(status_code=404, detail="Debt not found")

    return debt


@router.put("/{debt_id}", response_model=DebtResponse)
def update_existing_debt(
    debt_id: int,
    debt: DebtUpdate,
    db: Session = Depends(get_db),
):
    updated = update_debt(db, debt_id, debt)

    if not updated:
        raise HTTPException(status_code=404, detail="Debt not found")

    return updated


@router.delete("/{debt_id}")
def delete_existing_debt(
    debt_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_debt(db, debt_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Debt not found")

    return deleted