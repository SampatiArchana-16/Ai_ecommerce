from pydantic import BaseModel


class ProductResponse(BaseModel):

    id: int
    title: str
    brand: str
    category: str
    price: float
    rating: float

    class Config:
        from_attributes = True


class ProductSearchResponse(BaseModel):

    id: int
    title: str
    brand: str
    price: float
    rating: float