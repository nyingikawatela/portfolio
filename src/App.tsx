import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Award, GraduationCap, Calendar, MapPin, Terminal, Briefcase, ExternalLink } from 'lucide-react';
import imgPerfil from './assets/github.jpg'
import cv from './assets/Curriculum Vitae.pdf'

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'education', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const education = [
    {
      degree: "Common Core",
      institution: "42 Luanda",
      location: "Luanda, Angola",
      period: "Junho 2025 - Presente",
      description: "Programa intensivo peer-to-peer focado em C, algoritmos, estruturas de dados e sistemas Unix. Metodologia baseada em projectos práticos sem professores tradicionais.",
      current: true
    },
    {
      degree: "Técnico Médio de Informática",
      institution: "Instituto Politécnico Industrial de Luanda (Makarenco)",
      location: "Luanda, Angola",
      period: "2021 - 2025",
      description: "Formação técnica em desenvolvimento de software, redes e administração de sistemas.",
      current: false
    }
  ];

  const experiences = [
    {
      title: "Estágio de Assistente Administrativo",
      company: "Farmácia Zela",
      location: "Luanda, Angola",
      period: "Fevereiro 2025 - Maio 2025",
      description: "Realizei a gestão de estoque e controle de preços de medicamentos, comparando preços entre diferentes fornecedores utilizando planilhas do Excel. Minhas responsabilidades incluíam organizar informações de fornecedores, identificar as melhores opções de custo-beneficio e manter o inventário actualizado para optimizar as compras da farmácia.",
      current: true
    },
    {
      title: "Estágio Full-Stack Developer",
      company: "Mundo da Tecnologia",
      location: "Luanda, Angola",
      period: "Novembro 2024 - Fevereiro 2025",
      description: "Manutenção de aplicações web e integração com bases de dados MySQL.",
      current: false
    }
  ];

  const projects = [
    {
      title: "Sistema de Automação de Compras",
      description: "Sistema backend que automatiza comparação de preços entre 50+ fornecedores. Eliminou 40 horas semanais de trabalho manual processando 25.000+ buscas automaticamente.",
      tech: ["Node.js", "TypeScript", "Fastify", "Prisma", "MySQL"],
      link: "#"
    }
  ];

  const certifications = [
    {
      name: "Linux Essentials",
      issuer: "Udemy",
      date: "2025",
      credential: "UC-6d1c8ca0-d4e5-4e0f-8162-cd3d4ff5aale"
    }
  ];

  const skills = [
    { name: "JavaScript", category: "Linguagens", icon: "JS" },
    { name: "TypeScript", category: "Linguagens", icon: "TS" },
    { name: "C", category: "Linguagens", icon: "C" },
    { name: "Node.js", category: "Backend", icon: "Node" },
    { name: "Fastify", category: "Backend", icon: "⚡" },
    { name: "Prisma ORM", category: "Backend", icon: "▲" },
    { name: "MySQL", category: "Base de Dados", icon: "🐬" },
    { name: "Git", category: "Ferramentas", icon: "Git" },
    { name: "GitHub", category: "Ferramentas", icon: "GH" },
    { name: "Linux", category: "Sistemas", icon: "🐧" }
  ];

  const bgClass = isDark ? 'bg-black' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderClass = isDark ? 'border-gray-800' : 'border-gray-200';
  const cardBg = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const accentClass = isDark ? 'text-emerald-400' : 'text-emerald-600';
  const accentBg = isDark ? 'bg-emerald-500/10' : 'bg-emerald-50';
  const accentBorder = isDark ? 'border-emerald-500/30' : 'border-emerald-300';
  const hoverCard = isDark ? 'hover:bg-gray-800' : 'hover:bg-white hover:shadow-lg';

  return (
    <div className={`${bgClass} ${textClass} min-h-screen transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? `${isDark ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-lg shadow-lg` : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-xl font-bold ${accentClass}`}>
            NC
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'} transition-all hover:scale-110`}
              aria-label="Alternar tema"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <div className="hidden md:flex gap-6">
              {['Início', 'Sobre', 'Educação', 'Skills', 'Experiência', 'Projectos', 'Certificações', 'Contacto'].map((section, idx) => {
                const sectionMap = ['hero', 'about', 'education', 'skills', 'experience', 'projects', 'certifications', 'contact'];
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(sectionMap[idx])}
                    className={`transition-all text-sm font-medium ${
                      activeSection === sectionMap[idx]
                        ? accentClass
                        : `${textSecondary} hover:${textClass}`
                    }`}
                  >
                    {section}
                  </button>
                );
              })}
            </div>

            <button 
              className={`md:hidden ${textClass}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-lg`}>
            {['Início', 'Sobre', 'Educação', 'Skills', 'Experiência', 'Projectos', 'Certificações', 'Contacto'].map((section, idx) => {
              const sectionMap = ['hero', 'about', 'education', 'skills', 'experience', 'projects', 'certifications', 'contact'];
              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(sectionMap[idx])}
                  className={`block w-full text-left px-6 py-3 ${textClass} hover:${accentClass} transition-colors`}
                >
                  {section}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background grid */}
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`} style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`inline-block mb-6 px-4 py-1.5 ${accentBg} border ${accentBorder} rounded-full text-sm ${accentClass} font-medium animate-fade-in`}>
            Estudante 42 Luanda · Backend Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Nyingika Chimbelengue
          </h1>
          
          <p className={`text-xl md:text-2xl ${textSecondary} mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up`} style={{ animationDelay: '0.1s' }}>
            Aspirante a profissional de tecnologia, apaixonado por desenvolvimento e inovação. 
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-3.5 ${isDark ? 'bg-emerald-500 text-black' : 'bg-emerald-600 text-white'} rounded-lg font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-emerald-500/50`}
            >
              Ver Projectos
            </button>
            <a
              href={cv}
              download
              className={`flex items-center gap-2 px-8 py-3.5 border-2 ${isDark ? 'border-emerald-500 hover:bg-emerald-500/10' : 'border-emerald-600 hover:bg-emerald-50'} rounded-lg font-semibold hover:scale-105 transition-all`}
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="https://github.com/nyingikawatela" className={`${textSecondary} hover:${accentClass} transition-all hover:scale-110`}>
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/nyingika-chimbelengue-626a30234/" className={`${textSecondary} hover:${accentClass} transition-all hover:scale-110`}>
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'} relative`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${textClass}`}>
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className={`w-full aspect-square rounded-2xl ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'} flex items-center justify-center overflow-hidden border ${borderClass} shadow-xl`}>
                <div className={`w-full h-full flex items-center justify-center ${textSecondary}`}>
                  <img src={imgPerfil} alt="" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${textClass}`}>Quem Sou</h3>
                <p className={`${textSecondary} leading-relaxed mb-4`}>
                  Estudante na 42 Luanda e desenvolvedor backend focado em resolver problemas reais através de automação inteligente. 
                </p>
                <p className={`${textSecondary} leading-relaxed mb-4`}>
                  A minha abordagem é pragmática: identificar gargalos críticos, construir soluções práticas e medir resultados concretos. 
                  Já desenvolvi sistemas que transformaram 40 horas semanais de trabalho manual em automação completa.
                </p>
                <p className={`${textSecondary} leading-relaxed`}>
                  Trabalho com Node.js, TypeScript, Fastify, Prisma e MySQL. Estou em constante aprendizado, mas já sei entregar código que funciona, escala e resolve problemas reais.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${textClass}`}>
            Educação
          </h2>
          <p className={`text-center ${textSecondary} mb-16 max-w-2xl mx-auto`}>
            Formação técnica e percurso académico atual.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className={`${cardBg} border ${borderClass} rounded-xl p-6 ${hoverCard} transition-all duration-300 ${edu.current ? `border-2 ${accentBorder}` : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap size={32} className={`${accentClass}`} />
                  {edu.current && (
                    <span className={`text-xs px-3 py-1 ${accentBg} border ${accentBorder} rounded-full ${accentClass} font-medium`}>
                      Em curso
                    </span>
                  )}
                </div>
                <h3 className={`text-xl font-bold ${textClass} mb-2`}>{edu.degree}</h3>
                <p className={`${accentClass} font-medium mb-1`}>{edu.institution}</p>
                <div className={`flex items-center gap-4 ${textSecondary} text-sm mb-4`}>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className={`${textSecondary} text-sm leading-relaxed`}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${textClass}`}>
            Stack Técnico
          </h2>
          <p className={`text-center ${textSecondary} mb-16 max-w-2xl mx-auto`}>
            Tecnologias e ferramentas que domino atualmente.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className={`${cardBg} border ${borderClass} rounded-lg p-4 text-center ${hoverCard} transition-all duration-300 group`}>
                <div className={`text-2xl mb-2 group-hover:scale-110 transition-transform`}>{skill.icon}</div>
                <p className={`font-bold ${textClass} mb-1`}>{skill.name}</p>
                <p className={`text-xs ${textSecondary}`}>{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${textClass}`}>
            Experiência
          </h2>
          <p className={`text-center ${textSecondary} mb-16 max-w-2xl mx-auto`}>
            Percurso profissional e projectos desenvolvidos.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`${cardBg} border ${borderClass} rounded-xl p-6 ${hoverCard} transition-all duration-300 ${exp.current ? `border-2 ${accentBorder}` : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <Briefcase size={32} className={`${accentClass}`} />
                  {exp.current && (
                    <span className={`text-xs px-3 py-1 ${accentBg} border ${accentBorder} rounded-full ${accentClass} font-medium`}>
                      Atual
                    </span>
                  )}
                </div>
                <h3 className={`text-xl font-bold ${textClass} mb-2`}>{exp.title}</h3>
                <p className={`${accentClass} font-medium mb-1`}>{exp.company}</p>
                <div className={`flex items-center gap-4 ${textSecondary} text-sm mb-4`}>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className={`${textSecondary} text-sm leading-relaxed`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${textClass}`}>
            Projectos
          </h2>
          <p className={`text-center ${textSecondary} mb-16 max-w-2xl mx-auto`}>
            Soluções desenvolvidas para resolver problemas reais.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className={`${cardBg} border ${borderClass} rounded-xl p-6 ${hoverCard} transition-all duration-300`}>
                <div className="flex items-start justify-between mb-4">
                  <Terminal size={32} className={`${accentClass}`} />
                  {project.link && (
                    <a 
                      href={project.link}
                      className={`p-2 ${accentBg} rounded-lg ${accentClass} hover:scale-110 transition-transform`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <h3 className={`text-xl font-bold ${textClass} mb-3`}>{project.title}</h3>
                <p className={`${textSecondary} text-sm leading-relaxed mb-4`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`text-xs px-3 py-1 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-full ${textSecondary}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${textClass}`}>
            Certificações
          </h2>
          <p className={`text-center ${textSecondary} mb-16 max-w-2xl mx-auto`}>
            Credenciais e formações complementares.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`${cardBg} border ${borderClass} rounded-xl p-6 ${hoverCard} transition-all duration-300 group`}>
                <Award size={28} className={`${accentClass} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className={`text-lg font-bold ${textClass} mb-2`}>{cert.name}</h3>
                <p className={`${accentClass} text-sm font-medium mb-2`}>{cert.issuer}</p>
                <div className={`${textSecondary} text-sm space-y-1`}>
                  <p>Emitida: {cert.date}</p>
                  <p className="text-xs break-all opacity-60">ID: {cert.credential}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textClass}`}>
            Vamos Conversar
          </h2>

          <p className={`text-xl ${textSecondary} mb-12 max-w-2xl mx-auto`}>
            Disponível para projectos, estágios e oportunidades de aprendizagem. 
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="mailto:nyingikachimbelengue@gmail.com"
              className={`flex items-center gap-2 px-8 py-4 ${isDark ? 'bg-emerald-500 text-black' : 'bg-emerald-600 text-white'} rounded-lg font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-emerald-500/50`}
            >
              <Mail size={20} />
              nyingikachimbelengue@gmail.com
            </a>
          </div>

          <div className={`mt-16 pt-8 border-t ${borderClass} space-y-4`}>
            <div className="flex gap-6 justify-center">
              <a href="https://github.com/nyingikawatela" className={`${textSecondary} hover:${accentClass} transition-all hover:scale-110 flex items-center gap-2`}>
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nyingika-chimbelengue-626a30234/" className={`${textSecondary} hover:${accentClass} transition-all hover:scale-110 flex items-center gap-2`}>
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
            <p className={`${textSecondary} text-sm`}>
              © 2026 Nyingika Chimbelengue. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>

    

    </div>
  );
};

export default Portfolio;