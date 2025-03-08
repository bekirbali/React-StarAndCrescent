import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Listings from "../pages/Listings";
import Contact from "../pages/Contact";
import CartPage from "../pages/CartPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { CartProvider } from "../utils/CartContext";

const AppRouter = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home activeTab={activeTab} setActiveTab={setActiveTab} />}
          />
          <Route
            path="listings"
            element={
              <Listings activeTab={activeTab} setActiveTab={setActiveTab} />
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default AppRouter;
