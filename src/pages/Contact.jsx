import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import { getir, trendyol, yemeksepeti } from "../assets";

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-orange-600">
          İletişim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="w-full h-[450px]">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.8333262761784!2d29.500662666368623!3d39.53986983553782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c975576b82354b%3A0xfb9984a0af377599!2sAyy%C4%B1ld%C4%B1z%20Pide%20Salonu!5e0!3m2!1str!2str!4v1735925827296!5m2!1str!2str"
              width="100%"
              height="520px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-orange-600 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold">Adres:</h3>
                      <p className="text-gray-600">
                        Adnan Menderes Bulv. No:62/A, BİM yanı Tavşanlı/Kütahya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-orange-600 text-xl" />
                    <div>
                      <h3 className="font-semibold">Sabit Telefon:</h3>
                      <p className="text-gray-600">+90 (274) 615 32 00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-orange-600 text-xl" />
                    <div>
                      <h3 className="font-semibold">Cep Telefonu:</h3>
                      <p className="text-gray-600">+90 (543) 584 4848</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                  Online Sipariş
                </h2>
                <div className="flex flex-col sm:flex-row items-center space-x-4">
                  <a
                    href="https://www.trendyol.com/s/trendyol-yemek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-none text-white px-2 py-1 rounded-lg"
                  >
                    <img src={trendyol} alt="" className="w-[150px] h-30" />
                  </a>
                  <a
                    href="https://getir.com/yemek/restoran/ayyildiz-pide-tavsanli-yeni-mah-tavsanli-kutahya/?adTrackingId="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-none text-white px-2 py-1 rounded-lg"
                  >
                    <img src={getir} alt="" className="w-[150px] h-30" />
                  </a>
                  <a
                    href="https://www.yemeksepeti.com/restaurant/u6j8/ayyildiz-pide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-none text-white px-2 py-1 rounded-lg"
                  >
                    <img
                      src={yemeksepeti}
                      alt=""
                      className="w-[170px] h-[70px]"
                    />
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                  Çalışma Saatleri
                </h2>
                <p className="text-gray-600">
                  Haftaiçi: 08:00 - 20:00
                  <br />
                  Haftasonu: 08:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
