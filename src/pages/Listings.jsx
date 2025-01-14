import { useEffect } from "react";
import { allProducts, drinks, guvecler, listings } from "../utils/dummyData";

const Listings = ({ activeTab, setActiveTab }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-8 mt-2">
        <button
          className={`w-[175px] px-6 py-2 text-lg font-semibold rounded-lg transition-all ${
            activeTab === "all"
              ? "bg-[#ff8500] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("all")}
        >
          TÜM ÜRÜNLER
        </button>
        <button
          className={`w-[175px] px-6 py-2 text-lg font-semibold rounded-lg transition-all ${
            activeTab === "pideler"
              ? "bg-[#ff8500] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("pideler")}
        >
          PİDELER
        </button>
        <button
          className={`w-[175px] px-6 py-2 text-lg font-semibold rounded-lg transition-all ${
            activeTab === "guvec"
              ? "bg-[#ff8500] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("guvec")}
        >
          GÜVEÇLER
        </button>
        <button
          className={`w-[175px] px-6 py-2 text-lg font-semibold rounded-lg transition-all ${
            activeTab === "drinks"
              ? "bg-[#ff8500] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("drinks")}
        >
          İÇECEKLER
        </button>
      </div>

      {activeTab === "all" && (
        <>
          <h2 className="text-[35px] my-5 font-bold text-center text-[#ff8500]">
            TÜM ÜRÜNLER
          </h2>
          <div className="listing-container">
            <div className="listings">
              {allProducts.map((item) => (
                <div key={item.id} className="listing-card">
                  <div className="h-[300px] bg-black overflow-hidden">
                    <img
                      className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="listing-card-info">
                    <p className="text-[20px] font-bold listing-name">
                      {item.name}
                    </p>
                    <div className="listing-price">
                      <p className="text-[24px] price">{item.price}</p>
                      <p className="cart">SEPETE EKLE</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === "pideler" && (
        <>
          <h2 className="text-[35px] my-5 font-bold text-center text-[#ff8500]">
            PİDELER
          </h2>
          <div className="listing-container">
            <div className="listings">
              {listings.map((item) => (
                <div key={item.id} className="listing-card">
                  <div className="h-[300px] bg-black overflow-hidden">
                    <img
                      className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="listing-card-info">
                    <p className="text-[20px] font-bold listing-name">
                      {item.name}
                    </p>
                    <div className="listing-price">
                      <p className="text-[24px] price">{item.price}</p>
                      <p className="cart">SEPETE EKLE</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === "guvec" && (
        <>
          <h2 className="text-[35px] my-5 font-bold text-center text-[#ff8500]">
            GÜVEÇLER
          </h2>
          <div className="listing-container">
            <div className="listings">
              {guvecler.map((item) => (
                <div key={item.id} className="listing-card">
                  <div className="h-[300px] bg-black overflow-hidden">
                    <img
                      className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="listing-card-info">
                    <p className="text-[20px] font-bold listing-name">
                      {item.name}
                    </p>
                    <div className="listing-price">
                      <p className="text-[24px] price">{item.price}</p>
                      <p className="cart">SEPETE EKLE</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === "drinks" && (
        <>
          <h2 className="text-[35px] my-5 font-bold text-center text-[#ff8500]">
            İÇECEKLER
          </h2>
          <div className="listing-container">
            <div className="listings">
              {drinks.map((item) => (
                <div key={item.id} className="listing-card">
                  <div className="h-[300px] bg-black overflow-hidden">
                    <img
                      className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="listing-card-info">
                    <p className="text-[20px] font-bold listing-name">
                      {item.name}
                    </p>
                    <div className="listing-price">
                      <p className="text-[24px] price">{item.price}</p>
                      <p className="cart">SEPETE EKLE</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Listings;
