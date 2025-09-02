import React, { useEffect, useState } from "react";

interface Product {
  ref: string;
  nome: string;
  preco: number;
  unidade: string;
  imagem?: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Lista dos números de imagens que realmente existem
  const availableImageNumbers = [
    ...Array.from({ length: 43 }, (_, i) => String(i + 1).padStart(2, "0")),
    ...Array.from({ length: 17 }, (_, i) => String(i + 48).padStart(2, "0")),
  ];

  useEffect(() => {
    fetch("/catalogo_produtos.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Erro na resposta: ${res.status}`);
        return res.json();
      })
      .then((data: Product[]) => {
        let imgIndex = 0;

        const updatedProducts = data.map((product) => {
          const imageNumber = availableImageNumbers[imgIndex];
          const imagem = imageNumber ? `/images/${imageNumber}.png` : "/images/default.jpg";

          imgIndex++; // avança para o próximo número de imagem
          return { ...product, imagem };
        });

        setProducts(updatedProducts);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
        setError("Falha ao carregar o catálogo de produtos.");
        setIsLoading(false);
      });
  });

  // Função para filtrar e ordenar produtos
  const filteredAndSortedProducts = products
    .filter(product => 
      product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.ref.includes(searchTerm)
    )
    .sort((a, b) => {
      switch(sortBy) {
        case "priceLow":
          return a.preco - b.preco;
        case "priceHigh":
          return b.preco - a.preco;
        case "name":
        default:
          return a.nome.localeCompare(b.nome);
      }
    });

  // Calcular produtos para a página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

  // Função para formatar preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (isLoading) return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Carregando catálogo de produtos...</p>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded text-center max-w-2xl mx-auto">
          <i className="fas fa-exclamation-triangle mr-2"></i>
          {error}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Cabeçalho e controles */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-blue-700 mb-2 text-center">Catálogo de Produtos</h1>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Descubra nossa linha completa de produtos de limpeza, higiene e descartáveis
          </p>
          
          {/* Barra de busca e filtros */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
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
              <i className="fas fa-search absolute right-3 top-3.5 text-gray-400"></i>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="name">Ordenar por nome</option>
                <option value="priceLow">Preço: menor para maior</option>
                <option value="priceHigh">Preço: maior para menor</option>
              </select>
            </div>
          </div>
          
          {/* Contador de resultados */}
          <p className="text-sm text-gray-600 mb-4">
            {filteredAndSortedProducts.length} produto(s) encontrado(s)
            {searchTerm && ` para "${searchTerm}"`}
          </p>
        </div>

        {/* Grid de produtos */}
        {currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {currentProducts.map((product) => (
                <div key={product.ref} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100">
                  <div className="h-48 bg-blue-50 flex items-center justify-center p-4 relative">
                    <img 
                      src={product.imagem} 
                      alt={product.nome}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = "/images/default.jpg";
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      Ref: {product.ref}
                    </span>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10" title={product.nome}>
                      {product.nome}
                    </h3>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <p className="text-lg font-bold text-blue-700">{formatPrice(product.preco)}</p>
                        <p className="text-xs text-gray-500">por {product.unidade}</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                        <i className="fas fa-shopping-cart text-sm"></i>
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
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded border border-gray-300 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 transition-colors"
                  >
                    <i className="fas fa-chevron-left text-xs"></i>
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 rounded border ${
                          currentPage === pageNum 
                            ? 'bg-blue-600 text-white border-blue-600' 
                            : 'border-gray-300 text-gray-600 hover:bg-blue-50'
                        } transition-colors`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded border border-gray-300 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 transition-colors"
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                  </button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-500 mb-4">Tente ajustar os termos de busca ou filtros</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setCurrentPage(1);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Precisa de ajuda para escolher os produtos?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para te ajudar a encontrar as melhores soluções para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors">
              <i className="fas fa-comments mr-2"></i>
              Falar com Consultor
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-medium px-6 py-3 rounded-lg transition-colors">
              <i className="fas fa-file-alt mr-2"></i>
              Solicitar Catálogo Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;