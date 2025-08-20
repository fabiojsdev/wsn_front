
export default function AboutUs() {
  

  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "Fundador & CEO",
      image: "/team-member1.jpg",
      description: "Com mais de 35 anos de experiência no setor de distribuição."
    },
    {
      name: "Ana Santos",
      role: "Diretora Comercial",
      image: "/team-member2.jpg",
      description: "Especialista em gestão de vendas e relacionamento com clientes."
    },
    {
      name: "Ricardo Oliveira",
      role: "Gerente de Operações",
      image: "/team-member3.jpg",
      description: "Responsável pela logística e eficiência operacional."
    },
    {
      name: "Mariana Costa",
      role: "Coordenadora de Qualidade",
      image: "/team-member4.jpg",
      description: "Garante a excelência em todos os produtos WSN."
    }
  ];

  const milestones = [
    { year: "1990", title: "Fundação da WSN", description: "Início das atividades como pequeno distribuidor na região de São Paulo." },
    { year: "1998", title: "Primeira Expansão", description: "Abertura do primeiro centro de distribuição próprio." },
    { year: "2005", title: "Nova Fábrica", description: "Inauguração da fábrica própria para produção de itens de limpeza." },
    { year: "2012", title: "Atendimento Nacional", description: "Expansão das operações para todo o território nacional." },
    { year: "2020", title: "Plataforma Digital", description: "Lançamento do e-commerce e transformação digital." },
    { year: "2023", title: "Sustentabilidade", description: "Implementação de linha de produtos biodegradáveis e eco-friendly." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 to-red-800 text-white py-16 text-center">
        <div className="absolute inset-0 opacity-10 bg-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a WSN</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Conheça nossa história, missão e a equipe que faz da WSN uma referência em distribuição há mais de 30 anos
          </p>
        </div>
      </div>

      {/* Mission and Values */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-red-700 mb-4">Nossa Missão</h2>
            <p className="text-gray-600 mb-6">
              Fornecer produtos de qualidade com preços competitivos e um atendimento diferenciado para nossos clientes, 
              contribuindo para o sucesso de seus negócios e para um mercado mais eficiente e sustentável.
            </p>
            
            <h2 className="text-3xl font-semibold text-red-700 mb-4">Nossa Visão</h2>
            <p className="text-gray-600 mb-6">
              Ser reconhecida como a distribuidora mais confiável e inovadora do Brasil, superando as expectativas 
              de clientes, colaboradores e parceiros através da excelência em nossos produtos e serviços.
            </p>
            
            <h2 className="text-3xl font-semibold text-red-700 mb-4">Nossos Valores</h2>
            <ul className="text-gray-600 list-disc pl-5 space-y-2">
              <li>Qualidade em todos os processos</li>
              <li>Compromisso com o cliente</li>
              <li>Inovação constante</li>
              <li>Responsabilidade socioambiental</li>
              <li>Integridade e transparência</li>
            </ul>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-red-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Por que escolher a WSN?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p>Mais de 30 anos de experiência no mercado</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p>Fábrica própria e controle de qualidade rigoroso</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p>Logística eficiente para todo o Brasil</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p>Compromisso com a sustentabilidade ambiental</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p>Equipe especializada e treinada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-red-700 mb-2 text-center">Nossa História</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Uma trajetória de crescimento, inovação e compromisso com a qualidade
          </p>
          
          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
            
            {/* Marcos */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-red-700">{milestone.year} - {milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-center">
                    <div className="w-6 h-6 rounded-full bg-red-600 border-4 border-white shadow"></div>
                  </div>
                  <div className="md:w-1/2 md:px-8">
                    {/* Espaço vazio para alternar os lados */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-red-700 mb-2 text-center">Nossa Equipe</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Profissionais dedicados e experientes que fazem a diferença
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-red-100 flex items-center justify-center">
                <i className="fas fa-user-circle text-red-300 text-6xl"></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-red-700">{member.name}</h3>
                <p className="text-red-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
                <div className="flex justify-center mt-4 space-x-3">
                  <a href="#" className="text-red-600 hover:text-red-800">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-800">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Compromisso com a Sustentabilidade</h2>
              <p className="mb-4">
                Na WSN, assumimos a responsabilidade de cuidar do meio ambiente através de práticas sustentáveis 
                em todos os nossos processos, desde a fabricação até a distribuição.
              </p>
              <p className="mb-6">
                Desenvolvemos uma linha especial de produtos biodegradáveis e investimos constantemente em 
                tecnologias que reduzem nosso impacto ambiental.
              </p>
              <button className="bg-white text-red-700 hover:bg-gray-100 font-medium px-6 py-2 rounded-lg">
                Conhecer Produtos Sustentáveis
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-red-600 p-4 rounded-lg text-center">
                <i className="fas fa-leaf text-3xl mb-2"></i>
                <h3 className="font-semibold">Produtos Biodegradáveis</h3>
                <p className="text-sm mt-1">Linha completa de itens eco-friendly</p>
              </div>
              <div className="bg-red-600 p-4 rounded-lg text-center">
                <i className="fas fa-recycle text-3xl mb-2"></i>
                <h3 className="font-semibold">Embalagens Sustentáveis</h3>
                <p className="text-sm mt-1">Materiais reciclados e recicláveis</p>
              </div>
              <div className="bg-red-600 p-4 rounded-lg text-center">
                <i className="fas fa-truck text-3xl mb-2"></i>
                <h3 className="font-semibold">Logística Eficiente</h3>
                <p className="text-sm mt-1">Rotas otimizadas para reduzir emissões</p>
              </div>
              <div className="bg-red-600 p-4 rounded-lg text-center">
                <i className="fas fa-industry text-3xl mb-2"></i>
                <h3 className="font-semibold">Produção Responsável</h3>
                <p className="text-sm mt-1">Controle de resíduos e consumo consciente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">Pronto para fazer parte da nossa história?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Entre em contato conosco e descubra como a WSN pode ajudar seu negócio a crescer com produtos de qualidade e um atendimento excepcional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
            Solicitar Orçamento
          </button>
          <button className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg text-lg font-medium">
            Falar com Consultor
          </button>
        </div>
      </section>     
    </div>
  );
}