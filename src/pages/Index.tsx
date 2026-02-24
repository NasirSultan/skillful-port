import { useEffect, useRef, useState, useCallback } from "react";
import {
  Mail, Phone, MapPin, Linkedin, ExternalLink,
  Code2, Server, Brain, Cloud, ChevronDown,
  Briefcase, Building2, Menu, X, ArrowUp
} from "lucide-react";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

const SKILLS = {
  "Front-End": ["TypeScript", "React.js", "Next.js", "Tailwind CSS", "DSA"],
  "Back-End & Databases": ["Node.js", "Express.js", "Nest.js", "REST API", "JWT", "OAuth2", "MySQL", "PostgreSQL", "MongoDB", "FastAPI"],
  "AI & Automation": ["LangChain", "LangGraph", "RAG", "Pinecone", "Prompt Engineering", "Generative AI", "Agentic AI"],
  "DevOps & Deployment": ["AWS EC2/S3", "DigitalOcean", "Render", "GitHub Actions", "CI/CD", "Docker"],
};

const SKILL_ICONS: Record<string, React.ReactNode> = {
  "Front-End": <Code2 className="w-6 h-6" />,
  "Back-End & Databases": <Server className="w-6 h-6" />,
  "AI & Automation": <Brain className="w-6 h-6" />,
  "DevOps & Deployment": <Cloud className="w-6 h-6" />,
};

const PROJECTS = [
  {
    title: "AI-Powered Automated SEO Optimization",
    tech: "LangGraph | Django | Flask | Pinecone | LLM",
    points: [
      "Developed a fully autonomous SEO engine using AI agents, trend analysis, and vector storage to analyze content, generate optimized tags, and inject them into GitHub-hosted projects automatically.",
      "Implemented scalable microservices architecture with asynchronous services and API orchestration for weekly trend-based SEO updates with auto-commit and push via GitHub.",
    ],
  },
  {
    title: "Conference App & Live Streaming",
    tech: "Nest.js | PostgreSQL | RESTful API | AWS | Next.js | GPT-LLM",
    points: [
      "Built a role-based admin panel for organizers to manage sessions, speakers, sponsors, participants, and live streaming with QR check-ins and modular architecture.",
      "Implemented real-time announcements, push notifications, live streaming management, and networking features with connection requests.",
    ],
  },
  {
    title: "OKR Navigator – AI-Powered Game",
    tech: "Nest.js | PostgreSQL | Prompt Engineering | LangChain.js | WebSocket",
    points: [
      "Developed GPT-4 powered engine to automatically generate Objectives and Key Results, evaluate initiatives, calculate weighted relevance scores, and deliver gamified certification.",
      "Enabled real-time scoring, feedback, tracking, and team chat to boost strategy and collaboration.",
    ],
  },
];

const EXPERIENCES = [
  {
    company: "ShoutlyAI",
    role: "Backend AI Automation Lead",
    period: "Oct 2025 – Present",
    location: "Remote",
    points: [
      "Co-founded and led the full technical setup, maintenance, and issue resolution across all system components.",
      "Developed AI-powered automation tools to streamline workflows and improve efficiency.",
    ],
  },
  {
    company: "Eaglines",
    role: "AI Backend Developer",
    period: "Jul 2025 – Present",
    location: "Lahore, Pakistan | Onsite",
    points: [
      "Developed backend systems using generative and agentic AI with LangChain.js and LangGraph.js.",
      "Built RAG systems for advanced information retrieval.",
      "Designed backend architecture and data relationships for efficient database management.",
      "Collaborated closely with UI designers and frontend developers for smooth API integration.",
    ],
  },
  {
    company: "Dev-master",
    role: "AI Full Stack Engineer",
    period: "Jan 2025 – Jul 2025",
    location: "Karnataka, India | Remote",
    points: [
      "Integrated AI models into web applications for enhanced functionality.",
      "Deployed projects on Vercel and other hosting platforms, managing files via Imgbb.",
      "Optimized backend systems and managed databases using MongoDB and Express.js.",
    ],
  },
  {
    company: "Rhombix Technologies",
    role: "Full Stack Engineer",
    period: "Oct 2024 – Dec 2024",
    location: "Lahore, Pakistan | Onsite",
    points: [
      "Developed backend systems using Node.js and MongoDB for efficient data management.",
      "Built frontend interfaces with React.js and Tailwind CSS.",
      "Managed file systems, integrated APIs, and optimized application performance.",
    ],
  },
];

const STATS = [
  { value: "3+", label: "International Projects" },
  { value: "92%", label: "AI Accuracy Achieved" },
  { value: "60%", label: "Manual Effort Reduced" },
  { value: "1K+", label: "Concurrent Users Handled" },
];

// ─── Hooks ───

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((child) =>
        observer.observe(child)
      );
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

// ─── Components ───

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const active = EXPERIENCES[activeIndex];

  const handleSwitch = useCallback((i: number) => {
    setActiveIndex(i);
    setAnimKey((k) => k + 1);
  }, []);

  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Work Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            My Career <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Driven by a pursuit of innovation, growth, and a culture that inspires excellence.
          </p>
        </div>

        <div className="reveal flex flex-col md:flex-row gap-6" style={{ transitionDelay: "0.2s" }}>
          {/* Left: Company tabs */}
          <div className="md:w-60 shrink-0 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
            {EXPERIENCES.map((exp, i) => (
              <button
                key={i}
                onClick={() => handleSwitch(i)}
                className={`relative text-left px-5 py-4 rounded-xl border transition-all duration-300 whitespace-nowrap md:whitespace-normal shrink-0 group ${
                  activeIndex === i
                    ? "bg-primary/10 border-primary/40 text-foreground shimmer"
                    : "bg-card border-border text-muted-foreground hover:border-primary/20 hover:text-foreground hover:bg-card/80"
                }`}
              >
                {activeIndex === i && (
                  <span className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-primary hidden md:block" />
                )}
                <span className="font-display font-semibold text-sm">{exp.company}</span>
                <p className={`text-xs mt-1 hidden md:block transition-colors ${activeIndex === i ? "text-primary" : "text-muted-foreground group-hover:text-muted-foreground"}`}>
                  {exp.role}
                </p>
                <p className="text-[10px] mt-0.5 hidden md:block text-muted-foreground/60">{exp.period}</p>
              </button>
            ))}
          </div>

          {/* Right: Details panel */}
          <div className="flex-1 bg-card rounded-xl p-6 md:p-8 border border-border min-h-[320px] relative overflow-hidden">
            <div key={animKey} className="tab-content-enter">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{active.company}</h3>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <Briefcase className="w-3.5 h-3.5" />
                    {active.role}
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {active.period} · {active.location}
              </p>
              <ul className="space-y-4">
                {active.points.map((p, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-3 items-start">
                    <span className="text-primary shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary block" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Main ───

const Index = () => {
  const containerRef = useScrollReveal();
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-bold text-gradient">SS</a>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`nav-link text-sm transition-colors duration-300 ${
                  activeSection === l.toLowerCase() ? "active text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity hidden sm:block">
              Hire Me
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-foreground">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border animate-fade-in">
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground text-center mt-2">
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 30% 40%, hsl(36 60% 50% / 0.15) 0%, transparent 60%), radial-gradient(circle at 70% 70%, hsl(20 40% 30% / 0.1) 0%, transparent 50%)"
        }} />
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-primary/5 animate-float hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full border border-primary/5 animate-float hidden lg:block" style={{ animationDelay: "2s" }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="animate-fade-up text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">Backend AI Developer</p>
          <h1 className="animate-fade-up delay-100 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            Sultan <span className="text-gradient">Sir Raina</span>
          </h1>
          <p className="animate-fade-up delay-200 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            1.5+ years building AI-driven backend solutions. Deployed 3 international-level projects on AWS & DigitalOcean. Currently leading teams & architecting scalable systems.
          </p>
          <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4 mb-14">
            <a href="mailto:rainasirsultan123@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> rainasirsultan123@gmail.com
            </a>
            <span className="text-border hidden sm:block">|</span>
            <a href="tel:+923411731277" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +92 341 1731277
            </a>
            <span className="text-border hidden sm:block">|</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> Lahore, Pakistan
            </span>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto mb-12">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-2xl font-bold text-gradient">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <a href="#about" className="animate-fade-up delay-500 inline-block">
            <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">About Me</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Building the Future with <span className="text-gradient">AI & Backend</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left – intro text */}
            <div className="md:col-span-3 reveal-left">
              <div className="bg-card rounded-xl p-8 border border-border animate-glow">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                  Backend AI Developer at <span className="text-foreground font-medium">Eaglines</span> with over 1.5 years of experience specializing in backend and AI-driven solutions. Successfully completed and deployed three international-level projects on <span className="text-foreground font-medium">AWS EC2</span> and <span className="text-foreground font-medium">DigitalOcean</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                  Currently serving as team leader, managing technical documentation, collaborating with UI/UX designers, and defining seamless backend logic and system design approaches for scalable, high-performance applications.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["AI & LLMs", "System Design", "Team Leadership", "Cloud Deployment"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right – highlight cards */}
            <div className="md:col-span-2 flex flex-col gap-4">
              {[
                { icon: <Briefcase className="w-5 h-5" />, title: "1.5+ Years", desc: "Professional Experience" },
                { icon: <Brain className="w-5 h-5" />, title: "AI-First Approach", desc: "RAG, LangChain, Agentic AI" },
                { icon: <Cloud className="w-5 h-5" />, title: "Cloud Native", desc: "AWS EC2/S3 & DigitalOcean" },
                { icon: <Code2 className="w-5 h-5" />, title: "Full Stack", desc: "Backend-heavy, frontend-ready" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="reveal-right card-hover bg-card rounded-xl p-5 border border-border flex items-center gap-4"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Experience */}
      <ExperienceSection />

      <div className="section-divider" />

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Projects</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} card-hover bg-card rounded-xl p-6 border border-border flex flex-col`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="text-primary/70 text-xs font-mono mb-4 bg-primary/5 inline-block px-2 py-1 rounded">{project.tech}</p>
                <ul className="space-y-3 flex-1">
                  {project.points.map((p, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary block" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Skills</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, skills], i) => (
              <div
                key={category}
                className="reveal-scale bg-card rounded-xl p-6 border border-border card-hover"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">{SKILL_ICONS[category]}</div>
                  <h3 className="font-display text-lg font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border hover:text-primary hover:border-primary/30 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground mb-10">I'm always open to discussing new projects and opportunities.</p>
          </div>
          <div className="reveal-scale grid sm:grid-cols-3 gap-4" style={{ transitionDelay: "0.2s" }}>
            <a href="mailto:rainasirsultan123@gmail.com" className="contact-glow card-hover bg-card rounded-xl p-8 border border-border flex flex-col items-center gap-3 hover:border-primary/40 transition-all">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-foreground">Email</span>
              <span className="text-xs text-muted-foreground">Drop me a line</span>
            </a>
            <a href="tel:+923411731277" className="contact-glow card-hover bg-card rounded-xl p-8 border border-border flex flex-col items-center gap-3 hover:border-primary/40 transition-all">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-foreground">Phone</span>
              <span className="text-xs text-muted-foreground">Let's talk</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-glow card-hover bg-card rounded-xl p-8 border border-border flex flex-col items-center gap-3 hover:border-primary/40 transition-all">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-foreground">LinkedIn</span>
              <span className="text-xs text-muted-foreground">Connect with me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">© 2025 Sultan Sir Raina. All rights reserved.</p>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-90 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Index;
