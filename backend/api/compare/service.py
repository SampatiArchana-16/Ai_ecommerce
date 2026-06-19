from agents.comparison_agent import compare_products


def compare_service(products):

    result = compare_products(products)

    return {
        "comparison": result
    }