import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff8a4c]">
              İletişim
            </h3>
            <p className="mb-2">Adres: İstanbul, Türkiye</p>
            <p className="mb-2">Telefon: +90 555 123 4567</p>
            <p>Email: info@ayyildizpide.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff8a4c]">
              Hızlı Linkler
            </h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-[#ff8a4c] transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/listings"
                  className="hover:text-[#ff8a4c] transition-colors"
                >
                  Menü
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="hover:text-[#ff8a4c] transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff8a4c]">
              Sosyal Medya
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Ayy%C4%B1ld%C4%B1z-Pide-Salonu/100063769861954/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff8a4c] transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/ayyildizpidesalonu?igshid=ZDdkNTZiNTM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff8a4c] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Ayyıldız Pide. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
