from sqlalchemy.orm import Session

from models.user import User

from core.security import (
    hash_password,
    verify_password,
    create_access_token
)


def register_user(data, db: Session):

    user = User(
        name=data.name,
        email=data.email,
        password=hash_password(data.password)
    )

    db.add(user)

    db.commit()

    return {
        "message": "User Registered"
    }


def login_user(data, db: Session):

    user = db.query(User).filter(
        User.email == data.email
    ).first()

    if not user:
        return None

    if not verify_password(
        data.password,
        user.password
    ):
        return None

    token = create_access_token(
        {"sub": user.email}
    )

    return {
        "access_token": token
    }