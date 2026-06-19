from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from sqlalchemy.orm import relationship

from core.database import Base


class Wishlist(Base):

    __tablename__ = "wishlist"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    product_id = Column(
        Integer,
        ForeignKey("products.id"),
        nullable=False
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    # Relationships
    user = relationship(
        "User",
        back_populates="wishlist_items"
    )

    product = relationship(
        "Product",
        back_populates="wishlisted_by"
    )