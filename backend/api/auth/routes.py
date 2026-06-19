from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from core.database import get_db

from schemas.user import RegisterRequest
from schemas.user import LoginRequest

from api.auth.service import (
    register_user,
    login_user
)

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


@router.post("/register")
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db)
):
    return register_user(
        request,
        db
    )


@router.post("/login")
def login(
    request: LoginRequest,
    db: Session = Depends(get_db)
):
    return login_user(
        request,
        db
    )