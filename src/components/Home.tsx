import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBroom, faPumpSoap, faUtensils, faBox, 
  faTruck, faIndustry, faAward, faLock, faArrowRight,
  faShieldAlt, faHeadset, faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: "Limpeza", icon: faBroom, description: "Produtos de limpeza profissional" },
    { name: "Higiene", icon: faPumpSoap, description: "Itens de higiene pessoal" },
    { name: "Descartáveis", icon: faUtensils, description: "Descartáveis para alimentação" },
    { name: "Embalagens", icon: faBox, description: "Embalagens diversas" },
    { name: "EPIs", icon: faShieldAlt, description: "Equipamentos de proteção" },
  ];

  const features = [
    { icon: faTruck, title: "Entregas Rápidas", desc: "Para São Paulo e todo Brasil" },
    { icon: faIndustry, title: "Qualidade Garantida", desc: "Produtos de alta qualidade" },
    { icon: faAward, title: "Experiência", desc: `${new Date().getFullYear() - 2006}+ anos no mercado` },
    { icon: faHeadset, title: "Atendimento", desc: "Suporte especializado" },
  ];

  const stats = [
    { value: `${new Date().getFullYear() - 2006}+`, label: "Anos de experiência" },
    { value: "1000+", label: "Produtos" },
    { value: "5000+", label: "Clientes satisfeitos" },
    { value: "100%", label: "Comprometimento" },
  ];

  // Função para navegar para a página de produtos com a categoria
  const handleCategoryClick = (categoryName: string) => {
    navigate(`/products?category=${categoryName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Main Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WSN Distribuidora</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Soluções completas em descartáveis, EPIs e produtos de limpeza para o seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/products")}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-center justify-center"
            >
              <span>Conheça Nossos Produtos</span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faHeadset} className="mr-2" />
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>

      {/* Destaques */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={feature.icon} className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-2">Nossas Categorias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com uma ampla variedade de produtos para atender às necessidades do seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center group hover:border-blue-500 border-2 border-transparent transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <FontAwesomeIcon icon={category.icon} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">{category.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{category.description}</p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center mx-auto">
                <span>Ver Produtos</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-xs" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre a empresa */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sobre a WSN</h2>
                <p className="mb-4 opacity-90">
                  Desde 2006, a WSN Distribuidora é especializada em soluções completas para descartáveis, 
                  EPIs e produtos de limpeza, atendendo empresas, condomínios, restaurantes e comércios.
                </p>
                <p className="mb-6 opacity-90">
                  Nossa missão é fornecer produtos de qualidade com preços competitivos e um atendimento 
                  personalizado que vai além da simples venda.
                </p>
                <button
                  onClick={() => navigate("/aboutus")}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center"
                >
                  <span>Conheça Nossa História</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marcas/Parceiros */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Trabalhamos com as Melhores Marcas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Parcerias com fornecedores renomados para garantir qualidade e confiabilidade
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-20 w-20 md:h-24 md:w-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 p-3"
            >
              <div className="text-center">
                <div className="text-blue-600 font-bold text-sm">Marca</div>
                <div className="text-gray-500 text-xs">{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Área de atendimento */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Atendemos Todo o Brasil</h2>
                <p className="opacity-90">Entregas rápidas e eficientes para todo o território nacional</p>
              </div>
            </div>
            <button 
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      </section>

      {/* Payment and Seals */}
      <section className="bg-white py-8 border-t border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-gray-700 font-medium">Formas de pagamento:</span>
              <div className="flex gap-2">
                <div className="h-8 w-12 bg-blue-50 rounded flex items-center justify-center text-xs text-blue-700 font-medium shadow-sm">Pix</div>
                <div className="h-8 w-12 bg-blue-50 rounded flex items-center justify-center text-xs text-blue-700 font-medium shadow-sm">Cartão</div>
                <div className="h-8 w-12 bg-blue-50 rounded flex items-center justify-center text-xs text-blue-700 font-medium shadow-sm">Boleto</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Certificações:</span>
              <div className="h-8 px-3 bg-green-100 rounded flex items-center justify-center text-green-700 text-xs font-medium shadow-sm">
                <FontAwesomeIcon icon={faLock} className="mr-1" /> Site Seguro
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bg-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}