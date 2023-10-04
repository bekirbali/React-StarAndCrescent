import { listings } from "../utils/dummyData";

const Listings = () => {
  return (
    <div className="flex justify-center">
      {listings.map((item, index) => {
        return (
          <div
            key={index}
            className="flex-1 flex justify-center items-center flex-col"
          >
            <img
              className="w-[250px] h-[250px]"
              src={item.img}
              alt={item.name}
            />
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
