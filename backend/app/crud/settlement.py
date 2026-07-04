from sqlalchemy.orm import Session

from app.models.settlement import Settlement
from app.schemas.settlement import SettlementCreate, SettlementUpdate


def create_settlement(db: Session, settlement: SettlementCreate):
    db_settlement = Settlement(**settlement.model_dump())
    db.add(db_settlement)
    db.commit()
    db.refresh(db_settlement)
    return db_settlement


def get_all_settlements(db: Session):
    return db.query(Settlement).all()


def get_settlement_by_id(db: Session, settlement_id: int):
    return db.query(Settlement).filter(Settlement.id == settlement_id).first()


def update_settlement(
    db: Session,
    settlement_id: int,
    settlement: SettlementUpdate,
):
    db_settlement = get_settlement_by_id(db, settlement_id)

    if not db_settlement:
        return None

    update_data = settlement.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_settlement, key, value)

    db.commit()
    db.refresh(db_settlement)

    return db_settlement


def delete_settlement(db: Session, settlement_id: int):
    db_settlement = get_settlement_by_id(db, settlement_id)

    if not db_settlement:
        return None

    db.delete(db_settlement)
    db.commit()

    return {"message": "Settlement deleted successfully"}