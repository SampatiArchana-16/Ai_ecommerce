from pydantic import BaseModel
from datetime import datetime


class WishlistCreate(BaseModel):
    product_id: int


class WishlistResponse(BaseModel):
    id: int
    user_id: int
    product_id: int
    created_at: datetime

    class Config:
        from_attributes = True


class WishlistProductResponse(BaseModel):
    wishlist_id: int

    product_id: int

    product_name: str

    brand: str

    category: str

    price: float

    rating: float

    created_at: datetime

    class Config:
        from_attributes = True


class WishlistDeleteResponse(BaseModel):
    message: str