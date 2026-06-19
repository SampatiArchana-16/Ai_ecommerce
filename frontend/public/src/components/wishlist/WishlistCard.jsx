function WishlistCard({ product }) {

  return (
    <div className="bg-slate-900 rounded-xl p-4">

      <img
        src="https://via.placeholder.com/300"
        alt={product.title}
        className="rounded-xl mb-3"
      />

      <h2 className="font-bold">
        {product.title}
      </h2>

      <p className="text-green-400">
        ₹{product.price}
      </p>

      <button
        className="
          mt-3
          bg-red-500
          px-4
          py-2
          rounded-lg
        "
      >
        Remove
      </button>

    </div>
  );
}

export default WishlistCard;