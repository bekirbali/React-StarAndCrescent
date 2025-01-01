import { meeting, specialday } from "../assets";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-10 mt-10 px-8">
      <div className="flex flex-col items-center gap-5">
        <img className="w-[80px]" src={meeting} alt="meeting" />
        <h2 className="font-extrabold text-xl">İş Yemekleri</h2>
        <p className="font-bold text-center">
          Salonumuzda hem yemeğinizi yeyip hem de toplantınızı
          gerçekleştirebilirsiniz.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <img className="w-[80px]" src={specialday} alt="specialday" />
        <h2 className="font-extrabold text-xl">Özel Gün Yemekleri</h2>
        <p className="font-bold text-center">
          Tüm özel günlerinizde yemekleri sizin için hazırlayabiliriz.
        </p>
      </div>
    </div>
  );
};

export default Header;
