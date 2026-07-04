from sqlalchemy.orm import Session

from app.models.debt import Debt
from app.schemas.debt import DebtCreate, DebtUpdate


def create_debt(db: Session, debt: DebtCreate):
    db_debt = Debt(**debt.model_dump())
    db.add(db_debt)
    db.commit()
    db.refresh(db_debt)
    return db_debt


def get_all_debts(db: Session):
    return db.query(Debt).all()


def get_debt_by_id(db: Session, debt_id: int):
    return db.query(Debt).filter(Debt.id == debt_id).first()


def update_debt(db: Session, debt_id: int, debt: DebtUpdate):
    db_debt = get_debt_by_id(db, debt_id)

    if not db_debt:
        return None

    update_data = debt.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_debt, key, value)

    db.commit()
    db.refresh(db_debt)

    return db_debt


def delete_debt(db: Session, debt_id: int):
    db_debt = get_debt_by_id(db, debt_id)

    if not db_debt:
        return None

    db.delete(db_debt)
    db.commit()

    return {"message": "Debt deleted successfully"}
