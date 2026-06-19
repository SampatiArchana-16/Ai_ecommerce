import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-800">
      <Link to="/">
        <h1 className="text-2xl font-bold">
          PriceWise AI
        </h1>
      </Link>

      <div className="flex gap-6">
        <Link to="/chat">Chat</Link>
        <Link to="/products">Products</Link>
        <Link to="/compare">Compare</Link>
      </div>
    </nav>
  );
}

export default Navbar;