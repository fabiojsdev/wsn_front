// src/pages/Home.tsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom, faUtensils, faBox,
  faTruck, faIndustry, faAward, faHeadset, faMapMarkerAlt,
  faCheckCircle, faArrowRight, faShieldAlt, faLock
} from "@fortawesome/free-solid-svg-icons";

// === IMPORTS DAS MARCAS (coloque as imagens em src/assets/brands/) ===
import brand3m from "../../public/images/brands/3m.jpeg";
import brandDescarpack from "../../public/images/brands/Descarpack.jpeg";
import brandMedix from "../../public/images/brands/Medix.jpeg";
import brandScotchBrite from "../../public/images/brands/Scotch-brite.jpeg";
import brandCopobras from "../../public/images/brands/copobras.jpeg";
import brandBombril from "../../public/images/brands/bombril.jpeg";
import brandAlpfilm from "../../public/images/brands/alpfilm.jpeg";
import brandLifeClean from "../../public/images/brands/life-clean.jpeg";
import brandSanro from "../../public/images/brands/sanro.jpeg";

// Componente Carousel customizado
function SwiperCarousel() {
  const slides = [
    { image: "./images/banner1.png", alt: "Soluções Completas para seu Negócio" },
    { image: "./images/banner2.png", alt: "Atendimento Personalizado" },
    { image: "./images/banner3.png", alt: "Entregas para Todo Brasil" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Container com todos os slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full aspect-[21/9] flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      <style>{`
        .aspect-[21/9] { aspect-ratio: 21 / 9; }
        @media (max-width: 640px) {
          .aspect-[21/9] { aspect-ratio: 16 / 9; min-height: 40vh; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .aspect-[21/9] { min-height: 50vh; }
        }
        @media (min-width: 1025px) {
          .aspect-[21/9] { min-height: 60vh; }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { id: "limpeza", name: "Limpeza e Higiene", icon: faBroom, description: "Produtos de limpeza profissional", color: "bg-blue-100" },
    { id: "descartaveis", name: "Descartáveis", icon: faUtensils, description: "Descartáveis para alimentação", color: "bg-amber-100" },
    { id: "embalagens", name: "Embalagens", icon: faBox, description: "Embalagens diversas", color: "bg-rose-100" },
    { id: "epis", name: "EPIs", icon: faShieldAlt, description: "Equipamentos de proteção", color: "bg-purple-100" },
  ];

  const features = [
    { icon: faTruck, title: "Entregas Rápidas", desc: "Entregas para São Paulo e todo Brasil" },
    { icon: faIndustry, title: "Qualidade Garantida", desc: "Produtos testados e aprovados" },
    { icon: faAward, title: "Experiência", desc: `19 anos de mercado` },
    { icon: faHeadset, title: "Atendimento", desc: "Suporte especializado personalizado" },
  ];

  const stats = [
    { value: "19", label: "Anos de experiência" },
    { value: "300+", label: "Produtos" },
    { value: "500+", label: "Clientes satisfeitos" },
    { value: "100%", label: "Comprometimento" },
  ];

  // === NOVAS MARCAS (com imports) ===
  const brands = [
    { name: "3M",            src: brand3m },
    { name: "Descarpack",    src: brandDescarpack },
    { name: "Medix",         src: brandMedix },
    { name: "Scotch-Brite",  src: brandScotchBrite },
    { name: "Copobras",      src: brandCopobras },
    { name: "Bombril",       src: brandBombril },
    { name: "Alpfilm",       src: brandAlpfilm },
    { name: "Life Clean",    src: brandLifeClean },
    { name: "Sanro",         src: brandSanro },
  ];

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SwiperCarousel />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Por que escolher a WSN?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Mais de 19 anos fornecendo soluções de qualidade para empresas de todos os tamanhos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={feature.icon} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossas Categorias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de produtos para atender todas as necessidades do seu negócio
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full max-w-7xl">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 text-center group hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 w-full max-w-xs"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div
                    className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FontAwesomeIcon icon={category.icon} className="text-gray-700 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{category.description}</p>
                  <button
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center mx-auto group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Ver Produtos</span>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre a WSN</h2>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  Desde 2006, a WSN Distribuidora é especializada em soluções completas para descartáveis,
                  EPIs e produtos de limpeza, atendendo empresas, condomínios, restaurantes e comércios.
                </p>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  Nossa missão é fornecer produtos de qualidade com preços competitivos e um atendimento
                  personalizado que vai além da simples venda.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                    <span className="text-gray-700">Qualidade garantida</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                    <span className="text-gray-700">Entrega rápida</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                    <span className="text-gray-700">Preços competitivos</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/aboutus")}
                  className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center"
                >
                  <span>Conheça Nossa História</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trabalhamos com as Melhores Marcas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Parcerias com fornecedores renomados para garantir qualidade e confiabilidade
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="h-28 w-28 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-center">
                  <img src={brand.src} alt={brand.name} className="h-12 mx-auto mb-2 object-contain" />
                  <div className="text-xs text-gray-500 mt-2">{brand.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
              <div className="bg-white/20 p-4 rounded-full mr-6">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Atendemos Todo o Brasil</h2>
                <p className="opacity-90">Entregas rápidas e eficientes para todo o território nacional</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-300 whitespace-nowrap"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-gray-700 font-medium">Formas de pagamento:</span>
              <div className="flex gap-2">
                <div className="h-10 w-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-medium shadow-sm border border-gray-200">
                  Pix
                </div>
                <div className="h-10 w-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-medium shadow-sm border border-gray-200">
                  Cartão
                </div>
                <div className="h-10 w-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-medium shadow-sm border border-gray-200">
                  Boleto
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Certificações:</span>
              <div className="h-10 px-4 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-sm font-medium shadow-sm border border-green-200">
                <FontAwesomeIcon icon={faLock} className="mr-2" /> Site Seguro
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
