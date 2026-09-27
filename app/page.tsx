'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Website Development',
    text:
      'Custom website development focused on structure, performance, responsiveness, and conversion-ready user journeys across business, portfolio, and e-commerce builds.',
  },
  {
    title: 'Website Design',
    text:
      'Brand-centered website design systems built to look premium, create trust, and communicate value clearly across devices and content structures.',
  },
  {
    title: 'WordPress Development',
    text:
      'Fully customized WordPress builds and refinements using Elementor, Gutenberg, and other page builders to deliver flexible, scalable website experiences.',
  },
  {
    title: 'Elementor Development',
    text:
      'Design-led Elementor builds with efficient content structure, reusable sections, and polished interactions tailored to client requirements.',
  },
  {
    title: 'Landing Page Design',
    text:
      'High-converting landing pages built for campaigns, service offers, lead generation, and strategic product or service promotion.',
  },
  {
    title: 'E-Commerce Development',
    text:
      'Storefront experiences built for usability, trust, and sales performance across WordPress + WooCommerce and other commerce platforms.',
  },
  {
    title: 'Website Redesign',
    text:
      'Modern redesigns focused on performance, mobile responsiveness, SEO, and stronger visual identity without losing business clarity.',
  },
  {
    title: 'Responsive Web Design',
    text:
      'Responsive layouts that balance visual polish and clean functionality across desktops, tablets, and mobile screens.',
  },
  {
    title: 'UI/UX Design',
    text:
      'Thoughtful interface flows, information hierarchy, and interaction design aimed at ease of use, clarity, and user confidence.',
  },
  {
    title: 'SEO & Website Optimization',
    text:
      'On-page SEO, performance-focused improvements, and strategic website tuning for better visibility, usability, and engagement.',
  },
  {
    title: 'Performance Optimization',
    text:
      'Website performance improvements covering speed, structure, media handling, and usability enhancements that support a smoother experience.',
  },
];

const wordpressBuilders = [
  'WordPress',
  'Elementor',
  'Gutenberg',
  'Bricks Builder',
  'Divi Builder',
  'Beaver Builder',
  'Avada',
  'WPBakery Page Builder',
];

const platformList = [
  'WordPress',
  'Elementor',
  'Shopify',
  'Webflow',
  'Wix',
  'Squarespace',
  'WooCommerce',
];

const projects = [
  {
    name: 'NOVAAMP',
    url: 'https://novaamp.com/',
    platform: 'WordPress',
    description: 'Business website and marketing-focused digital presence.',
    services: ['Website Design', 'Website Development'],
    accent: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
  },
  {
    name: 'BIG ROCK ONLINE',
    url: 'https://bigrockonline.com/',
    platform: 'WordPress',
    description: 'Professional website experience built for clear communication and conversion.',
    services: ['Website Development', 'Responsive Web Design'],
    accent: 'linear-gradient(135deg, #111827, #6b7280)',
  },
  {
    name: 'VALANDPRO',
    url: 'https://valandpro.com/',
    platform: 'WordPress',
    description: 'Service-driven website design and responsive structure.',
    services: ['Website Design', 'WordPress Development'],
    accent: 'linear-gradient(135deg, #0f172a, #2563eb)',
  },
  {
    name: 'WRMC',
    url: 'https://wrmcinc.com/',
    platform: 'WordPress',
    description: 'Corporate website experience tailored for professionalism and trust.',
    services: ['Website Redesign', 'SEO & Website Optimization'],
    accent: 'linear-gradient(135deg, #334155, #60a5fa)',
  },
  {
    name: 'HOAPPM',
    url: 'https://www.hoappm.com/',
    platform: 'WordPress',
    description: 'Business website supporting brand clarity and user navigation.',
    services: ['Website Development', 'UI/UX Design'],
    accent: 'linear-gradient(135deg, #132a4f, #3b82f6)',
  },
  {
    name: 'CHICAGOLAND',
    url: 'https://www.chicagoland-inc.com/',
    platform: 'WordPress',
    description: 'Responsive website layout with clear service presentation.',
    services: ['Website Design', 'Responsive Web Design'],
    accent: 'linear-gradient(135deg, #1a365d, #7dd3fc)',
  },
  {
    name: 'ATLANTA COMMUNITY SERVICES',
    url: 'https://www.atlantacommunityservices.com/',
    platform: 'WordPress',
    description: 'Organization website built for accessibility, clarity, and trust.',
    services: ['Website Development', 'Landing Page Design'],
    accent: 'linear-gradient(135deg, #1f2937, #38bdf8)',
  },
  {
    name: 'MYFPMS',
    url: 'https://myfpms.com/',
    platform: 'WordPress',
    description: 'Structured digital experience built for information architecture and usability.',
    services: ['Website Design', 'SEO & Website Optimization'],
    accent: 'linear-gradient(135deg, #0f172a, #3b82f6)',
  },
  {
    name: 'KPPM',
    url: 'https://www.kppm.com/',
    platform: 'WordPress',
    description: 'Professional industry website with a clean conversion-oriented structure.',
    services: ['Website Development', 'Website Redesign'],
    accent: 'linear-gradient(135deg, #111827, #8b5cf6)',
  },
  {
    name: 'AMG WORLD',
    url: 'https://www.amgworld.com/',
    platform: 'WordPress',
    description: 'Brand-aware website experience with modern content layout and strong hierarchy.',
    services: ['Website Design', 'Website Development'],
    accent: 'linear-gradient(135deg, #0f172a, #38bdf8)',
  },
  {
    name: 'REDBRICK CM',
    url: 'https://redbrickcm.com/',
    platform: 'WordPress',
    description: 'Business website focused on clear service positioning and responsiveness.',
    services: ['Website Design', 'Responsive Web Design'],
    accent: 'linear-gradient(135deg, #1e293b, #ef4444)',
  },
  {
    name: 'CPM GATEWAY',
    url: 'https://cpmgateway.com/',
    platform: 'WordPress',
    description: 'Responsive website developed with a clear communication flow and visual structure.',
    services: ['Website Development', 'UI/UX Design'],
    accent: 'linear-gradient(135deg, #0b1120, #3b82f6)',
  },
  {
    name: 'KEYSTONE STOR',
    url: 'https://keystonestor.com/',
    platform: 'WordPress',
    description: 'Brand-focused website build emphasizing content flow and effective structure.',
    services: ['Website Design', 'WordPress Development'],
    accent: 'linear-gradient(135deg, #172554, #60a5fa)',
  },
  {
    name: 'TRASH PANDA JUNK N HAUL',
    url: 'https://trashpandajunknhaul.com/',
    platform: 'WordPress',
    description: 'Service business website created for clarity, trust, and mobile responsiveness.',
    services: ['Website Development', 'Landing Page Design'],
    accent: 'linear-gradient(135deg, #111827, #f59e0b)',
  },
  {
    name: 'COX HONEY',
    url: 'https://coxhoney.com/',
    platform: 'WordPress',
    description: 'Brand and conversion-focused web experience with polished presentation.',
    services: ['Website Design', 'Website Redesign'],
    accent: 'linear-gradient(135deg, #1f2937, #fbbf24)',
  },
  {
    name: 'TEMPLARS PLUMBING HEATING AND AIR',
    url: 'https://templarsplumbingheatingandair.com/',
    platform: 'WordPress',
    description: 'Service business website designed for trust, clarity, and lead generation.',
    services: ['Website Development', 'SEO & Website Optimization'],
    accent: 'linear-gradient(135deg, #0f172a, #22c55e)',
  },
  {
    name: 'DAVID J FRANK',
    url: 'https://davidjfrank.com/',
    platform: 'WordPress',
    description: 'Professional website experience built around strong industry positioning.',
    services: ['Website Design', 'Responsive Web Design'],
    accent: 'linear-gradient(135deg, #111827, #64748b)',
  },
  {
    name: 'ROYAL WINDOW TINT',
    url: 'https://royalwindowtint.com/',
    platform: 'WordPress',
    description: 'Service website crafted for engaging presentation and usable navigation.',
    services: ['Website Development', 'UI/UX Design'],
    accent: 'linear-gradient(135deg, #0f172a, #a78bfa)',
  },
  {
    name: 'NANA\'S GREEN TEA',
    url: 'https://nanasgreentealasvegas.com/',
    platform: 'WordPress',
    description: 'Brand-led website experience supporting content clarity and modern presentation.',
    services: ['Website Development', 'Landing Page Design'],
    accent: 'linear-gradient(135deg, #14532d, #4ade80)',
  },
  {
    name: 'MMTNV',
    url: 'https://mmtnv.org/',
    platform: 'WordPress',
    description: 'Informational organization website with strong structure and accessibility emphasis.',
    services: ['Website Design', 'Website Redesign'],
    accent: 'linear-gradient(135deg, #1f2937, #22d3ee)',
  },
  {
    name: 'KM FILM',
    url: 'https://kmfilm508.com/',
    platform: 'WordPress',
    description: 'Creative website structure supporting content storytelling and brand presentation.',
    services: ['Website Design', 'Responsive Web Design'],
    accent: 'linear-gradient(135deg, #0f172a, #f97316)',
  },
  {
    name: 'IDEAL PROTECTION',
    url: 'https://ideal-protection.com/',
    platform: 'WordPress',
    description: 'Service website designed for trust-building and clear calls to action.',
    services: ['Website Development', 'SEO & Website Optimization'],
    accent: 'linear-gradient(135deg, #111827, #3b82f6)',
  },
  {
    name: 'PURPLE FLARE AGENCY',
    url: 'https://purpleflareagency.com/',
    platform: 'WordPress',
    description: 'Creative business website designed around brand personality and conversion flow.',
    services: ['Website Design', 'WordPress Development'],
    accent: 'linear-gradient(135deg, #312e81, #c084fc)',
  },
  {
    name: 'REVD AUTO STYLING',
    url: 'https://revdautostyling.com/',
    platform: 'WordPress',
    description: 'Modern service website with strong visual hierarchy and trust-building design.',
    services: ['Website Development', 'Landing Page Design'],
    accent: 'linear-gradient(135deg, #0f172a, #ef4444)',
  },
  {
    name: 'C&M HOME DESIGNS',
    url: 'https://candmhomedesigns.com/',
    platform: 'WordPress',
    description: 'Brand-forward website experience designed to showcase professionalism and detail.',
    services: ['Website Design', 'Responsive Web Design'],
    accent: 'linear-gradient(135deg, #1f2937, #f59e0b)',
  },
  {
    name: 'TINT AV',
    url: 'https://tintav.com/',
    platform: 'WordPress',
    description: 'Business website with clear content structure and polished responsive layout.',
    services: ['Website Development', 'UI/UX Design'],
    accent: 'linear-gradient(135deg, #0f172a, #60a5fa)',
  },
  {
    name: 'TUCKPOINTING',
    url: 'https://www.tuckpointing.com/',
    platform: 'WordPress',
    description: 'Service website built for architecture-driven trust and useful lead generation.',
    services: ['Website Design', 'SEO & Website Optimization'],
    accent: 'linear-gradient(135deg, #111827, #a16207)',
  },
  {
    name: 'BEARDED BIGFOOT DETAILING',
    url: 'https://beardedbigfootdetailing.com/',
    platform: 'WordPress',
    description: 'Brand-focused service website with modern presentation and easy navigation.',
    services: ['Website Development', 'Responsive Web Design'],
    accent: 'linear-gradient(135deg, #1f2937, #34d399)',
  },
  {
    name: 'BIRMINGHAM WELCOME HOME',
    url: 'https://www.birminghamwelcomehome.com/',
    platform: 'WordPress',
    description: 'Purpose-driven website experience designed for accessibility and clear messaging.',
    services: ['Website Design', 'Landing Page Design'],
    accent: 'linear-gradient(135deg, #0f172a, #facc15)',
  },
];

const testimonials = [
  {
    quote:
      'Editable placeholder testimonial quote. Replace this with a real client review when available.',
    author: 'Client Name',
    company: 'Company Name',
  },
  {
    quote:
      'Another editable placeholder testimonial. This slider is ready for future client feedback and project stories.',
    author: 'Client Name',
    company: 'Company Name',
  },
  {
    quote:
      'A premium testimonial slot for future references, recommendations, and partnership feedback.',
    author: 'Client Name',
    company: 'Company Name',
  },
];

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);
  const [activeBuilder, setActiveBuilder] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setCursor({ x: event.clientX, y: event.clientY, active: true });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const activeServiceData = services[activeService];
  const activeTestimonial = testimonials[testimonialIndex];

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          >
            <div className="preloader-inner">
              <motion.div
                className="preloader-word"
                initial={{ opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                REGAN
              </motion.div>
              <motion.div
                className="preloader-word"
                initial={{ opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              >
                JULIANE
              </motion.div>
              <motion.div
                className="preloader-word"
                initial={{ opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              >
                DIGITAL
              </motion.div>
              <motion.div
                className="preloader-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="custom-cursor"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      >
        <span>VIEW PROJECT</span>
      </div>

      <div className="page-shell">
        <header className="topbar">
          <nav className="nav">
            <a href="#home" className="brand-mark" aria-label="Regan Juliane Digital home">
              REGAN JULIANE DIGITAL
            </a>

            <div className="nav-links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>

            <a href="#contact" className="nav-cta">
              LET&apos;S WORK TOGETHER
            </a>
          </nav>
        </header>

        <main>
          <section id="home" className="hero shell-section">
            <div className="bg-grid" />
            <div className="hero-copy">
              <p className="eyebrow">REGAN JAMES JULIANE</p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <span>WEBSITE</span>
                <span>DEVELOPER</span>
                <span>&amp; DESIGNER</span>
              </motion.h1>
              <motion.p
                className="lede"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              >
                Website Developer &amp; Designer with over 5 years of experience creating
                professional, responsive, and conversion-focused digital experiences.
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <a href="#work" className="primary-button">
                  VIEW MY WORK
                </a>
                <a href="#contact" className="secondary-button">
                  LET&apos;S WORK TOGETHER
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="browser-window browser-large">
                <div className="browser-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="browser-content">
                  <aside className="browser-sidebar">
                    <span className="sidebar-pill active">Overview</span>
                    <span className="sidebar-pill">Services</span>
                    <span className="sidebar-pill">Portfolio</span>
                  </aside>
                  <div className="browser-main">
                    <div className="visual-header">
                      <div className="line short" />
                      <div className="line medium" />
                    </div>
                    <div className="card-grid">
                      <div className="mini-card card-a" />
                      <div className="mini-card card-b" />
                      <div className="mini-card card-c" />
                    </div>
                    <div className="content-blocks">
                      <div className="block large" />
                      <div className="block medium" />
                      <div className="block small" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-panel panel-one">
                <span>WordPress</span>
                <strong>Elementor</strong>
              </div>
              <div className="floating-panel panel-two">
                <span>UI/UX</span>
                <strong>Strategy</strong>
              </div>
              <div className="floating-panel panel-three">
                <span>Responsive</span>
                <strong>Design</strong>
              </div>
            </motion.div>
          </section>

          <section className="intro shell-section">
            <motion.p
              className="statement"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              I DESIGN DIGITAL EXPERIENCES
              <span>THAT LOOK GREAT,</span>
              <span>WORK BEAUTIFULLY,</span>
              <span>AND PERFORM.</span>
            </motion.p>
          </section>

          <section id="about" className="about shell-section">
            <div className="section-heading">
              <p className="eyebrow">ABOUT</p>
              <h2>BUILT FOR BUSINESS, BEAUTY, AND RESULTS.</h2>
            </div>

            <div className="about-grid">
              <motion.div
                className="portrait-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="portrait-figure">
                  <div className="portrait-glow" />
                  <div className="portrait-abstract" />
                </div>
              </motion.div>

              <motion.div
                className="about-copy"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              >
                <p>
                  Results-driven Website Developer &amp; Designer with over 5 years of
                  experience designing and developing professional websites for businesses,
                  entrepreneurs, and organizations.
                </p>
                <p>
                  Proficient in WordPress and its major page builders, with hands-on
                  experience in Shopify, Webflow, Wix, and Squarespace. Experienced in
                  creating responsive, user-friendly websites, landing pages, business
                  websites, e-commerce stores, and custom website layouts focused on
                  usability and conversion.
                </p>
                <p>
                  Experienced in redesigning websites for performance, mobile responsiveness,
                  SEO, and brand-focused digital experiences.
                </p>

                <div className="stats-row">
                  <div>
                    <strong>5+</strong>
                    <span>years experience</span>
                  </div>
                  <div>
                    <strong>WordPress</strong>
                    <span>specialist</span>
                  </div>
                  <div>
                    <strong>Responsive</strong>
                    <span>by default</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="expertise" className="expertise shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">WHAT I DO</p>
              <h2>STRATEGY, DESIGN, DEVELOPMENT, PERFORMANCE.</h2>
            </div>

            <div className="expertise-layout">
              <div className="service-list">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    className={index === activeService ? 'service-item active' : 'service-item'}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                  >
                    <span>{service.title}</span>
                  </button>
                ))}
              </div>

              <motion.div
                key={activeServiceData.title}
                className="service-detail"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="service-index">0{activeService + 1}</div>
                <h3>{activeServiceData.title}</h3>
                <p>{activeServiceData.text}</p>
              </motion.div>
            </div>
          </section>

          <section className="wordpress shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">WORDPRESS SPECIALIZATION</p>
              <h2>
                WORDPRESS
                <span>IS WHERE</span>
                <span>I BUILD.</span>
              </h2>
            </div>

            <div className="wordpress-layout">
              <div className="builder-list">
                {wordpressBuilders.map((builder, index) => (
                  <button
                    type="button"
                    key={builder}
                    className={activeBuilder === index ? 'builder-name active' : 'builder-name'}
                    onMouseEnter={() => setActiveBuilder(index)}
                    onFocus={() => setActiveBuilder(index)}
                  >
                    {builder}
                  </button>
                ))}
              </div>

              <motion.div
                key={wordpressBuilders[activeBuilder]}
                className="builder-preview"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="builder-frame">
                  <div className="builder-head">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="builder-body">
                    <div className="builder-sidebar" />
                    <div className="builder-content">
                      <div className="builder-grid">
                        <div className="builder-card big" />
                        <div className="builder-card" />
                        <div className="builder-card" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="builder-info">
                  <span className="builder-badge">{wordpressBuilders[activeBuilder]}</span>
                  <p>
                    Flexible, efficient, and conversion-focused website builds tailored to the
                    platform architecture and client goals.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="platforms shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">MULTI-PLATFORM EXPERTISE</p>
              <h2>ONE DEVELOPER. MULTIPLE PLATFORMS.</h2>
            </div>

            <div className="platform-marquee">
              <div className="platform-track">
                {[...platformList, ...platformList].map((platform, index) => (
                  <span key={`${platform}-${index}`} className="platform-chip">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="responsive-demo shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">RESPONSIVE DESIGN</p>
              <h2>DESIGNED FOR EVERY SCREEN.</h2>
            </div>

            <div className="device-stage">
              <div className="desktop-device">
                <div className="device-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="device-content">
                  <div className="device-nav" />
                  <div className="device-grid">
                    <div className="device-feature large" />
                    <div className="device-feature" />
                    <div className="device-feature" />
                  </div>
                </div>
              </div>
              <div className="tablet-device">
                <div className="device-bar">
                  <span />
                  <span />
                </div>
                <div className="device-content" />
              </div>
              <div className="mobile-device">
                <div className="device-bar">
                  <span />
                </div>
                <div className="device-content" />
              </div>
            </div>
          </section>

          <section id="work" className="portfolio shell-section">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>WEBSITES DESIGNED AND DEVELOPED ACROSS INDUSTRIES.</h2>
            </div>

            <div className="featured-project">
              <div className="project-visual large-visual">
                <div className="project-window">
                  <div className="browser-topbar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="browser-content large-view">
                    <div className="feature-header" />
                    <div className="feature-body">
                      <div className="feature-panel main" />
                      <div className="feature-panel side" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-meta">
                <p className="project-kicker">FEATURED PROJECT</p>
                <h3>NOVAAMP</h3>
                <a href="https://novaamp.com/" target="_blank" rel="noreferrer">
                  novaamp.com
                </a>
                <p>Business website and marketing-focused digital experience delivered with a modern, conversion-oriented structure.</p>
              </div>
            </div>

            <div className="project-gallery">
              {projects.map((project, index) => (
                <article key={project.name} className="project-card">
                  <div className="project-card-visual" style={{ background: project.accent }}>
                    <div className="project-mini-browser">
                      <div className="browser-topbar">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="mini-browser-body">
                        <div className="mini-browser-line" />
                        <div className="mini-browser-line medium" />
                        <div className="mini-browser-line short" />
                      </div>
                    </div>
                  </div>
                  <div className="project-card-body">
                    <div className="project-number">0{index + 1}</div>
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.platform}</p>
                    </div>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      VIEW PROJECT
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="website-showcase shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">INTERACTIVE WEBSITE SHOWCASE</p>
              <h2>DESIGNED TO PERFORM. BUILT TO IMPRESS.</h2>
            </div>

            <div className="showcase-viewport">
              <div className="showcase-browser">
                <div className="browser-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="showcase-body">
                  <div className="showcase-nav" />
                  <div className="showcase-content-grid">
                    <div className="showcase-card card-one" />
                    <div className="showcase-card card-two" />
                    <div className="showcase-card card-three" />
                  </div>
                  <div className="showcase-footer" />
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="experience shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">EXPERIENCE</p>
              <h2>WEBSITE DEVELOPER &amp; DESIGNER</h2>
            </div>

            <div className="timeline">
              <div className="timeline-line" />
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <span>2021 – PRESENT</span>
                    <span>Freelance / Remote</span>
                  </div>
                  <h3>WEBSITE DEVELOPER &amp; DESIGNER</h3>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <span>2021 – 2024</span>
                    <span>BENTORAH DESIGNS LLC</span>
                  </div>
                  <ul>
                    <li>Designed and developed responsive WordPress websites using Divi, Elementor, and other page builders.</li>
                    <li>Customized websites, functions, pages, members, and third-party integrations according to client requirements.</li>
                    <li>Implemented on-page SEO, image optimization, analytics, and other website improvements.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <span>2024 – 2026</span>
                    <span>DIVINE TECH</span>
                  </div>
                  <ul>
                    <li>Created websites, digital content, graphics, and marketing materials for businesses.</li>
                    <li>Developed and supported digital marketing campaigns alongside website projects.</li>
                    <li>Assisted with email marketing, SEO, lead generation, and content planning.</li>
                    <li>Assisted with audience, competitor, keyword, and content opportunity research.</li>
                    <li>Monitored website and campaign performance to improve digital marketing results.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="toolkit shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">SKILLS / TOOLKIT</p>
              <h2>TOOLS, SYSTEMS, AND A CREATIVE DEVELOPMENT STACK.</h2>
            </div>

            <div className="tool-cloud">
              {[
                'WordPress',
                'Elementor',
                'Gutenberg',
                'Bricks Builder',
                'Divi',
                'Beaver Builder',
                'Avada',
                'WPBakery',
                'Shopify',
                'Webflow',
                'Wix',
                'Squarespace',
                'WooCommerce',
                'UI/UX Design',
                'Responsive Web Design',
                'Landing Page Design',
                'Website Redesign',
                'SEO & Website Optimization',
                'Performance Optimization',
                'E-Commerce Development',
                'Figma',
                'Adobe Photoshop',
                'Adobe Illustrator',
                'Google Analytics',
                'Google Search Console',
                'Hotjar',
                'Microsoft Office',
              ].map((tool) => (
                <span key={tool} className="tool-pill">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="why shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">WHY WORK WITH ME</p>
              <h2>WHY WORK WITH ME</h2>
            </div>

            <div className="why-grid">
              {[
                'Strong attention to detail',
                'Problem-solving and analytical thinking',
                'Excellent communication and client collaboration',
                'Time management and ability to meet deadlines',
                'Strategic planning and decision-making',
                'Cross-functional team leadership',
                'Continuous learning and adaptability to new technologies',
              ].map((item) => (
                <motion.div
                  key={item}
                  className="why-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="why-number">01</span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="testimonials shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">TESTIMONIALS</p>
              <h2>REAL STORIES WHEN READY.</h2>
            </div>

            <div className="testimonial-slider">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.author + testimonialIndex}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <p>“{activeTestimonial.quote}”</p>
                  <div className="testimonial-meta">
                    <span>{activeTestimonial.author}</span>
                    <span>{activeTestimonial.company}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="testimonial-controls">
                <button
                  type="button"
                  onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </section>

          <section className="final-cta shell-section">
            <div className="cta-content">
              <p className="eyebrow">LET&apos;S BUILD</p>
              <h2>
                LET&apos;S BUILD
                <span>SOMETHING</span>
                <span>GREAT TOGETHER.</span>
              </h2>
              <a href="#contact" className="primary-button large-button">
                LET&apos;S WORK TOGETHER
              </a>
            </div>
          </section>

          <section id="contact" className="contact shell-section">
            <div className="section-heading narrow">
              <p className="eyebrow">CONTACT</p>
              <h2>START YOUR NEXT PROJECT.</h2>
            </div>

            <div className="contact-grid">
              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <a href="mailto:reganjamesjuliane@gmail.com">reganjamesjuliane@gmail.com</a>
                </div>
                <div>
                  <span>Phone</span>
                  <a href="tel:+639294966984">+63 929 496 6984</a>
                </div>
              </div>

              <form className="contact-form">
                <div className="field-row">
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Your name" />
                  </label>
                </div>
                <div className="field-row two-up">
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Your email" />
                  </label>
                  <label>
                    <span>Project Type</span>
                    <input type="text" name="projectType" placeholder="Website, e-commerce..." />
                  </label>
                </div>
                <div className="field-row">
                  <label>
                    <span>Message</span>
                    <textarea name="message" placeholder="Tell me about your project" rows={5} />
                  </label>
                </div>
                <button type="submit" className="primary-button">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-brand-group">
            <span className="brand-mark">REGAN JULIANE DIGITAL</span>
            <p>Website Developer &amp; Designer</p>
          </div>

          <div className="footer-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-meta">
            <a href="mailto:reganjamesjuliane@gmail.com">reganjamesjuliane@gmail.com</a>
            <button type="button" className="back-to-top">
              ↑
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
