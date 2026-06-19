function PricePredictionCard() {

  return (
    <div className="bg-slate-900 p-5 rounded-xl">

      <h2 className="text-xl font-bold">
        AI Prediction
      </h2>

      <p className="mt-3">
        Price likely to drop 5%
        within next 15 days.
      </p>

      <button className="mt-4 bg-green-600 px-4 py-2 rounded-lg">

        Wait To Buy

      </button>

    </div>
  );
}

export default PricePredictionCard;