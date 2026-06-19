import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import ChatPage from "../pages/Chat/ChatPage";
import ProductsPage from "../pages/Products/ProductsPage";
import ComparePage from "../pages/Compare/ComparePage";
import WishlistPage from "../pages/Wishlist/WishlistPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/chat" element={<ChatPage />} />

      <Route path="/products" element={<ProductsPage />} />

      <Route path="/compare" element={<ComparePage />} />

      <Route path="/wishlist" element={<WishlistPage />} />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

    </Routes>
  );
}

export default AppRoutes;