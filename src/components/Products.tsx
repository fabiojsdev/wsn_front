// src/pages/Products.tsx
import React, { useEffect, useState } from "react";
import { useCart } from "@/context";
import {
  ShoppingCart,
  Search,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  MessageCircle,
  FileText,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface Product {
  ref: string;
  nome: string;
  unidade: string;
  imagem?: string;
  categoria: string;
}

const AVAILABLE_IMAGE_NUMBERS = [
  ...Array.from({ length: 43 }, (_, i) => String(i + 1).padStart(2, "0")),
  ...Array.from({ length: 17 }, (_, i) => String(i + 48).padStart(2, "0")),
];

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const productsPerPage = 12;

  const { addToCart } = useCart();

  // Categorias para filtro (em sincronia com a Navbar)
  const categories = [
    { id: "todos", name: "Todos os Produtos" },
    { id: "limpeza", name: "Limpeza e Higiene" },
    { id: "descartaveis", name: "Descartáveis" },
    { id: "epis", name: "EPIs" },
    { id: "embalagens", name: "Embalagens" },
    { id: "uniformes", name: "Uniformes" },
    { id: "papeis", name: "Papéis" },
  ];

  useEffect(() => {
    // Lê categoria e busca da URL
    const categoryParam = searchParams.get("category");
    if (categoryParam) setSelectedCategory(categoryParam);

    const searchParam = searchParams.get("search");
    if (typeof searchParam === "string") {
      setSearchTerm(searchParam);
      setCurrentPage(1);
    }

    // Carrega os produtos do JSON
    fetch("/catalogo_produtos.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Erro na resposta: ${res.status}`);
        return res.json();
      })
      .then((data: Product[]) => {
        let imgIndex = 0;

        const updatedProducts = data.map((product) => {
          const imageNumber = AVAILABLE_IMAGE_NUMBERS[imgIndex];
          const imagem = imageNumber
            ? `/images/${imageNumber}.png`
            : "/images/default.jpg";
          imgIndex = (imgIndex + 1) % AVAILABLE_IMAGE_NUMBERS.length;

          // ===== Classificação de categoria =====
          // Ordem: Exceções → EPIs → Uniformes → Papéis → Embalagens → Descartáveis → Limpeza (padrão)
          let categoria: Product["categoria"] = "limpeza";
          const nomeLower = product.nome.toLowerCase();

          // -------- EXCEÇÕES ESPECÍFICAS ----------
          // "papel alumínio" deve ser Embalagens (mesmo contendo "papel")
          const isPapelAluminio =
            (nomeLower.includes("papel") || nomeLower.includes("papél")) &&
            (nomeLower.includes("alumínio") || nomeLower.includes("aluminio"));

          // -------- EPIs ----------
          if (
            nomeLower.includes("luva") ||
            nomeLower.includes("máscara") ||
            nomeLower.includes("mascara") ||
            nomeLower.includes("respirador") ||
            nomeLower.includes("protetor") ||
            nomeLower.includes("protetor facial") ||
            nomeLower.includes("face shield") ||
            nomeLower.includes("touca") ||
            nomeLower.includes("avental") || // avental sempre EPI
            (nomeLower.includes("epi") && !nomeLower.includes("jaleco"))
          ) {
            categoria = "epis";
          }
          // -------- Uniformes ----------
          else if (
            nomeLower.includes("uniforme") ||
            nomeLower.includes("jaleco") ||
            nomeLower.includes("jalecos") ||
            nomeLower.includes("calça") ||
            nomeLower.includes("calca") ||
            nomeLower.includes("camisa") ||
            nomeLower.includes("dólmã") ||
            nomeLower.includes("dolma") ||
            nomeLower.includes("bata")
          ) {
            categoria = "uniformes";
          }
          // -------- Papéis ----------
          else if (
            !isPapelAluminio && // evita classificar "papel alumínio" em Papéis
            (
              nomeLower.includes("papel") ||
              nomeLower.includes("papéis") ||
              nomeLower.includes("papeis") ||
              nomeLower.includes("toalha") ||
              nomeLower.includes("guardanapo") ||
              nomeLower.includes("higiênico") ||
              nomeLower.includes("higienico") ||
              nomeLower.includes("interfolha") ||
              (nomeLower.includes("bobina") && // bobina de papel
                (nomeLower.includes("papel") || nomeLower.includes("toalha")))
            )
          ) {
            categoria = "papeis";
          }
          // -------- Embalagens ----------
          else if (
            isPapelAluminio ||
            nomeLower.includes("saco de lixo") ||
            (nomeLower.includes("saco") && nomeLower.includes("lixo")) ||
            nomeLower.includes("bandeja") ||
            nomeLower.includes("embalagem") ||
            nomeLower.includes("embalagens") ||
            nomeLower.includes("filme pvc") ||
            (nomeLower.includes("bobina") && !nomeLower.includes("papel")) // bobina plástica
          ) {
            categoria = "embalagens";
          }
          // -------- Descartáveis ----------
          else if (
            nomeLower.includes("descartável") ||
            nomeLower.includes("descartavel") ||
            nomeLower.includes("descartáveis") ||
            nomeLower.includes("copo") ||
            nomeLower.includes("copos") ||
            nomeLower.includes("prato") ||
            nomeLower.includes("pratos") ||
            nomeLower.includes("talher") ||
            nomeLower.includes("talheres") ||
            nomeLower.includes("mexedor") ||
            nomeLower.includes("palito") ||
            nomeLower.includes("manga de confeitar") ||
            (nomeLower.includes("pano") && !nomeLower.includes("rolo 600")) // panos comuns como descartáveis
          ) {
            categoria = "descartaveis";
          }
          // -------- Limpeza e Higiene (padrão + termos comuns) ----------
          else if (
            nomeLower.includes("limpeza") ||
            nomeLower.includes("detergente") ||
            nomeLower.includes("desinfetante") ||
            nomeLower.includes("desincrustante") ||
            nomeLower.includes("cloro") ||
            nomeLower.includes("sapólio") ||
            nomeLower.includes("sapolio") ||
            nomeLower.includes("lustra móveis") ||
            nomeLower.includes("lustra moveis") ||
            nomeLower.includes("multiuso") ||
            nomeLower.includes("limpador") ||
            nomeLower.includes("removedor") ||
            nomeLower.includes("odorizador") ||
            nomeLower.includes("pedra sanit") ||
            nomeLower.includes("freeco") ||
            nomeLower.includes("inseticida") ||
            nomeLower.includes("esponja") ||
            nomeLower.includes("fibra") ||
            nomeLower.includes("fibrac") ||
            nomeLower.includes("borrifador") ||
            nomeLower.includes("escova") ||
            nomeLower.includes("rodo") ||
            nomeLower.includes("vassoura") ||
            nomeLower.includes("sabão") ||
            nomeLower.includes("sabao") ||
            nomeLower.includes("sabonete")
          ) {
            categoria = "limpeza";
          } else {
            // fallback: limpeza
            categoria = "limpeza";
          }

          return { ...product, imagem, categoria };
        });

        setProducts(updatedProducts);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
        setError("Falha ao carregar o catálogo de produtos.");
        setIsLoading(false);
      });
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);

    if (category === "todos") {
      setSearchParams({});
    } else {
      // preserva busca ativa na URL, se houver
      const params = new URLSearchParams(searchParams);
      params.set("category", category);
      setSearchParams(params);
    }
  };

  const filteredAndSortedProducts = products
    .filter((product) => {
      const matchesSearch =
        product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.ref.includes(searchTerm);

      const matchesCategory =
        selectedCategory === "todos" || product.categoria === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.nome.localeCompare(b.nome);
        default:
          return 0;
      }
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / productsPerPage
  );

  if (isLoading)
    return (
      <div className="min-h-screen bg-blue-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Carregando catálogo de produtos...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-blue-50 py-12 flex items-center justify-center">
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded text-center max-w-2xl mx-auto flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          {error}
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
            Catálogo de Produtos
          </h1>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Descubra nossa linha completa de produtos de limpeza, higiene e descartáveis
          </p>

        {/* Filtros */}
          <div className="flex flex-col gap-4 mb-6">
            {/* Filtro de Categorias */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Buscar produtos por nome ou referência..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Ordenar por nome</option>
                </select>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            {filteredAndSortedProducts.length} produto(s) encontrado(s)
            {searchTerm && ` para "${searchTerm}"`}
            {selectedCategory !== "todos" &&
              ` na categoria "${
                categories.find((c) => c.id === selectedCategory)?.name
              }"`}
          </p>
        </div>

        {/* Lista de Produtos */}
        {currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {currentProducts.map((product) => (
                <div
                  key={product.ref}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100"
                >
                  <div className="h-48 bg-blue-50 flex items-center justify-center p-4 relative">
                    <img
                      src={product.imagem}
                      alt={product.nome}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/default.jpg";
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      Ref: {product.ref}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3
                      className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10"
                      title={product.nome}
                    >
                      {product.nome}
                    </h3>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.unidade}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {categories.find((c) => c.id === product.categoria)?.name}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                        title="Adicionar à cotação"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded border border-gray-300 text-gray-600 disabled:opacity-50 hover:bg-blue-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) pageNum = i + 1;
                    else if (currentPage <= 3) pageNum = i + 1;
                    else if (currentPage >= totalPages - 2)
                      pageNum = totalPages - 4 + i;
                    else pageNum = currentPage - 2 + i;

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 rounded border ${
                          currentPage === pageNum
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 text-gray-600 hover:bg-blue-50"
                        } transition-colors`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded border border-gray-300 text-gray-600 disabled:opacity-50 hover:bg-blue-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Search className="w-12 h-12 text-gray-300 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-500 mb-4">
              Tente ajustar os termos de busca ou selecione outra categoria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("todos");
                setSearchParams({});
                setCurrentPage(1);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="bg-blue-700 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Precisa de ajuda para escolher os produtos?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para te ajudar a encontrar as melhores soluções para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Consultor
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
              <FileText className="w-5 h-5 mr-2" />
              Solicitar Catálogo Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
