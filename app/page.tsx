import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Database,
  Gauge,
  Globe2,
  GraduationCap,
 BookOpen,
CalendarDays,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Workflow,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import type { CSSProperties } from "react";

const projects = [
  {
    number: "01",
    name: "SpotFree",
    type: "Service Booking Platform",
    description:
      "A service-booking experience for car care and cleaning, designed around clear service selection, booking flows and an admin workspace.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    href: "https://spotfreeqtr.com/",
    visual: "spotfree",
    accent: "#dfff00",
    status: "Product platform",
  },
  {
    number: "02",
    name: "Stratos Agency",
    type: "Digital Agency Website",
    description:
      "A brand-led agency website focused on presenting services clearly, building trust and turning visitors into potential clients.",
    tags: ["Web Development", "Responsive UI", "Technical SEO"],
    href: "https://stratosagency.net/",
    visual: "stratos",
    accent: "#fb6b02",
    status: "Business website",
  },
  {
    number: "03",
    name: "Al-Annabi Tourism",
    type: "Tourism Website",
    description:
      "A digital tourism experience for showcasing travel services and destinations with responsive layouts and search-optimization improvements.",
    tags: ["Web Development", "UI/UX", "SEO"],
    href: "https://alannabitourism.com/",
    visual: "tourism",
    accent: "#79aaff",
    status: "Travel & tourism",
  },
  {
    number: "04",
    name: "Al Rehaab Services",
    type: "Business Website & CRM",
    description:
      "A business website and CRM-style dashboard project focused on structured service information and practical administrative workflows.",
    tags: ["PHP", "MySQL", "JavaScript", "CRM"],
    href: "https://alrehaabservices.com/",
    visual: "rehaab",
    accent: "#bd9cff",
    status: "Website + dashboard",
  },
];

const skillGroups = [
  {
    title: "Frontend engineering",
    icon: Code2,
    number: "01",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & data",
    icon: Database,
    number: "02",
    items: ["Node.js", "PHP", "Laravel", "REST APIs", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "Platforms & quality",
    icon: Layers3,
    number: "03",
    items: ["WordPress", "WooCommerce", "Git", "GitHub", "Technical SEO", "Performance"],
  },
];

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web development",
    description:
      "Responsive business websites and modern web experiences built around the people who use them.",
  },
  {
    icon: Database,
    number: "02",
    title: "Backend & dashboards",
    description:
      "Database-driven features, admin panels, API integrations and clear business workflows.",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Optimization",
    description:
      "Technical SEO, performance improvements and ongoing refinement for existing websites.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function BrowserBar({ accent = "#fb6b02" }: { accent?: string }) {
  return (
    <div className="browser-bar">
      <div className="browser-dots">
        <span />
        <span />
        <span />
      </div>
      <div className="browser-address">
        <span className="browser-lock">⌁</span>
        <span>preview.website</span>
      </div>
      <div className="browser-menu" style={{ "--preview-accent": accent } as CSSProperties}>
        <span />
        <span />
      </div>
    </div>
  );
}



export default function Home() {
  return (
    <main id="home" className="site-shell">
      <header className="site-header">
        <nav aria-label="Main navigation" className="container-width nav-inner">
          <a href="#home" className="brand-mark" aria-label="Absal Fatima home">
            <span className="brand-monogram">A<span>.</span></span>
            <span className="brand-name">Absal Fatima<small>FULL STACK DEVELOPER</small></span>
          </a>
          <div className="nav-links">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Expertise</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link nav-extra-link" href="#approach">Approach</a>
          </div>
          <a href="#contact" className="nav-contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      
<section className="hero-section">
  <div className="hero-grid" aria-hidden="true" />

  {/* Mountain background */}
  <div className="hero-mountain-bg" aria-hidden="true">
    <img src="/images/reviews-mountains.png" alt="" />
  </div>

  <div className="hero-light hero-light-one" />
  <div className="hero-light hero-light-two" />

  <div className="container-width hero-layout">
    <div className="hero-copy">
      <div className="availability-pill">
        <span className="availability-dot" />
        OPEN TO REMOTE OPPORTUNITIES
      </div>

      <p className="hero-intro">
        Hi, I&apos;m <span>Absal Fatima.</span>
      </p>

      <h1>
        I turn complex ideas into{" "}
        <span className="hero-highlight">
          digital experiences.
        </span>
      </h1>

      <p className="hero-description">
        Full Stack Developer creating polished websites,
        useful web applications and business dashboards —
        from the first idea to a dependable launch.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="button-primary">
          Explore my work <ArrowDownRight size={17} />
        </a>

        <a href="#contact" className="button-secondary">
          Let&apos;s connect <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="hero-proof">
        <span><CheckCircle2 size={15} /> Frontend &amp; UI</span>
        <span><CheckCircle2 size={15} /> Backend &amp; APIs</span>
        <span><CheckCircle2 size={15} /> Business systems</span>
      </div>
    </div>

    <div className="hero-visual">
      <div className="hero-visual-top">
        <span>DEVELOPER / PORTFOLIO 2026</span>
        <span className="hero-visual-status">● AVAILABLE</span>
      </div>

      <div className="code-window">
        <div className="code-window-top">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>solution.ts</span>
          <span>TS</span>
        </div>

        <div className="code-content">
          <p>
            <span className="code-line-no">01</span>
            <span className="code-purple">const</span>{" "}
            <span className="code-blue">developer</span> = {"{"}
          </p>

          <p>
            <span className="code-line-no">02</span>
            &nbsp;&nbsp;<span className="code-green">name</span>:{" "}
            <span className="code-yellow">&quot;Absal Fatima&quot;</span>,
          </p>

          <p>
            <span className="code-line-no">03</span>
            &nbsp;&nbsp;<span className="code-green">mindset</span>:{" "}
            <span className="code-yellow">&quot;user-first&quot;</span>,
          </p>

          <p>
            <span className="code-line-no">04</span>
            &nbsp;&nbsp;<span className="code-green">approach</span>:{" "}
            <span className="code-yellow">&quot;full-stack&quot;</span>,
          </p>

          <p>
            <span className="code-line-no">05</span>
            &nbsp;&nbsp;<span className="code-green">quality</span>:{" "}
            <span className="code-yellow">&quot;detail-driven&quot;</span>,
          </p>

          <p>
            <span className="code-line-no">06</span>
            &nbsp;&nbsp;<span className="code-green">goal</span>:{" "}
            <span className="code-yellow">&quot;real impact&quot;</span>,
          </p>

          <p>
            <span className="code-line-no">07</span>
            {"};"}
          </p>

          <p className="code-comment">
            <span className="code-line-no">08</span>
            // Design with intent. Build with purpose.
          </p>
        </div>

        <div className="code-window-bottom">
          <span><i /> All systems thoughtfully connected</span>
          <span>UTF-8&nbsp; · &nbsp;TypeScript</span>
        </div>
      </div>

      <div className="hero-stat-row">
        <div className="hero-stat">
          <span>01</span>
          <b>Thoughtful UI</b>
          <small>Interfaces with purpose</small>
        </div>

        <div className="hero-stat">
          <span>02</span>
          <b>Reliable logic</b>
          <small>Built to solve real needs</small>
        </div>
      </div>

      <div className="floating-badge floating-badge-top">
        <Sparkles size={15} /> Build something better
      </div>

      <div className="floating-badge floating-badge-bottom">
        <Workflow size={16} /> Plan <span>→</span> Build <span>→</span> Improve
      </div>
    </div>
  </div>

  <div className="hero-bottom container-width">
    <span>SCROLL TO EXPLORE</span>
    <span className="hero-bottom-line" />
    <span>01 — 05</span>
  </div>
</section>

      <section id="about" className="about-section section-block">
        <div className="container-width about-layout">
          <div>
            <p className="section-kicker">01 / ABOUT ME</p>
            <h2 className="about-heading">Thoughtful design.<br /><span>Practical engineering.</span></h2>
          </div>
          <div className="about-copy">
            <p className="section-description">
              I work across the stack to turn business needs into clear, useful digital products — from responsive interfaces and APIs to data-driven dashboards.
            </p>
            <p className="about-secondary">
              My project experience spans business websites, a service-booking platform, CRM-style tools and website optimization. I value clean structure, responsive details and clear communication from kickoff to delivery.
            </p>
            <div className="about-values"><span>Problem solving</span><span>Clean code</span><span>Reliable delivery</span></div>
          </div>
        </div>
        <div className="container-width process-strip">
          <div className="process-intro"><span>MY APPROACH</span><p>A clear process.<br />A better outcome.</p></div>
          <div className="process-step"><span>01</span><div><b>Understand</b><small>Goals, users and requirements</small></div></div>
          <ArrowRight className="process-arrow" size={17} />
          <div className="process-step"><span>02</span><div><b>Build</b><small>Design, code and integration</small></div></div>
          <ArrowRight className="process-arrow" size={17} />
          <div className="process-step"><span>03</span><div><b>Refine</b><small>Test, polish and improve</small></div></div>
        </div>
      </section>

      <section id="skills" className="skills-section section-block">
        <div className="container-width">
          <SectionHeading
            eyebrow="02 / TECHNICAL EXPERTISE"
            title="The tools behind the work."
            description="A practical toolkit for building across the frontend, backend and the platforms businesses rely on."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="skill-card">
                  <div className="skill-card-top"><span>{group.number}</span><Icon size={21} /></div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>




<section id="education" className="education-section">
  {/* Full cinematic background image */}
  <div className="education-background" aria-hidden="true">
    <img src="/images/education-background.png" alt="" />
  </div>

  <div className="education-container">
    <div className="education-intro">
      <span className="education-eyebrow">
        <GraduationCap size={16} />
        MY BACKGROUND
      </span>

      <h2>
        Education<span>.</span>
      </h2>

      <p>
        Building my foundation through learning,
        curiosity, and continuous growth.
      </p>
    </div>

    <div className="education-timeline">
      <article className="education-item">
        <div className="education-marker">
          <span />
        </div>

        <div className="education-content">
          <span className="education-date">2024 — 2028</span>
          <h3>University Education</h3>

          <p className="education-institute">
            The Islamia University
          </p>

          <p className="education-description">
            Currently pursuing higher education and
            developing knowledge for the future.
          </p>

          <span className="education-status">
            Currently Studying
          </span>
        </div>
      </article>

      <article className="education-item">
        <div className="education-marker">
          <span />
        </div>

        <div className="education-content">
          <span className="education-date">2022 — 2024</span>
          <h3>FSc Pre-Medical</h3>

          <p className="education-institute">
            Intermediate Education
          </p>

          <p className="education-description">
            Completed intermediate studies in
            the pre-medical stream.
          </p>

          <span className="education-status completed">
            Completed
          </span>
        </div>
      </article>
    </div>
  </div>
</section>

{/* PREMIUM TECH STACK MARQUEE */}
<section id="tech-stack" className="tech-stack-section">
  <div className="tech-stack-container">
    <div className="tech-stack-heading">
      <span className="tech-stack-eyebrow">
        <span className="tech-stack-dot" />
        TOOLS I BUILD WITH
      </span>

      <h2>
        My Tech <span>Stack.</span>
      </h2>

      <p>
        Technologies and creative tools I use to build
        modern digital experiences.
      </p>
    </div>

    <div className="tech-marquee">
      <div className="tech-marquee-track">
        {[
          { name: "JavaScript", icon: "javascript/javascript-original.svg" },
          { name: "React", icon: "react/react-original.svg" },
          { name: "Next.js", icon: "nextjs/nextjs-original.svg" },
          { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
          { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
          { name: "TypeScript", icon: "typescript/typescript-original.svg" },
          { name: "PHP", icon: "php/php-original.svg" },
          { name: "Laravel", icon: "laravel/laravel-original.svg" },
          { name: "MySQL", icon: "mysql/mysql-original.svg" },
          { name: "WordPress", icon: "wordpress/wordpress-original.svg" },
          { name: "Figma", icon: "figma/figma-original.svg" },
          { name: "GitHub", icon: "github/github-original.svg" },
           { name: "Photoshop", icon: "photoshop/photoshop-original.svg" },
  { name: "Illustrator", icon: "illustrator/illustrator-original.svg" },
  { name: "Figma", icon: "figma/figma-original.svg" },
  { name: "Canva", icon: "canva/canva-original.svg" },
        ].map((tech) => (
          <div className="tech-logo-item" key={tech.name}>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
              alt=""
              loading="lazy"
            />
            <span>{tech.name}</span>
          </div>
        ))}

        {/* Duplicate items for seamless animation */}
        {[
          { name: "JavaScript", icon: "javascript/javascript-original.svg" },
          { name: "React", icon: "react/react-original.svg" },
          { name: "Next.js", icon: "nextjs/nextjs-original.svg" },
          { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
          { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
          { name: "TypeScript", icon: "typescript/typescript-original.svg" },
          { name: "PHP", icon: "php/php-original.svg" },
          { name: "Laravel", icon: "laravel/laravel-original.svg" },
          { name: "MySQL", icon: "mysql/mysql-original.svg" },
          { name: "WordPress", icon: "wordpress/wordpress-original.svg" },
          { name: "Figma", icon: "figma/figma-original.svg" },
          { name: "GitHub", icon: "github/github-original.svg" },
        ].map((tech, index) => (
          <div
            className="tech-logo-item"
            key={`${tech.name}-duplicate-${index}`}
            aria-hidden="true"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
              alt=""
              loading="lazy"
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="tech-stack-bottom">
      <span />
      <p>CODE · CREATE · INNOVATE</p>
      <span />
    </div>
  </div>
</section>

     
<section id="projects" className="premium-projects">
  <div className="projects-ambient-glow" aria-hidden="true" />

  <div className="premium-projects-container">
    <header className="premium-projects-heading">
      <span className="premium-projects-eyebrow">
        <span />
        SELECTED WORK / 2026
      </span>

      <h2>
        Built with purpose.
        <br />
        <span>Designed to perform.</span>
      </h2>

      <p>
        Websites, dashboards and digital products
        focused on real business needs.
      </p>
    </header>

    <div className="premium-projects-grid">

      {/* 01 — SPOTFREE WEBSITE */}
      <article className="premium-project-card">
        <div className="project-card-topline">
          <span>01 / CUSTOMER PLATFORM</span>
          <span className="project-live-dot">
            <i /> LIVE WEBSITE
          </span>
        </div>

        <a
          className="project-preview project-preview-spotfree"
          href="https://spotfreeqtr.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open SpotFree website"
        >
          <div className="preview-browser-bar">
            <div className="preview-browser-dots">
              <i /><i /><i />
            </div>
            <span>spotfreeqtr.com</span>
            <span>↗</span>
          </div>

          <div className="spotfree-preview-body">
            <div className="spotfree-preview-nav">
              <strong>SPOT<span>FREE</span></strong>
              <span>Services</span>
              <span>How it works</span>
              <b>Book now ↗</b>
            </div>

            <div className="spotfree-preview-hero">
              <span className="spotfree-preview-label">
                PREMIUM CAR CARE
              </span>
              <h3>Your car.<br /><span>Our care.</span></h3>
              <p>Premium care, delivered to your doorstep.</p>
              <div className="spotfree-preview-button">
                Explore services ↗
              </div>
            </div>

            <div className="spotfree-preview-bottom">
              <span>CAR WASH</span>
              <span>DETAILING</span>
              <span>HOME SERVICES</span>
            </div>
          </div>
        </a>

        <div className="project-card-content">
          <div className="project-title-row">
            <div>
              <span className="project-category">WEB DEVELOPMENT</span>
              <h3>SpotFree Platform</h3>
            </div>
            <span className="project-number">01</span>
          </div>

          <p>
            A service-booking website for car care and cleaning,
            with service discovery and a convenient booking journey.
          </p>

          <div className="project-tech-tags">
            <span>Next.js</span>
            <span>Tailwind CSS</span>
            <span>Supabase</span>
          </div>

          <a
            href="https://spotfreeqtr.com/"
            target="_blank"
            rel="noreferrer"
            className="project-view-link"
          >
            View live website <span>↗</span>
          </a>
        </div>
      </article>

      {/* 02 — SPOTFREE DASHBOARD */}
      <article className="premium-project-card">
        <div className="project-card-topline">
          <span>02 / ADMIN SYSTEM</span>
          <span className="project-private-label">DASHBOARD</span>
        </div>

        <div className="project-preview dashboard-preview">
          <div className="dashboard-mock-sidebar">
            <div className="dashboard-mock-brand">SF<span>.</span></div>
            <span className="dashboard-active-item">▦ Overview</span>
            <span>▤ Bookings</span>
            <span>♙ Customers</span>
            <span>◇ Services</span>
            <span>▧ Invoices</span>
          </div>

          <div className="dashboard-mock-main">
            <div className="dashboard-mock-header">
              <div>
                <small>WORKSPACE / SPOTFREE</small>
                <strong>Dashboard overview</strong>
              </div>
              <span className="dashboard-mock-avatar">SF</span>
            </div>

            <div className="dashboard-mock-stats">
              <div><small>Bookings</small><b>Management</b></div>
              <div><small>Customers</small><b>Management</b></div>
              <div><small>Services</small><b>Management</b></div>
            </div>

            <div className="dashboard-mock-chart">
              <div className="dashboard-chart-heading">
                <strong>Booking activity</strong>
                <span>Overview</span>
              </div>
              <div className="dashboard-chart-bars">
                {[35, 57, 43, 76, 49, 88, 63, 95, 55, 72, 46, 82].map(
                  (height, index) => (
                    <i
                      key={index}
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>

            <div className="dashboard-mock-table">
              <span>RECENT ACTIVITY</span>
              <i /><i /><i />
            </div>
          </div>
        </div>

        <div className="project-card-content">
          <div className="project-title-row">
            <div>
              <span className="project-category">ADMIN DEVELOPMENT</span>
              <h3>SpotFree Dashboard</h3>
            </div>
            <span className="project-number">02</span>
          </div>

          <p>
            An admin interface concept for organizing bookings,
            customers, services and day-to-day operations.
          </p>

          <div className="project-tech-tags">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Supabase</span>
          </div>

          <a href="#contact" className="project-view-link">
            Ask about this project <span>↗</span>
          </a>
        </div>
      </article>

      {/* 03 — CRM DASHBOARD */}
      <article className="premium-project-card">
        <div className="project-card-topline">
          <span>03 / BUSINESS SYSTEM</span>
          <span className="project-private-label">CRM</span>
        </div>

        <div className="project-preview crm-preview">
          <div className="crm-mock-sidebar">
            <div className="crm-mock-brand">NEX<span>CRM</span></div>
            <small>WORKSPACE</small>
            <span className="crm-selected">◈ Dashboard</span>
            <span>▤ Projects</span>
            <span>♙ Contacts</span>
            <span>▧ Reports</span>
            <span>⚙ Settings</span>
          </div>

          <div className="crm-mock-main">
            <div className="crm-mock-heading">
              <div>
                <small>BUSINESS WORKSPACE</small>
                <strong>Business overview</strong>
              </div>
              <span>•••</span>
            </div>

            <div className="crm-mock-kpis">
              <div><small>Projects</small><b>Overview</b></div>
              <div><small>Clients</small><b>Overview</b></div>
            </div>

            <div className="crm-mock-activity">
              <strong>Project performance</strong>
              <div className="crm-mock-line">
                <span>Website project</span>
                <i><b style={{ width: "78%" }} /></i>
              </div>
              <div className="crm-mock-line">
                <span>CRM development</span>
                <i><b style={{ width: "58%" }} /></i>
              </div>
              <div className="crm-mock-line">
                <span>Client onboarding</span>
                <i><b style={{ width: "88%" }} /></i>
              </div>
            </div>

            <div className="crm-mock-footer">
              <span>WORKSPACE ACTIVITY</span>
              <i /><i /><i />
            </div>
          </div>
        </div>

        <div className="project-card-content">
          <div className="project-title-row">
            <div>
              <span className="project-category">CRM DEVELOPMENT</span>
              <h3>CRM Dashboard</h3>
            </div>
            <span className="project-number">03</span>
          </div>

          <p>
            A business dashboard concept for presenting client
            information, project status and operational workflows.
          </p>

          <div className="project-tech-tags">
            <span>PHP</span>
            <span>MySQL</span>
            <span>JavaScript</span>
          </div>

          <a href="#contact" className="project-view-link">
            Ask about this project <span>↗</span>
          </a>
        </div>
      </article>

      {/* 04 — OTHER WEBSITES */}
      <article className="premium-project-card">
        <div className="project-card-topline">
          <span>04 / PROJECT COLLECTION</span>
          <span className="project-private-label">WEB DESIGN</span>
        </div>

        <div className="project-preview collection-preview">
          <div className="collection-window-top">
            <span>SELECTED DIGITAL WORK</span>
            <span>2026</span>
          </div>

          <div className="collection-mosaic">
            <div className="collection-tile collection-tile-one">
              <span>01</span>
              <strong>Business<br />Websites</strong>
              <i>↗</i>
            </div>
            <div className="collection-tile collection-tile-two">
              <span>02</span>
              <strong>WordPress<br />Projects</strong>
              <i>↗</i>
            </div>
            <div className="collection-tile collection-tile-three">
              <span>03</span>
              <strong>UI &amp; Web<br />Experiences</strong>
              <i>↗</i>
            </div>
          </div>
        </div>

        <div className="project-card-content">
          <div className="project-title-row">
            <div>
              <span className="project-category">MULTIPLE PROJECTS</span>
              <h3>Website Collection</h3>
            </div>
            <span className="project-number">04</span>
          </div>

          <p>
            A collection of additional website builds, WordPress
            projects and responsive interface design work.
          </p>

          <div className="project-tech-tags">
            <span>WordPress</span>
            <span>Responsive UI</span>
            <span>UI/UX</span>
          </div>

          <a href="#contact" className="project-view-link">
            Ask about my other work <span>↗</span>
          </a>
        </div>
      </article>

    </div>

    <div className="premium-projects-footer">
      <span className="projects-footer-line" />
      <p>SELECTED WORK · BUILT WITH INTENTION</p>
      <span className="projects-footer-line" />
    </div>
  </div>
</section>

{/* QUALITY & RESPONSIVE SECTION */}
<section id="quality" className="quality-section section-block">
  <div className="container-width">
    <div className="quality-layout">
      <div className="quality-copy">
        <p className="section-kicker">QUALITY / BUILT TO LAST</p>

        <h2>
          More than good looks.
          <br />
          <span>Built for real users.</span>
        </h2>

        <p className="quality-description">
          A professional website should look polished, work smoothly
          across screen sizes, load efficiently and make information
          easy to find.
        </p>

        <a
          href="/cv.pdf"
          className="quality-cv-button"
          target="_blank"
          rel="noreferrer"
        >
          Download My CV
          <span>↗</span>
        </a>

        <p className="quality-note">
          Add your latest CV as public/cv.pdf before publishing.
        </p>
      </div>

      <div className="quality-checklist">
        <article className="quality-item">
          <span className="quality-item-number">01</span>
          <div className="quality-item-icon">↔</div>
          <div className="quality-item-copy">
            <h3>Responsive Design</h3>
            <p>Layouts designed for desktop, tablet and mobile screens.</p>
          </div>
          <span className="quality-item-arrow">↗</span>
        </article>

        <article className="quality-item">
          <span className="quality-item-number">02</span>
          <div className="quality-item-icon">ϟ</div>
          <div className="quality-item-copy">
            <h3>Performance</h3>
            <p>Attention to efficient assets, loading and smooth interactions.</p>
          </div>
          <span className="quality-item-arrow">↗</span>
        </article>

        <article className="quality-item">
          <span className="quality-item-number">03</span>
          <div className="quality-item-icon">⌕</div>
          <div className="quality-item-copy">
            <h3>SEO Foundations</h3>
            <p>Clear page metadata, meaningful headings and crawlable content.</p>
          </div>
          <span className="quality-item-arrow">↗</span>
        </article>

        <article className="quality-item">
          <span className="quality-item-number">04</span>
          <div className="quality-item-icon">✓</div>
          <div className="quality-item-copy">
            <h3>Usability & Testing</h3>
            <p>Keyboard access, working links and consistent layouts to verify.</p>
          </div>
          <span className="quality-item-arrow">↗</span>
        </article>
      </div>
    </div>
  </div>
</section>

{/* GRAPHIC DESIGN & BRAND IDENTITY */}
<section id="graphic-design" className="graphic-design-section">
  <div className="graphic-design-container">
    <header className="graphic-design-header">
      <div className="graphic-brand-lockup">
        <div className="graphic-brand-symbol">
          <span />
          <span />
          <span />
        </div>
        <div className="graphic-brand-wordmark">
          <span>CREATIVE</span>
          <span>DESIGN</span>
        </div>
      </div>

      <div className="graphic-design-intro">
        <span className="graphic-eyebrow">
          <i /> GRAPHIC DESIGN / SELECTED WORK
        </span>
        <h2>
          Ideas into <span>Identity.</span>
        </h2>
        <p>
          Branding, visual systems and creative design
          crafted with purpose, consistency and detail.
        </p>
      </div>
    </header>

    <div className="graphic-design-grid">
      
{[
  {
    no: "01",
    title: "Brand Identity",
    category: "BRANDING",
    image: "/images/t%20(20).png",
    style: "graphic-card-brand",
  },
  {
    no: "02",
    title: "Logo Design",
    category: "LOGO SYSTEM",
    image: "/images/t%20(2).png",
    style: "graphic-card-logo",
  },
  {
    no: "03",
    title: "Color & Art Direction",
    category: "ART DIRECTION",
    image: "/images/t%20(3).png",
    style: "graphic-card-color",
  },
  {
    no: "04",
    title: "Typography",
    category: "TYPE DESIGN",
    image: "/images/t%20(19).png",
    style: "graphic-card-type",
  },
  {
    no: "05",
    title: "Logo Construction",
    category: "DESIGN SYSTEM",
    image: "/images/t%20(5).png",
    style: "graphic-card-grid",
  },
  {
    no: "06",
    title: "Brand Applications",
    category: "VISUAL IDENTITY",
    image: "/images/t%20(6).png",
    style: "graphic-card-system",
  },
  {
    no: "07",
    title: "Social Media Design",
    category: "SOCIAL CREATIVE",
    image: "/images/t%20(7).png",
    style: "graphic-card-social",
  },
  {
    no: "08",
    title: "Marketing Materials",
    category: "CAMPAIGN DESIGN",
    image: "/images/t%20(8).png",
    style: "graphic-card-marketing",
  },
  {
    no: "09",
    title: "Packaging Design",
    category: "PACKAGING",
    image: "/images/t%20(9).png",
    style: "graphic-card-packaging",
  },
  {
    no: "10",
    title: "Digital Mockups",
    category: "PRESENTATION",
    image: "/images/t%20(10).png",
    style: "graphic-card-mockup",
  },
  {
    no: "11",
    title: "Merchandise Design",
    category: "APPLICATIONS",
    image: "/images/t%20(11).png",
    style: "graphic-card-merchandise",
  },
  {
    no: "12",
    title: "Creative Concepts",
    category: "EXPERIMENTAL",
    image: "/images/t%20(12).png",
    style: "graphic-card-concepts",
  },
  {
    no: "13",
    title: "Creative Design 13",
    category: "GRAPHIC DESIGN",
    image: "/images/t%20(13).png",
    style: "graphic-card-brand",
  },
  {
    no: "14",
    title: "Creative Design 14",
    category: "GRAPHIC DESIGN",
    image: "/images/t%20(14).png",
    style: "graphic-card-logo",
  },
  {
    no: "15",
    title: "Creative Design 15",
    category: "GRAPHIC DESIGN",
    image: "/images/t%20(15).png",
    style: "graphic-card-color",
  },
  {
    no: "16",
    title: "Creative Design 16",
    category: "GRAPHIC DESIGN",
    image: "/images/t%20(16).png",
    style: "graphic-card-type",
  },
  {
    no: "17",
    title: "Creative Design 17",
    category: "GRAPHIC DESIGN",
    image: "/images/t%20(17).png",
    style: "graphic-card-system",
  },
  {
    no: "18",
    title: "Creative Design 18",
    category: "GRAPHIC DESIGN",
    image: "/images/t%20(18).png",
    style: "graphic-card-concepts",
  },
].map((item) => (
  <article className="graphic-design-card" key={item.no}>
    <div className="graphic-card-top">
      <span>{item.no} / {item.category}</span>
      <span className="graphic-card-arrow">↗</span>
    </div>

    <div className={`graphic-card-art ${item.style}`}>
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
      />
    </div>

    <div className="graphic-card-caption">
      <h3>{item.title}</h3>
      <span>CREATIVE WORK — {item.no}</span>
    </div>
  </article>
))}

    </div>

    <footer className="graphic-design-footer">
      <span />
      <p>THOUGHTFUL CONCEPTS. DISTINCTIVE IDENTITIES.</p>
      <span />
    </footer>
  </div>
</section>


      <section id="services" className="services-section section-block">
        <div className="container-width">
          <SectionHeading
            eyebrow="04 / WHAT I DO"
            title="From idea to a better web experience."
            description="Flexible development support for businesses, agencies and founders who need a thoughtful technical partner."
          />
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top"><span>{service.number}</span><Icon size={22} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`Discuss ${service.title}`}>Discuss your project <ArrowUpRight size={15} /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="approach-section section-block">
        <div className="container-width">
          <SectionHeading
            eyebrow="05 / THE DIFFERENCE"
            title="A thoughtful partner, not just a pair of hands."
            description="Good development is more than writing code. It is about understanding the goal, communicating clearly and making the finished experience feel considered."
          />
          <div className="approach-grid">
            <article className="approach-card">
              <span className="approach-number">01</span>
              <div className="approach-icon"><Sparkles size={20} /></div>
              <h3>Details matter</h3>
              <p>Consistent spacing, responsive states, clear content and useful interactions help a product feel complete—not just functional.</p>
              <span className="approach-bottom">DESIGN WITH INTENT</span>
            </article>
            <article className="approach-card">
              <span className="approach-number">02</span>
              <div className="approach-icon"><Workflow size={20} /></div>
              <h3>Built around the goal</h3>
              <p>I aim to understand the actual business need first, then choose a practical implementation instead of adding complexity for its own sake.</p>
              <span className="approach-bottom">SOLVE THE RIGHT PROBLEM</span>
            </article>
            <article className="approach-card">
              <span className="approach-number">03</span>
              <div className="approach-icon"><CheckCircle2 size={20} /></div>
              <h3>Clear communication</h3>
              <p>Thoughtful updates, visible progress and clear handover notes make collaboration easier for clients and teams.</p>
              <span className="approach-bottom">MAKE PROGRESS VISIBLE</span>
            </article>
          </div>
          <div className="delivery-panel">
            <div className="delivery-copy">
              <p className="section-kicker">A SIMPLE DELIVERY FLOW</p>
              <h3>From brief to launch, with clarity at every step.</h3>
              <p>Each project has its own needs, but a clear shared process helps keep the work focused and the next step easy to understand.</p>
            </div>
            <div className="delivery-list">
              <div><span>01</span><p><b>Discovery</b><small>Goals, audience, scope and priorities</small></p><CheckCircle2 size={17} /></div>
              <div><span>02</span><p><b>Design & build</b><small>Responsive UI, functionality and integrations</small></p><CheckCircle2 size={17} /></div>
              <div><span>03</span><p><b>Review & launch</b><small>Testing, refinements and handover</small></p><CheckCircle2 size={17} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section section-block">
        <div className="container-width faq-layout">
          <div>
            <p className="section-kicker">06 / QUICK QUESTIONS</p>
            <h2 className="faq-title">A few things you<br /><span>might want to know.</span></h2>
            <p className="section-description">Have a different question or a specific project in mind? Get in touch and tell me what you are trying to build.</p>
            <a href="#contact" className="faq-contact-link">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>What kind of projects can you help with?<span>+</span></summary>
              <p>Business websites, responsive landing pages, web applications, admin dashboards, API integrations and website optimization are all areas represented in my portfolio.</p>
            </details>
            <details className="faq-item">
              <summary>Are you open to remote roles?<span>+</span></summary>
              <p>Yes. The portfolio is presented for remote opportunities as well as freelance collaborations. Contact me with the role or project details to discuss fit.</p>
            </details>
            <details className="faq-item">
              <summary>Can you work with an existing website?<span>+</span></summary>
              <p>Yes, depending on the project scope. Work can include interface improvements, responsive fixes, integrations, technical SEO and performance-focused refinements.</p>
            </details>
            <details className="faq-item">
              <summary>How do we get started?<span>+</span></summary>
              <p>Share the goal, the current challenge, any deadline and the links or materials you already have. We can then clarify the scope and the next steps.</p>
            </details>
          </div>
        </div>
      </section>

<section id="reviews" className="reviews-section">
  <div className="reviews-grid-bg" aria-hidden="true" />

  
{/* Laptop image */}
<div className="reviews-laptop-bg" aria-hidden="true">
  <img src="/images/reviews-laptop.png" alt="" />
</div>

{/* Mountain image */}
<div className="reviews-mountains-bg" aria-hidden="true">
  <img src="/images/reviews-mountains.png" alt="" />
</div>


  <div className="reviews-glow reviews-glow-one" />
  <div className="reviews-glow reviews-glow-two" />

  <div className="reviews-container">
    <header className="reviews-heading">
      <span className="reviews-eyebrow">
        <span className="reviews-eyebrow-dot" />
        CLIENT FEEDBACK
      </span>

      <h2>
        Loved by Clients
        <br />
        Trusted for <span>Results.</span>
      </h2>

      <p>
        Every successful project starts with trust,
        clear communication, and a shared vision.
      </p>

      <div className="reviews-summary">
        <div className="reviews-avatar-stack">
          <span>A</span>
          <span>C</span>
          <span>P</span>
        </div>

        <div className="reviews-summary-copy">
          <strong>Real Experiences</strong>
          <span>Honest feedback matters</span>
        </div>
      </div>
    </header>

    <div className="reviews-showcase">
      <article className="review-modern-card">
        <div className="review-modern-top">
          <span>01 / COLLABORATION</span>
          <span className="review-modern-quote">“</span>
        </div>

        <div className="review-modern-rule" />

        <h3>Built on Trust.</h3>

        <p>
          Clear communication and a shared understanding
          help turn ideas into successful digital projects.
        </p>

        <div className="review-modern-footer">
          <div className="review-modern-avatar">C</div>
          <div>
            <strong>Client Feedback</strong>
            <span>Replace with a real client review</span>
          </div>
        </div>
      </article>

      <article className="review-modern-card review-modern-featured">
        <div className="review-modern-top">
          <span>02 / QUALITY</span>
          <span className="review-modern-quote">“</span>
        </div>

        <div className="review-modern-rule" />

        <h3>Made with Purpose.</h3>

        <p>
          Thoughtful design, reliable development,
          and attention to detail create better
          digital experiences.
        </p>

        <div className="review-modern-footer">
          <div className="review-modern-avatar">P</div>
          <div>
            <strong>Project Feedback</strong>
            <span>Replace with a real project review</span>
          </div>
        </div>
      </article>

      <article className="review-modern-card">
        <div className="review-modern-top">
          <span>03 / RESULTS</span>
          <span className="review-modern-quote">“</span>
        </div>

        <div className="review-modern-rule" />

        <h3>Designed to Deliver.</h3>

        <p>
          Responsive interfaces and dependable
          functionality help businesses create
          stronger online experiences.
        </p>

        <div className="review-modern-footer">
          <div className="review-modern-avatar">R</div>
          <div>
            <strong>Partner Feedback</strong>
            <span>Replace with a real partner review</span>
          </div>
        </div>
      </article>
    </div>

    <footer className="reviews-bottom">
      <span />
      <p>THOUGHTFUL DESIGN. MEANINGFUL WORK.</p>
      <span />
    </footer>
  </div>
</section>

      <section id="contact" className="contact-section section-block">
        <div className="container-width">
          <div className="contact-panel">
            <div className="contact-orb" />
            <div className="contact-content">
              <p className="section-kicker">07 / LET&apos;S CONNECT</p>
              <h2>Have a good idea?<br /><span>Let&apos;s make it real.</span></h2>
              <p>I&apos;m open to remote opportunities and freelance collaborations. If you need a website, web application or a better digital workflow, let&apos;s talk.</p>
              
<div className="contact-actions">
  <a
    href="mailto:darkangelinkhan@gmail.com?subject=Portfolio%20Inquiry"
    className="button-primary"
  >
    <Mail size={17} />
    Email me
    <ArrowUpRight size={16} />
  </a>

  <a
    href="https://www.linkedin.com/in/anaya-fatima-6ab752361"
    target="_blank"
    rel="noopener noreferrer"
    className="button-secondary"
  >
    <Linkedin size={16} />
    LinkedIn
  </a>

  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="button-secondary"
  >
    <Github size={16} />
    GitHub
  </a>
</div>

              <p className="contact-note">Before publishing, replace the sample email and generic social links with your real profiles.</p>
            </div>
            <div className="contact-side"><Globe2 size={23} /><span>AVAILABLE FOR</span><b>Remote roles</b><b>Freelance projects</b><div className="contact-side-line" /><small>Let&apos;s create work that matters.</small></div>
          </div>
        </div>
      </section>

      
<footer className="site-footer">
  <div className="container-width">
    <div className="footer-main">
      <a href="#home" className="footer-brand">
        ABSAL<span>.</span>
        <small>FULL STACK DEVELOPER & CREATIVE DESIGNER</small>
      </a>

      <p className="footer-message">
        Thoughtful design.
        <br />
        <span>Meaningful digital experiences.</span>
      </p>

      <a href="#contact" className="footer-cta">
        Let&apos;s work together <span>↗</span>
      </a>
    </div>

    <div className="footer-divider" />

    <div className="footer-bottom">
      <p>
        © {new Date().getFullYear()} Absal Fatima. All rights reserved.
      </p>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#graphic-design">Design</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#home" className="footer-back-top">
        Back to top ↑
      </a>
    </div>
  </div>
</footer>

    </main>
  );
}
