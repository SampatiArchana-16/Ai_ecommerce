from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import Integer
from sqlalchemy.orm import relationship

from core.database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True)

    name = Column(String)

    email = Column(
        String,
        unique=True
    )
    

    password = Column(String)

    wishlist_items = relationship(
    "Wishlist",
    back_populates="user",
    cascade="all, delete-orphan"
)