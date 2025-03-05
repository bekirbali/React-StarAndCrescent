import { useEffect } from "react";
import { allProducts, drinks, guvecler, listings } from "../utils/dummyData";

const Listings = ({ activeTab, setActiveTab }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          className={`w-[180px] px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${
            activeTab === "all"
              ? "bg-[#ff8500] text-white transform scale-105"
              : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
          }`}
          onClick={() => setActiveTab("all")}
        >
          TÜM ÜRÜNLER
        </button>
        <button
          className={`w-[180px] px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${
            activeTab === "pideler"
              ? "bg-[#ff8500] text-white transform scale-105"
              : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
          }`}
          onClick={() => setActiveTab("pideler")}
        >
          PİDELER
        </button>
        <button
          className={`w-[180px] px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${
            activeTab === "guvec"
              ? "bg-[#ff8500] text-white transform scale-105"
              : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
          }`}
          onClick={() => setActiveTab("guvec")}
        >
          GÜVEÇLER
        </button>
        <button
          className={`w-[180px] px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${
            activeTab === "drinks"
              ? "bg-[#ff8500] text-white transform scale-105"
              : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
          }`}
          onClick={() => setActiveTab("drinks")}
        >
          İÇECEKLER
        </button>
      </div>

      {activeTab === "all" && (
        <>
          <h2 className="text-[40px] mb-12 font-bold text-center text-[#ff8500] relative">
            TÜM ÜRÜNLER
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ff8500] rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-[300px] bg-black overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div className="p-6">
                  <p className="text-[22px] font-bold text-gray-800 mb-4">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[26px] font-bold text-[#ff8500]">
                      {item.price}
                    </p>
                    <button className="px-6 py-2 bg-[#ff8500] text-white rounded-full font-semibold hover:bg-[#e67a00] transition-colors duration-300">
                      SEPETE EKLE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "pideler" && (
        <>
          <h2 className="text-[40px] mb-12 font-bold text-center text-[#ff8500] relative">
            PİDELER
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ff8500] rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-[300px] bg-black overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div className="p-6">
                  <p className="text-[22px] font-bold text-gray-800 mb-4">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[26px] font-bold text-[#ff8500]">
                      {item.price}
                    </p>
                    <button className="px-6 py-2 bg-[#ff8500] text-white rounded-full font-semibold hover:bg-[#e67a00] transition-colors duration-300">
                      SEPETE EKLE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "guvec" && (
        <>
          <h2 className="text-[40px] mb-12 font-bold text-center text-[#ff8500] relative">
            GÜVEÇLER
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ff8500] rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guvecler.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-[300px] bg-black overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div className="p-6">
                  <p className="text-[22px] font-bold text-gray-800 mb-4">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[26px] font-bold text-[#ff8500]">
                      {item.price}
                    </p>
                    <button className="px-6 py-2 bg-[#ff8500] text-white rounded-full font-semibold hover:bg-[#e67a00] transition-colors duration-300">
                      SEPETE EKLE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "drinks" && (
        <>
          <h2 className="text-[40px] mb-12 font-bold text-center text-[#ff8500] relative">
            İÇECEKLER
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ff8500] rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-[300px] bg-black overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div className="p-6">
                  <p className="text-[22px] font-bold text-gray-800 mb-4">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[26px] font-bold text-[#ff8500]">
                      {item.price}
                    </p>
                    <button className="px-6 py-2 bg-[#ff8500] text-white rounded-full font-semibold hover:bg-[#e67a00] transition-colors duration-300">
                      SEPETE EKLE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Listings;
