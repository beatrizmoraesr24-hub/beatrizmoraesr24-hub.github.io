import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import {
  ArrowDownRight, ArrowUpRight, BadgeCheck, ChartNoAxesCombined, Download, Languages, Mail,
  Menu, Quote, ShieldCheck, Sparkles, X,
} from "lucide-react";
import avatar from "./assets/beatriz-avatar.png";
import { certifications, education, experience, projects, stack } from "./portfolioData";

const base = import.meta.env.BASE_URL;
const avatarModes = {
  bi: { label: "Power BI", detail: "indicadores e visão gerencial" },
  gestao: { label: "Gestão", detail: "metas, processos e performance" },
  dados: { label: "Dados", detail: "análise para apoiar decisões" },
} as const;

function SectionTitle({ children, description }: { children: ReactNode; description: string }) {
  return <div className="section-title"><h2>{children}</h2><p>{description}</p></div>;
}

function App() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const avatarFrameRef = useRef<number | null>(null);
  const avatarRectRef = useRef<DOMRect | null>(null);
  const [activeAvatarMode, setActiveAvatarMode] = useState<keyof typeof avatarModes>("bi");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  function prepareAvatarInteraction(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    avatarRectRef.current = avatarRef.current?.getBoundingClientRect() ?? null;
  }

  function handleAvatarMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const stage = avatarRef.current;
    const rect = avatarRectRef.current;
    if (!stage || !rect) return;
    const clientX = event.clientX;
    const clientY = event.clientY;
    if (avatarFrameRef.current !== null) cancelAnimationFrame(avatarFrameRef.current);
    avatarFrameRef.current = requestAnimationFrame(() => {
      const horizontal = (clientX - rect.left) / rect.width - 0.5;
      const vertical = (clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--avatar-rx", `${vertical * -7}deg`);
      stage.style.setProperty("--avatar-ry", `${horizontal * 10}deg`);
      stage.style.setProperty("--avatar-x", `${50 + horizontal * 32}%`);
      stage.style.setProperty("--avatar-y", `${42 + vertical * 28}%`);
      avatarFrameRef.current = null;
    });
  }

  function resetAvatarPosition() {
    const stage = avatarRef.current;
    if (!stage) return;
    if (avatarFrameRef.current !== null) cancelAnimationFrame(avatarFrameRef.current);
    avatarFrameRef.current = null;
    avatarRectRef.current = null;
    stage.style.setProperty("--avatar-rx", "0deg");
    stage.style.setProperty("--avatar-ry", "0deg");
    stage.style.setProperty("--avatar-x", "50%");
    stage.style.setProperty("--avatar-y", "42%");
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="header">
        <a className="wordmark" href="#inicio" aria-label="Ir ao início"><b>BM</b><span><strong>Beatriz Moraes</strong><small>Gestão & Controladoria</small></span></a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#atuacao">Atuação</a><a href="#experiencia">Experiência</a><a href="#formacao">Formação</a><a href="#stack">Competências</a>
        </nav>
        <a className="contact-pill" href="#contato">Contato</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <nav id="menu-mobile" className="mobile-menu" aria-label="Navegação móvel" onClick={(event) => event.stopPropagation()}>
            <p>Explorar portfólio</p>
            <a href="#atuacao" onClick={() => setMobileMenuOpen(false)}>Atuação <ArrowDownRight /></a>
            <a href="#experiencia" onClick={() => setMobileMenuOpen(false)}>Experiência <ArrowDownRight /></a>
            <a href="#formacao" onClick={() => setMobileMenuOpen(false)}>Formação <ArrowDownRight /></a>
            <a href="#stack" onClick={() => setMobileMenuOpen(false)}>Competências <ArrowDownRight /></a>
            <a className="mobile-menu-contact" href="#contato" onClick={() => setMobileMenuOpen(false)}>Vamos conversar <ArrowUpRight /></a>
          </nav>
        </div>
      )}

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="pixel-field" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, index) => <i key={index} />)}
          </div>
          <div className="hero-copy">
            <p className="availability"><span /> Controladoria & Gestão · São Paulo, Brasil</p>
            <h1>Transformo <span className="rotating-word"><ChartNoAxesCombined /> dados</span> em apoio à decisão.</h1>
            <p className="hero-description">
              Conecto <strong>Controladoria, análise de dados e gestão</strong> para acompanhar resultados, organizar informações e apoiar decisões no dia a dia do negócio.
            </p>
            <div className="hero-actions">
              <a className="button light" href="#atuacao">Conhecer minha atuação <ArrowDownRight /></a>
              <a className="button ghost" href={`${base}curriculo-beatriz-moraes.pdf`} target="_blank" rel="noreferrer">Baixar currículo <Download /></a>
            </div>
            <div className="hero-signals" aria-label="Destaques profissionais">
              <span><b>Atual</b> Banco Bradesco</span><span><b>Formação</b> Administração</span><span><b>Foco</b> Gestão e performance</span>
            </div>
          </div>
          <div
            className={`avatar-stage mode-${activeAvatarMode}`}
            ref={avatarRef}
            onPointerEnter={prepareAvatarInteraction}
            onPointerMove={handleAvatarMove}
            onPointerLeave={resetAvatarPosition}
            role="group"
            aria-label="Avatar interativo e áreas de atuação"
          >
            <div className="avatar-scene">
              <div className="avatar-halo" aria-hidden="true" />
              <div className="avatar-orbits">
                {(Object.keys(avatarModes) as Array<keyof typeof avatarModes>).map((mode) => (
                  <button
                    className={`orbit-label label-${mode}`}
                    type="button"
                    aria-pressed={activeAvatarMode === mode}
                    onClick={() => setActiveAvatarMode(mode)}
                    key={mode}
                  >
                    {avatarModes[mode].label}
                  </button>
                ))}
              </div>
              <div className="avatar-light" aria-hidden="true" />
              <img src={avatar} alt="Avatar 3D de Beatriz Moraes em traje profissional" width="928" height="1728" decoding="async" fetchPriority="high" draggable="false" />
              <p className="avatar-status" aria-live="polite"><span>{avatarModes[activeAvatarMode].label}</span>{avatarModes[activeAvatarMode].detail}</p>
            </div>
          </div>
          <a className="scroll-hint" href="#atuacao">Explore <ArrowDownRight /></a>
        </section>

        <section className="proof-strip" aria-label="Forma de atuação">
          <p>Como conecto dados e gestão</p>
          <div><span>Análise de indicadores</span><span>Relatórios gerenciais</span><span>Controle de processos</span><span>Melhoria contínua</span></div>
        </section>

        <section className="projects-section" id="atuacao">
          <SectionTitle description="Frentes de trabalho presentes na minha experiência em Controladoria, gestão administrativa e análise de dados.">Dados, processos e gestão na prática.</SectionTitle>
          <div className="projects-grid">
            {projects.map((project) => (
              <a className={`project-card ${project.accent}`} href={project.href} aria-label={`Conhecer experiência em ${project.title}`} key={project.title}>
                <div className="project-visual">
                  <div className="window-bar"><span /><span /><span /></div>
                  <div className="project-system"><small>{project.eyebrow}</small><b>{project.title}</b><div className="system-flow">{project.flow.map((step) => <span key={step}>{step}</span>)}</div><span className="project-status">Frente de atuação</span></div>
                </div>
                <div className="project-copy"><p>{project.eyebrow}</p><h3>{project.title}</h3><span>{project.description}</span><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><strong className="project-link">Ver experiência <ArrowUpRight /></strong></div>
                <ArrowUpRight className="project-arrow" />
              </a>
            ))}
          </div>
        </section>

        <section className="expertise-section">
          <SectionTitle description="Organização, leitura de indicadores e atenção aos processos para apoiar a gestão.">Visão analítica, atenção ao negócio.</SectionTitle>
          <div className="expertise-grid">
            <article><ShieldCheck /><h3>Controladoria & gestão</h3><p>Consolidação de informações, relatórios gerenciais e acompanhamento de metas para dar suporte à gestão.</p></article>
            <article><ChartNoAxesCombined /><h3>Dados & indicadores</h3><p>Análise de KPIs e indicadores de performance para identificar desvios e oportunidades de melhoria.</p></article>
            <article><Sparkles /><h3>Processos & compliance</h3><p>Organização de processos administrativos, análise documental e formação contínua em riscos e governança.</p></article>
          </div>
        </section>

        <section className="education-section" id="formacao">
          <SectionTitle description="Administração, assessoria jurídica e estudos complementares em dados, riscos e compliance.">Formação que conecta gestão e análise.</SectionTitle>
          <div className="education-grid">
            {education.map((item) => <article key={item.course}><p>{item.period}</p><h3>{item.course}</h3><strong>{item.institution}</strong></article>)}
            <article className="education-note"><p>Formação complementar</p><h3>Dados, riscos e compliance</h3><strong>FIAP · FGV · B3 · Fundação Bradesco</strong></article>
          </div>
          <div className="credentials-panel">
            <blockquote>
              <Quote aria-hidden="true" />
              <p>Um olhar analítico para organizar informações e apoiar decisões.</p>
              <cite>Beatriz Moraes · Controladoria, Planejamento e Estratégia</cite>
              <a href="https://www.linkedin.com/in/beatriz-moraerod/" target="_blank" rel="noreferrer">Conhecer meu perfil <ArrowUpRight /></a>
            </blockquote>
            <div className="credentials-list" aria-label="Certificações e idiomas">
              {certifications.map((item) => <article key={item.title}><BadgeCheck aria-hidden="true" /><div><strong>{item.title}</strong><span>{item.institution}</span></div></article>)}
              <article><Languages aria-hidden="true" /><div><strong>Idiomas</strong><span>Inglês e espanhol intermediários · Francês básico · CEL</span></div></article>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experiencia">
          <SectionTitle description="Experiência nos setores bancário, hospitalar e administrativo, com foco em informações, indicadores e processos.">Experiência em diferentes contextos de gestão.</SectionTitle>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.company}><div className="timeline-company"><span>{item.period}</span><strong>{item.company}</strong></div><div className="timeline-detail"><h3>{item.role}</h3><p>{item.summary}</p></div></article>
            ))}
          </div>
        </section>

        <section className="stack-section" id="stack">
          <SectionTitle description="Conhecimentos que conectam análise, organização e acompanhamento de resultados.">Competências para apoiar a gestão.</SectionTitle>
          <div className="stack-cloud">{stack.concat(stack).map((item, index) => <span aria-hidden={index >= stack.length} key={`${item}-${index}`}>{item}</span>)}</div>
        </section>

        <section className="contact-section" id="contato">
          <div><h2>Vamos falar sobre <em>dados e gestão?</em></h2><p className="contact-support">Oportunidades em Controladoria, Planejamento e Estratégia começam com uma conversa.</p></div>
          <a className="contact-cta" href="mailto:beatrizmoraesr24@gmail.com">Iniciar conversa <ArrowUpRight /></a>
        </section>
      </main>

      <footer>
        <p>© 2026 Beatriz Moraes. Gestão, dados e novos caminhos.</p>
        <div><a href="https://github.com/beatrizmoraesr24-hub" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/beatriz-moraerod/" target="_blank" rel="noreferrer">LinkedIn</a><a className="footer-mail" href="mailto:beatrizmoraesr24@gmail.com" aria-label="Enviar e-mail para Beatriz Moraes"><Mail /></a></div>
      </footer>
    </div>
  );
}

export default App;
