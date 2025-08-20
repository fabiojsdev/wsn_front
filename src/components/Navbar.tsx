import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Efeito para detectar scroll e fechar menu ao redimensionar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/551151963789', '_blank');
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-white shadow-md py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-md">
              <span className="font-bold text-lg">WSN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-red-700 leading-tight">WSN</span>
              <span className="text-xs text-gray-600 leading-tight">Distribuidora</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-red-100 text-red-700 font-semibold shadow-inner' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/aboutus" 
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/aboutus') 
                  ? 'bg-red-100 text-red-700 font-semibold shadow-inner' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
              }`}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/products" 
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/products') 
                  ? 'bg-red-100 text-red-700 font-semibold shadow-inner' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
              }`}
            >
              Produtos
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/contact') 
                  ? 'bg-red-100 text-red-700 font-semibold shadow-inner' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-phone-alt mr-2 text-red-600"></i>
                <span>(11) 3789-3789</span>
              </div>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center text-sm text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                <i className="fab fa-whatsapp mr-2 text-lg"></i>
                <span>(11) 5196-3789</span>
              </button>
            </div>
            <button 
              onClick={handleContactClick}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-red-600 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-red-600 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-red-600 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6 mb-8">
              <Link 
                to="/" 
                className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-red-100 text-red-700 border-l-4 border-red-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-home mr-3 w-5 text-center"></i>
                Início
              </Link>
              <Link 
                to="/aboutus" 
                className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                  isActive('/aboutus') 
                    ? 'bg-red-100 text-red-700 border-l-4 border-red-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-info-circle mr-3 w-5 text-center"></i>
                Sobre Nós
              </Link>
              <Link 
                to="/products" 
                className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                  isActive('/products') 
                    ? 'bg-red-100 text-red-700 border-l-4 border-red-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-box-open mr-3 w-5 text-center"></i>
                Produtos
              </Link>
              <Link 
                to="/contact" 
                className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                  isActive('/contact') 
                    ? 'bg-red-100 text-red-700 border-l-4 border-red-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-envelope mr-3 w-5 text-center"></i>
                Contato
              </Link>
            </nav>

            {/* Mobile Contact Info */}
            <div className="mt-auto space-y-4 border-t pt-6">
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-phone-alt mr-3 text-red-600 w-5 text-center"></i>
                  <span>(11) 3789-3789</span>
                </div>
                <button 
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center text-green-600 font-medium w-full hover:text-green-700 transition-colors"
                >
                  <i className="fab fa-whatsapp mr-3 text-lg w-5 text-center"></i>
                  <span>(11) 5196-3789</span>
                </button>
              </div>
              
              <button 
                onClick={handleContactClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                <i className="fas fa-comments mr-2"></i>
                Fale Conosco
              </button>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}