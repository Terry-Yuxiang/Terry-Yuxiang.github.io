import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resume';

const SectionLabel = ({ number, tag, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    style={{ marginBottom: '3.5rem', display: 'flex', alignItems: 'flex-end', gap: '1.5rem' }}
  >
    <span style={{
      fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 7vw, 6rem)',
      fontWeight: 600, color: 'rgba(201, 168, 76, 0.12)', lineHeight: 1, userSelect: 'none',
    }}>{number}</span>
    <div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
        letterSpacing: '0.25em', color: 'var(--gold)',
        textTransform: 'uppercase', marginBottom: '0.35rem',
      }}>{tag}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
        fontWeight: 600, margin: 0, letterSpacing: '-0.025em',
      }}>{title}</h2>
    </div>
  </motion.div>
);

const About = () => {
  const CONNECT = [
    {
      Icon: Github,
      label: 'GitHub',
      value: '@Terry-Yuxiang',
      url: 'https://github.com/Terry-Yuxiang',
      accent: '#C9A84C',
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/yuxiangf',
      url: 'https://www.linkedin.com/in/yuxiangf/',
      accent: '#7B9EA6',
    },
    {
      Icon: Mail,
      label: 'Email',
      value: 'yuxiangfan.work@gmail.com',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=yuxiangfan.work@gmail.com',
      accent: '#9B7FB6',
    },
  ];

  return (
    <main style={{
      maxWidth: '900px', margin: '0 auto',
      padding: 'clamp(7rem, 12vw, 10rem) clamp(2rem, 6vw, 4rem) clamp(5rem, 10vw, 8rem)',
    }}>
      {/* ── Page title ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: 'clamp(4rem, 8vw, 7rem)' }}
      >
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
          letterSpacing: '0.3em', color: 'var(--gold)',
          textTransform: 'uppercase', marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--gold)', display: 'inline-block', flexShrink: 0,
          }} />
          Profile
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          fontWeight: 300, lineHeight: 0.88,
          margin: '0 0 0.15em', letterSpacing: '-0.025em',
        }}>About</h1>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          fontWeight: 700, lineHeight: 0.88,
          margin: 0, letterSpacing: '-0.025em',
          color: 'var(--gold)',
        }}>Me.</h1>

        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          color: 'var(--muted)', maxWidth: '600px',
          lineHeight: 1.7, margin: '2.5rem 0 0', fontWeight: 500,
        }}>
          Computer Science graduate from{' '}
          <a href="https://www.usc.edu/" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--white)', textDecoration: 'none', borderBottom: '1px solid var(--gold-line)' }}>
            USC
          </a>{' '}
          currently building intelligent test automation at{' '}
          <span style={{ color: 'var(--white)', fontWeight: 600 }}>TikTok</span>.
          I find beauty in resilient systems and precision engineering.
        </p>
      </motion.div>

      {/* ── Connect ── */}
      <section style={{ marginBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <SectionLabel number="01" tag="Contact" title="Connect." />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {CONNECT.map(({ Icon, label, value, url, accent }, i) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.1rem 1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px', textDecoration: 'none',
                transition: 'border-color 0.3s ease',
                minWidth: '220px', flex: '1',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${accent === '#C9A84C' ? '201,168,76' : accent === '#7B9EA6' ? '123,158,166' : '155,127,182'}, 0.35)`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: `rgba(${accent === '#C9A84C' ? '201,168,76' : accent === '#7B9EA6' ? '123,158,166' : '155,127,182'}, 0.1)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={16} style={{ color: accent }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                  letterSpacing: '0.2em', color: 'var(--muted)',
                  textTransform: 'uppercase', marginBottom: '0.2rem',
                }}>{label}</div>
                <div style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.82rem',
                  color: 'var(--white)', fontWeight: 600,
                }}>{value}</div>
              </div>
              <ArrowUpRight size={14} style={{ color: 'var(--muted)', marginLeft: 'auto' }} />
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section style={{ marginBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <SectionLabel number="02" tag="Career" title="Experience." />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: '12px', bottom: '12px',
            width: '1px', background: 'linear-gradient(to bottom, var(--gold-line), transparent)',
          }} />

          <div style={{ paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: '-2.5rem', top: '0.55rem',
                  width: '7px', height: '7px',
                  background: i === 0 ? 'var(--gold)' : 'var(--bg-card)',
                  border: `1px solid ${i === 0 ? 'var(--gold)' : 'var(--muted)'}`,
                  borderRadius: '50%', transform: 'translateX(-3px)',
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    fontWeight: i === 0 ? 600 : 400,
                    margin: 0, letterSpacing: '-0.01em',
                    color: i === 0 ? 'var(--white)' : 'rgba(240,237,232,0.7)',
                  }}>{exp.company}</h3>

                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                    letterSpacing: '0.15em', color: 'var(--muted)',
                    textTransform: 'uppercase', paddingTop: '0.4rem',
                  }}>{exp.period}</span>
                </div>

                <div style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.82rem',
                  color: 'var(--gold)', marginBottom: '0.5rem', fontWeight: 600,
                  letterSpacing: '0.02em',
                }}>{exp.role}</div>

                <p style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.85rem',
                  color: 'var(--muted)', margin: '0 0 1rem', lineHeight: 1.65,
                  maxWidth: '580px',
                }}>{exp.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.57rem',
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(201,168,76,0.06)',
                      border: '1px solid rgba(201,168,76,0.18)',
                      borderRadius: '4px', color: 'var(--muted)',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section>
        <SectionLabel number="03" tag="Academic" title="Education." />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            {
              school: 'University of Southern California',
              degree: 'Master of Science, Computer Science',
              period: 'Aug 2022 — Dec 2024',
              location: 'Los Angeles, CA',
              gpa: '3.96 / 4.0',
              url: 'https://www.usc.edu/',
              highlight: true,
            },
            {
              school: 'Central South University',
              degree: 'Bachelor of Engineering',
              period: 'Sep 2018 — Jun 2022',
              location: 'Changsha, China',
              gpa: '3.57 / 4.0',
              url: 'https://en.csu.edu.cn/',
              highlight: false,
            },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: 'var(--bg-card)', borderRadius: '18px',
                padding: '1.75rem 2rem',
                border: edu.highlight ? '1px solid rgba(201,168,76,0.25)' : '1px solid var(--border)',
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem',
              }}
            >
              <div>
                <a href={edu.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    fontWeight: 600, margin: '0 0 0.4rem',
                    color: 'var(--white)', letterSpacing: '-0.01em',
                  }}>{edu.school}</h3>
                </a>
                <div style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.82rem',
                  color: 'var(--gold)', fontWeight: 600, marginBottom: '0.75rem',
                }}>{edu.degree}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  letterSpacing: '0.15em', color: 'var(--muted)',
                  textTransform: 'uppercase',
                }}>GPA: {edu.gpa}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                  letterSpacing: '0.12em', color: 'var(--muted)',
                  textTransform: 'uppercase', marginBottom: '0.3rem',
                }}>{edu.period}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                  letterSpacing: '0.12em', color: 'rgba(107,104,101,0.5)',
                  textTransform: 'uppercase',
                }}>{edu.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
