from pydantic import BaseModel


class ProductResponse(BaseModel):
    id: int
    title: str
    brand: str
    category: str
    price: float
    rating: float