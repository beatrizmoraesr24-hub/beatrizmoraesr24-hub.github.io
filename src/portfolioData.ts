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
    description: "Consolido informações bancárias, atualizo relatórios gerenciais e acompanho pipelines para apoiar a gestão no Banco Bradesco.",
    stack: ["Controladoria", "Relatórios gerenciais", "Indicadores"],
    flow: ["Informações", "Análise", "Gestão"],
    href: "#experiencia",
    accent: "violet",
  },
  {
    title: "KPIs & análise de dados",
    eyebrow: "Indicadores de desempenho",
    description: "Acompanho indicadores, metas e resultados para apoiar a identificação de desvios e oportunidades de melhoria, com experiência nos setores bancário e hospitalar.",
    stack: ["KPIs", "Performance", "Gestão de metas"],
    flow: ["Dados", "Indicadores", "Decisão"],
    href: "#experiencia",
    accent: "cyan",
  },
  {
    title: "Projetos & melhoria contínua",
    eyebrow: "Setor hospitalar",
    description: "No Hospital Israelita Albert Einstein, participei dos projetos PROADI-SUS, Lean e FHEMIG, com apoio à análise de dados e à melhoria de processos.",
    stack: ["PROADI-SUS", "Lean", "FHEMIG"],
    flow: ["Processos", "Análise", "Melhoria"],
    href: "#experiencia",
    accent: "green",
  },

  {
    title: "Compliance & processos",
    eyebrow: "Gestão administrativa",
    description: "Como jovem aprendiz terceirizada na Prefeitura de São Paulo, apoiei a análise documental e a organização de processos administrativos, regulatórios e de compliance.",
    stack: ["Compliance", "Análise documental", "Processos"],
    flow: ["Documentos", "Controle", "Organização"],
    href: "#experiencia",
    accent: "amber",
  },

];

export const experience = [
  {
    company: "Banco Bradesco S.A.",
    role: "Estagiária de Controladoria | Gestão e Performance",
    period: "jun 2026 — atual",
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
