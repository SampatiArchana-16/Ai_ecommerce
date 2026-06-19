from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime
from sqlalchemy.sql import func

from core.database import Base


class PriceHistory(Base):

    __tablename__ = "price_history"

    id = Column(Integer, primary_key=True)

    product_id = Column(
        Integer,
        ForeignKey("products.id")
    )

    price = Column(Float)

    recorded_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )