from sqlalchemy.orm import Session

from models.product import Product


def get_all_products(
    db: Session
):

    return db.query(Product).all()


def get_product_by_id(
    db: Session,
    product_id: int
):

    return db.query(Product).filter(
        Product.id == product_id
    ).first()


def search_products(
    db: Session,
    keyword: str
):

    return db.query(Product).filter(
        Product.title.ilike(
            f"%{keyword}%"
        )
    ).all()


def create_product(
    db: Session,
    data
):

    product = Product(
        title=data.title,
        brand=data.brand,
        category=data.category,
        price=data.price,
        rating=data.rating
    )

    db.add(product)

    db.commit()

    db.refresh(product)

    return product


def delete_product(
    db: Session,
    product_id: int
):

    product = db.query(Product).filter(
        Product.id == product_id
    ).first()

    if not product:
        return None

    db.delete(product)

    db.commit()

    return {
        "message": "Deleted"
    }