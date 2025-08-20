import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBroom, faPumpSoap, faUtensils, faBox, faShoppingCart,
  faTruck, faIndustry, faAward, faLock
} from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: "Limpeza", icon: faBroom },
    { name: "Higiene", icon: faPumpSoap },
    { name: "Descartáveis", icon: faUtensils },
    { name: "Embalagens", icon: faBox },
    { name: "Mercearia", icon: faShoppingCart },
  ];

  const features = [
    { icon: faTruck, title: "Entregas Rápidas", desc: "Para São Paulo e todo Brasil" },
    { icon: faIndustry, title: "Fábrica Própria", desc: "Produtos de alta qualidade" },
    { icon: faAward, title: "30+ Anos", desc: "Experiência no mercado" },
  ];

  const stats = [
    { value: "30+", label: "Anos no mercado" },
    { value: "1000+", label: "Produtos" },
    { value: "5000+", label: "Clientes" },
    { value: "100%", label: "Satisfação" },
  ];

  // Função para navegar para a página de produtos com a categoria
  const handleCategoryClick = (categoryName: string) => {
    navigate(`/products?category=${categoryName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Main Banner */}
      <div className="relative bg-gradient-to-r from-red-700 to-red-800 text-white py-16 text-center">
        <div className="absolute inset-0 opacity-10 bg-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WSN Distribuidora</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Há mais de 30 anos distribuindo produtos de qualidade para todo o Brasil!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/products")}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Conheça Nossos Produtos
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-3 rounded-lg text-lg font-medium transition"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>

      {/* Destaques */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <FontAwesomeIcon icon={feature.icon} className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-red-700 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-red-700 mb-2 text-center">Nossas Categorias</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Trabalhamos com uma ampla variedade de produtos para atender às necessidades do seu negócio
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 text-center group hover:border-red-600 border border-transparent transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <FontAwesomeIcon icon={category.icon} className="text-red-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-800 mb-3 group-hover:text-red-700">{category.name}</h3>
              <button
                onClick={() => handleCategoryClick(category.name)}
                className="text-red-600 hover:text-red-700 text-xs font-medium"
              >
                Ver Produtos
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre a empresa */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-red-700 text-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Sobre a WSN</h2>
                <p className="mb-4">
                  Há mais de 30 anos no mercado, a WSN é especializada na distribuição de produtos de higiene, limpeza,
                  descartáveis, embalagens e muito mais.
                </p>
                <p className="mb-4">
                  Nossa missão é fornecer produtos de qualidade com preços competitivos e um atendimento diferenciado
                  para nossos clientes.
                </p>
                <button
                  onClick={() => navigate("/aboutus")}
                  className="bg-white text-red-700 hover:bg-gray-100 font-medium px-6 py-2 rounded-lg"
                >
                  Conheça Nossa História
                </button>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2.5rem font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marcas/Parceiros */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-red-700 mb-8 text-center">Trabalhamos com as Melhores Marcas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <a
              key={i}
              href={`https://example.com/brand${i + 1}`} // Substitua por URLs reais
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 w-16 md:h-20 md:w-20 bg-white rounded-lg flex items-center justify-center shadow-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-gray-400 text-xs font-bold">Marca {i + 1}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Área de atendimento */}
      <section className="bg-red-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-4">Atendemos Todo o Território Nacional</h2>
          <p className="max-w-2xl mx-auto">
            Nossa distribuição atende todo o Brasil, com entregas rápidas e eficientes para São Paulo e demais estados.
          </p>
        </div>
      </section>

      {/* Payment and Seals */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-gray-700 font-medium">Formas de pagamento:</span>
              <div className="flex gap-2">
                <div className="h-8 w-12 bg-white rounded flex items-center justify-center text-xs shadow-sm">Pix</div>
                <div className="h-8 w-12 bg-white rounded flex items-center justify-center text-xs shadow-sm">Cartão</div>
                <div className="h-8 w-12 bg-white rounded flex items-center justify-center text-xs shadow-sm">Boleto</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Certificações:</span>
              <a
                href="https://example.com/security" // Substitua por URL real
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-24 bg-green-100 rounded flex items-center justify-center text-green-700 text-xs shadow-sm"
              >
                <FontAwesomeIcon icon={faLock} className="mr-1" /> Site Seguro
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}