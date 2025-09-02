export default function AboutUs() {
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "Fundador & CEO",
      image: "/team-member1.jpg",
      description:
        "Com mais de 15 anos de experiência no setor de distribuição.",
    },
    {
      name: "Ana Santos",
      role: "Diretora Comercial",
      image: "/team-member2.jpg",
      description:
        "Especialista em gestão de vendas e relacionamento com clientes.",
    },
    {
      name: "Ricardo Oliveira",
      role: "Gerente de Operações",
      image: "/team-member3.jpg",
      description: "Responsável pela logística e eficiência operacional.",
    },
    {
      name: "Mariana Costa",
      role: "Coordenadora de Qualidade",
      image: "/team-member4.jpg",
      description: "Garante a excelência em todos os produtos WSN.",
    },
  ];

  const milestones = [
    {
      year: "2006",
      title: "Fundação da WSN",
      description:
        "Início das atividades focadas em descartáveis, EPIs e produtos de limpeza.",
    },
    {
      year: "2010",
      title: "Primeira Expansão",
      description: "Ampliação do portfólio de produtos e carteira de clientes.",
    },
    {
      year: "2015",
      title: "Consolidação no Mercado",
      description:
        "Estabelecimento como referência no setor de distribuição.",
    },
    {
      year: "2018",
      title: "Atendimento Regional Ampliado",
      description: "Expansão das operações para toda a região Sudeste.",
    },
    {
      year: "2020",
      title: "Plataforma Digital",
      description: "Lançamento do e-commerce e transformação digital.",
    },
    {
      year: "2023",
      title: "Sustentabilidade",
      description:
        "Implementação de linha de produtos biodegradáveis e eco-friendly.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 text-center">
        <div className="absolute inset-0 opacity-10 bg-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a WSN</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Seja bem-vindo à WSN Distribuidora, onde qualidade, atendimento e
            eficiência caminham lado a lado para entregar as melhores soluções
            para o seu negócio.
          </p>
        </div>
      </div>

      {/* Mission and Values */}
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

            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Nossos Valores
            </h2>
            <ul className="text-gray-600 list-disc pl-5 space-y-2">
              <li>Qualidade em todos os processos</li>
              <li>Compromisso com o cliente</li>
              <li>Inovação constante</li>
              <li>Responsabilidade socioambiental</li>
              <li>Integridade e transparência</li>
            </ul>
          </div>

          <div className="lg:w-1/3 bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Nossa Localização
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-blue-700"></i>
                </div>
                <p>Av Baruel, 506 - Vila Baruel<br />São Paulo - SP<br />CEP: 02522-000</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-phone text-blue-700"></i>
                </div>
                <p>Tel: (11) 97384-6070</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-envelope text-blue-700"></i>
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
                  <i className="fas fa-check text-blue-700 text-xs"></i>
                </div>
                <p>Mais de {new Date().getFullYear() - 2006} anos de experiência no mercado</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <i className="fas fa-check text-blue-700 text-xs"></i>
                </div>
                <p>Controle de qualidade rigoroso</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <i className="fas fa-check text-blue-700 text-xs"></i>
                </div>
                <p>Logística eficiente para todo o Brasil</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <i className="fas fa-check text-blue-700 text-xs"></i>
                </div>
                <p>Compromisso com a sustentabilidade ambiental</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <i className="fas fa-check text-blue-700 text-xs"></i>
                </div>
                <p>Equipe especializada e treinada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
            Nossa Trajetória
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Uma história de crescimento, inovação e compromisso com a qualidade
          </p>

          <div className="relative">
            {/* Linha vertical para desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>
            
            {/* Marcos */}
            <div className="space-y-4 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center mb-8 md:mb-12"
                >
                  {/* Para desktop: alternar lados */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-last'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-blue-700">
                        {milestone.year} - {milestone.title}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Ponto central na linha do tempo */}
                  <div className="flex items-center justify-center my-4 md:my-0 md:w-4 md:mx-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow flex-shrink-0"></div>
                  </div>
                  
                  {/* Espaço vazio para alternar os lados */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    {/* Ano visível apenas no mobile */}
                    <div className="md:hidden text-center mt-2">
                      <span className="text-blue-700 font-bold">{milestone.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
          Nossa Equipe
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Profissionais dedicados e experientes que fazem a diferença
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <i className="fas fa-user-circle text-blue-300 text-6xl"></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-700">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
                <div className="flex justify-center mt-4 space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
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
                <i className="fas fa-leaf text-3xl mb-2"></i>
                <h3 className="font-semibold">Produtos Biodegradáveis</h3>
                <p className="text-sm mt-1">
                  Linha completa de itens eco-friendly
                </p>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg text-center">
                <i className="fas fa-recycle text-3xl mb-2"></i>
                <h3 className="font-semibold">Embalagens Sustentáveis</h3>
                <p className="text-sm mt-1">
                  Materiais reciclados e recicláveis
                </p>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg text-center">
                <i className="fas fa-truck text-3xl mb-2"></i>
                <h3 className="font-semibold">Logística Eficiente</h3>
                <p className="text-sm mt-1">
                  Rotas otimizadas para reduzir emissões
                </p>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg text-center">
                <i className="fas fa-industry text-3xl mb-2"></i>
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