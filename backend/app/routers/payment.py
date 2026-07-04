from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.crud.payment import (
    create_payment,
    get_all_payments,
    get_payment_by_id,
    update_payment,
    delete_payment,
)
from app.schemas.payment import (
    PaymentCreate,
    PaymentUpdate,
    PaymentResponse,
)

router = APIRouter(
    prefix="/payments",
    tags=["Payment"]
)


@router.post("/", response_model=PaymentResponse)
def create_new_payment(payment: PaymentCreate, db: Session = Depends(get_db)):
    return create_payment(db, payment)


@router.get("/", response_model=list[PaymentResponse])
def read_all_payments(db: Session = Depends(get_db)):
    return get_all_payments(db)


@router.get("/{payment_id}", response_model=PaymentResponse)
def read_payment(payment_id: int, db: Session = Depends(get_db)):
    payment = get_payment_by_id(db, payment_id)

    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")

    return payment


@router.put("/{payment_id}", response_model=PaymentResponse)
def update_existing_payment(
    payment_id: int,
    payment: PaymentUpdate,
    db: Session = Depends(get_db),
):
    updated = update_payment(db, payment_id, payment)

    if not updated:
        raise HTTPException(status_code=404, detail="Payment not found")

    return updated


@router.delete("/{payment_id}")
def delete_existing_payment(
    payment_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_payment(db, payment_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Payment not found")

    return deleted