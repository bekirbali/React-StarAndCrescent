import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { getir, trendyol, yemeksepeti, wrapper } from "../assets";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${wrapper})`,
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            İletişim
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:shadow-xl">
            <div className="bg-orange-600 py-4">
              <h2 className="text-2xl font-bold text-center text-white">
                İletişim Bilgileri
              </h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Adres:</h3>
                  <p className="text-gray-600">
                    Adnan Menderes Bulv. No:62/A, BİM yanı Tavşanlı/Kütahya
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaPhone className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Sabit Telefon:
                  </h3>
                  <p className="text-gray-600 hover:text-orange-600 transition-colors">
                    <a href="tel:+902746153200">+90 (274) 615 32 00</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaWhatsapp className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cep Telefonu:</h3>
                  <p className="text-gray-600 hover:text-orange-600 transition-colors">
                    <a href="tel:+905435844848">+90 (543) 584 4848</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaClock className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Çalışma Saatleri:
                  </h3>
                  <p className="text-gray-600">
                    Haftaiçi: 08:00 - 20:00
                    <br />
                    Haftasonu: 08:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="bg-orange-600 py-4">
                <h2 className="text-2xl font-bold text-center text-white">
                  Konumumuz
                </h2>
              </div>
              <div className="h-[400px] w-full">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.8333262761784!2d29.500662666368623!3d39.53986983553782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c975576b82354b%3A0xfb9984a0af377599!2sAyy%C4%B1ld%C4%B1z%20Pide%20Salonu!5e0!3m2!1str!2str!4v1735925827296!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-orange-600 py-4">
            <h2 className="text-2xl font-bold text-center text-white">
              Bize Ulaşın
            </h2>
          </div>
          <div className="p-6 md:p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="E-posta Adresiniz"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Telefon Numaranız"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Konu"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Mesajınız"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Online Order Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-orange-600 py-4">
            <h2 className="text-2xl font-bold text-center text-white">
              Online Sipariş
            </h2>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-gray-600 text-center mb-6">
              Aşağıdaki platformlardan online sipariş verebilirsiniz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a
                href="https://www.trendyol.com/s/trendyol-yemek"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-xl"
              >
                <img
                  src={trendyol}
                  alt="Trendyol"
                  className="w-32 h-32 object-contain mb-4"
                />
                <span className="font-medium text-orange-600">
                  Trendyol'dan Sipariş Ver
                </span>
              </a>
              <a
                href="https://getir.com/yemek/restoran/ayyildiz-pide-tavsanli-yeni-mah-tavsanli-kutahya/?adTrackingId="
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-xl"
              >
                <img
                  src={getir}
                  alt="Getir"
                  className="w-32 h-32 object-contain mb-4"
                />
                <span className="font-medium text-orange-600">
                  Getir'den Sipariş Ver
                </span>
              </a>
              <a
                href="https://www.yemeksepeti.com/restaurant/u6j8/ayyildiz-pide"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-xl"
              >
                <img
                  src={yemeksepeti}
                  alt="Yemeksepeti"
                  className="w-32 h-32 object-contain mb-4"
                />
                <span className="font-medium text-orange-600">
                  Yemeksepeti'nden Sipariş Ver
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
