import { useCart } from "../utils/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <img
          src="/assets/empty-cart.png"
          alt="Empty Cart"
          className="w-64 h-64 mb-8 opacity-50"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://cdn-icons-png.flaticon.com/512/2038/2038854.png";
          }}
        />
        <h2 className="text-2xl font-bold text-gray-500 mb-4">Sepetiniz Boş</h2>
        <p className="text-gray-400 mb-8">Sepetinize ürün ekleyin</p>
        <a
          href="/listings"
          className="px-8 py-3 bg-[#ff8500] text-white rounded-full font-semibold hover:bg-[#e67a00] transition-colors duration-300"
        >
          ÜRÜNLERE GÖZ AT
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-[#ff8500]">
        SEPETİM
      </h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  ÜRÜN
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                  FİYAT
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                  ADET
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                  TOPLAM
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cartItems.map((item) => {
                const price = parseFloat(item.price.replace("₺", ""));
                const itemTotal = price * item.quantity;

                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://via.placeholder.com/80";
                            }}
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-lg font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-lg text-gray-500">
                      {item.price}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="mx-3 w-8 text-center text-lg">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-lg font-medium text-[#ff8500]">
                      {itemTotal.toFixed(2)}₺
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/2">
          <button
            onClick={clearCart}
            className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors duration-300"
          >
            SEPETİ TEMİZLE
          </button>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 pb-4 border-b border-gray-200">
            SEPET TOPLAMI
          </h2>

          <div className="flex justify-between py-3">
            <span className="text-gray-600">Ara Toplam</span>
            <span className="font-semibold">{cartTotal.toFixed(2)}₺</span>
          </div>

          <div className="flex justify-between py-3 border-t border-gray-200">
            <span className="text-gray-600">Toplam</span>
            <span className="font-bold text-xl text-[#ff8500]">
              {cartTotal.toFixed(2)}₺
            </span>
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-[#ff8500] text-white rounded-lg font-semibold hover:bg-[#e67a00] transition-colors duration-300">
            SİPARİŞİ TAMAMLA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
