import { useState } from "react";
import {
  FaEnvelope,
  FaUser,
  FaAt,
  FaPhoneAlt,
  FaComment,
  FaInfoCircle,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaMapMarkedAlt,
  FaDirections,
  FaShareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Entre em Contato</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos à disposição para tirar suas dúvidas, ouvir sugestões e oferecer o melhor atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-slide-right">
            <h2 className="text-2xl font-semibold text-red-700 mb-6 flex items-center gap-2">
              <FaEnvelope /> Envie sua Mensagem
            </h2>

            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center gap-2 animate-pulse">
                <FaCheckCircle /> Mensagem enviada com sucesso! Retornaremos em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  icon={FaUser}
                  value={formData.name}
                  onChange={handleChange}
                  label="Nome Completo *"
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  icon={FaAt}
                  value={formData.email}
                  onChange={handleChange}
                  label="E-mail *"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  icon={FaPhoneAlt}
                  value={formData.phone}
                  onChange={handleChange}
                  label="Telefone/WhatsApp *"
                />
                <SelectField
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Selecione um assunto" },
                    { value: "orcamento", label: "Solicitar Orçamento" },
                    { value: "duvida", label: "Dúvida sobre Produtos" },
                    { value: "reclamacao", label: "Reclamação" },
                    { value: "sugestao", label: "Sugestão" },
                    { value: "outro", label: "Outro" },
                  ]}
                  label="Assunto *"
                  icon={FaChevronDown}
                />
              </div>

              <TextAreaField
                id="message"
                name="message"
                placeholder="Descreva sua mensagem aqui..."
                icon={FaComment}
                value={formData.message}
                onChange={handleChange}
                label="Mensagem *"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <ContactInfo />
        </div>

        {/* FAQ */}
        <FAQSection />
      </div>
    </div>
  );
}

// ----------------- Componentes Auxiliares -----------------

function InputField({ id, name, type, placeholder, icon: Icon, value, onChange, label }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 text-gray-400" />
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </div>
  );
}

function SelectField({ id, name, value, onChange, options, label, icon: Icon }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
        >
          {options.map((opt: any) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <Icon className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}

function TextAreaField({ id, name, placeholder, icon: Icon, value, onChange, label }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 text-gray-400" />
        <textarea
          id={id}
          name={name}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-8 animate-slide-left">
      {/* Informações principais */}
      <div className="bg-red-700 text-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaInfoCircle /> Informações de Contato
        </h2>
        <ContactItem icon={FaPhoneAlt} title="Telefone" value="(11) 3789-3789" />
        <ContactItem
          icon={FaWhatsapp}
          title="WhatsApp"
          value="(11) 5196-3789"
          link="https://wa.me/551151963789"
        />
        <ContactItem icon={FaEnvelope} title="E-mail" value="contato@wsn.com.br" />
        <ContactItem icon={FaClock} title="Horário" value="Seg-Sex: 8h às 18h | Sáb: 8h às 12h" />
      </div>

      {/* Localização */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <FaMapMarkerAlt /> Nossa Localização
        </h2>
        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <FaMapMarkedAlt className="text-3xl mb-2" />
            <p>Mapa de localização</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm flex items-center justify-center gap-1"
            >
              <FaDirections /> Como chegar
            </a>
          </div>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <FaShareAlt /> Siga-nos
        </h2>
        <p className="text-gray-600 mb-4">Acompanhe nossas novidades</p>
        <div className="flex space-x-4">
          <SocialLink icon={FaFacebookF} bg="bg-blue-600" />
          <SocialLink icon={FaInstagram} bg="bg-pink-600" />
          <SocialLink icon={FaLinkedinIn} bg="bg-blue-400" />
          <SocialLink icon={FaTiktok} bg="bg-gray-800" />
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, title, value, link }: any) {
  return (
    <div className="flex items-center mb-4">
      <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
        <Icon />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-sm text-white hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialLink({ icon: Icon, bg }: any) {
  return (
    <a
      href="#"
      className={`${bg} hover:${bg.replace("bg-", "bg-")}700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors`}
    >
      <Icon />
    </a>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Qual o prazo de entrega?",
      answer:
        "O prazo varia por região. Para São Paulo capital, 24-48h. Consulte outras localidades.",
    },
    {
      question: "Entregas para todo o Brasil?",
      answer: "Sim, via parceiros logísticos confiáveis.",
    },
    {
      question: "Valor mínimo para pedido?",
      answer: "R$ 150,00 para SP capital. Consulte condições especiais.",
    },
    {
      question: "Como solicitar orçamento?",
      answer: "Via formulário, telefone ou WhatsApp. Resposta em até 2h úteis.",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-semibold text-red-700 mb-8 text-center animate-fade-in">
        Perguntas Frequentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-red-700 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
