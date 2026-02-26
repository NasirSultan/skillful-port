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
  "company": "ShoutlyAI",
  "role": "Backend AI Automation Lead",
  "period": "Oct 2025 – Present",
  "location": "Remote",
  "points": [
    "Co-founded and led the full technical setup, maintenance, and issue resolution across all system components.",
      "Developed backend AI-powered automation tools to streamline workflows and improve efficiency.",
    "Collaborated with UI/UX designers to ensure prototypes and user flows match documentation.",
    "Worked closely with the frontend team to cross-check reports and ensure alignment with Figma designs and backend requirements.",
    "Verified layout, responsiveness, and performance of features to meet quality standards."
  ]
},
{
  "company": "Eaglines",
  "role": "AI Backend Developer",
  "period": "Jul 2025 – Present",
  "location": "Lahore, Pakistan | Onsite",
  "points": [
    "Developed backend systems using generative and agentic AI with LangChain.js and LangGraph.js.",
    "Built RAG systems for advanced information retrieval.",
    "Designed backend architecture and data relationships for efficient database management.",
    "Collaborated closely with UI designers and frontend developers for smooth API integration.",
    "Analyzed client requirements to develop backend solutions and generate comprehensive reports.",
      "Deployed backend systems and configured minor/redundant servers for stability and scalability."
  ]
},
{
  "company": "Dev-master",
  "role": "AI Full Stack Engineer",
  "period": "Jan 2025 – Jul 2025",
  "location": "Karnataka, India | Remote",
  "points": [
    "Built full-stack web applications integrating both frontend and backend components.",
    "Integrated AI models and developed a generative AI chatbot for interactive user experiences.",
    "Deployed projects on Vercel and other hosting platforms, managing assets via Imgbb.",
    "Optimized backend systems and managed databases using MongoDB and Express.js.",
    "Assisted in writing API endpoints, testing functionality, and fixing bugs across the full stack."
  ]
},
{
  "company": "Rhombix Technologies",
  "role": "Full Stack Engineer",
  "period": "Oct 2024 – Dec 2024",
  "location": "Lahore, Pakistan | Onsite internship",
  "points": [
    "Developed backend systems using Node.js and MongoDB for efficient data management.",
    "Built frontend interfaces with React.js and Tailwind CSS.",
    "Managed file systems, integrated APIs, and optimized application performance.",
    "Assisted in writing basic frontend components and linking them with backend endpoints.",
    "Helped debug and test code to ensure proper functionality.",
    "Learned and applied version control using Git for collaborative development."
  ]
},
];

const STATS = [
  { value: "5+", label: "International Projects" },
  { value: "96%", label: "AI Automation Accuracy" },
  { value: "90%", label: "Client Satisfaction Rate" },
  { value: "100%", label: "Future-Ready Solutions" },
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
         <div className="w-full md:w-60 flex flex-col gap-2 overflow-visible pb-2">
  {EXPERIENCES.map((exp, i) => (
    <button
      key={i}
      onClick={() => handleSwitch(i)}
      className={`relative text-left px-5 py-4 rounded-xl border transition-all duration-300 whitespace-normal shrink-0 group ${
        activeIndex === i
          ? "bg-primary/10 border-primary/40 text-foreground shimmer"
          : "bg-card border-border text-muted-foreground hover:border-primary/20 hover:text-foreground hover:bg-card/80"
      }`}
    >
      {activeIndex === i && (
        <span className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-primary hidden md:block" />
      )}
      <span className="font-display font-semibold text-sm">{exp.company}</span>
      <p
        className={`text-xs mt-1 hidden md:block transition-colors ${
          activeIndex === i
            ? "text-primary"
            : "text-muted-foreground group-hover:text-muted-foreground"
        }`}
      >
        {exp.role}
      </p>
      <p className="text-[10px] mt-0.5 hidden md:block text-muted-foreground/60">
        {exp.period}
      </p>
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
useEffect(() => {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const handleScroll = () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 50) {
        el.classList.add('revealed');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-bold text-gradient">NS</a>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`nav-link text-sm transition-colors duration-300 ${activeSection === l.toLowerCase() ? "active text-primary" : "text-muted-foreground hover:text-foreground"
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
            Nasir <span className="text-gradient">Sultan</span>
          </h1>
          <p className="animate-fade-up delay-200 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            AI-powered backend and automation | Full Stack (FastAPI & Node.js) | AI with LangChain.js | RAG & Prompt Engineering | Generative and agentic AI applications
          </p>
          <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4 mb-14">
            <a href="mailto:rainasirsultan123@gmail.com" className="flex  items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> rainasirsultan123@gmail.com
            </a>
            <span className="text-border hidden sm:block">|</span>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex  items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4 " /> LinkedIn
            </a>
            <span className="text-border hidden sm:block">|</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> Lahore, Pakistan
            </span>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up delay-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto mb-12">
            {STATS.map((s, i) => {
              const [count, setCount] = useState(0);

              useEffect(() => {
                let start = 0;
                const end = parseInt(s.value.replace("+", "").replace("%", ""));
                const duration = 3000;
                const stepTime = Math.abs(Math.floor(duration / end));

                const timer = setInterval(() => {
                  start += 1;
                  setCount(start);
                  if (start >= end) clearInterval(timer);
                }, stepTime);

                return () => clearInterval(timer);
              }, [s.value]);

              return (
                <div key={i} className="text-center mt-2">
                  <p className="font-display text-2xl font-bold text-gradient">
                    {count}%
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              );
            })}
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real-world systems built for scale, intelligence, and impact.</p>
          </div>
          <div className="flex flex-col gap-8">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} group card-hover bg-card rounded-2xl border border-border overflow-hidden`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Number badge */}
                  <div className="md:w-28 shrink-0 flex items-center justify-center bg-primary/5 border-b md:border-b-0 md:border-r border-border p-6">
                    <span className="font-display text-4xl md:text-5xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors duration-500">
                      0{i + 1}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.split(" | ").map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-3">
                      {project.points.map((p, j) => (
                        <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-3 items-start">
                          <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary block" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Skills</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Technologies and tools I use to bring ideas to life.</p>
          </div>

          {/* Bento-style layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {Object.entries(SKILLS).map(([category, skills], i) => {
              // Alternating spans: first & last = 7cols, middle two = 5cols
              const spanClass = i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5";
              return (
                <div
                  key={category}
                  className={`${spanClass} ${i % 2 === 0 ? "reveal-left" : "reveal-right"} group relative`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="h-full bg-card rounded-2xl border border-border p-6 md:p-8 card-hover relative overflow-hidden">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[3rem] group-hover:from-primary/20 transition-all duration-500" />
                    {/* Bottom line */}
                    <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-500" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                            {SKILL_ICONS[category]}
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-bold text-foreground">{category}</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">{skills.length} technologies</p>
                          </div>
                        </div>
                        <span className="font-display text-3xl font-bold text-primary/10 group-hover:text-primary/25 transition-colors duration-500">
                          0{i + 1}
                        </span>
                      </div>

                      {/* Skills grid */}
                      <div className="flex flex-wrap gap-2.5">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="skill-tag text-xs font-medium px-4 py-2 rounded-xl bg-secondary/80 text-muted-foreground border border-border hover:text-primary hover:border-primary/30 hover:bg-primary/10 hover:shadow-sm hover:shadow-primary/10 cursor-default transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact */}
      <section id="contact" className="py-28 px-6 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsl(36 60% 50% / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(20 40% 30% / 0.08) 0%, transparent 50%)"
        }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="reveal text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Contact</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base">
              Have a project in mind or want to collaborate? I'm just a message away.
            </p>
          </div>

          {/* CTA banner */}
          <div className="reveal-scale mb-10 bg-card rounded-2xl border border-border p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">Ready to build something amazing?</p>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Whether it's an AI-powered backend, a scalable API, or a full-stack product — let's make it happen.
            </p>
            <a
              href="mailto:rainasirsultan123@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { href: "mailto:rainasirsultan123@gmail.com", icon: <Mail className="w-6 h-6" />, label: "Email", value: "rainasirsultan123@gmail.com", sub: "Typically reply within 24h" },
              { href: "tel:+923411731277", icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+92 341 1731277", sub: "Available Mon–Sat" },
              { href: "https://linkedin.com", icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "Sultan Sir Raina", sub: "Let's connect", external: true },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`${i === 0 ? "reveal-left" : i === 2 ? "reveal-right" : "reveal"} group contact-glow card-hover bg-card rounded-2xl p-7 border border-border flex flex-col items-center gap-4 hover:border-primary/40 transition-all relative overflow-hidden`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-500" />
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  {item.icon}
                </div>
                <div className="text-center">
                  <span className="text-sm font-display font-bold text-foreground block">{item.label}</span>
                  <span className="text-xs text-primary mt-1 block font-medium">{item.value}</span>
                  <span className="text-[11px] text-muted-foreground mt-1 block">{item.sub}</span>
                </div>
              </a>
            ))}
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
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-90 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Index;
