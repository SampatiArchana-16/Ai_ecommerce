function ProductDetails() {

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src="https://via.placeholder.com/500"
          alt="product"
          className="rounded-xl"
        />

        <div>

          <h1 className="text-4xl font-bold">
            iPhone 17 Pro
          </h1>

          <p className="text-green-400 text-2xl mt-4">
            ₹127999
          </p>

          <p className="mt-4">
            Rating: ⭐ 4.8
          </p>

          <button
            className="
              mt-6
              bg-blue-600
              px-6
              py-3
              rounded-xl
            "
          >
            Add To Wishlist
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;