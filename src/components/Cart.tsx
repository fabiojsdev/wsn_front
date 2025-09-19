import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useCart } from '@/context/CartContext';
// Configure o EmailJS com suas credenciais (substitua com suas próprias)
const EMAILJS_SERVICE_ID = 'seu_service_id';
const EMAILJS_TEMPLATE_ID = 'seu_template_id';
const EMAILJS_USER_ID = 'seu_user_id';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [customerData, setCustomerData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: 'Solicitação de Orçamento'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Preparar os dados para o template do EmailJS
      const templateParams = {
        to_email: 'seu-email@cliente.com', // Email do destinatário
        from_name: customerData.nome,
        from_email: customerData.email,
        from_phone: customerData.telefone,
        from_company: customerData.empresa,
        subject: customerData.assunto,
        message: `
          Nova solicitação de orçamento:
          
          Dados do Cliente:
          Nome: ${customerData.nome}
          Email: ${customerData.email}
          Telefone: ${customerData.telefone}
          Empresa: ${customerData.empresa}
          Assunto: ${customerData.assunto}
          
          Produtos Solicitados:
          ${cartItems.map(item => `
            - ${item.nome}
            Ref: ${item.ref}
            Quantidade: ${item.quantidade}
            Unidade: ${item.unidade}
          `).join('')}
          
          Total de itens: ${cartItems.reduce((total, item) => total + (item.quantidade || 1), 0)}
        `,
        products: cartItems.map(item =>
          `Produto: ${item.nome}, Ref: ${item.ref}, Quantidade: ${item.quantidade}, Unidade: ${item.unidade}`
        ).join('\n')
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      alert('Solicitação de orçamento enviada com sucesso! Entraremos em contato em breve.');
      clearCart();
      setCustomerData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        assunto: 'Solicitação de Orçamento'
      });

    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      alert('Erro ao enviar solicitação. Tente novamente ou entre em contato diretamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <i className="fas fa-clipboard-list text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Seu carrinho de cotações está vazio</h2>
            <p className="text-gray-600 mb-6">Adicione produtos para solicitar um orçamento</p>
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Ver Produtos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-blue-700 mb-8 text-center">Carrinho de Cotações</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lista de produtos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Produtos Selecionados</h2>
            {cartItems.map((item) => (
              <div key={item.ref} className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imagem || '/images/default.jpg'}
                    alt={item.nome}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">{item.nome}</h3>
                    <p className="text-sm text-gray-600">Ref: {item.ref}</p>
                    <p className="text-sm text-gray-600">{item.unidade}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.ref, (item.quantidade || 1) - 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantidade}</span>
                    <button
                      onClick={() => updateQuantity(item.ref, (item.quantidade || 1) + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.ref)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                    title="Remover produto"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total de itens:</span>
                <span className="font-bold text-blue-700">
                  {cartItems.reduce((total, item) => total + (item.quantidade || 1), 0)}
                </span>
              </div>

              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 transition-colors flex items-center"
              >
                <i className="fas fa-trash mr-2"></i>
                Limpar Carrinho
              </button>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Solicitar Orçamento</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  value={customerData.nome}
                  onChange={(e) => setCustomerData({ ...customerData, nome: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={customerData.email}
                  onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={customerData.telefone}
                  onChange={(e) => setCustomerData({ ...customerData, telefone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  value={customerData.empresa}
                  onChange={(e) => setCustomerData({ ...customerData, empresa: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  value={customerData.assunto}
                  onChange={(e) => setCustomerData({ ...customerData, assunto: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Solicitar Orçamento
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h3 className="font-semibold text-blue-800 mb-2">Como funciona?</h3>
              <p className="text-sm text-blue-700">
                Após enviar sua solicitação, nossa equipe entrará em contato em até 24 horas
                com o orçamento completo dos produtos selecionados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
