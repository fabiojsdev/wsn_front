import { useState } from "react";
import {
  FaEnvelope, FaPaperPlane,
  FaCheckCircle, FaMapMarkerAlt, FaClock, FaShieldAlt,
  FaTruck, FaHeadset
} from "react-icons/fa";

type ServiceCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm group hover:shadow-md transition-shadow duration-300">
    <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors duration-300">
      <Icon className="text-blue-600 text-lg" />
    </div>
    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  </div>
);

type ContactInfoProps = {
  icon: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
};

const ContactInfo = ({ icon: Icon, content }: ContactInfoProps) => (
  <div className="text-sm text-gray-600 flex items-start gap-3 mb-3">
    <Icon className="text-blue-500 mt-0.5 flex-shrink-0" />
    <span>{content}</span>
  </div>
);

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const quickLinks = [
    "Sobre nós", "Nossa história", "Política de privacidade", "Termos de uso"
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold">W</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">WSN Distribuidora</h3>
                <p className="text-gray-500 text-sm">Soluções desde 2006</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Especializada em descartáveis, EPIs e produtos de limpeza para empresas em todo Brasil.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contato</h3>
            <ContactInfo
              icon={FaMapMarkerAlt}
              content="Av. Baruel, 506 - Vila Baruel, São Paulo - SP"
            />
            <ContactInfo icon={FaEnvelope} content="contato@wsndistribuidora.com.br" />
            <ContactInfo
              icon={FaClock}
              content="Seg a Sex: 8h às 18h | Sáb: 8h às 12h"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Institucional</h3>
            <ul className="space-y-2">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-3">
              Receba nossas ofertas exclusivas
            </p>
            <form onSubmit={handleSubmit} className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 text-gray-800 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 mt-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <FaPaperPlane className="text-sm" />
                Inscrever
              </button>
            </form>
            {subscribed && (
              <div className="text-xs text-green-600 flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                <FaCheckCircle />
                Inscrição realizada com sucesso!
              </div>
            )}
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard icon={FaTruck} title="Entregas Rápidas" description="Para todo Brasil" />
          <ServiceCard icon={FaShieldAlt} title="Compra Segura" description="Seus dados protegidos" />
          <ServiceCard icon={FaHeadset} title="Atendimento" description="Seg a Sex: 8h às 18h" />
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>WSN Comércio e Distribuição - CNPJ: 11.699.331/0001-88</p>
            <p>© {new Date().getFullYear()} WSN Distribuidora. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>

      <a href="http://connectionstree.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
        <div className="text-center text-gray-400 text-xs py-3 bg-gray-50 border-t border-gray-200 hover:text-gray-600 transition-colors duration-200">
          Desenvolvido por Connectionstree
        </div>
      </a>
    </footer>
  );
}
