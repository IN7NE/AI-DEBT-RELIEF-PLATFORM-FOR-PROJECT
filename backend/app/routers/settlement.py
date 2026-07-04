from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.crud.settlement import (
    create_settlement,
    get_all_settlements,
    get_settlement_by_id,
    update_settlement,
    delete_settlement,
)
from app.schemas.settlement import (
    SettlementCreate,
    SettlementUpdate,
    SettlementResponse,
)

router = APIRouter(
    prefix="/settlements",
    tags=["Settlement"]
)


@router.post("/", response_model=SettlementResponse)
def create_new_settlement(
    settlement: SettlementCreate,
    db: Session = Depends(get_db),
):
    return create_settlement(db, settlement)


@router.get("/", response_model=list[SettlementResponse])
def read_all_settlements(db: Session = Depends(get_db)):
    return get_all_settlements(db)


@router.get("/{settlement_id}", response_model=SettlementResponse)
def read_settlement(
    settlement_id: int,
    db: Session = Depends(get_db),
):
    settlement = get_settlement_by_id(db, settlement_id)

    if not settlement:
        raise HTTPException(status_code=404, detail="Settlement not found")

    return settlement


@router.put("/{settlement_id}", response_model=SettlementResponse)
def update_existing_settlement(
    settlement_id: int,
    settlement: SettlementUpdate,
    db: Session = Depends(get_db),
):
    updated = update_settlement(db, settlement_id, settlement)

    if not updated:
        raise HTTPException(status_code=404, detail="Settlement not found")

    return updated


@router.delete("/{settlement_id}")
def delete_existing_settlement(
    settlement_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_settlement(db, settlement_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Settlement not found")

    return deleted