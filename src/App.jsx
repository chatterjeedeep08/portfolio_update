import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MoonStar,
  NotebookTabs,
  ScrollText,
  Sparkles,
  SunMedium,
  X
} from 'lucide-react'
import resumePdf from '../Deepargh_Chatterjee_Resume_4.pdf'
import profileImage from './assets/profile.webp'

const OrbitalScene = lazy(() => import('./OrbitalScene'))

const profile = {
  name: 'Deepargh Chatterjee',
  location: 'Bangalore, India',
  email: 'chatterjeedeep2018@gmail.com',
  phone: '+91 7908005980',
  linkedin: 'https://linkedin.com/in/deepargh-chatterjee-086662198',
  role: 'Software Development Engineer',
  experience: '2.5+ years',
  summary:
    'Software Development Engineer focused on frontend-heavy systems, reliability, automation, and performance optimization across mission-critical airline platforms.',
  heroIntro:
    'I design and build resilient digital products with a frontend-first mindset, blending clean interfaces with automation, scale, and system stability.',
  aboutMe: [
    "I'm a Software Development Engineer with 2.5+ years of experience building and maintaining production-grade systems in the airline domain at Amadeus. My work has primarily focused on frontend-heavy applications using React, along with backend services and automation, where reliability, performance, and scalability are critical.",
    "I have hands-on experience developing end-to-end features, from designing responsive UI components to integrating REST APIs and ensuring seamless user experiences. I've also worked on backend services using Node.js and Python, and built automation pipelines using tools like Jenkins and pytest to improve system reliability and deployment confidence.",
    "My strengths lie in writing clean, maintainable code, understanding system design fundamentals, and collaborating effectively across teams. I've contributed to mission-critical workflows, including large-scale system migrations with zero downtime, which required careful planning and execution.",
    "I'm particularly interested in building scalable web applications, improving performance, and leveraging modern tools, including AI-assisted development, to solve real-world problems efficiently."
  ],
  metrics: [
    { label: 'Production workflows owned', value: 'Multiple E2E' },
    { label: 'Regression reliability uplift', value: '90%+' },
    { label: 'Largest UI dataset handled', value: '100k+ logs' }
  ],
  skills: {
    Languages: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C++', 'Bash'],
    Frontend: ['React.js', 'HTML', 'CSS'],
    Backend: ['Node.js', 'Express', 'REST APIs'],
    Databases: ['MongoDB', 'SQL'],
    'DevOps & Tools': ['Git', 'GitHub', 'Jenkins', 'CI/CD', 'JIRA', 'Confluence'],
    Methodologies: ['Agile', 'SAFe']
  },
  experienceItems: [
    {
      company: 'Amadeus Software Labs India Pvt Ltd',
      title: 'Software Development Engineer',
      period: 'July 2023 - Dec 2025',
      location: 'Bangalore, India',
      points: [
        'Owned end-to-end development of multiple Boarding Pass generation workflows using React, Python backend services, and REST APIs in a mission-critical airline system.',
        'Built and enhanced Python-based services and scripts for business logic, data processing, and API integrations with strong correctness and performance under load.',
        'Automated test pipelines using pytest, Bash, and Jenkins, improving reliability and maintainability by 90%+ across regression suites.',
        'Collaborated across frontend, backend, and QA teams to integrate React UI components with Python/C++ services and improve system stability.',
        'Led data centre decommission and migration activities with zero production downtime for airline operations.'
      ]
    }
  ],
  projects: [
    {
      name: 'Log Viewer',
      link: 'https://chatterjeedeep08.github.io/log-viewer',
      summary:
        'React-based log viewer optimized for 100,000+ lines with real-time filtering, report generation, and strong responsiveness for large datasets.'
    },
    {
      name: 'Minimal Browser',
      link: 'https://github.com/chatterjeedeep08/Light-browser',
      summary:
        'Electron-based lightweight browser featuring a custom WebView, hideable toolbar, navigation controls, and reduced memory overhead.'
    },
    {
      name: 'Personal Portfolio',
      link: 'https://github.com/chatterjeedeep08/portfolio',
      summary:
        'Responsive React portfolio centered on clean UI, accessibility, and performance-conscious implementation.'
    },
    {
      name: 'E-commerce Store',
      link: '',
      summary:
        'In-progress MERN commerce platform with JWT authentication, modular backend design, reusable React components, and foundational cart/product flows.'
    }
  ],
  education: {
    school: 'Vellore Institute of Technology',
    degree: 'Bachelor of Technology, Computer Science',
    period: 'July 2019 - June 2023',
    score: '8.62 CGPA'
  },
  certifications: [
    'Google UX Design Professional Certificate',
    'Microsoft Certified: Azure Fundamentals',
    'Microsoft Certified: Azure Data Fundamentals'
  ]
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle light and dark theme">
      <span>{theme === 'dark' ? 'Dark' : 'Light'} mode</span>
      {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </button>
  )
}

function SectionHeading({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <Icon size={16} />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme')
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (!isAboutModalOpen) {
      document.body.style.overflow = previousOverflow
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsAboutModalOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isAboutModalOpen])

  return (
    <div className={`app-shell ${isAboutModalOpen ? 'is-modal-open' : ''}`}>
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark">DC</span>
          <span>{profile.name}</span>
        </a>

        <nav className="nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <ThemeToggle theme={theme} onToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      </header>

      <main>
        <section className="hero grid-shell" id="hero">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="eyebrow">
              <Sparkles size={16} />
              <span>{profile.role}</span>
            </div>
            <h1>
              Building clean interfaces for
              <span> complex, high-stakes systems.</span>
            </h1>
            <p>{profile.heroIntro}</p>

            <motion.div
              className="hero-profile panel"
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-expanded={isAboutModalOpen}
              onClick={() => setIsAboutModalOpen(true)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setIsAboutModalOpen(true)
                }
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="hero-profile-summary">
                <div className="hero-profile-image-wrap">
                  <img className="hero-profile-image" src={profileImage} alt="Portrait of Deepargh Chatterjee" />
                </div>
                <div className="hero-profile-copy">
                  <span>Frontend engineer</span>
                  <strong>{profile.name}</strong>
                  <p>
                    Shipping polished React experiences backed by reliable automation, API integrations, and
                    performance-minded implementation.
                  </p>
                  <small className="hero-profile-hint">Click to open About Me</small>
                </div>
              </div>
            </motion.div>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore work
              </a>
              <a className="button secondary" href={resumePdf} target="_blank" rel="noreferrer">
                View resume
              </a>
              <a className="button secondary" href="https://github.com/chatterjeedeep08" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <div className="hero-metadata">
              <div>
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>
              <div>
                <span>Experience</span>
                <strong>{profile.experience}</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Frontend + Reliability</strong>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual panel"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="hero-visual-copy">
              <span>Realtime engineering profile</span>
              <strong>Minimalist. Animated. Production-minded.</strong>
            </div>
            <div className="canvas-wrap">
              <Suspense fallback={null}>
                <OrbitalScene />
              </Suspense>
            </div>
          </motion.div>
        </section>

        <section className="overview grid-shell">
          <div className="panel summary-card">
            <SectionHeading
              icon={NotebookTabs}
              eyebrow="Profile"
              title="A sharp frontend lens with full-stack range"
              description={profile.summary}
            />
          </div>

          <div className="metrics-grid">
            {profile.metrics.map((metric) => (
              <div className="panel metric-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="experience">
          <SectionHeading
            icon={BriefcaseBusiness}
            eyebrow="Experience"
            title="Mission-critical engineering in the airline domain"
            description="Hands-on delivery across frontend interfaces, backend integrations, automation, and operational stability."
          />

          <div className="timeline">
            {profile.experienceItems.map((item) => (
              <motion.article
                className="panel timeline-card"
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <div className="timeline-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionHeading
            icon={ScrollText}
            eyebrow="Projects"
            title="Performance-aware builds with practical product thinking"
            description="Selected work across visualization, desktop tooling, UI engineering, and ongoing product experimentation."
          />

          <div className="card-grid">
            {profile.projects.map((project, index) => (
              <motion.article
                className="panel project-card"
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="project-topline">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <span className="project-tag">In progress</span>
                  )}
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills">
          <SectionHeading
            icon={Sparkles}
            eyebrow="Skills"
            title="Tech stack across frontend, backend, and delivery"
            description="A toolkit shaped by real production systems, automation needs, and performance-sensitive UI work."
          />

          <div className="card-grid skill-grid">
            {Object.entries(profile.skills).map(([category, items]) => (
              <article className="panel skill-card" key={category}>
                <h3>{category}</h3>
                <div className="chip-row">
                  {items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section dual-column">
          <article className="panel education-card">
            <SectionHeading
              icon={GraduationCap}
              eyebrow="Education"
              title={profile.education.school}
              description={profile.education.degree}
            />
            <div className="stack-detail">
              <span>{profile.education.period}</span>
              <strong>{profile.education.score}</strong>
            </div>
          </article>

          <article className="panel certifications-card">
            <SectionHeading
              icon={Sparkles}
              eyebrow="Certifications"
              title="Credentialed in design thinking and cloud fundamentals"
              description="A mix of UX, Azure platform understanding, and data foundation knowledge."
            />
            <ul className="cert-list">
              {profile.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="contact-section panel" id="contact">
          <SectionHeading
            icon={Mail}
            eyebrow="Contact"
            title="Let's build something thoughtful and reliable"
            description="Open to conversations around frontend engineering, product-focused full-stack work, and performance-sensitive systems."
          />

          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="contact-meta">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {isAboutModalOpen ? (
          <motion.div
            className="about-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setIsAboutModalOpen(false)}
          >
            <motion.div
              className="about-modal panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-modal-title"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="about-modal-close" onClick={() => setIsAboutModalOpen(false)} aria-label="Close About Me popup">
                <X size={20} />
              </button>

              <div className="about-modal-media">
                <img className="about-modal-image" src={profileImage} alt="Portrait of Deepargh Chatterjee" />
              </div>

              <div className="about-modal-content">
                <div className="eyebrow">
                  <Sparkles size={16} />
                  <span>{profile.role}</span>
                </div>
                <h3 id="about-modal-title">About Me</h3>
                {profile.aboutMe.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default App
