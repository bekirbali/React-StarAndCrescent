import React, { useState } from "react";
// import bakery from "../assets/bakery.jpg";
import {
  pide,
  guvec,
  lahmacun,
  dikguvec,
  dikpide,
  diklahmacun,
  bizimguvec,
  bizimlahmacun,
  masa,
} from "../assets";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#00f853",
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="h-full relative">
              <picture>
                <source srcSet={dikpide} media="(max-width: 753px)" />
                <img src={masa} alt="pide" className="!object-cover" />
              </picture>
              {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center w-[50%]">
              <p className="text-[88px]">Pide ve Lahmacun</p>
              "Hamurun Ustalıkla Buluştuğu Lezzet Şöleni"
              <p>
                En taze malzemelerle hazırlanan incecik hamurun lezzetle
                buluştuğu pide ve lahmacunlarımız, yöresel tatların en özel
                hali. Geleneksel lezzetlerimizi sizlerle buluşturuyor,
                damaklarınıza unutulmaz bir lezzet deneyimi sunuyoruz.
              </p>
            </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full relative">
              <picture>
                <source srcSet={diklahmacun} media="(max-width: 753px)" />
                <img src={bizimlahmacun} alt="lahmacun" />
              </picture>
              {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center w-[50%]">
              <p className="text-[88px]">Pide ve Lahmacun</p>
              "Hamurun Ustalıkla Buluştuğu Lezzet Şöleni"
              <p>
                En taze malzemelerle hazırlanan incecik hamurun lezzetle
                buluştuğu pide ve lahmacunlarımız, yöresel tatların en özel
                hali. Geleneksel lezzetlerimizi sizlerle buluşturuyor,
                damaklarınıza unutulmaz bir lezzet deneyimi sunuyoruz.
              </p>
            </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full relative">
              <picture>
                <source srcSet={dikguvec} media="(max-width: 753px)" />
                <img src={bizimguvec} alt="guvec" />
              </picture>
              {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center w-[50%]">
              <p className="text-[88px]">Pide ve Lahmacun</p>
              "Hamurun Ustalıkla Buluştuğu Lezzet Şöleni"
              <p>
                En taze malzemelerle hazırlanan incecik hamurun lezzetle
                buluştuğu pide ve lahmacunlarımız, yöresel tatların en özel
                hali. Geleneksel lezzetlerimizi sizlerle buluşturuyor,
                damaklarınıza unutulmaz bir lezzet deneyimi sunuyoruz.
              </p>
            </div> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Home;
