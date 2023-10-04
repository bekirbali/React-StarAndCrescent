import React from "react";
import bakery from "../assets/bakery.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
        aut
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bakery})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title font-extrabold" data-swiper-parallax="-300">
            Pide ve Lahmacun
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            "Hamurun Ustalıkla Buluştuğu Lezzet Şöleni"
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              En taze malzemelerle hazırlanan incecik hamurun lezzetle buluştuğu
              pide ve lahmacunlarımız, yöresel tatların en özel hali. Geleneksel
              lezzetlerimizi sizlerle buluşturuyor, damaklarınıza unutulmaz bir
              lezzet deneyimi sunuyoruz.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Güveç
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            "Yöresel Etin Lezzetli Buluşması"
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Sadece en kaliteli etlerle hazırladığımız güveçlerimizde, yöresel
              lezzetin eşsiz buluşmasını yaşayacaksınız. Taze ve lezzetli
              etlerin en özel hali, güveçlerimizde sizleri bekliyor.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
