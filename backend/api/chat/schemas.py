from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str
    user_id: int | None = None


class ChatResponse(BaseModel):
    answer: str