import RecommendationCard from "../../components/dashboard/RecommendationCard";
import ReviewAnalysisCard from "../../components/dashboard/ReviewAnalysisCard";
import DealCard from "../../components/dashboard/DealCard";
import PricePredictionCard from "../../components/dashboard/PricePredictionCard";

function Dashboard() {

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        AI Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <RecommendationCard
          title="Best Laptop"
          description="ASUS TUF Gaming F15"
        />

        <DealCard />

        <ReviewAnalysisCard />

        <PricePredictionCard />

      </div>

    </div>
  );
}

export default Dashboard;