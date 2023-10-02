import { listings } from "../utils/dummyData";

const Listings = () => {
  return (
    <div>
      {listings.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
