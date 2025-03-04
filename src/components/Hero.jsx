import { Link } from "react-router-dom";
import { dikguvec, dikpide, drinks, allpides } from "../assets";

const Hero = ({ setActiveTab }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Menümüzü Keşfedin
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <Link
              to="/listings"
              onClick={() => setActiveTab("pideler")}
              className="block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={dikpide}
                  alt="pide"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-6 left-0 right-0 text-center text-white text-2xl font-semibold">
                  Pideler
                </p>
              </div>
            </Link>
          </div>

          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <Link
              to="/listings"
              onClick={() => setActiveTab("drinks")}
              className="block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={drinks}
                  alt="içecekler"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-6 left-0 right-0 text-center text-white text-2xl font-semibold">
                  İçecekler
                </p>
              </div>
            </Link>
          </div>

          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <Link
              to="/listings"
              onClick={() => setActiveTab("guvec")}
              className="block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={dikguvec}
                  alt="güveç"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-6 left-0 right-0 text-center text-white text-2xl font-semibold">
                  Güveçler
                </p>
              </div>
            </Link>
          </div>

          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <Link
              to="/listings"
              onClick={() => setActiveTab("all")}
              className="block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={allpides}
                  alt="tüm ürünler"
                  className="w-full h-[300px] object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-6 left-0 right-0 text-center text-white text-2xl font-semibold">
                  Tüm Ürünler
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
