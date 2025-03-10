import React, { useEffect } from "react";
import { masa, dikpide } from "../assets";
import { FaUtensils, FaHistory, FaAward, FaUsers } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Mehmet Ayyıldız",
      position: "Kurucu & Baş Aşçı",
      description: "30 yıllık tecrübesiyle geleneksel Türk mutfağının ustası.",
    },
    {
      name: "Ayşe Ayyıldız",
      position: "İşletme Müdürü",
      description: "Müşteri memnuniyetini en üst seviyede tutmayı hedefler.",
    },
    {
      name: "Ali Yılmaz",
      position: "Şef",
      description:
        "Yenilikçi tarifler ve geleneksel lezzetleri harmanlayan usta şef.",
    },
  ];

  // Our values data
  const ourValues = [
    {
      icon: <FaUtensils className="text-4xl text-red-600 mb-4" />,
      title: "Kaliteli Malzemeler",
      description: "Her gün taze ve en kaliteli malzemeleri kullanıyoruz.",
    },
    {
      icon: <FaHistory className="text-4xl text-red-600 mb-4" />,
      title: "Geleneksel Tarifler",
      description:
        "Nesilden nesile aktarılan özel tariflerimizle hizmet veriyoruz.",
    },
    {
      icon: <FaAward className="text-4xl text-red-600 mb-4" />,
      title: "Ödüllü Lezzetler",
      description:
        "Birçok yerel yarışmada ödül kazanmış tariflerimiz bulunmaktadır.",
    },
    {
      icon: <FaUsers className="text-4xl text-red-600 mb-4" />,
      title: "Müşteri Memnuniyeti",
      description:
        "Müşterilerimizin memnuniyeti bizim için her şeyden önemlidir.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] overflow-hidden">
          <img
            src={masa}
            alt="Ayyıldız Pide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">Hakkımızda</h1>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Hikayemiz
              </h2>
              <p className="text-gray-700 mb-4">
                Ayyıldız Pide, 2005 yılında Mehmet Ayyıldız tarafından
                İstanbul'da kuruldu. Aileden gelen pide yapma geleneğini modern
                bir işletmeye dönüştüren Mehmet Bey, kısa sürede işletmesini
                büyüterek bugünkü haline getirdi.
              </p>
              <p className="text-gray-700 mb-4">
                Başlangıçta küçük bir dükkan olarak hizmet veren Ayyıldız Pide,
                müşterilerinden aldığı olumlu geri dönüşler ve artan talep
                üzerine 2010 yılında şu anki geniş ve modern mekanına taşındı.
              </p>
              <p className="text-gray-700">
                Bugün, Ayyıldız Pide olarak geleneksel Türk mutfağının eşsiz
                lezzetlerini, özellikle de taş fırında pişirilen pidelerimizi,
                güveçlerimizi ve lahmacunlarımızı sizlere sunmaktan gurur
                duyuyoruz. Aile işletmesi olarak, her müşterimize özel ilgi
                gösteriyor ve kaliteden ödün vermiyoruz.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={dikpide}
                alt="Ayyıldız Pide Tarihi"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                {value.icon}
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Ekibimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-gray-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Özel Taş Fırın</h3>
              <p>
                Geleneksel yöntemlerle inşa edilmiş taş fırınımızda pişirilen
                ürünlerimiz, eşsiz bir lezzet ve kıvam sunuyor. Taş fırının
                sağladığı eşit ısı dağılımı, pidelerimizin dışının çıtır, içinin
                ise yumuşacık olmasını sağlıyor.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Aile Reçeteleri</h3>
              <p>
                Kullandığımız tüm tarifler, nesilden nesile aktarılan aile
                reçetelerimizdir. Bu özel tarifler, yılların deneyimi ve
                bilgisiyle harmanlanarak bugünkü mükemmel lezzetlere ulaşmıştır.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Taze Malzemeler</h3>
              <p>
                Her sabah taze olarak tedarik ettiğimiz malzemelerle hazırlanan
                yemeklerimiz, hem lezzet hem de sağlık açısından en üst kaliteyi
                sunuyor. Mevsiminde ve yerel üreticilerden aldığımız ürünlerle
                çalışmayı tercih ediyoruz.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Samimi Ortam</h3>
              <p>
                Ayyıldız Pide'de sadece yemek yemezsiniz, aynı zamanda kendinizi
                evinizde hissedersiniz. Sıcak ve samimi ortamımız, ailenizle
                veya arkadaşlarınızla keyifli vakit geçirmeniz için idealdir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
