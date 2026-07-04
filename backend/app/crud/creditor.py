from sqlalchemy.orm import Session

from app.models.creditor import Creditor
from app.schemas.creditor import CreditorCreate, CreditorUpdate


def create_creditor(db: Session, creditor: CreditorCreate):
    db_creditor = Creditor(**creditor.model_dump())
    db.add(db_creditor)
    db.commit()
    db.refresh(db_creditor)
    return db_creditor


def get_all_creditors(db: Session):
    return db.query(Creditor).all()


def get_creditor_by_id(db: Session, creditor_id: int):
    return db.query(Creditor).filter(Creditor.id == creditor_id).first()


def update_creditor(db: Session, creditor_id: int, creditor: CreditorUpdate):
    db_creditor = get_creditor_by_id(db, creditor_id)

    if not db_creditor:
        return None

    update_data = creditor.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_creditor, key, value)

    db.commit()
    db.refresh(db_creditor)

    return db_creditor


def delete_creditor(db: Session, creditor_id: int):
    db_creditor = get_creditor_by_id(db, creditor_id)

    if not db_creditor:
        return None

    db.delete(db_creditor)
    db.commit()

    return {"message": "Creditor deleted successfully"}