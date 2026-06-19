from agents.review_agent import analyze_reviews


def review_service(reviews):

    return {
        "analysis":
        analyze_reviews(reviews)
    }