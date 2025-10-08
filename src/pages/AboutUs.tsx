// src/pages/AboutUs.tsx
import { MapPin, Phone, Mail, Check, Leaf, Recycle, Truck, Factory } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Nossa história
            </h2>
            <p className="text-gray-600 mb-6">
              A WSN Distribuidora nasceu em 2006 com um propósito claro:
              oferecer soluções completas em descartáveis, Epi's e Produtos de
              Limpeza que facilitem o dia a dia de empresas, condomínios,
              restaurantes e comércios. Desde o início, nosso compromisso sempre
              foi ir além da simples venda de produtos. Nós acreditamos que cada
              cliente merece um atendimento personalizado, agilidade nas
              entregas e um portfólio de itens que atendam às necessidades reais
              do mercado.
            </p>

            <p className="text-gray-600 mb-6">
              Com {new Date().getFullYear() - 2006} anos de experiência no setor, construímos parcerias sólidas
              com fornecedores renomados, garantindo qualidade, segurança e
              preços competitivos. Nosso objetivo é ser mais do que um
              distribuidor: queremos ser um parceiro estratégico para quem busca
              manter ambientes organizados, seguros e higienizados.
            </p>

            <p className="text-gray-600 mb-6">
              Hoje, a WSN Distribuidora se orgulha de atender uma ampla gama de
              clientes, sempre com o mesmo cuidado e dedicação que nos fizeram
              crescer. Nossa história é movida por confiança, inovação e
              compromisso, porque acreditamos que um bom relacionamento com
              nossos clientes é a base para um futuro sustentável e de grande
              sucesso.
            </p>

            <p className="text-gray-600 mb-10">
              Seja bem-vindo à WSN Distribuidora, onde qualidade, atendimento e
              eficiência caminham lado a lado para entregar as melhores soluções
              para o seu negócio.
            </p>

            {/* ==== Missão, Visão e Valores (substitui a seção antiga) ==== */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-blue-700 mb-3">Missão</h2>
                <p className="text-gray-600">
                  Distribuir e comercializar nossos produtos com eficiência, rapidez e confiabilidade,
                  de modo a satisfazer as necessidades de nossos clientes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-blue-700 mb-3">Visão</h2>
                <p className="text-gray-600">
                  Ser referencial de excelência na venda de produtos e na prestação de serviços
                  com crescimento acima dos níveis de mercado.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-blue-700 mb-4">Valores</h2>
                <ul className="text-gray-600 list-disc pl-5 space-y-2">
                  <li>Agilidade</li>
                  <li>Comprometimento</li>
                  <li>Ética</li>
                  <li>Respeito</li>
                  <li>Transparência</li>
                  <li>Trabalho em equipe</li>
                </ul>
              </div>
            </div>
            {/* ==== fim Missão/Visão/Valores ==== */}
          </div>

          <div className="lg:w-1/3 bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Nossa Localização
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin className="text-blue-700 w-4 h-4" />
                </div>
                <p>Av Baruel, 506 - Vila Baruel<br />São Paulo - SP<br />CEP: 02522-000</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="text-blue-700 w-4 h-4" />
                </div>
                <p>Tel: (11) 97384-6070</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail className="text-blue-700 w-4 h-4" />
                </div>
                <p>contato@wsndistribuidora.com.br</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-blue-800 mt-6 mb-4">
              Por que escolher a WSN?
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <Check className="text-blue-700 w-3 h-3" />
                </div>
                <p>Mais de {new Date().getFullYear() - 2006} anos de experiência no mercado</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <Check className="text-blue-700 w-3 h-3" />
                </div>
                <p>Controle de qualidade rigoroso</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <Check className="text-blue-700 w-3 h-3" />
                </div>
                <p>Logística eficiente para todo o Brasil</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <Check className="text-blue-700 w-3 h-3" />
                </div>
                <p>Compromisso com a sustentabilidade ambiental</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <Check className="text-blue-700 w-3 h-3" />
                </div>
                <p>Equipe especializada e treinada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">
                Compromisso com a Sustentabilidade
              </h2>
              <p className="mb-4">
                Na WSN, assumimos a responsabilidade de cuidar do meio ambiente
                através de práticas sustentáveis em todos os nossos processos,
                desde a fabricação até a distribuição.
              </p>
              <p className="mb-6">
                Desenvolvemos uma linha especial de produtos biodegradáveis e
                investimos constantemente em tecnologias que reduzem nosso
                impacto ambiental.
              </p>
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-6 py-2 rounded-lg">
                Conhecer Produtos Sustentáveis
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-blue-600 p-4 rounded-lg text-center">
                <Leaf className="mx-auto text-3xl mb-2" />
                <h3 className="font-semibold">Produtos Biodegradáveis</h3>
                <p className="text-sm mt-1">
                  Linha completa de itens eco-friendly
                </p>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg text-center">
                <Recycle className="mx-auto text-3xl mb-2" />
                <h3 className="font-semibold">Embalagens Sustentáveis</h3>
                <p className="text-sm mt-1">
                  Materiais reciclados e recicláveis
                </p>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg text-center">
                <Truck className="mx-auto text-3xl mb-2" />
                <h3 className="font-semibold">Logística Eficiente</h3>
                <p className="text-sm mt-1">
                  Rotas otimizadas para reduzir emissões
                </p>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg text-center">
                <Factory className="mx-auto text-3xl mb-2" />
                <h3 className="font-semibold">Produção Responsável</h3>
                <p className="text-sm mt-1">
                  Controle de resíduos e consumo consciente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Pronto para fazer parte da nossa história?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Entre em contato conosco e descubra como a WSN pode ajudar seu negócio
          a crescer com produtos de qualidade e um atendimento excepcional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
            Solicitar Orçamento
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-medium">
            Falar com Consultor
          </button>
        </div>
      </section>
    </div>
  );
}
