from langgraph.graph import StateGraph

from agents.product_agent import search_product
from agents.comparison_agent import compare_products
from agents.recommendation_agent import recommend_product


class AgentState(dict):
    pass


def product_node(state):

    result = search_product(
        state["query"]
    )

    state["products"] = result

    return state


def comparison_node(state):

    result = compare_products(
        state["products"]
    )

    state["comparison"] = result

    return state


def recommendation_node(state):

    result = recommend_product(
        state["products"],
        100000
    )

    state["recommendation"] = result

    return state


builder = StateGraph(AgentState)

builder.add_node(
    "search",
    product_node
)

builder.add_node(
    "compare",
    comparison_node
)

builder.add_node(
    "recommend",
    recommendation_node
)

builder.add_edge(
    "search",
    "compare"
)

builder.add_edge(
    "compare",
    "recommend"
)

builder.set_entry_point(
    "search"
)

graph = builder.compile()