import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Cpu,
  Layers,
  ExternalLink,
  Monitor,
  Layout,
  Server,
  ArrowRight,
  Terminal,
  Zap,
  Globe2,
  Settings,
  ChevronRight,
  Search,
  CheckCircle,
  Briefcase,
  Smartphone,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#workflow" },
    { name: "Expertise", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "VelvetShine Auto Detailing",
      category: "Automotive Services",
      description:
        "Premium auto detailing website featuring service packages, transparent pricing, before-and-after results, and appointment booking.",
      tech: ["React", "Responsive UI"],
      link: "https://gloss-builder-pro.lovable.app/",
      image:
        "https://gloss-builder-pro.lovable.app/assets/velvetshine-hero-DyMQLSKl.jpg",
    },
    {
      title: "Vance & Co. Luxury Real Estate",
      category: "Luxury Real Estate",
      description:
        "Premier US luxury real estate brokerage platform featuring exclusive property listings, private viewing scheduler, and home valuation services.",
      tech: ["React", "Tailwind CSS"],
      link: "https://candid-melomakarona-df8f66.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Hunza Burger",
      category: "Full-Stack Development",
      description:
        "A premium food ordering platform with real-time cart functionality and secure checkout.",
      tech: ["React", "Custom UI"],
      link: "https://hunza-burgar.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Hunza Garments",
      category: "E-Commerce Solutions",
      description:
        "Custom e-commerce hub featuring optimized performance and SEO-first architecture.",
      tech: ["React", "Netlify"],
      link: "https://hunza-garments.netlify.app",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "MetroScape Properties",
      category: "Estates",
      description:
        "High-performance real estate platform with advanced filtering, property uploads, secure access, and inquiry tracking",
      tech: ["React", "Bootstrap"],
      link: "https://mypakistanapp.netlify.app/",
      image:
        "https://images.pexels.com/photos/30707539/pexels-photo-30707539.jpeg",
    },
    {
      title: "Medicare Clinic",
      category: "Healthcare Platform",
      description:
        "Clinic-focused web portal showcasing specialist doctors and streamlined patient discovery experience.",
      tech: ["React", "Healthcare"],
      link: "https://stirring-quokka-c0b23b.netlify.app/doctors",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "FitZone Gym",
      category: "Fitness Experience",
      description:
        "Dynamic gym website with membership-focused design, classes, and performance-oriented landing pages.",
      tech: ["React", "Fitness"],
      link: "https://cheerful-manatee-39c4d2.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Course Platform",
      category: "Education Infrastructure",
      description:
        "Full-stack LMS architecture with secure authentication, progress tracking, and payment processing.",
      tech: ["MERN", "LMS"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Developer Portfolio",
      category: "Web Engineering",
      description:
        "A high-performance portfolio featuring smooth scrolling and professional UI principles.",
      tech: ["React", "Vite"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
    },
  ];

  const skills = [
    {
      name: "Frontend",
      icon: <Layout className="w-8 h-8" />,
      items: [
        "React.js",
        "Redux Toolkit",
        "Context API",
        "Tailwind",
        "Bootstrap",
        "HTML",
      ],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Backend",
      icon: <Server className="w-8 h-8" />,
      items: ["Node.js", "Express.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "AI Tools",
      icon: <Cpu className="w-8 h-8" />,
      items: ["Antigravity", "Cursor", "OpenAI", "Prompting"],
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Design",
      icon: <Monitor className="w-8 h-8" />,
      items: ["Figma", "UI/UX", "Responsive", "Protopie"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-outfit overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 bg-[#020617]/95 backdrop-blur-3xl border-b border-white/5 shadow-lg" : "py-8 bg-transparent"}`}
      >
        <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-studio-primary rounded-lg flex items-center justify-center text-black font-black">
              T
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Tehzeeb Hussain.
            </span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold text-slate-400 hover:text-studio-primary transition-all uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#020617] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold hover:text-studio-primary uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen pt-20 px-6 md:px-16 flex flex-col justify-center relative"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-studio-primary rounded-full"></div>
              <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                Frontend Developer
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-8">
              Building High-Performance <br />
              <span className="text-studio-primary">Digital Solutions.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
              A dedicated professional with over 4 years of experience in
              crafting scalable web architectures and intuitive digital
              experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-10 py-4 bg-studio-primary text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white hover:-translate-y-1 transition-all shadow-xl shadow-studio-primary/20"
              >
                Load Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 bg-[#0f172a]/20 border-y border-white/5 px-6 md:px-16"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight uppercase">
                The Creative <br /> Approach.
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed italic">
                "Focusing on performance and architecture. Building resilient
                systems for world-class user experiences."
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: "Years EXP", v: "05+" },
                  { l: "Systems", v: "50+" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="p-8 bg-[#0f172a] border border-white/5 rounded-2xl"
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      {s.v}
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden group h-[400px] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
                className="w-full h-full object-cover transition-all duration-700"
                alt="Workspace"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="workflow" className="py-24 px-6 md:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight uppercase">
            The Process.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                s: "Discovery",
                d: "Understanding objectives and hurdles.",
                i: <Search size={24} />,
              },
              {
                s: "Architecture",
                d: "Designing scalable infrastructures.",
                i: <Layers size={24} />,
              },
              {
                s: "Engineering",
                d: "Executing high-velocity sequences.",
                i: <Terminal size={24} />,
              },
              {
                s: "Deployment",
                d: "Seamless delivery into the cloud.",
                i: <Globe2 size={24} />,
              },
            ].map((w, i) => (
              <div
                key={i}
                className="p-10 bg-[#0f172a] border border-white/5 rounded-3xl group hover:border-studio-primary/30 transition-all"
              >
                <div className="text-studio-primary mb-6">{w.i}</div>
                <h3 className="text-lg font-bold uppercase mb-3">{w.s}</h3>
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  {w.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section
        id="skills"
        className="py-24 bg-[#0f172a]/10 border-y border-white/5 px-6 md:px-16"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight uppercase">
            Expertise.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="overflow-hidden bg-[#0f172a] border border-white/5 rounded-3xl group hover:border-studio-primary/30 transition-all duration-500"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/20 to-[#0f172a] via-[#0f172a]/50"></div>
                  <div className="absolute bottom-4 left-5 text-studio-primary">
                    {skill.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-white uppercase mb-4">
                    {skill.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/5 text-[10px] font-bold text-slate-500 uppercase rounded-full border border-white/5 group-hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 md:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight uppercase">
            Selected Works.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target={p.link !== "#" ? "_blank" : undefined}
                rel={p.link !== "#" ? "noreferrer" : undefined}
                className="block group p-4 bg-[#0f172a] border border-white/5 rounded-3xl hover:border-studio-primary/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-8 relative">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt={p.title}
                  />
                  <div className="absolute inset-0 bg-studio-primary/5 opacity-40"></div>
                </div>
                <div className="px-6 pb-6">
                  <div className="text-[10px] font-bold text-studio-primary uppercase tracking-[0.2em] mb-3">
                    {p.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm italic mb-8">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold text-slate-600 uppercase border-b border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="bg-[#0f172a] p-12 md:p-24 rounded-[3rem] text-center max-w-5xl mx-auto border border-white/5">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-8">
              Work With Tehzeeb.
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
              Providing high-performance web solutions and strategic
              consultation for global partners.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <a
                href="mailto:tehzeebhussaindev@gmail.com"
                className="p-10 bg-white/5 border border-white/5 rounded-3xl hover:border-studio-primary/40 transition-all group"
              >
                <Mail size={32} className="text-studio-primary mb-6" />
                <div className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">
                  Official Email
                </div>
                <div className="text-lg font-bold text-white group-hover:text-studio-primary transition-colors break-all">
                  tehzeebhussaindev@gmail.com
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/tehzeeb-hussain-3088b3378"
                target="_blank"
                rel="noreferrer"
                className="p-10 bg-white/5 border border-white/5 rounded-3xl hover:border-studio-primary/40 transition-all group"
              >
                <Linkedin size={32} className="text-studio-primary mb-6" />
                <div className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">
                  Professional Connect
                </div>
                <div className="text-lg font-bold text-white group-hover:text-studio-primary transition-colors">
                  LinkedIn Profile
                </div>
              </a>
              <a
                href="tel:+923448822372"
                className="p-10 bg-white/5 border border-white/5 rounded-3xl hover:border-studio-primary/40 transition-all group"
              >
                <Smartphone size={32} className="text-studio-primary mb-6" />
                <div className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">
                  Cell Number
                </div>
                <div className="text-lg font-bold text-white group-hover:text-studio-primary transition-colors">
                  0344-8822372
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-[#020617] px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold text-white tracking-tight">
          Tehzeeb Hussain.
        </div>
        <div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest italic">
          Digital Portfolio © 2026 // Based in Pakistan
        </div>
        <div className="flex gap-8 items-center opacity-40 hover:opacity-100 transition-all">
          <a
            href="https://github.com/tehzeebhussaindev@gmail.com"
            className="text-white hover:text-studio-primary"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tehzeeb-hussain-3088b3378"
            className="text-white hover:text-studio-primary"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:tehzeebhussaindev@gmail.com"
            className="text-white hover:text-studio-primary"
          >
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
