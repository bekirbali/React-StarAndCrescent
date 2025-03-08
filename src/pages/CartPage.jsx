import { useEffect } from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
