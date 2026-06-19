from fastapi import APIRouter

from api.compare.service import compare_service

router = APIRouter(
    prefix="/compare",
    tags=["Compare"]
)


@router.post("/")
def compare(payload: dict):

    products = payload["products"]

    return compare_service(products)