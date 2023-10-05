import { drinks, listings } from "../utils/dummyData";

const Listings = () => {
  return (
    <>
      <h1 className="text-[30px] pl-12">Pideler</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {listings.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center flex-col w-[350px] h-[450px]"
            >
              <img
                className="w-full h-[360px]"
                src={item.img}
                alt={item.name}
              />
              <div className="flex gap-2">
                <p className="text-2xl">{item.name} -</p>
                <p className="text-3xl">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-[30px] pl-12">İçecekler</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {drinks.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center flex-col w-[350px] h-[450px]"
            >
              <img
                className="w-full h-[360px]"
                src={item.img}
                alt={item.name}
              />
              <div className="flex gap-2">
                <p className="text-2xl">{item.name} -</p>
                <p className="text-3xl">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listings;
