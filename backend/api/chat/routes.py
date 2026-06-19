from fastapi import APIRouter

from api.chat.service import (
    chat_response
)

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post("/")
def chat(
    payload: dict
):
    return chat_response(
        payload["message"]
    )