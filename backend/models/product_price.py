from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from sqlalchemy.orm import relationship

from core.database import Base


class ProductPrice(Base):

    __tablename__ = "product_prices"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    product_id = Column(
        Integer,
        ForeignKey("products.id"),
        nullable=False
    )

    website = Column(
        String,
        nullable=False
    )

    price = Column(
        Float,
        nullable=False
    )

    discount = Column(
        Float,
        default=0
    )

    rating = Column(
        Float,
        default=0
    )

    review_count = Column(
        Integer,
        default=0
    )

    delivery_time = Column(
        String,
        nullable=True
    )

    product_url = Column(
        String,
        nullable=True
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )

    product = relationship(
        "Product",
        back_populates="prices"
    )