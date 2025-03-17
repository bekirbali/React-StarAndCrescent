import React, { useEffect } from "react";
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
import { FaPhone, FaMapMarkerAlt, FaStar, FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = ({ activeTab, setActiveTab }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Featured products data
  const featuredProducts = [
    {
      name: "Kıymalı Pide",
      image: dikpide,
      description: "Özel baharatlarla hazırlanmış kıymalı pide",
      price: "75 ₺",
    },
    {
      name: "Lahmacun",
      image: diklahmacun,
      description: "İnce hamur üzerine özel harç ile hazırlanmış lahmacun",
      price: "45 ₺",
    },
    {
      name: "Güveç",
      image: dikguvec,
      description: "Özel soslu, sebzeli ve etli güveç",
      price: "120 ₺",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      comment: "Pideleri gerçekten çok lezzetli, her zaman tercih ediyorum.",
      rating: 5,
    },
    {
      name: "Ayşe Kaya",
      comment: "Güveçleri bir harika, aile yemeği için ideal bir yer.",
      rating: 5,
    },
    {
      name: "Mehmet Demir",
      comment: "Hızlı servis ve kaliteli yemekler. Kesinlikle tavsiye ederim.",
      rating: 4,
    },
  ];

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

      {/* About Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Hakkımızda
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img
                src={masa}
                alt="Ayyıldız Pide"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold mb-4">
                Ayyıldız Pide'ye Hoş Geldiniz
              </h3>
              <p className="text-gray-700 mb-4">
                2005 yılından beri geleneksel Türk mutfağının eşsiz lezzetlerini
                sizlere sunmaktan gurur duyuyoruz. Ayyıldız Pide olarak, her bir
                ürünümüzü en taze malzemelerle ve geleneksel yöntemlerle
                hazırlıyoruz.
              </p>
              <p className="text-gray-700 mb-6">
                Özel taş fırınımızda pişirilen pidelerimiz, güveçlerimiz ve
                lahmacunlarımız ile damaklarınızda unutulmaz bir tat bırakmayı
                hedefliyoruz. Aile işletmesi olarak, her müşterimize özel ilgi
                gösteriyor ve kaliteden ödün vermiyoruz.
              </p>
              <Link
                to="/about"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Öne Çıkan Ürünlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-600">
                      {product.price}
                    </span>
                    <Link
                      to="/listings"
                      onClick={() => setActiveTab("all")}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                      Sipariş Ver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Müşteri Yorumları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-md relative"
              >
                <FaQuoteLeft className="text-red-200 text-4xl absolute top-4 left-4" />
                <div className="mt-6">
                  <p className="text-gray-700 mb-4 italic relative z-10">
                    {testimonial.comment}
                  </p>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lezzetli Yemeklerimizi Deneyin!
          </h2>
          <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
            Özel taş fırınımızda hazırlanan eşsiz lezzetlerimizi tatmak için
            hemen sipariş verin veya restoranımızı ziyaret edin.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center bg-white bg-opacity-20 rounded-lg p-4">
              <FaPhone className="text-white mr-3 text-xl" />
              <span className="text-white font-bold text-xl">
                +90 555 123 4567
              </span>
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-20 rounded-lg p-4">
              <FaMapMarkerAlt className="text-white mr-3 text-xl" />
              <span className="text-white font-bold text-xl">
                Atatürk Cad. No:123, İstanbul
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/listings"
              onClick={() => setActiveTab("all")}
              className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
            >
              Menüyü Görüntüle
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-white hover:text-red-600 text-white font-bold py-3 px-8 rounded-lg border-2 border-white transition duration-300 text-lg"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
