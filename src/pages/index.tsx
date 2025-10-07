import React, { useState } from 'react';

const TECH_STACK = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Go', icon: '🔵' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📦' },
  { name: 'Python', icon: '🐍' }
];

const WORK_EXPERIENCES = [
  {
    title: "Fullstack Web Developer",
    company: "Koda Tech Academy",
    img: "/koda.png",
    startAt: "Jun 2025",
    endAt: "Present",
    responsibilities: [
      "Developed Prospera - E-Wallet Web App with JWT authentication, Redis caching, and interactive charts",
      "Built Tickitz - Movie Booking platform with Golang backend, React frontend, and CI/CD automation",
      "Implemented protected routes, RESTful APIs, and deployed with Docker Compose"
    ],
    techUsed: ["JavaScript", "Go", "React", "Redux", "Gin", "PostgreSQL", "Docker", "Redis"]
  },
  {
    title: "Fullstack Developer Talent",
    company: "PT DumbWays Indonesia Teknologi",
    img: "/dumbways.png",
    startAt: "May 2025",
    endAt: "Jun 2025",
    responsibilities: [
      "Developed personal website with built-in CMS for managing portfolios dynamically",
      "Designed responsive UI using HTML, CSS, and Tailwind CSS",
      "Implemented server-side rendering with Handlebars.js and Express.js"
    ],
    techUsed: ["JavaScript", "Express.js", "PostgreSQL", "Handlebars", "Tailwind CSS"]
  }
];

const PROJECTS = [
  {
    name: "Prospera - E-Wallet App",
    description: "Digital wallet web application with fund transfers, transaction history, and financial insights dashboard",
    tech: ["React", "PostgreSQL", "Redis", "JWT", "Recharts"],
    period: "Sep - Oct 2025"
  },
  {
    name: "Tickitz - Movie Booking",
    description: "Full-featured movie ticket booking platform with seat selection and real-time transactions",
    tech: ["React", "Go", "PostgreSQL", "Docker", "CI/CD"],
    period: "Jun - Sep 2025"
  }
];

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Radif</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-green-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('tech-stack')} className="hover:text-green-600 transition-colors">
                Tech Stack
              </button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-green-600 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-green-600 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('education')} className="hover:text-green-600 transition-colors">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-green-600 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-green-600">
                Home
              </button>
              <button onClick={() => scrollToSection('tech-stack')} className="text-left hover:text-green-600">
                Tech Stack
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left hover:text-green-600">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-green-600">
                Projects
              </button>
              <button onClick={() => scrollToSection('education')} className="text-left hover:text-green-600">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-green-600">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <section id="home" className="mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/profile-pic.jpg" 
                alt="Radif" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Hi, I'm Radif 👋</h1>
              <p className="text-xl text-gray-600 mb-4 font-medium">
                Fullstack Developer & AI/ML Enthusiast
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Passionate about building secure, responsive, and scalable applications, while also exploring 
                the intersection of AI, IoT, and real-world automation. With a background in Electrical and 
                Computer Engineering, I bring a multidisciplinary perspective to software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                <div className="flex items-center gap-2 text-gray-600">
                  <span>📍</span>
                  <span>Surabaya, Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Available for projects</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="https://github.com/radifaghnadiin" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-700 hover:text-gray-900">GitHub</a>
                <a href="https://linkedin.com/in/radifaghnadiin" target="_blank" rel="noopener noreferrer"
                   className="text-gray-700 hover:text-gray-900">LinkedIn</a>
                <a href="mailto:radif.aghnadiin@gmail.com" 
                   className="text-gray-700 hover:text-gray-900">Email</a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} 
                   className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2">
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-8">
            {WORK_EXPERIENCES.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                    💼
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-green-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.startAt} - {exp.endAt}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 text-gray-700">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.techUsed.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{project.period}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-xl font-bold">Computer Engineering</h3>
              <p className="text-green-600 font-medium">Brawijaya University</p>
              <p className="text-gray-500 text-sm mb-2">Bachelor Degree • 2022 - 2024 • GPA: 3.85/4.00</p>
              <p className="text-gray-700">
                Focused on computer networking, database systems, AI/ML, and embedded systems. 
                Thesis: ESP32-based squat form detector using Random Forest algorithm.
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-xl font-bold">Electronics Engineering</h3>
              <p className="text-green-600 font-medium">EEPIS Surabaya</p>
              <p className="text-gray-500 text-sm mb-2">Associate Degree • 2017 - 2022 • GPA: 3.34/4.00</p>
              <p className="text-gray-700">
                Foundation in electrical engineering, embedded systems, and IoT. 
                Final Project: Automated conveyor belt with Computer Vision for tomato sorting.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="text-center py-8 border-t border-gray-200 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a href="mailto:radif.aghnadiin@gmail.com" 
             className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Get in Touch
          </a>
        </section>

      </div>
    </div>
  );
}