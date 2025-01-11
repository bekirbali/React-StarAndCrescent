import React, { useEffect } from "react";
// import bakery from "../assets/bakery.jpg";
import {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full relative">
              <picture>
                <source srcSet={diklahmacun} media="(max-width: 753px)" />
                <img src={bizimlahmacun} alt="lahmacun" />
              </picture>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full relative">
              <picture>
                <source srcSet={dikguvec} media="(max-width: 753px)" />
                <img src={bizimguvec} alt="guvec" />
              </picture>
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
