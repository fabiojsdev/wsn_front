import { useState } from "react";
import {
  FaEnvelope,
  FaUser,
  FaAt,
  FaPhoneAlt,
  FaComment,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaMapMarkedAlt,
  FaDirections,
  FaShareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronDown,
  FaHeadset,
  FaBuilding,
  FaQuestionCircle
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        company: ""
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Entre em Contato</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Estamos à disposição para tirar suas dúvidas, ouvir sugestões e oferecer o melhor atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
              <FaEnvelope className="text-blue-600" /> Envie sua Mensagem
            </h2>

            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> 
                Mensagem enviada com sucesso! Retornaremos em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <FaAt className="absolute left-3 top-3 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <FaBuilding className="absolute left-3 top-3 text-gray-400" />
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Sua empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="duvida">Dúvida sobre Produtos</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Descreva sua mensagem aqui..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <FaPaperPlane /> Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Informações principais */}
            <div className="bg-blue-700 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaHeadset className="text-blue-300" /> Informações de Contato
              </h2>
              <div className="space-y-4">
                <div className="flex items-start p-3 rounded-lg transition-colors">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 bg-blue-600">
                    <FaPhoneAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Telefone</h3>
                    <p className="mt-1 text-blue-100">(11) 3789-3789</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5511973846070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-3 rounded-lg transition-colors hover:bg-blue-600/20"
                >
                  <div className="rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 bg-green-500">
                    <FaWhatsapp className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp</h3>
                    <p className="mt-1 text-blue-100">(11) 97384-6070</p>
                  </div>
                </a>
                <a
                  href="mailto:contato@wsndistribuidora.com.br"
                  className="flex items-start p-3 rounded-lg transition-colors hover:bg-blue-600/20"
                >
                  <div className="rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 bg-blue-600">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">E-mail</h3>
                    <p className="mt-1 text-blue-100">contato@wsndistribuidora.com.br</p>
                  </div>
                </a>
                <div className="flex items-start p-3 rounded-lg transition-colors">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 bg-blue-600">
                    <FaClock className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Horário de Atendimento</h3>
                    <p className="mt-1 text-blue-100">Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" /> Nossa Localização
              </h2>
              <div className="flex items-start p-3 rounded-lg transition-colors">
                <div className="rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 bg-blue-600">
                  <FaMapMarkedAlt className="text-white text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Endereço</h3>
                  <p className="mt-1 text-gray-600">Av. Baruel, 506 - Vila Baruel, São Paulo - SP, CEP: 02522-000</p>
                </div>
              </div>
              <div className="bg-blue-50 h-48 rounded-lg flex items-center justify-center mt-4 border border-blue-200">
                <div className="text-center text-blue-700">
                  <FaMapMarkerAlt className="text-3xl mb-2 mx-auto" />
                  <p className="text-sm mb-3">Mapa de localização</p>
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaDirections /> Como chegar
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
                <FaShareAlt className="text-blue-600" /> Siga-nos
              </h2>
              <p className="text-gray-600 mb-6">Acompanhe nossas novidades e promoções</p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-lg flex items-center justify-center transition-colors transform hover:-translate-y-1 shadow-md"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-pink-500 hover:bg-pink-600 text-white w-12 h-12 rounded-lg flex items-center justify-center transition-colors transform hover:-translate-y-1 shadow-md"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center transition-colors transform hover:-translate-y-1 shadow-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Confira as dúvidas mais comuns sobre nossos produtos e serviços
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Qual o prazo de entrega?",
                answer: "Para São Paulo capital: 24-48h. Demais regiões: consulte-nos para verificar prazos."
              },
              {
                question: "Entregam para todo o Brasil?",
                answer: "Sim, trabalhamos com parceiros logísticos para atender todo o território nacional."
              },
              {
                question: "Há valor mínimo para pedido?",
                answer: "Sim, R$ 150,00 para São Paulo capital. Para outras localidades, consulte condições."
              },
              {
                question: "Como solicitar orçamento?",
                answer: "Através do formulário, telefone ou WhatsApp. Retornamos em até 2 horas úteis."
              },
              {
                question: "Trabalham com quais formas de pagamento?",
                answer: "Cartão de crédito, débito, PIX, transferência bancária e boleto."
              },
              {
                question: "Oferecem descontos para grandes quantidades?",
                answer: "Sim, temos condições especiais para pedidos em grande volume. Consulte-nos."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-start gap-3">
                  <FaQuestionCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}