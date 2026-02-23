import { useEffect, useRef } from "react";
import {
  Mail, Phone, MapPin, Linkedin, ExternalLink,
  Code2, Server, Brain, Cloud, ChevronDown,
  Briefcase, Building2
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

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Index = () => {
  const containerRef = useReveal();

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-gradient">SS</span>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {l}
              </a>
            ))}
          </div>
          <a href="#contact" className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 30% 40%, hsl(36 60% 50% / 0.15) 0%, transparent 60%), radial-gradient(circle at 70% 70%, hsl(20 40% 30% / 0.1) 0%, transparent 50%)"
        }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="animate-fade-up text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">Backend AI Developer</p>
          <h1 className="animate-fade-up delay-100 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            Sultan <span className="text-gradient">Sir Raina</span>
          </h1>
          <p className="animate-fade-up delay-200 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            1.5+ years building AI-driven backend solutions. Deployed 3 international-level projects on AWS & DigitalOcean. Currently leading teams & architecting scalable systems.
          </p>
          <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4 mb-12">
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
          <a href="#about" className="animate-fade-up delay-400 inline-block">
            <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">About Me</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Building the Future with <span className="text-gradient">AI & Backend</span></h2>
            <div className="bg-card rounded-xl p-8 border border-border animate-glow">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Backend AI Developer at Eaglines with over 1.5 years of experience specializing in backend and AI-driven solutions. Successfully completed and deployed three international-level projects, including two AI-based backend projects handled via prompt engineering and one using RAG architecture, on AWS EC2 and DigitalOcean. Currently serving as team leader, managing technical documentation, collaborating with UI/UX designers, and defining seamless backend logic and system design approaches for scalable, high-performance applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Work Experience</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">My Career <span className="text-gradient">Journey</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Driven by a pursuit of innovation, growth, and a culture that inspires excellence.</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className={`reveal relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-1" />

                {/* Content card */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-4" : "md:text-left md:pl-4 md:ml-auto"}`}>
                  <div className="card-hover bg-card rounded-xl p-6 border border-border">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold">{exp.company}</h3>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 mb-1 text-primary text-sm font-medium ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.role}
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">{exp.period} &nbsp;·&nbsp; {exp.location}</p>
                    <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.points.map((p, j) => (
                        <li key={j} className={`text-muted-foreground text-sm leading-relaxed flex gap-2 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                          <span className="text-primary shrink-0 mt-0.5">▸</span>
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

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Projects</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Featured <span className="text-gradient">Work</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <div key={i} className="reveal card-hover bg-card rounded-xl p-6 border border-border flex flex-col" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="flex items-center gap-2 mb-4">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="text-primary/70 text-xs font-mono mb-4">{project.tech}</p>
                <ul className="space-y-3 flex-1">
                  {project.points.map((p, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Skills</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Technical <span className="text-gradient">Arsenal</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, skills], i) => (
              <div key={category} className="reveal bg-card rounded-xl p-6 border border-border card-hover" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{SKILL_ICONS[category]}</div>
                  <h3 className="font-display text-lg font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border hover:text-primary hover:border-primary/30 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Let's Work <span className="text-gradient">Together</span></h2>
            <p className="text-muted-foreground mb-10">I'm always open to discussing new projects and opportunities.</p>
          </div>
          <div className="reveal delay-200 grid sm:grid-cols-3 gap-4">
            <a href="mailto:rainasirsultan123@gmail.com" className="card-hover bg-card rounded-xl p-6 border border-border flex flex-col items-center gap-3 hover:border-primary/40 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">Email</span>
            </a>
            <a href="tel:+923411731277" className="card-hover bg-card rounded-xl p-6 border border-border flex flex-col items-center gap-3 hover:border-primary/40 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">Phone</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="card-hover bg-card rounded-xl p-6 border border-border flex flex-col items-center gap-3 hover:border-primary/40 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">© 2025 Sultan Sir Raina. All rights reserved. </p>
      </footer>
    </div>
  );
};

export default Index;
