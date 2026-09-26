export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  flow: string[];
  href: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Controladoria & performance",
    eyebrow: "Setor bancário",
    description: "Análise e consolidação de informações bancárias, elaboração de relatórios gerenciais e acompanhamento de indicadores para apoiar a gestão no Banco Bradesco.",
    stack: ["Controladoria", "Relatórios gerenciais", "Indicadores"],
    flow: ["Informações", "Análise", "Gestão"],
    href: "#experiencia",
    accent: "violet",
  },
  {
    title: "KPIs & análise de dados",
    eyebrow: "Indicadores de desempenho",
    description: "Monitoramento de indicadores, metas e resultados, com identificação de desvios e oportunidades de melhoria nos contextos bancário e hospitalar.",
    stack: ["KPIs", "Performance", "Gestão de metas"],
    flow: ["Dados", "Indicadores", "Decisão"],
    href: "#experiencia",
    accent: "cyan",
  },
  {
    title: "Projetos & melhoria contínua",
    eyebrow: "Setor hospitalar",
    description: "Participação em projetos estratégicos no Hospital Israelita Albert Einstein, incluindo PROADI-SUS, Lean e FHEMIG, com apoio à otimização de processos.",
    stack: ["PROADI-SUS", "Lean", "FHEMIG"],
    flow: ["Processos", "Análise", "Melhoria"],
    href: "#experiencia",
    accent: "green",
  },
  {
    title: "Relatórios & pipelines",
    eyebrow: "Suporte à gestão",
    description: "Atualização de relatórios gerenciais e acompanhamento de pipelines para organizar informações, dar visibilidade ao andamento das atividades e apoiar decisões.",
    stack: ["Relatórios", "Pipelines", "Organização"],
    flow: ["Consolidação", "Relatórios", "Gestão"],
    href: "#experiencia",
    accent: "blue",
  },
  {
    title: "Compliance & processos",
    eyebrow: "Gestão administrativa",
    description: "Suporte em compliance e análise documental, organização e controle de processos administrativos e regulatórios na Prefeitura de São Paulo, como jovem aprendiz terceirizada.",
    stack: ["Compliance", "Análise documental", "Processos"],
    flow: ["Documentos", "Controle", "Organização"],
    href: "#experiencia",
    accent: "amber",
  },
  {
    title: "Empreendedorismo",
    eyebrow: "Atuação complementar",
    description: "Atuação complementar como maquiadora profissional, conciliando o empreendedorismo com a formação em Administração e a trajetória em gestão e Controladoria.",
    stack: ["Empreendedorismo", "Maquiagem profissional", "Administração"],
    flow: ["Planejamento", "Atendimento", "Serviço"],
    href: "#contato",
    accent: "rose",
  },
];

export const experience = [
  {
    company: "Banco Bradesco S.A.",
    role: "Estagiária de Controladoria | Gestão e Performance",
    period: "jun 2025 — atual",
    summary: "Análise e consolidação de informações bancárias, elaboração e atualização de relatórios gerenciais, monitoramento de indicadores, metas e resultados. Acompanhamento de pipelines para dar suporte à gestão e identificar oportunidades de melhoria.",
  },
  {
    company: "Hospital Israelita Albert Einstein",
    role: "Estágio Administrativo",
    period: "out 2025 — jun 2026",
    summary: "Análise e monitoramento de KPIs, consolidação e tratamento de dados para análise gerencial e suporte à tomada de decisão. Participação nos projetos PROADI-SUS, Lean e FHEMIG, com apoio à otimização de processos e melhoria contínua.",
  },
  {
    company: "Prefeitura de São Paulo · Tecnologia",
    role: "Jovem Aprendiz (terceirizada)",
    period: "jun 2025 — out 2025",
    summary: "Suporte em processos de compliance e análise documental. Organização e controle de processos administrativos e regulatórios.",
  },
];

export const stack = [
  "Controladoria", "Análise de dados", "Power BI", "Excel", "KPIs",
  "Relatórios gerenciais", "Gestão de metas", "Pipelines", "Compliance",
  "Melhoria contínua", "Indicadores de performance", "Pacote Office",
];

export const education = [
  { institution: "Universidade São Judas Tadeu", course: "Administração de Empresas", period: "2025 — 2028 · em andamento" },
  { institution: "ETEC · Centro Paula Souza", course: "Técnico em Assessoria Jurídica", period: "2023 — 2024" },
];

export const certifications = [
  { title: "Power BI", institution: "FIAP" },
  { title: "Evolução Histórica do Compliance", institution: "FGV" },
  { title: "Gestão de Riscos Corporativos", institution: "UFSCar" },
  { title: "Proteção de Dados", institution: "PUC" },
  { title: "Compliance e Governança Corporativa", institution: "Universidade São Judas Tadeu" },
  { title: "Ética e Compliance", institution: "ANBIMA" },
  { title: "Risco corporativo e controles internos", institution: "B3" },
  { title: "PLD/FTP", institution: "B3" },
  { title: "ESG", institution: "B3" },
  { title: "Compliance Week", institution: "LEC" },
  { title: "A Responsabilização Administrativa na Lei Anticorrupção", institution: "ENAP" },
  { title: "Pacote Office", institution: "Fundação Bradesco" },
];
