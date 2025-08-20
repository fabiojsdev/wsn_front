import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaChevronRight } from "react-icons/fa";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar o email para sua API
    console.log("Email enviado:", email);
    setEmail("");
  };

  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* WSN */}
          <div>
            <h3 className="text-lg font-semibold mb-4">WSN</h3>
            <p className="text-sm text-red-100">
              Há mais de 30 anos distribuindo qualidade e confiança para todo Brasil.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm text-red-100 flex items-center gap-2">
              <FaPhoneAlt /> (11) 3789-3789
            </p>
            <p className="text-sm text-red-100 flex items-center gap-2">
              <FaWhatsapp /> (11) 5196-3789
            </p>
            <p className="text-sm text-red-100 flex items-center gap-2">
              <FaEnvelope /> contato@wsn.com.br
            </p>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="text-sm text-red-100 space-y-2">
              {["Sobre nós", "Nossa história", "Trabalhe conosco", "Política de privacidade"].map((item, idx) => (
                <li key={idx} className="hover:text-white cursor-pointer flex items-center gap-1">
                  <FaChevronRight className="text-xs" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-red-100 mb-2">Receba nossas ofertas por e-mail</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="px-3 py-2 text-gray-800 text-sm rounded-l focus:outline-none flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium px-4 rounded-r flex items-center justify-center"
              >
                <FaPaperPlane />
              </button>
            </form>
            {email === "" && (
              <p className="text-xs text-green-300 mt-2 flex items-center gap-1">
                <FaCheckCircle /> Obrigado por se inscrever! Aguarde novidades.
              </p>
            )}
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-red-800 mt-8 pt-6 text-center text-sm text-red-200">
          <p>WSN Comércio e Distribuição - CNPJ: 11.699.331/0001-88</p>
          <p className="mt-2">© Todos os direitos reservados. {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
