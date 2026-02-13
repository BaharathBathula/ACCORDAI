from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/clients", tags=["Clients"])


class ClientCreate(BaseModel):
    name: str
    email: str | None = None


CLIENTS = []


@router.post("")
def create_client(payload: ClientCreate):
    client = {
        "id": len(CLIENTS) + 1,
        "name": payload.name,
        "email": payload.email,
    }
    CLIENTS.append(client)
    return client


@router.get("")
def list_clients():
    return CLIENTS
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/clients", tags=["Clients"])


class ClientCreate(BaseModel):
    name: str
    email: str | None = None


CLIENTS: list[dict] = []


@router.post("")
def create_client(payload: ClientCreate):
    client = {
        "id": len(CLIENTS) + 1,
        "name": payload.name,
        "email": payload.email,
    }
    CLIENTS.append(client)
    return client


@router.get("")
def list_clients():
    return CLIENTS
