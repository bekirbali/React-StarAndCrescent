import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Listings from "../pages/Listings";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listings" element={<Listings />} />
      </Routes>
    </>
  );
};

export default AppRouter;
