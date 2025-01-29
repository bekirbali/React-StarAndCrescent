import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { getir, trendyol, yemeksepeti } from "../assets";

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-orange-600">
          İletişim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Map Section */}
          <div className="w-full h-[400px] md:h-[520px] rounded-lg overflow-hidden">
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

          {/* Contact Information Section */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
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
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-orange-600 text-xl" />
                      <div className="flex flex-col gap-2 items-center space-x-3">
                        <div>
                          <h3 className="font-semibold">Sabit Telefon:</h3>
                          <p className="text-gray-600">+90 (274) 615 32 00</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div>
                            <h3 className="font-semibold">Cep Telefonu:</h3>
                            <p className="text-gray-600">+90 (543) 584 4848</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-600 mb-6">
                  Online Sipariş
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href="https://www.trendyol.com/s/trendyol-yemek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-transform duration-300 flex justify-center items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
                  >
                    <img
                      src={trendyol}
                      alt="Trendyol"
                      className="w-32 object-contain"
                    />
                  </a>
                  <a
                    href="https://getir.com/yemek/restoran/ayyildiz-pide-tavsanli-yeni-mah-tavsanli-kutahya/?adTrackingId="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-transform duration-300 flex justify-center items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
                  >
                    <img
                      src={getir}
                      alt="Getir"
                      className="w-32 object-contain"
                    />
                  </a>
                  <a
                    href="https://www.yemeksepeti.com/restaurant/u6j8/ayyildiz-pide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-transform duration-300 flex justify-center items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
                  >
                    <img
                      src={yemeksepeti}
                      alt="Yemeksepeti"
                      className="w-32 object-contain"
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
