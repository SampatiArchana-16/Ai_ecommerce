import { useEffect, useState } from "react";

import ProductGrid from "../products/ProductGrid";
import ProductFilters from "../products/ProductFilters";

import { getProducts } from "../../api/productApi";

function ProductsPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();

    setProducts(data);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        Products
      </h1>

      <ProductFilters />

      <ProductGrid products={products} />

    </div>
  );
}

export default ProductsPage;