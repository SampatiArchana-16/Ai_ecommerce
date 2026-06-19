"""Product service."""


def get_products():
    return []
from sqlalchemy.orm import Session

from models.product import Product


def get_products(db: Session):

    return db.query(Product).all()


def get_product(
    product_id: int,
    db: Session
):

    return db.query(Product).filter(
        Product.id == product_id
    ).first()