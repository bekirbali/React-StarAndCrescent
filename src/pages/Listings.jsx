import { allProducts, drinks, listings } from "../utils/dummyData";

const Listings = () => {
  return (
    <>
      <h1 className="text-[40px] my-5 font-bold text-center text-orange-400">
        TÜM ÜRÜNLER
      </h1>
      <div className="w-full">
        <div className="listing-container">
          <div className="listings">
            {allProducts.map((item) => (
              <div key={item.id} className="listing-card">
                <div className="h-[300px] bg-black overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-125 transition-all duration-300"
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
                    <p className=" cart">SEPETE EKLE</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-[30px] my-5 font-bold text-center text-orange-400">
        PİDELER
      </h2>
      <div className="listing-container">
        <div className="listings">
          {listings.map((item) => (
            <div key={item.id} className="listing-card">
              <div className="h-[300px] bg-black overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-125 transition-all duration-300"
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
                  <p className=" cart">SEPETE EKLE</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-[30px] my-5 font-bold text-center text-orange-400">
        İÇECEKLER
      </h2>
      <div className="listing-container">
        <div className="listings">
          {drinks.map((item) => (
            <div key={item.id} className="listing-card">
              <div className="h-[300px] bg-black overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-125 transition-all duration-300"
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
                  <p className=" cart">SEPETE EKLE</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listings;
