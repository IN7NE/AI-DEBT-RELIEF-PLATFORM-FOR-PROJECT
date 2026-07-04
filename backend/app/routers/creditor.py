from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.crud.creditor import (
    create_creditor,
    get_all_creditors,
    get_creditor_by_id,
    update_creditor,
    delete_creditor,
)
from app.schemas.creditor import (
    CreditorCreate,
    CreditorUpdate,
    CreditorResponse,
)

router = APIRouter(
    prefix="/creditors",
    tags=["Creditor"]
)


@router.post("/", response_model=CreditorResponse)
def create_new_creditor(
    creditor: CreditorCreate,
    db: Session = Depends(get_db),
):
    return create_creditor(db, creditor)


@router.get("/", response_model=list[CreditorResponse])
def read_all_creditors(db: Session = Depends(get_db)):
    return get_all_creditors(db)


@router.get("/{creditor_id}", response_model=CreditorResponse)
def read_creditor(
    creditor_id: int,
    db: Session = Depends(get_db),
):
    creditor = get_creditor_by_id(db, creditor_id)

    if not creditor:
        raise HTTPException(status_code=404, detail="Creditor not found")

    return creditor


@router.put("/{creditor_id}", response_model=CreditorResponse)
def update_existing_creditor(
    creditor_id: int,
    creditor: CreditorUpdate,
    db: Session = Depends(get_db),
):
    updated = update_creditor(db, creditor_id, creditor)

    if not updated:
        raise HTTPException(status_code=404, detail="Creditor not found")

    return updated


@router.delete("/{creditor_id}")
def delete_existing_creditor(
    creditor_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_creditor(db, creditor_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Creditor not found")

    return deleted