from fastapi import APIRouter
from typing import List
from uuid import uuid4

from app.clients.schemas import ClientCreate, ClientResponse

router = APIRouter(prefix="/clients", tags=["Clients"])

# Temporary in-memory store (Day 3: replace with Postgres)
CLIENTS_DB: List[ClientResponse] = []


@router.post("", response_model=ClientResponse)
def create_client(payload: ClientCreate):
    client = ClientResponse(
        id=uuid4(),
        client_type=payload.client_type,
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
    )
    CLIENTS_DB.append(client)
    return client


@router.get("", response_model=List[ClientResponse])
def list_clients():
    return CLIENTS_DB