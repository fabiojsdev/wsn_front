import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleWhatsAppClick = () => window.open("https://wa.me/5511973846070", "_blank");
  const handleContactClick = () => {
    navigate("/contact");
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white shadow-md py-3"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-md transition-all duration-300 hover:bg-blue-700">
              <span className="font-bold text-xl">WSN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-700 leading-tight">WSN</span>
              <span className="text-xs text-gray-600 leading-tight">Distribuidora</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center ${isActive("/") ? "bg-blue-50 text-blue-700 font-semibold shadow-inner" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}>
              <i className="fas fa-home mr-2 text-sm"></i> Início
            </Link>
            <Link to="/aboutus" className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center ${isActive("/aboutus") ? "bg-blue-50 text-blue-700 font-semibold shadow-inner" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}>
              <i className="fas fa-info-circle mr-2 text-sm"></i> Nossa História
            </Link>
            {/* Produtos como link direto */}
            <Link to="/products" className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center ${isActive("/products") ? "bg-blue-50 text-blue-700 font-semibold shadow-inner" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}>
              <i className="fas fa-box-open mr-2 text-sm"></i> Produtos
            </Link>
            <Link to="/contact" className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center ${isActive("/contact") ? "bg-blue-50 text-blue-700 font-semibold shadow-inner" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}>
              <i className="fas fa-envelope mr-2 text-sm"></i> Contato
            </Link>
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              
              <button onClick={handleWhatsAppClick} className="flex items-center text-sm text-green-600 font-medium hover:text-green-700 transition-colors bg-green-50 rounded-full px-4 py-2">
                <i className="fab fa-whatsapp mr-2 text-lg"></i> (11) 97384-6070
              </button>
            </div>
            <button onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
              <i className="fas fa-comment-dots mr-2"></i> Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center z-50 bg-blue-50 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}></span>
            <span className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 my-1.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <nav className="flex flex-col space-y-4 mb-8">
              <Link to="/" className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors flex items-center ${isActive("/") ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`} onClick={() => setIsMenuOpen(false)}>
                <i className="fas fa-home mr-3 w-5 text-center"></i> Início
              </Link>
              <Link to="/aboutus" className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors flex items-center ${isActive("/aboutus") ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`} onClick={() => setIsMenuOpen(false)}>
                <i className="fas fa-info-circle mr-3 w-5 text-center"></i> Sobre Nós
              </Link>
              <Link to="/products" className={`block text-base font-medium px-4 py-2.5 rounded-lg transition-colors ml-2 ${isActive("/products") ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`} onClick={() => setIsMenuOpen(false)}>
                <i className="fas fa-box-open mr-3 w-5 text-center"></i> Produtos
              </Link>
              <Link to="/contact" className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors flex items-center ${isActive("/contact") ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`} onClick={() => setIsMenuOpen(false)}>
                <i className="fas fa-envelope mr-3 w-5 text-center"></i> Contato
              </Link>
            </nav>

            {/* Mobile Contact Info */}
            <div className="mt-auto space-y-4 border-t border-gray-100 pt-6">
              <div className="space-y-3">
                <div className="flex items-center text-gray-700 bg-blue-50 rounded-lg p-3">
                  <i className="fas fa-phone-alt mr-3 text-blue-600 w-5 text-center"></i> (11) 3789-3789
                </div>
                <button onClick={() => { handleWhatsAppClick(); setIsMenuOpen(false); }} className="flex items-center text-green-600 font-medium w-full hover:text-green-700 transition-colors bg-green-50 rounded-lg p-3">
                  <i className="fab fa-whatsapp mr-3 text-lg w-5 text-center"></i> (11) 97384-6070
                </button>
              </div>
              <button onClick={handleContactClick} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg font-medium transition-colors shadow-md flex items-center justify-center">
                <i className="fas fa-comment-dots mr-2"></i> Fale Conosco
              </button>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsMenuOpen(false)} />}
      </div>
    </header>
  );
}
