from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.orm import Session

from app.clients.schemas import ClientCreate, ClientResponse
from app.clients.models import Client
from app.common.db.deps import get_db

router = APIRouter(prefix="/clients", tags=["Clients"])


@router.post("", response_model=ClientResponse)
def create_client(payload: ClientCreate, db: Session = Depends(get_db)):
    client = Client(
        client_type=payload.client_type,
        name=payload.name,
        email=str(payload.email) if payload.email else None,
        phone=payload.phone,
    )
    db.add(client)
    db.commit()
    db.refresh(client)
    return client


@router.get("", response_model=List[ClientResponse])
def list_clients(db: Session = Depends(get_db)):
    return db.query(Client).order_by(Client.name.asc()).all()