from agents.product_agent import search_product


def chat_response(message):

    return {
        "answer": search_product(
            message
        )
    }