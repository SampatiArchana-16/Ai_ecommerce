from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float

from sqlalchemy.orm import relationship


from core.database import Base


class Product(Base):

    __tablename__ = "products"

    id = Column(Integer, primary_key=True)

    title = Column(String)

    brand = Column(String)

    category = Column(String)

    price = Column(Float)

    rating = Column(Float)

    prices = relationship(
        "ProductPrice",
        back_populates="product",
        cascade="all, delete-orphan"
    )