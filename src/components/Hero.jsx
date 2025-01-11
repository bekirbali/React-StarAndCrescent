import { Link } from "react-router-dom";
import { dikguvec, dikpide, drinks, allpides } from "../assets";

const Hero = ({ setActiveTab }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[96%] flex justify-center items-center flex-wrap gap-5 my-10">
        <div className="cards pideler relative">
          <Link to="/listings" onClick={() => setActiveTab("pideler")}>
            <img src={dikpide} alt="pide" />
            <p className="">Pideler</p>
          </Link>
        </div>
        <div className="cards lahmacun relative">
          <Link to="/listings" onClick={() => setActiveTab("drinks")}>
            <img src={drinks} alt="" />
            <p>İçecekler</p>
          </Link>
        </div>
        <div className="cards guvec relative">
          <Link to="/listings" onClick={() => setActiveTab("guvec")}>
            <img src={dikguvec} alt="" />
            <p className="!text-[rgba(255,255,255,0.815)]">Güveçler</p>
          </Link>
        </div>
        <div className="cards all relative">
          <Link to="/listings" onClick={() => setActiveTab("all")}>
            <img src={allpides} alt="" />
            <p className="!text-[rgba(255,255,255,0.97)]">Tüm Ürünler</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
