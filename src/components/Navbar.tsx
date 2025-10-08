// src/components/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, ChevronDown, Search, Phone, Sparkles } from "lucide-react";
import wsnLogo from "../assets/WSN_LOGO (1).png";
import { useCart } from "../context/CartContext";

type Coords = { left: number; top: number; width: number };

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dropdown (desktop)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isProductsLocked, setIsProductsLocked] = useState(false);
  const [menuCoords, setMenuCoords] = useState<Coords | null>(null);
  const overButtonRef = useRef(false);
  const overMenuRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);

  const [query, setQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const productsBtnRef = useRef<HTMLButtonElement | null>(null);
  const isActive = (path: string) => location.pathname === path;

  /** ------------------ AUTO-HIDE (header esconde ao descer e volta ao subir) ------------------ */
  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastYRef.current;

      // aparência scrolled
      setIsScrolled(y > 10);

      // não esconder se menu ou dropdown abertos
      if (isMenuOpen || isProductsDropdownOpen) {
        setIsHidden(false);
        lastYRef.current = y;
        return;
      }

      // perto do topo: sempre visível
      if (y < 80) {
        setIsHidden(false);
      } else {
        // threshold para evitar flicker
        const goingDown = delta > 5;
        const goingUp = delta < -5;
        if (goingDown) setIsHidden(true);
        else if (goingUp) setIsHidden(false);
      }

      lastYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen, isProductsDropdownOpen]);
  /** ------------------------------------------------------------------------------------------- */

  // posiciona dropdown
  const positionMenu = () => {
    const btn = productsBtnRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    setMenuCoords({
      left: r.left,
      top: r.bottom + 4,
      width: Math.max(320, r.width),
    });
  };

  const openProducts = () => {
    if (!isProductsDropdownOpen) setIsProductsDropdownOpen(true);
    positionMenu();
  };
  const hardCloseProducts = () => {
    setIsProductsLocked(false);
    setIsProductsDropdownOpen(false);
  };
  const scheduleSoftClose = () => {
    if (isProductsLocked) return;
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      if (!overButtonRef.current && !overMenuRef.current) {
        setIsProductsDropdownOpen(false);
      }
    }, 200);
  };
  const cancelCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  // resize/esc
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
      if (isProductsDropdownOpen) positionMenu();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        hardCloseProducts();
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", onKey);
    };
  }, [isProductsDropdownOpen]);

  // clique fora fecha dropdown
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isProductsDropdownOpen) return;
      const target = e.target as Node;
      if (productsBtnRef.current && productsBtnRef.current.contains(target)) return;
      const menu = document.getElementById("products-dropdown-menu");
      if (menu && menu.contains(target)) return;
      hardCloseProducts();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isProductsDropdownOpen]);

  // busca
  const submitSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("search", query.trim());
    navigate(`/products${params.toString() ? `?${params.toString()}` : ""}`);
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate("/cart");
    setIsMenuOpen(false);
  };

  // categorias do dropdown
  const productCategories = [
    { id: "limpeza", name: "Limpeza e Higiene", icon: "🧼" },
    { id: "descartaveis", name: "Descartáveis", icon: "🍽️" },
    { id: "epis", name: "EPIs", icon: "🧤" },
    { id: "embalagens", name: "Embalagens", icon: "📦" },
    { id: "uniformes", name: "Uniformes", icon: "👕" },
    { id: "papeis", name: "Papéis", icon: "🧻" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"} will-change-transform`}
    >
      {/* Barra principal */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-1">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="inline-flex items-center group"
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  src={wsnLogo}
                  alt="WSN Logo"
                  className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:rotate-1"
                />
              </Link>
            </div>

            {/* Busca desktop */}
            <form
              onSubmit={submitSearch}
              className="hidden lg:flex flex-1 items-center max-w-2xl mx-8"
            >
              <div className="relative w-full">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar produtos..."
                  className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-blue-50 transition-colors"
                  aria-label="Buscar"
                >
                  <Search className="h-5 w-5 text-gray-500 hover:text-blue-600" />
                </button>
              </div>
            </form>

            {/* Contato + Carrinho (desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/551140705300"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors group"
              >
              </a>

              <button
                onClick={handleCartClick}
                className="relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:shadow-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="uppercase tracking-wide text-sm">Carrinho</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 h-6 w-6 text-xs leading-6 text-white bg-red-500 rounded-full text-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>

            {/* Ações mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={handleCartClick}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Abrir carrinho"
              >
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 text-xs leading-5 text-white bg-red-500 rounded-full text-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
              </button>
            </div>
          </div>

          {/* Busca mobile */}
          <form onSubmit={submitSearch} className="lg:hidden pb-3">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Buscar"
              >
                <Search className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Faixa com botão do dropdown */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                isActive("/") ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-white hover:text-blue-700"
              }`}
            >
              Início
            </Link>
            <Link
              to="/aboutus"
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                isActive("/aboutus") ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-white hover:text-blue-700"
              }`}
            >
              Nossa História
            </Link>

            {/* Dropdown produtos (desktop) */}
            <div className="relative hidden lg:block">
              <button
                ref={productsBtnRef}
                type="button"
                onClick={() => {
                  if (isProductsDropdownOpen && isProductsLocked) hardCloseProducts();
                  else {
                    setIsProductsLocked(true);
                    openProducts();
                  }
                }}
                onMouseEnter={() => {
                  overButtonRef.current = true;
                  openProducts();
                  cancelCloseTimer();
                }}
                onMouseLeave={() => {
                  overButtonRef.current = false;
                  scheduleSoftClose();
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2 whitespace-nowrap ${
                  isProductsDropdownOpen ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-white hover:text-blue-700"
                }`}
              >
                <Sparkles className="h-4 w-4" />
                Produtos
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isProductsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Produtos mobile - link direto */}
            <Link
              to="/products"
              className={`lg:hidden px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2 whitespace-nowrap ${
                isActive("/products") ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-white hover:text-blue-700"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              Produtos
            </Link>

            <div className="ml-auto flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden md:inline-block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:text-blue-700 whitespace-nowrap"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown fixo (desktop) */}
      {isProductsDropdownOpen && menuCoords && (
        <div
          id="products-dropdown-menu"
          className="fixed z-50 bg-white rounded-xl shadow-xl border border-gray-200/80 overflow-hidden"
          style={{ left: menuCoords.left, top: menuCoords.top, width: menuCoords.width }}
          onMouseEnter={() => {
            overMenuRef.current = true;
            cancelCloseTimer();
          }}
          onMouseLeave={() => {
            overMenuRef.current = false;
            scheduleSoftClose();
          }}
        >
          <div className="p-3 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900 text-sm">Categorias de Produtos</h3>
          </div>
          <div className="p-2 grid gap-1">
            <Link
              to="/products"
              onClick={hardCloseProducts}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-50 text-gray-700"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium text-sm">Todos os Produtos</div>
                <div className="text-xs text-gray-500">Veja a linha completa</div>
              </div>
            </Link>

            {productCategories.map((c) => (
              <Link
                key={c.id}
                to={`/products?category=${c.id}`}
                onClick={hardCloseProducts}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700"
              >
                <span className="text-lg">{c.icon}</span>
                <span className="font-medium text-sm">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* MENU MOBILE REFEITO (permanece funcional; header não se esconde enquanto estiver aberto) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu */}
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <img src={wsnLogo} alt="WSN Logo" className="h-10 w-auto" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                    isActive("/") ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  🏠 Início
                </Link>

                <Link
                  to="/aboutus"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                    isActive("/aboutus") ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  📖 Nossa História
                </Link>

                <div className="mt-4">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Produtos
                  </div>
                  <div className="mt-2 space-y-1">
                    <Link
                      to="/products"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                        isActive("/products") ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      <Sparkles className="h-4 w-4 inline-block mr-2" />
                      Todos os Produtos
                    </Link>
                    {productCategories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/products?category=${category.id}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <span className="inline-block mr-2">{category.icon}</span>
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                    isActive("/contact") ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  📞 Contato
                </Link>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <a
                  href="https://wa.me/551140705300"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-green-700 hover:bg-green-50 mb-2"
                >
                  <Phone className="h-5 w-5 text-green-600" />
                  (11) 4070-5300 (WhatsApp)
                </a>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleCartClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Carrinho {getTotalItems() > 0 && `(${getTotalItems()})`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
