import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Listings from "../pages/Listings";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const AppRouter = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
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
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
