from agents.prediction_agent import predict_price


def prediction_service(price_history):

    return {
        "prediction":
        predict_price(price_history)
    }