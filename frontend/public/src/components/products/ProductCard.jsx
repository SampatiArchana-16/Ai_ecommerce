function ProductCard({ product }) {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden">

      <img
        src="https://via.placeholder.com/300"
        alt={product.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">

        <h2 className="font-semibold">
          {product.title}
        </h2>

        <p className="text-green-400 mt-2">
          ₹{product.price}
        </p>

        <p className="text-yellow-400">
          ⭐ {product.rating}
        </p>

      </div>
    </div>
  );
}

export default ProductCard;