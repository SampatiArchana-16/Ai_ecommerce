import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white">

      <h1 className="text-6xl font-bold">
        PriceWise AI
      </h1>

      <p className="text-xl mt-4 text-slate-400">
        Compare prices across Amazon, Flipkart,
        Myntra, Ajio and more.
      </p>

      <Link to="/chat">
        <button className="mt-8 bg-blue-600 px-6 py-3 rounded-xl">
          Start Shopping
        </button>
      </Link>
    </div>
  );
}

export default Landing;