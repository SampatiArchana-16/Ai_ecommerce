from sqlalchemy.orm import Session

from agents.product_agent import search_product

from models.chat import ChatHistory


def save_chat(
    db: Session,
    user_id: int,
    role: str,
    message: str
):

    chat = ChatHistory(
        user_id=user_id,
        role=role,
        message=message
    )

    db.add(chat)

    db.commit()

    db.refresh(chat)

    return chat


def process_chat(
    db: Session,
    user_id: int,
    message: str
):

    save_chat(
        db,
        user_id,
        "user",
        message
    )

    ai_response = search_product(
        message
    )

    save_chat(
        db,
        user_id,
        "assistant",
        ai_response
    )

    return {
        "answer": ai_response
    }