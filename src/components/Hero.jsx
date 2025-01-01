import { Link } from "react-router-dom";
import { dikguvec, diklahmacun, dikpide, wrapper } from "../assets";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[96%] flex justify-center items-center flex-wrap gap-5 my-10">
        <div className="cards pideler relative">
          <Link to="/listings">
            <img src={dikpide} alt="pide" />
            <p className="">Pideler</p>
          </Link>
        </div>
        <div className="cards lahmacun relative">
          <Link to="/listings">
            <img src={diklahmacun} alt="" />
            <p>Lahmacunlar</p>
          </Link>
        </div>
        <div className="cards guvec relative">
          <Link to="/listings">
            <img src={dikguvec} alt="" />
            <p className="!text-[rgba(255,255,255,0.815)]">Güveçler</p>
          </Link>
        </div>
        <div className="cards all relative">
          <Link to="/listings">
            <img src={wrapper} alt="" />
            <p>Tüm Ürünler</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
