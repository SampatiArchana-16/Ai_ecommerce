import ComparisonTable from "../../components/comparison/ComparisonTable";
import PriceChart from "../../components/comparison/PriceChart";

function ComparePage() {

  const sampleProducts = [
    {
      id: 1,
      title: "iPhone 17 Pro",
      price: 127999,
      rating: 4.8,
      website: "Amazon"
    },
    {
      id: 2,
      title: "iPhone 17 Pro",
      price: 126499,
      rating: 4.7,
      website: "Flipkart"
    }
  ];

  const chartData = [
    {
      date: "Jan",
      price: 132000
    },
    {
      date: "Feb",
      price: 129000
    },
    {
      date: "Mar",
      price: 127999
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Compare Products
      </h1>

      <ComparisonTable
        products={sampleProducts}
      />

      <div className="mt-10">
        <PriceChart
          data={chartData}
        />
      </div>

    </div>
  );
}

export default ComparePage;