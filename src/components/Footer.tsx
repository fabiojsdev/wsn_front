import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaChevronRight, FaMapMarkerAlt, FaClock, FaShieldAlt, FaTruck, FaHeadset, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

type ServiceCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="flex items-center space-x-4 group">
    <div className="bg-blue-600 p-3 rounded-lg transform group-hover:scale-105 transition-transform duration-300">
      <Icon className="text-white text-xl" />
    </div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-blue-200 text-sm">{description}</p>
    </div>
  </div>
);

type ContactInfoProps = {
  icon: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
};

const ContactInfo = ({ icon: Icon, content }: ContactInfoProps) => (
  <p className="text-sm text-blue-200 flex items-start gap-3">
    <Icon className="text-blue-400 mt-1 flex-shrink-0" />
    <span>{content}</span>
  </p>
);

type QuickLinkProps = {
  text: string;
};

const QuickLink = ({ text }: QuickLinkProps) => (
  <li>
    <a href="#" className="text-sm text-blue-200 hover:text-white flex items-center gap-2 transition-colors duration-200">
      <FaChevronRight className="text-xs text-blue-400" />
      {text}
    </a>
  </li>
);

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Email enviado:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-blue-900 text-white font-sans">
      {/* Top Section */}
      <div className="bg-blue-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard icon={FaTruck} title="Entregas Rápidas" description="Para todo Brasil" />
            <ServiceCard icon={FaShieldAlt} title="Compra Segura" description="Seus dados protegidos" />
            <ServiceCard icon={FaHeadset} title="Atendimento" description="Seg a Sex: 8h às 18h" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and About */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold text-xl">W</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">WSN Distribuidora</h3>
                  <p className="text-blue-200 text-sm">Soluções completas desde 2006</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                Especializada em descartáveis, EPIs e produtos de limpeza para empresas, condomínios, restaurantes e comércios de todo Brasil.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebook, href: "#" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaLinkedin, href: "#" },
                ].map(({ icon: Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200 transform hover:scale-110"
                  >
                    <Icon className="text-white text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">Contato</h3>
              <div className="space-y-4">
                <ContactInfo
                  icon={FaMapMarkerAlt}
                  content={
                    <>
                      Av. Baruel, 506 - Vila Baruel
                      <br />
                      São Paulo - SP
                      <br />
                      CEP: 02522-000
                    </>
                  }
                />
                <ContactInfo icon={FaPhoneAlt} content="(11) 3789-3789" />
                <ContactInfo icon={FaWhatsapp} content="(11) 97384-6070" />
                <ContactInfo icon={FaEnvelope} content="contato@wsndistribuidora.com.br" />
                <ContactInfo
                  icon={FaClock}
                  content={
                    <>
                      Seg a Sex: 8h às 18h
                      <br />
                      Sáb: 8h às 12h
                    </>
                  }
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">Institucional</h3>
              <ul className="space-y-3">
                {[
                  "Sobre nós",
                  "Nossa história",
                  "Trabalhe conosco",
                  "Política de privacidade",
                  "Termos de uso",
                  "Trocas e devoluções",
                ].map((item, idx) => (
                  <QuickLink key={idx} text={item} />
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">Newsletter</h3>
              <p className="text-sm text-blue-200 mb-4">
                Cadastre-se e receba nossas ofertas exclusivas por e-mail
              </p>
              <div onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-2 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <FaPaperPlane className="text-sm" />
                  Inscrever
                </button>
              </div>
              {subscribed && (
                <div className="text-xs text-green-300 mt-3 flex items-center gap-2 bg-green-900/20 p-2 rounded-lg animate-fade-in">
                  <FaCheckCircle />
                  Inscrição realizada! Em breve você receberá nossas novidades.
                </div>
              )}
              <div className="mt-6 pt-4 border-t border-blue-700">
                <h4 className="text-sm font-semibold mb-3">Formas de Pagamento</h4>
                <div className="grid grid-cols-4 gap-2">
                  {["Pix", "Cartão", "Boleto", "Transferência"].map((method, idx) => (
                    <div key={idx} className="bg-blue-700 text-center text-xs py-1.5 rounded-lg shadow-sm">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200 text-sm">
            <p>WSN Comércio e Distribuição - CNPJ: 11.699.331/0001-88</p>
            <p>© {new Date().getFullYear()} WSN Distribuidora. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
      <a href="http://connectionstree.vercel.app/" target="_blank" rel="noopener noreferrer">
         <div className="text-center text-blue-300 text-xs py-4">
        Criado e Desenvolvido por Connectionstree
      </div>
      </a>
           
    </footer>
  );
}