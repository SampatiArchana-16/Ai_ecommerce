from agents.recommendation_agent import recommend_product


def recommendation_service(
    products,
    budget
):

    return {
        "recommendation":
        recommend_product(
            products,
            budget
        )
    }