from fastapi import APIRouter, HTTPException
from app.schemas.auth import UserLogin
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

# Mock user for initial testing
mock_user = {
    "email": "admin@accordai.com",
    "hashed_password": hash_password("admin123")
}


@router.post("/login")
def login(user: UserLogin):

    if user.email != mock_user["email"]:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if not verify_password(
        user.password,
        mock_user["hashed_password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_access_token(
        data={"sub": user.email}
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }
