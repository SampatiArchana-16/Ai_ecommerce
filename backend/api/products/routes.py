from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from core.database import get_db

from api.products.service import (
    get_products,
    get_product
)

router = APIRouter(
    prefix="/products",
    tags=["Products"]
)


@router.get("/")
def products(
    db: Session = Depends(get_db)
):
    return get_products(db)


@router.get("/{product_id}")
def product(
    product_id: int,
    db: Session = Depends(get_db)
):
    return get_product(
        product_id,
        db
    )