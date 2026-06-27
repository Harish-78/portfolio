import { useState } from 'react'
import {
  Mail, Phone, MapPin, Briefcase,
  GraduationCap, Award, Terminal, Cpu, Cloud,
  Layers, ExternalLink, Copy, Check, Zap, Code2,
  Server, Smartphone, Database, GitBranch, Bot,
  Blocks, FlaskConical, PackageCheck, LayoutDashboard,
  ShieldCheck, Workflow, Menu, X,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './index.css'
import './App.css'

/* ─────────────────────────────────────────────────────────────── */
/* Small reusable components                                        */
/* ─────────────────────────────────────────────────────────────── */
const IconBox = ({ children, sm }: { children: React.ReactNode; sm?: boolean }) => (
  <div className={`${sm ? 'w-8 h-8' : 'w-10 h-10'} flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 shrink-0`}>
    {children}
  </div>
)

const Badge = ({ children, mono }: { children: React.ReactNode; mono?: boolean }) =>
  mono ? (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 font-mono text-[11px] font-medium text-slate-600">
      {children}
    </span>
  ) : (
    <span className="skill-tag inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-semibold text-blue-700">
      {children}
    </span>
  )

const SectionLabel = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-3">
    {icon}{children}
  </div>
)

/* ─────────────────────────────────────────────────────────────── */
/* App                                                              */
/* ─────────────────────────────────────────────────────────────── */
function App() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'dev' | 'cloud'>('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('harish.chinnappan@gmail.com')
    setCopiedEmail(true); setTimeout(() => setCopiedEmail(false), 2000)
  }
  const copyPhone = () => {
    navigator.clipboard.writeText('+916383688495')
    setCopiedPhone(true); setTimeout(() => setCopiedPhone(false), 2000)
  }

  /* ── Data ─────────────────────────────────────────────────── */
  const skillCategories = [
    { title: 'Generative AI & LLMs', type: 'ai', icon: <Bot size={20} />, skills: ['Vertex AI (GCP)', 'Amazon Bedrock', 'LangChain', 'LangGraph', 'LlamaIndex', 'Mastra', 'DeepAgents', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering', 'Token Optimization', 'Gemini API', 'Groq', 'OpenAI API'] },
    { title: 'AI-Integrated Dev Tools', type: 'ai', icon: <Cpu size={20} />, skills: ['Windsurf', 'Cursor', 'Claude Code', 'Antigravity', 'GitHub Copilot', 'MCP Tools'] },
    { title: 'Languages & Backend', type: 'dev', icon: <Server size={20} />, skills: ['Node.js', 'Express.js', 'JavaScript (ES6+)', 'TypeScript', 'RESTful APIs', 'Microservices', 'Redis'] },
    { title: 'Cloud & DevOps', type: 'cloud', icon: <Cloud size={20} />, skills: ['AWS', 'AWS EC2', 'AWS S3', 'AWS IAM', 'AWS Amplify', 'AWS CloudWatch', 'GCP (Vertex AI, Cloud Functions)', 'Firebase', 'Vercel', 'Cloudflare', 'Docker', 'Git', 'CI/CD'] },
    { title: 'Frontend & Mobile', type: 'dev', icon: <Smartphone size={20} />, skills: ['MERN Stack', 'React.js', 'React Native', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'shadcn/ui'] },
  ]

  const filteredCategories = activeTab === 'all' ? skillCategories : skillCategories.filter(c => c.type === activeTab)

  const coreStack = [
    { icon: <Code2 size={18} />, label: 'TypeScript' },
    { icon: <Server size={18} />, label: 'Node.js' },
    { icon: <Layers size={18} />, label: 'React' },
    { icon: <Bot size={18} />, label: 'LangGraph' },
    { icon: <Cloud size={18} />, label: 'GCP' },
    { icon: <Database size={18} />, label: 'Redis' },
    { icon: <Smartphone size={18} />, label: 'React Native' },
    { icon: <GitBranch size={18} />, label: 'Docker' },
    { icon: <Workflow size={18} />, label: 'MCP Tools' },
  ]

  const techStrip = [
    'TypeScript', 'JavaScript ES6+', 'Node.js', 'Express.js', 'React.js', 'React Native',
    'MongoDB', 'Redis', 'Docker', 'GCP', 'Firebase', 'Vercel', 'LangChain', 'LangGraph',
    'Vertex AI', 'Gemini API', 'Groq', 'OpenAI API', 'shadcn/ui', 'Redux Toolkit',
  ]

  const projects = [
    {
      category: 'Agentic AI',
      title: 'AI-Powered Knowledge Assistant',
      description: 'Architected a stateful agentic assistant on GCP using LangGraph for multi-step reasoning and RAG. Built MCP multi-server adapters with Windsurf and Antigravity for real-time data connectivity.',
      stack: ['LangGraph', 'Vertex AI', 'RAG', 'MCP', 'GCP', 'TypeScript'],
      icon: <Bot size={22} />,
    },
    {
      category: 'Agriculture Tech',
      title: 'AgriConnect: Smart Market',
      description: 'Designed a direct farmer-to-buyer trade marketplace using microservices — eliminating intermediaries and providing real-time transparent pricing.',
      stack: ['React', 'Node.js', 'MongoDB', 'Microservices', 'Express'],
      icon: <Blocks size={22} />,
      live: true,
    },
  ]

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'ai', label: 'AI & LLMs' },
    { key: 'dev', label: 'Dev' },
    { key: 'cloud', label: 'Cloud' },
  ] as const

  /* ── Render ────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{
      background: 'radial-gradient(ellipse 80% 50% at 70% -5%, rgba(59,130,246,0.10) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 5% 90%, rgba(37,99,235,0.06) 0%, transparent 60%), #ffffff',
    }}>

      {/* ══ NAVBAR ════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-extrabold text-base shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2563eb, #60a5fa)' }}>
              H
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-sm">Harish Chinnappan</span>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-7">
            {['About', 'Skills', 'Experience', 'Projects', 'Education'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setContactModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Hire Me
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-100 shadow-lg p-5 flex flex-col gap-4 animate-fade-up">
              {['About', 'Skills', 'Experience', 'Projects', 'Education'].map(l => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-blue-600 font-semibold text-sm py-2 border-b border-slate-50 last:border-b-0"
                >
                  {l}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all"
              >
                Hire Me
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ══ HERO / ABOUT ══════════════════════════════════════ */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div className="animate-fade-up flex flex-col gap-6">
            {/* Available badge */}
            <div className="flex items-center gap-2">
              <div className="status-dot w-2 h-2 rounded-full bg-green-500 shrink-0" />
              <span className="text-[11px] font-bold text-green-600 uppercase tracking-widest">Available for projects</span>
            </div>

            {/* Role pill */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-widest mb-4">
                <Zap size={12} />
                AI Engineer & Full Stack Developer
              </div>

              <h1 className="text-slate-900 font-extrabold leading-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
                Building next-gen{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563eb, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>agentic workflows</span>{' '}
                &amp; scalable systems.
              </h1>

              <p className="text-slate-500 text-lg leading-relaxed">
                Strategic AI Engineer and Full Stack Developer specialising in rapid deployment of high-scalability systems. Expert in architecting agentic workflows using LangChain / LangGraph and Vertex AI — and in leveraging AI-integrated IDEs to accelerate development lifecycles.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              <a href="mailto:harish.chinnappan@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all duration-150 hover:-translate-y-0.5 shadow-md">
                <Mail size={15} />
                Email Me
              </a>
              <button onClick={() => setContactModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 text-slate-700 text-sm font-semibold transition-all duration-150 hover:-translate-y-0.5">
                <Phone size={15} className="text-slate-400" />
                Contact Info
              </button>

              <div className="flex gap-2">
                {[
                  { href: 'https://github.com/Harish-78', icon: <FaGithub size={18} />, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/harish-chinnappan-088439228', icon: <FaLinkedinIn size={18} />, label: 'LinkedIn' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <MapPin size={14} className="text-blue-400 shrink-0" />
              Dharmapuri, Tamil Nadu, India
            </div>
          </div>

          {/* Right — tech stack card */}
          <div className="animate-fade-up-1 animate-float relative">
            <div className="absolute inset-0 -m-5 rounded-3xl"
              style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-2xl p-7"
              style={{ boxShadow: '0 24px 48px rgba(37,99,235,0.14)' }}>

              {/* Card header */}
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
                <IconBox sm><LayoutDashboard size={16} /></IconBox>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Core Tech Stack</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Technologies I build with daily</p>
                </div>
              </div>

              {/* 3-col tech grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {coreStack.map((item, i) => (
                  <div key={i}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-semibold text-center transition-all duration-150 cursor-default hover:bg-blue-50 hover:border-blue-100 hover:text-blue-700">
                    <span className="text-blue-500">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                  <Briefcase size={13} className="text-blue-500" />
                  2.5+ yrs at Aroopa Technologies
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold">
                  Full-Time
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SKILLS ════════════════════════════════════════════ */}
      <section id="skills" className="bg-slate-50 border-y border-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">

          {/* Header row */}
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <SectionLabel icon={<Terminal size={11} />}>Capabilities</SectionLabel>
              <h2 className="text-slate-900 font-extrabold" style={{ letterSpacing: '-0.025em' }}>Technical Expertise</h2>
              <p className="text-slate-500 mt-2 max-w-lg">A comprehensive skill set spanning AI/ML, full-stack development, and cloud infrastructure.</p>
            </div>

            {/* Filter tabs */}
            <div className="flex bg-white border border-slate-200 rounded-xl p-1 gap-1">
              {tabs.map(t => (
                <button key={t.key} onClick={() => setActiveTab(t.key)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 border border-transparent ${activeTab === t.key
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-500 hover:text-blue-600'
                    }`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCategories.map((cat, i) => (
              <div key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:border-blue-100">
                <div className="flex items-center gap-3">
                  <IconBox>{cat.icon}</IconBox>
                  <h3 className="text-base font-bold text-slate-800">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, si) => <Badge key={si}>{s}</Badge>)}
                </div>
              </div>
            ))}
          </div>

          {/* Mono tech-pill strip */}
          <div className="flex flex-wrap gap-2 pt-2">
            {techStrip.map(t => <span key={t} className="tech-pill">{t}</span>)}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE ════════════════════════════════════════ */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left sticky label */}
          <div className="flex flex-col gap-4">
            <SectionLabel icon={<Briefcase size={11} />}>Journey</SectionLabel>
            <h2 className="text-slate-900 font-extrabold" style={{ letterSpacing: '-0.025em' }}>Professional Experience</h2>
            <p className="text-slate-500 leading-relaxed">
              Building high-performance architectures and integrating generative AI tools to ship faster, smarter products.
            </p>
          </div>

          {/* Timeline */}
          <div className="md:col-span-2">
            <div className="timeline">

              {/* Role 1 */}
              <div className="timeline-item">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">AI Engineer & Full Stack Developer</h3>
                    <span className="text-sm font-bold text-blue-600">Aroopa Technologies</span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold whitespace-nowrap">
                    Sept 2023 — Present
                  </span>
                </div>
                <ul className="text-slate-500 text-sm space-y-2 pl-5 list-disc leading-relaxed">
                  <li>Leveraged AI-integrated editors (Windsurf, Cursor, Antigravity) to accelerate development of complex microservices, shipping features faster while maintaining code quality.</li>
                  <li>Designed and developed Generative AI applications using Vertex AI on GCP, implementing document intelligence and automated RAG pipelines via LangGraph.</li>
                  <li>Architected high-scalability backend systems capable of rapid user growth, using Redis caching and optimised database queries to handle load efficiently.</li>
                  <li>Led integration of agentic workflows for internal automation — managing token budgets and prompt versioning for cost-efficiency.</li>
                  <li>Engineered robust UI components using React and Redux, ensuring seamless performance across global enterprise applications.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Node.js', 'React', 'LangGraph', 'Vertex AI', 'GCP', 'Redis', 'TypeScript'].map(t => <Badge key={t} mono>{t}</Badge>)}
                </div>
              </div>

              {/* Role 2 */}
              <div className="timeline-item">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">Mobile App Developer — React Native</h3>
                    <span className="text-sm font-bold text-blue-600">Aroopa Technologies</span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold whitespace-nowrap">
                    Cross-platform Projects
                  </span>
                </div>
                <ul className="text-slate-500 text-sm space-y-2 pl-5 list-disc leading-relaxed">
                  <li>Configured custom native bridges for Xcode and Android Studio, using Claude Code and Copilot for rapid debugging and native module integration.</li>
                  <li>Developed WebView-based architectures for mission-critical apps, enabling offline local asset loading and high-performance hybrid rendering.</li>
                  <li>Integrated ML scanning SDKs to automate mobile data capture, significantly reducing latency for field mobile interactions.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['React Native', 'Xcode', 'Android Studio', 'WebView', 'ML SDK'].map(t => <Badge key={t} mono>{t}</Badge>)}
                </div>
              </div>

              {/* Role 3 */}
              <div className="timeline-item">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">App Developer Intern — React Native</h3>
                    <span className="text-sm font-bold text-blue-600">Greefi Technologies</span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold whitespace-nowrap">
                    Aug 2022 — May 2023
                  </span>
                </div>
                <ul className="text-slate-500 text-sm space-y-2 pl-5 list-disc leading-relaxed">
                  <li>Built responsive UI components using Tailwind CSS and JavaScript, delivering polished cross-platform interfaces.</li>
                  <li>Used Firebase monitoring tools to analyse and resolve runtime bugs, maintaining a highly stable user experience across devices.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['React Native', 'Tailwind CSS', 'Firebase', 'JavaScript'].map(t => <Badge key={t} mono>{t}</Badge>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══════════════════════════════════════════ */}
      <section id="projects" className="bg-slate-50 border-y border-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">

          <div className="text-center max-w-xl mx-auto">
            <SectionLabel icon={<Layers size={11} />}>Showcase</SectionLabel>
            <h2 className="text-slate-900 font-extrabold" style={{ letterSpacing: '-0.025em' }}>Key Projects</h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              A curated selection of applications highlighting microservices, Generative AI, and scalable engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="project-card bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-250 hover:-translate-y-1 hover:shadow-xl hover:border-blue-100"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="project-stripe" />
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                      {p.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">{p.category}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                </div>
                <div className="p-6 pt-4 flex flex-col gap-3 flex-1 justify-end">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((t, ti) => <Badge key={ti}>{t}</Badge>)}
                  </div>
                  {p.live && (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                      <ExternalLink size={12} />
                      Live Demo Available
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EDUCATION & CERTS ════════════════════════════════ */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <SectionLabel icon={<GraduationCap size={11} />}>Background</SectionLabel>
          <h2 className="text-slate-900 font-extrabold" style={{ letterSpacing: '-0.025em' }}>Education & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Education card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:border-blue-100">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <IconBox><GraduationCap size={20} /></IconBox>
              <div>
                <h3 className="text-base font-bold text-slate-900">Education</h3>
                <p className="text-xs text-slate-400">Academic Background</p>
              </div>
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 leading-snug mb-1">Sri Shanmugha College of Engineering and Technology</h4>
              <p className="text-sm font-bold text-blue-600 mb-3">Bachelor of Engineering — Computer Science</p>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <span>Salem, Tamil Nadu</span>
                <span className="font-bold text-slate-600">2020 — 2024</span>
              </div>
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Award size={14} className="text-blue-500" />
                  Cumulative GPA
                </div>
                <strong className="text-slate-900">8.7 / 10.0</strong>
              </div>
            </div>
          </div>

          {/* Certifications card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:border-blue-100">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <IconBox><ShieldCheck size={20} /></IconBox>
              <div>
                <h3 className="text-base font-bold text-slate-900">Certifications</h3>
                <p className="text-xs text-slate-400">Professional qualifications</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="cert-item">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <PackageCheck size={15} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">Full Stack Development</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Node.js &amp; MongoDB — Certified by <strong>Infosys Springboard</strong></p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['Node.js', 'MongoDB', 'Express'].map(t => <Badge key={t} mono>{t}</Badge>)}
                  </div>
                </div>
              </div>

              <div className="cert-item">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <FlaskConical size={15} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">Programming in Java &amp; Data Structures</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">NPTEL — <strong>Elite Gold Medalist</strong></p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['Java', 'DSA', 'Algorithms'].map(t => <Badge key={t} mono>{t}</Badge>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════ */}
      <section id="contact" className="max-w-6xl mx-auto px-6 pb-10">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 text-center flex flex-col items-center gap-8"
          style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' }}>

          {/* Decorative glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.09) 0%, transparent 55%)' }} />

          <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur text-white">
            <Mail size={26} />
          </div>

          <div className="relative">
            <h2 className="text-white font-extrabold text-3xl mb-3" style={{ letterSpacing: '-0.025em' }}>
              Let's build something exceptional
            </h2>
            <p className="text-blue-100 max-w-md mx-auto leading-relaxed">
              Open to high-scalability backend engineering, advanced agentic workflow development, and mobile application projects.
            </p>
          </div>

          <div className="relative flex flex-wrap gap-3 justify-center">
            <a href="mailto:harish.chinnappan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all duration-150 shadow-lg hover:-translate-y-0.5">
              <Mail size={15} />
              Email Me Directly
            </a>
            <button onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white font-bold text-sm hover:bg-white/25 transition-all duration-150 hover:-translate-y-0.5">
              <Phone size={15} />
              View Contact Details
            </button>
          </div>

          <div className="relative flex gap-3">
            {[
              { href: 'https://github.com/Harish-78', icon: <FaGithub size={18} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/harish-chinnappan-088439228', icon: <FaLinkedinIn size={18} />, label: 'LinkedIn' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/15 border border-white/25 text-white hover:bg-white/25 transition-all duration-150">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-10">
          &copy; {new Date().getFullYear()} Harish Chinnappan. Built with React, Vite &amp; Tailwind CSS. All rights reserved.
        </p>
      </section>

      {/* ══ CONTACT MODAL SCREEN ══════════════════════════════════ */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-premium border border-slate-100 flex flex-col gap-6 animate-fade-up">
            {/* Close button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-all"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Contact Information</h3>
                <p className="text-slate-500 text-xs mt-1">Connect directly or copy details to your clipboard</p>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Email and Phone direct connect */}
            <div className="flex flex-col gap-4">
              {/* Email row */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                <div className="flex gap-2">
                  <a href="mailto:harish.chinnappan@gmail.com"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all">
                    <Mail size={13} />
                    Open Mail Client
                  </a>
                  <button onClick={copyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all">
                    {copiedEmail ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Phone row */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone Number</span>
                <div className="flex gap-2">
                  <a href="tel:+916383688495"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-all">
                    <Phone size={13} />
                    Call Directly
                  </a>
                  <button onClick={copyPhone}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all">
                    {copiedPhone ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                    {copiedPhone ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
