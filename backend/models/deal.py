from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func

from core.database import Base


class Deal(Base):

    __tablename__ = "deals"

    id = Column(Integer, primary_key=True)

    website = Column(String)

    title = Column(String)

    coupon_code = Column(String)

    discount = Column(Float)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )