import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import wsnLogo from "../assets/wsnlogo.png";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsProductsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate("/cart");
    setIsMenuOpen(false);
  };

  // Categorias baseadas nos produtos fornecidos
  const productCategories = [
    { name: "Todos os Produtos", path: "/products" },
    { name: "Limpeza e Higiene", path: "/products?category=limpeza" },
    { name: "Descartáveis", path: "/products?category=descartaveis" },
    { name: "EPIs", path: "/products?category=epis" },
    { name: "Embalagens", path: "/products?category=embalagens" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-gradient-to-r from-blue-50 to-white shadow-lg py-1"
          : "bg-white py-2"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src={wsnLogo}
                alt="WSN Logo"
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { path: "/", label: "Início" },
              { path: "/aboutus", label: "Nossa História" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive(item.path)
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown de Produtos */}
            <div className="relative group">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center ${isActive("/products")
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }`}
              >
                Produtos
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 z-50 border border-gray-100">
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive("/contact")
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
            >
              Contato
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Carrinho */}
            <button
              onClick={handleCartClick}
              className="relative p-1.5 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              title="Carrinho de Cotações"
            >
              <ShoppingCart className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Carrinho */}
            <button
              onClick={handleCartClick}
              className="relative p-1.5 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              title="Carrinho de Cotações"
            >
              <ShoppingCart className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              className="relative w-7 h-7 flex justify-center items-center z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full pt-16 pb-6 px-4">
            <nav className="flex flex-col space-y-2 mb-6">
              {[
                { path: "/", label: "Início" },
                { path: "/aboutus", label: "Sobre Nós" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive(item.path)
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Produtos com submenu mobile */}
              <div>
                <button
                  className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 w-full text-left flex items-center justify-between ${isActive("/products")
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                    }`}
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                >
                  <span>Produtos</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Submenu mobile */}
                {isProductsDropdownOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="block text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsDropdownOpen(false);
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive("/contact")
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>

              {/* Carrinho */}
              <button
                onClick={handleCartClick}
                className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 text-left ${isActive("/cart")
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span>Cotações</span>
                  {getTotalItems() > 0 && (
                    <span className="bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              </button>
            </nav>

            {/* Footer Mobile */}
            <div className="mt-auto space-y-3 border-t border-gray-200 pt-4">
              <div className="text-gray-600 text-xs font-medium">
                <span className="font-semibold">Telefone:</span> (11) 3789-3789
              </div>
              <button
                onClick={handleContactClick}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
