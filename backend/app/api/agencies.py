from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.agency import Agency
from app.schemas.agency import AgencyCreate, AgencyResponse

router = APIRouter(
    prefix="/agencies",
    tags=["Agencies"]
)


@router.post("/", response_model=AgencyResponse)
def create_agency(
    agency: AgencyCreate,
    db: Session = Depends(get_db)
):
    new_agency = Agency(**agency.model_dump())

    db.add(new_agency)
    db.commit()
    db.refresh(new_agency)

    return new_agency


@router.get("/", response_model=list[AgencyResponse])
def list_agencies(
    db: Session = Depends(get_db)
):
    return db.query(Agency).all()


@router.get("/{agency_id}", response_model=AgencyResponse)
def get_agency(
    agency_id: int,
    db: Session = Depends(get_db)
):
    return (
        db.query(Agency)
        .filter(Agency.id == agency_id)
        .first()
    )
