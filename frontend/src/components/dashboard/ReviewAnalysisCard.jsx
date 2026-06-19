function ReviewAnalysisCard() {

  return (
    <div className="bg-slate-900 p-6 rounded-xl">

      <h2 className="text-xl font-bold mb-4">
        Review Analysis
      </h2>

      <h3 className="text-green-400">
        Pros
      </h3>

      <ul>
        <li>Good Battery</li>
        <li>Excellent Camera</li>
      </ul>

      <h3 className="text-red-400 mt-4">
        Cons
      </h3>

      <ul>
        <li>Heating Issue</li>
        <li>Average Charger</li>
      </ul>

    </div>
  );
}

export default ReviewAnalysisCard;