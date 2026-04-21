import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import Skiing from './components/Skiing';
import About from './components/About';
import { resumeData } from './data/resume';

const SKILLS = [
  'Python', 'Java', 'Go', 'TypeScript', 'C++', 'SQL',
  'Kafka', 'Redis', 'Docker', 'K8s', 'AWS', 'Appium',
  'Pytest', 'AI Agents', 'Spring Boot', 'Netty', 'Zookeeper', 'Django'
];

// ─── Navbar ────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.25s ease',
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '0 clamp(1.5rem, 4vw, 4rem)', height: '62px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease',
      background: scrolled ? 'rgba(10, 9, 8, 0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--gold-line)' : '1px solid transparent',
    }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '34px', height: '34px',
          border: '1px solid var(--gold)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          color: 'var(--gold)', letterSpacing: '0.05em', fontWeight: 500,
          flexShrink: 0,
        }}>YX</div>
        <span style={{
          fontFamily: 'var(--font-ui)', fontSize: '10px', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: 'rgba(107, 104, 101, 0.7)', fontWeight: 700,
        }}>YUXIANG FAN</span>
      </Link>

      <div style={{ display: 'flex', gap: 'clamp(1.5rem, 3vw, 2.5rem)', alignItems: 'center' }}>
        {isHome && (
          <>
            <a href="#stack" style={linkStyle}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >Stack</a>
            <a href="#projects" style={linkStyle}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >Work</a>
          </>
        )}
        <Link to="/about" style={linkStyle}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}
        >About</Link>
        <a
          href="https://fyxai.github.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...linkStyle,
            padding: '0.4rem 0.9rem',
            border: '1px solid var(--gold-line)',
            color: 'var(--gold)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--gold-dim)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
          }}
        >AI_BOT ↗</a>
      </div>
    </nav>
  );
};

// ─── Skill Marquee ─────────────────────────────────────────────────────────
const Marquee = () => (
  <div style={{
    overflow: 'hidden', padding: '1.1rem 0',
    borderTop: '1px solid var(--gold-line)',
    borderBottom: '1px solid var(--gold-line)',
  }}>
    <div className="marquee-track">
      {[...SKILLS, ...SKILLS].map((skill, i) => (
        <span key={i} style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--muted)', padding: '0 1.75rem',
          display: 'inline-flex', alignItems: 'center', gap: '1.75rem',
          whiteSpace: 'nowrap',
        }}>
          {skill}
          <span style={{ color: 'var(--gold)', fontSize: '5px', opacity: 0.7 }}>◆</span>
        </span>
      ))}
    </div>
  </div>
);

// ─── Project Card ──────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => project.link && window.open(project.link, '_blank')}
      style={{
        padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 3vw, 2rem)',
        borderBottom: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: 'clamp(60px, 8vw, 90px) 1fr auto',
        gap: 'clamp(1rem, 2.5vw, 2rem)',
        alignItems: 'flex-start',
        cursor: project.link ? 'pointer' : 'default',
        transition: 'background 0.3s ease, border-radius 0.3s ease',
        background: hovered ? 'var(--bg-card)' : 'transparent',
        borderRadius: hovered ? '16px' : '0',
      }}
    >
      {/* Decorative number */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 600,
        color: hovered ? 'rgba(201, 168, 76, 0.35)' : 'rgba(240, 237, 232, 0.07)',
        transition: 'color 0.35s ease',
        lineHeight: 1,
        userSelect: 'none',
        paddingTop: '0.1em',
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
          letterSpacing: '0.2em', color: 'var(--gold)',
          textTransform: 'uppercase', marginBottom: '0.5rem',
        }}>{project.category}</div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          fontWeight: 500, margin: 0, marginBottom: '0.4rem',
          letterSpacing: '-0.01em',
          color: hovered ? 'var(--white)' : 'rgba(240, 237, 232, 0.88)',
          transition: 'color 0.3s ease',
        }}>{project.title}</h3>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hovered ? 1 : 0,
            height: hovered ? 'auto' : 0,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ overflow: 'hidden' }}
        >
          <p style={{
            fontFamily: 'var(--font-ui)', fontSize: '0.83rem',
            color: 'var(--muted)', margin: '0 0 1rem', lineHeight: 1.65,
          }}>{project.description}</p>
        </motion.div>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: hovered ? '0' : '0.6rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
              padding: '0.2rem 0.6rem',
              background: 'rgba(201, 168, 76, 0.06)',
              border: '1px solid rgba(201, 168, 76, 0.18)',
              borderRadius: '4px', color: 'var(--muted)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      {project.link && (
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
          transition={{ duration: 0.2 }}
          style={{ paddingTop: '0.3rem' }}
        >
          <ArrowUpRight size={18} style={{ color: 'var(--gold)' }} />
        </motion.div>
      )}
    </motion.div>
  );
};

// ─── Landing Page ───────────────────────────────────────────────────────────
const LandingPage = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const STACK_GROUPS = [
    {
      label: 'Core Languages',
      accent: 'rgba(201, 168, 76, 0.1)',
      accentBorder: 'rgba(201, 168, 76, 0.22)',
      accentText: '#C9A84C',
      items: ['Python', 'Java', 'Go', 'TypeScript', 'C++', 'SQL'],
      description: 'Polyglot engineer fluent across backend and systems.',
    },
    {
      label: 'Test & Automation',
      accent: 'rgba(123, 158, 166, 0.1)',
      accentBorder: 'rgba(123, 158, 166, 0.22)',
      accentText: '#7B9EA6',
      items: ['Pytest', 'Appium', 'Lark API', 'CI/CD Pipelines'],
      description: 'Scalable testing infrastructure and intelligent release automation.',
    },
    {
      label: 'Systems & Cloud',
      accent: 'rgba(155, 127, 182, 0.1)',
      accentBorder: 'rgba(155, 127, 182, 0.22)',
      accentText: '#9B7FB6',
      items: ['Kafka', 'Redis', 'Docker', 'K8s', 'AWS', 'Netty', 'Zookeeper'],
      description: 'Distributed systems design and cloud-native deployments.',
    },
    {
      label: 'AI Integration',
      accent: 'rgba(125, 184, 125, 0.1)',
      accentBorder: 'rgba(125, 184, 125, 0.22)',
      accentText: '#7DB87D',
      items: ['LLM Tooling', 'AI Agents', 'Release Intelligence'],
      description: 'Integrating autonomous agents into validation and QA workflows.',
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 clamp(2rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        paddingTop: '8rem',
        position: 'relative',
      }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <span className="status-dot" style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'var(--gold)', display: 'inline-block', flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)',
          }}>SDET @ TikTok — San Jose, CA</span>
        </motion.div>

        {/* Name — line 1 */}
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.28, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4.5rem, 13vw, 15rem)',
              fontWeight: 300, lineHeight: 0.88,
              margin: 0, letterSpacing: '-0.025em',
              color: 'var(--white)',
            }}>Yuxiang</h1>
          </motion.div>
        </div>

        {/* Name — line 2 */}
        <div style={{ overflow: 'hidden', marginLeft: 'clamp(0.5rem, 2vw, 2rem)' }}>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.42, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(0.5rem, 1.5vw, 1.5rem)', flexWrap: 'wrap' }}
          >
            <span style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
              fontSize: 'clamp(2.5rem, 7vw, 8rem)',
              color: 'var(--gold)', letterSpacing: '-0.01em',
            }}>(Terry)</span>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(4.5rem, 13vw, 15rem)', lineHeight: 0.88,
              color: 'var(--white)', letterSpacing: '-0.025em',
            }}>Fan.</span>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}
        >
          <div style={{ height: '1px', width: '2.5rem', background: 'var(--gold-line)', flexShrink: 0 }} />
          <p style={{
            fontFamily: 'var(--font-ui)', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            color: 'var(--muted)', margin: 0, maxWidth: '520px', lineHeight: 1.65,
            fontWeight: 500,
          }}>
            Building resilient systems and intelligent automation that ensures quality at scale.{' '}
            <Link to="/about" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>
              About me →
            </Link>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 4rem)', marginTop: 'clamp(2.5rem, 5vw, 4rem)', flexWrap: 'wrap' }}
        >
          {[
            { num: '3+', label: 'Years Experience' },
            { num: '7+', label: 'Projects Built' },
            { num: '3.96', label: 'GPA / USC' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                fontWeight: 600, lineHeight: 1, color: 'var(--white)',
              }}>{num}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                letterSpacing: '0.2em', color: 'var(--muted)',
                textTransform: 'uppercase', marginTop: '0.3rem',
              }}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{
            position: 'absolute', bottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            right: 'clamp(2rem, 6vw, 5rem)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
            letterSpacing: '0.3em', color: 'rgba(107, 104, 101, 0.5)',
            textTransform: 'uppercase', writingMode: 'vertical-rl',
          }}>Scroll</span>
          <div className="scroll-indicator-line" style={{
            width: '1px', height: '2.5rem',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
          }} />
        </motion.div>
      </section>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── Stack ── */}
      <section id="stack" style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 5rem)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem', display: 'flex', alignItems: 'flex-end', gap: '1.75rem' }}
        >
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 8vw, 7rem)',
            fontWeight: 600, color: 'rgba(201, 168, 76, 0.12)', lineHeight: 1,
            userSelect: 'none',
          }}>01</span>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.25em', color: 'var(--gold)',
              textTransform: 'uppercase', marginBottom: '0.4rem',
            }}>Technical Foundation</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              fontWeight: 600, margin: 0, letterSpacing: '-0.025em',
            }}>Stack & Expertise</h2>
          </div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {STACK_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--bg-card)', borderRadius: '20px',
                padding: '1.75rem 1.75rem 1.5rem',
                border: '1px solid var(--border)',
                transition: 'border-color 0.35s ease, transform 0.35s ease',
              }}
              whileHover={{ borderColor: group.accentBorder, y: -4 }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                letterSpacing: '0.2em', color: group.accentText,
                textTransform: 'uppercase', marginBottom: '0.85rem',
              }}>{group.label}</div>
              <p style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.82rem',
                color: 'var(--muted)', margin: '0 0 1.25rem', lineHeight: 1.55,
              }}>{group.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {group.items.map(item => (
                  <span key={item} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                    padding: '0.25rem 0.65rem',
                    background: group.accent, border: `1px solid ${group.accentBorder}`,
                    borderRadius: '5px', color: 'var(--muted)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{
        padding: '0 clamp(2rem, 6vw, 5rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem', display: 'flex', alignItems: 'flex-end', gap: '1.75rem' }}
        >
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 8vw, 7rem)',
            fontWeight: 600, color: 'rgba(201, 168, 76, 0.12)', lineHeight: 1,
            userSelect: 'none',
          }}>02</span>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.25em', color: 'var(--gold)',
              textTransform: 'uppercase', marginBottom: '0.4rem',
            }}>Selected Work</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              fontWeight: 600, margin: 0, letterSpacing: '-0.025em',
            }}>Projects.</h2>
          </div>
        </motion.div>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {resumeData.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </section>
    </>
  );
};

// ─── Footer ─────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border)',
    padding: 'clamp(3rem, 6vw, 4.5rem) clamp(2rem, 6vw, 5rem)',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: '2rem',
  }}>
    <div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '0.3rem',
      }}>Yuxiang (Terry) Fan</div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
        letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase',
      }}>Engineered for the future · © 2026</div>
    </div>

    <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
      {[
        { Icon: Github, label: 'GitHub', url: 'https://github.com/Terry-Yuxiang' },
        { Icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/yuxiangf/' },
        { Icon: Mail, label: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=yuxiangfan.work@gmail.com' },
      ].map(({ Icon, label, url }) => (
        <motion.a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
            color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; }}
        >
          <Icon size={17} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>{label}</span>
        </motion.a>
      ))}
    </div>

    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
      letterSpacing: '0.18em', color: 'rgba(107, 104, 101, 0.35)',
      textTransform: 'uppercase', textAlign: 'right',
    }}>
      <Link to="/skiing" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
        onMouseEnter={e => e.target.style.color = 'var(--muted)'}
        onMouseLeave={e => e.target.style.color = 'rgba(107, 104, 101, 0.35)'}
      >Ski Log</Link>
      <span style={{ display: 'block', marginTop: '0.3rem' }}>ALL SYSTEMS GO</span>
    </div>
  </footer>
);

// ─── App ─────────────────────────────────────────────────────────────────────
const App = () => (
  <div style={{
    minHeight: '100vh', background: 'var(--bg)',
    color: 'var(--white)', overflowX: 'hidden',
  }}>
    <Navbar />

    {/* Ambient warm glow */}
    <div style={{
      position: 'fixed', top: '-15%', right: '-10%',
      width: '45vw', height: '45vw',
      background: 'radial-gradient(circle, rgba(201, 168, 76, 0.055) 0%, transparent 65%)',
      pointerEvents: 'none', zIndex: 0,
    }} />
    <div style={{
      position: 'fixed', bottom: '-15%', left: '-10%',
      width: '35vw', height: '35vw',
      background: 'radial-gradient(circle, rgba(155, 127, 182, 0.04) 0%, transparent 65%)',
      pointerEvents: 'none', zIndex: 0,
    }} />

    <div style={{ position: 'relative', zIndex: 1 }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/skiing" element={<Skiing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

export default App;
