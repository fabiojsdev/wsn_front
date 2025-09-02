import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaChevronRight, FaMapMarkerAlt, FaClock, FaShieldAlt } from "react-icons/fa";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar o email para sua API
    console.log("Email enviado:", email);
    setSubscribed(true);
    setEmail("");
    
    // Resetar mensagem de sucesso após 5 segundos
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-blue-900 text-white">
      {/* Seção superior */}
      <div className="bg-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-blue-700 p-3 rounded-full mr-3">
                <FaTruck className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">Entregas Rápidas</h4>
                <p className="text-blue-100 text-sm">Para todo Brasil</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-blue-700 p-3 rounded-full mr-3">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">Compra Segura</h4>
                <p className="text-blue-100 text-sm">Seus dados protegidos</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-blue-700 p-3 rounded-full mr-3">
                <FaHeadset className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">Atendimento</h4>
                <p className="text-blue-100 text-sm">Seg a Sex: 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal do footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo e sobre */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold">W</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">WSN Distribuidora</h3>
                  <p className="text-blue-200 text-sm">Soluções completas desde 2006</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Especializada em descartáveis, EPIs e produtos de limpeza para empresas, 
                condomínios, restaurantes e comércios de todo Brasil.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                  <FaFacebook className="text-white" />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                  <FaLinkedin className="text-white" />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">Contato</h3>
              <div className="space-y-3">
                <p className="text-sm text-blue-100 flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Av. Baruel, 506 - Vila Baruel<br />São Paulo - SP<br />CEP: 02522-000</span>
                </p>
                <p className="text-sm text-blue-100 flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-400" />
                  <span>(11) 3789-3789</span>
                </p>
                <p className="text-sm text-blue-100 flex items-center gap-3">
                  <FaWhatsapp className="text-blue-400" />
                  <span>(11) 97384-6070</span>
                </p>
                <p className="text-sm text-blue-100 flex items-center gap-3">
                  <FaEnvelope className="text-blue-400" />
                  <span>contato@wsndistribuidora.com.br</span>
                </p>
                <p className="text-sm text-blue-100 flex items-center gap-3">
                  <FaClock className="text-blue-400" />
                  <span>Seg a Sex: 8h às 18h<br />Sáb: 8h às 12h</span>
                </p>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">Institucional</h3>
              <ul className="space-y-2">
                {[
                  "Sobre nós", 
                  "Nossa história", 
                  "Trabalhe conosco", 
                  "Política de privacidade",
                  "Termos de uso",
                  "Trocas e devoluções"
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-2">
                      <FaChevronRight className="text-xs text-blue-400" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">Newsletter</h3>
              <p className="text-sm text-blue-100 mb-4">
                Cadastre-se e receba nossas ofertas exclusivas por e-mail
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-2 text-gray-800 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <FaPaperPlane className="text-sm" />
                  Inscrever
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-green-300 mt-3 flex items-center gap-2 bg-green-900/30 p-2 rounded">
                  <FaCheckCircle />
                  Inscrição realizada! Em breve você receberá nossas novidades.
                </p>
              )}
              <div className="mt-6 pt-4 border-t border-blue-700">
                <h4 className="text-sm font-semibold mb-2">Formas de Pagamento</h4>
                <div className="grid grid-cols-4 gap-1">
                  {["Pix", "Cartão", "Boleto", "Transferência"].map((method, idx) => (
                    <div key={idx} className="bg-blue-800 text-center text-xs py-1 rounded">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="bg-blue-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              WSN Comércio e Distribuição - CNPJ: 11.699.331/0001-88
            </p>
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} WSN Distribuidora. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Adicione esses ícones no import se necessário
import { FaTruck, FaHeadset, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";