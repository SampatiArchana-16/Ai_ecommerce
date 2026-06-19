function ProductFilters() {
  return (
    <div className="bg-slate-900 p-5 rounded-xl mb-6">

      <h2 className="font-bold mb-4">
        Filters
      </h2>

      <select className="w-full p-3 bg-slate-800 rounded-xl">
        <option>All Categories</option>
        <option>Mobile</option>
        <option>Laptop</option>
        <option>Fashion</option>
      </select>

    </div>
  );
}

export default ProductFilters;