function RecommendationCard({
  title,
  description
}) {

  return (
    <div className="bg-slate-900 p-5 rounded-xl">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default RecommendationCard;