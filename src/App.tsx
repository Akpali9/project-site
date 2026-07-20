import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

// ── Types ──────────────────────────────────────────────────────────────────────
type Square = 'X' | 'O' | null

// ── Data ───────────────────────────────────────────────────────────────────────
const graduants = [
  {
    id: 1,
    name: 'Amara Osei',
    aspiration: 'AI Engineer at a global tech firm',
    dob: 'March 12, 2007',
    photo: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop&auto=format',
  },
   {
    id: 7,
    name: 'Amara Osei',
    aspiration: 'AI Engineer at a global tech firm',
    dob: 'March 12, 2007',
    photo: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Esi Mensah',
    aspiration: 'Full-Stack Software Developer',
    dob: 'January 22, 2008',
    photo: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Kwame Asante',
    aspiration: 'Data Scientist & Machine Learning Researcher',
    dob: 'July 5, 2007',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 4,
    name: 'Abena Darko',
    aspiration: 'UX Designer & Product Innovator',
    dob: 'November 14, 2007',
    photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 5,
    name: 'Yaw Adjei',
    aspiration: 'Tech Entrepreneur & Startup Founder',
    dob: 'April 3, 2008',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 6,
    name: 'Akosua Boateng',
    aspiration: 'Cybersecurity Analyst & Researcher',
    dob: 'September 8, 2007',
    photo: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&auto=format',
  },
]

const SCHEDULE = [
  { time: '08:00 AM', event: 'Arrival & Guest Registration', icon: '🎓' },
  { time: '09:00 AM', event: 'Welcome Address by the Principal', icon: '🎤' },
  { time: '09:30 AM', event: 'National Anthem & School Hymn', icon: '🎵' },
  { time: '10:00 AM', event: 'Keynote Address', icon: '📢' },
  { time: '10:45 AM', event: 'Academic Awards Presentation', icon: '🏆' },
  { time: '11:30 AM', event: 'Graduation Procession', icon: '🎓' },
  { time: '12:30 PM', event: 'Lunch Break', icon: '🍽️' },
  { time: '02:00 PM', event: 'Student Testimonials', icon: '💬' },
  { time: '02:30 PM', event: 'AI Class Showcase', icon: '🤖' },
  { time: '03:00 PM', event: 'Cultural Performances & Entertainment', icon: '🎭' },
  { time: '04:00 PM', event: 'Valedictorian Address', icon: '⭐' },
  { time: '04:30 PM', event: 'Certificate Presentation Ceremony', icon: '📜' },
  { time: '05:30 PM', event: 'Closing Remarks & Benediction', icon: '🙏' },
  { time: '06:00 PM', event: 'Reception & Networking', icon: '🥂' },
]

const AI_VIDEOS = [
  {
    id: 'kCc8FmEb1nY',
    title: 'Neural Networks: Zero to Hero',
    channel: 'Andrej Karpathy',
    description: 'Building a character-level language model entirely from scratch — exactly what we explored in class.',
  },
  {
    id: 'aircAruvnKk',
    title: 'But what is a Neural Network?',
    channel: '3Blue1Brown',
    description: 'The visual intuition behind neural networks that made everything click for us.',
  },
  {
    id: 'OFS90-FX6pg',
    title: 'Machine Learning for Everyone',
    channel: 'StatQuest',
    description: 'Clear, fun explainers on the core ML algorithms we applied in our AI projects.',
  },
]

const SCHOOL_PHOTOS = [
  {
    label: 'Library',
    url: 'https://images.unsplash.com/photo-1741707596397-efaae09503b5?w=900&h=600&fit=crop&auto=format',
    caption: 'Our state-of-the-art library — a sanctuary for curious minds',
  },
  {
    label: 'Science Lab',
    url: 'https://images.unsplash.com/photo-1613271752699-ede48a285196?w=900&h=600&fit=crop&auto=format',
    caption: 'Where hypotheses become discoveries',
  },
  {
    label: 'Classroom',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=600&fit=crop&auto=format',
    caption: 'Every great journey began right here',
  },
]

const GITHUB_STEPS = [
  {
    step: 1,
    title: 'Visit GitHub.com',
    detail: 'Open your browser and navigate to https://github.com. GitHub is where the world builds software — over 100 million developers call it home.',
  },
  {
    step: 2,
    title: 'Click "Sign Up"',
    detail: 'Click the green "Sign up" button in the top-right corner of the homepage to begin creating your account.',
  },
  {
    step: 3,
    title: 'Enter Your Details',
    detail: 'Provide your email address, create a strong password, and choose a unique username. This username will be your permanent developer identity.',
  },
  {
    step: 4,
    title: 'Verify Your Email',
    detail: 'GitHub will send a verification email. Open it and click the confirmation link to activate your account and unlock all features.',
  },
  {
    step: 5,
    title: 'Complete Your Profile',
    detail: 'Add a profile photo, a short bio, and your school or location. A complete profile opens more collaboration doors.',
  },
  {
    step: 6,
    title: 'Create Your First Repository',
    detail: "Click \"New\" on your dashboard, name it \"hello-world\", tick \"Add a README file\", and click \"Create repository\". You're officially a developer!",
  },
  {
    step: 7,
    title: 'Explore & Contribute',
    detail: 'Follow classmates, star projects you admire, and start pushing your own code. GitHub is your living portfolio — keep it active.',
  },
]

// ── Helpers ────────────────────────────────────────────────────────────────────
function calculateWinner(squares: Square[]): Square {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ]
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

// ── Design tokens ──────────────────────────────────────────────────────────────
const GOLD = '#c9a84c'
const GOLD_DIM = 'rgba(201,168,76,0.2)'
const GOLD_MID = 'rgba(201,168,76,0.4)'
const BG_DARK = '#0a0e1a'
const BG_PANEL = '#0d1120'
const BG_CARD = '#101828'
const TEXT_CREAM = '#e8e0d0'
const TEXT_MID = '#b8b0a0'
const TEXT_MUTED = '#8a8070'
const SERIF = '"Playfair Display", serif'
const SANS = '"Inter", sans-serif'

// ── Responsive CSS injected once ───────────────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      /* Nav */
      .nav-inner { max-width:1200px; margin:0 auto; padding:0 24px; display:flex; align-items:center; justify-content:space-between; height:62px; }
      .nav-links { display:flex; gap:28px; flex-wrap:wrap; align-items:center; }
      .nav-hamburger { display:none; background:none; border:1px solid ${GOLD_DIM}; color:${GOLD}; padding:6px 10px; cursor:pointer; font-size:18px; line-height:1; }
      .nav-mobile-menu { display:none; flex-direction:column; gap:0; background:rgba(10,14,26,0.98); border-top:1px solid ${GOLD_DIM}; }
      .nav-mobile-menu.open { display:flex; }
      .nav-mobile-link { color:${TEXT_CREAM}; font-size:13px; letter-spacing:0.1em; text-decoration:none; text-transform:uppercase; padding:16px 24px; border-bottom:1px solid rgba(201,168,76,0.08); transition:color 0.2s, background 0.2s; }
      .nav-mobile-link:hover { color:${GOLD}; background:rgba(201,168,76,0.06); }

      /* Sections */
      .section-pad { padding:100px 24px; }

      /* graduants */
      .graduants-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:28px; }

      /* Schedule timeline */
      .schedule-list { position:relative; }
      .schedule-line { position:absolute; left:112px; top:12px; bottom:12px; width:1px; background:linear-gradient(180deg,transparent,${GOLD_MID} 8%,${GOLD_MID} 92%,transparent); }
      .schedule-row { display:flex; align-items:flex-start; margin-bottom:24px; position:relative; }
      .schedule-time { width:112px; flex-shrink:0; padding-right:20px; padding-top:14px; text-align:right; color:${GOLD}; font-size:12px; font-family:monospace; font-weight:700; letter-spacing:0.05em; }
      .schedule-dot { position:absolute; left:108px; top:14px; width:9px; height:9px; border-radius:50%; background:${GOLD}; border:2px solid ${BG_DARK}; box-shadow:0 0 10px rgba(201,168,76,0.7); z-index:1; }
      .schedule-content { flex:1; margin-left:28px; background:rgba(201,168,76,0.04); border:1px solid rgba(201,168,76,0.12); padding:14px 20px; transition:border-color 0.25s,background 0.25s; }
      .schedule-content:hover { border-color:${GOLD_MID}; background:rgba(201,168,76,0.08); }

      /* Campus */
      .campus-grid { display:grid; grid-template-columns:3fr 2fr; gap:32px; align-items:start; }
      .campus-main { position:relative; height:480px; background:${BG_CARD}; overflow:hidden; }

      /* Videos */
      .videos-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(340px,1fr)); gap:28px; }

      /* Hero corners */
      .hero-corner { position:absolute; width:80px; height:80px; }

      /* GitHub steps */
      .gh-step { display:flex; gap:24px; background:rgba(201,168,76,0.03); border:1px solid ${GOLD_DIM}; padding:24px 28px; transition:border-color 0.3s,background 0.3s; }
      .gh-step:hover { border-color:${GOLD_MID}; background:rgba(201,168,76,0.06); }

      /* Scoreboard */
      .scoreboard { display:flex; gap:16px; margin-bottom:32px; justify-content:center; }

      /* ── Mobile ≤ 640px ── */
      @media (max-width:640px) {
        .nav-links { display:none; }
        .nav-hamburger { display:block; }
        .section-pad { padding:64px 16px; }
        .hero-corner { display:none; }
        .graduants-grid { grid-template-columns:1fr; }
        .schedule-line { left:72px; }
        .schedule-time { width:72px; font-size:10px; padding-right:12px; }
        .schedule-dot { left:68px; }
        .schedule-content { margin-left:20px; padding:12px 14px; }
        .campus-grid { grid-template-columns:1fr; }
        .campus-main { height:280px; }
        .videos-grid { grid-template-columns:1fr; }
        .gh-step { padding:18px 16px; gap:16px; }
        .scoreboard { gap:10px; }
      }

      /* ── Tablet 641–1024px ── */
      @media (min-width:641px) and (max-width:1024px) {
        .section-pad { padding:80px 32px; }
        .campus-grid { grid-template-columns:1fr; }
        .campus-main { height:360px; }
        .graduants-grid { grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); }
        .videos-grid { grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); }
      }
    `}</style>
  )
}

// ── Shared components ──────────────────────────────────────────────────────────
function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, maxWidth: 280, margin: '20px auto 0' }}>
      <div style={{ flex: 1, height: 1, background: GOLD_MID }} />
      <span style={{ color: GOLD, fontSize: 12 }}>✦</span>
      <div style={{ flex: 1, height: 1, background: GOLD_MID }} />
    </div>
  )
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 56 }}>
      <p style={{ color: GOLD, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 14 }}>{label}</p>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: TEXT_CREAM, fontWeight: 700, lineHeight: 1.15 }}>{title}</h2>
      <Divider />
    </div>
  )
}

// ── Nav ────────────────────────────────────────────────────────────────────────
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { href: '#graduants', label: 'graduants' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#videos', label: 'AI Classes' },
    { href: '#campus', label: 'Campus' },
    { href: '#game', label: 'XO Game' },
    { href: '#github', label: 'GitHub' },
    { href: '#qr', label: 'QR Code' },
  ]
  return (
    <nav style={{ background: 'rgba(10,14,26,0.97)', backdropFilter: 'blur(16px)', borderBottom: `1px solid ${GOLD_DIM}`, position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="nav-inner">
        <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: SERIF, color: GOLD, fontSize: 15, fontWeight: 700, letterSpacing: '0.06em' }}>
            ENZY ROYAL COLLEGE
          </span>
        </a>
        {/* Desktop links */}
        <div className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: TEXT_CREAM, fontSize: 12, letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase', opacity: 0.7, transition: 'opacity 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = GOLD }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = TEXT_CREAM }}
            >
              {l.label}
            </a>
          ))}
        </div>
        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile dropdown */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: `radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 60%), linear-gradient(160deg, #0a0e1a 0%, #0e1830 50%, #0a0e1a 100%)`,
      overflow: 'hidden',
    }}>
      {/* Corner ornaments — hidden on mobile via CSS */}
      <div className="hero-corner" style={{ top: 40, left: 40, borderTop: `1px solid ${GOLD_MID}`, borderLeft: `1px solid ${GOLD_MID}` }} />
      <div className="hero-corner" style={{ top: 40, right: 40, borderTop: `1px solid ${GOLD_MID}`, borderRight: `1px solid ${GOLD_MID}` }} />
      <div className="hero-corner" style={{ bottom: 40, left: 40, borderBottom: `1px solid ${GOLD_MID}`, borderLeft: `1px solid ${GOLD_MID}` }} />
      <div className="hero-corner" style={{ bottom: 40, right: 40, borderBottom: `1px solid ${GOLD_MID}`, borderRight: `1px solid ${GOLD_MID}` }} />

      <div style={{ textAlign: 'center', padding: '60px 24px', maxWidth: 860, position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{ flex: 1, maxWidth: 140, height: 1, background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
          <span style={{ color: GOLD, fontSize: 26, lineHeight: 1 }}>✦</span>
          <div style={{ flex: 1, maxWidth: 140, height: 1, background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
        </div>

        <p style={{ fontFamily: SERIF, color: GOLD, fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 20, fontStyle: 'italic' }}>
          Class of 2025 / 2026
        </p>

        <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 8vw, 5.2rem)', lineHeight: 1.08, color: TEXT_CREAM, fontWeight: 900, marginBottom: 16 }}>
          Welcome to<br />
          <span style={{ color: GOLD }}>Enzy Royal College</span>
        </h1>

        <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1rem, 3vw, 1.75rem)', color: TEXT_MID, fontWeight: 400, fontStyle: 'italic', marginBottom: 32 }}>
          2025 / 2026 Graduation Ceremony
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 28 }}>
          <div style={{ flex: 1, maxWidth: 140, height: 1, background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
          <span style={{ color: GOLD, fontSize: 26, lineHeight: 1 }}>✦</span>
          <div style={{ flex: 1, maxWidth: 140, height: 1, background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
        </div>

        <p style={{ color: TEXT_MUTED, fontSize: 'clamp(11px, 2vw, 14px)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 44 }}>
          25th July 2026 &nbsp;·&nbsp; Campus 2 Hall
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#graduants"
            style={{ background: GOLD, color: BG_DARK, padding: '14px 28px', fontWeight: 700, fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s, transform 0.2s', display: 'inline-block', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#dbb85c'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Meet Our graduants
          </a>
          <a href="#schedule"
            style={{ background: 'transparent', color: GOLD, padding: '14px 28px', fontWeight: 700, fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', border: `1px solid ${GOLD}`, transition: 'background 0.2s, transform 0.2s', display: 'inline-block', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  )
}

// ── graduants ──────────────────────────────────────────────────────────────────
function graduants() {
  return (
    <section id="graduants" className="section-pad" style={{ background: BG_PANEL }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading label="Class of 2025/2026" title="Our graduants" />
        <div className="graduants-grid">
          {graduants.map(g => (
            <article key={g.id}
              style={{ background: `linear-gradient(160deg, ${BG_CARD}, #0d1526)`, border: `1px solid ${GOLD_DIM}`, overflow: 'hidden', transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.borderColor = GOLD_MID; el.style.boxShadow = '0 20px 60px rgba(201,168,76,0.08)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.borderColor = GOLD_DIM; el.style.boxShadow = 'none' }}
            >
              <div style={{ height: 260, overflow: 'hidden', background: '#1a2035', position: 'relative' }}>
                <img src={g.photo} alt={`Portrait of ${g.name}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(0deg,rgba(13,17,32,1),transparent)' }} />
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 1, background: GOLD }} />
                  <span style={{ color: GOLD, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Graduate</span>
                </div>
                <h3 style={{ fontFamily: SERIF, color: TEXT_CREAM, fontSize: 'clamp(18px,3vw,22px)', fontWeight: 700, marginBottom: 10, lineHeight: 1.2 }}>{g.name}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: 14, marginBottom: 20, fontStyle: 'italic', lineHeight: 1.6 }}>"{g.aspiration}"</p>
                <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ color: GOLD, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>Date of Birth</p>
                    <p style={{ color: TEXT_MID, fontSize: 14 }}>{g.dob}</p>
                  </div>
                  <div style={{ width: 32, height: 32, border: `1px solid ${GOLD_DIM}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: GOLD, fontSize: 14 }}>✦</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Schedule ───────────────────────────────────────────────────────────────────
function Schedule() {
  return (
    <section id="schedule" className="section-pad" style={{ background: BG_DARK }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <SectionHeading label="Programme" title="Table of Contents for the Day" />
        <div className="schedule-list">
          <div className="schedule-line" />
          {SCHEDULE.map((item, i) => (
            <div key={i} className="schedule-row">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-dot" />
              <div className="schedule-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ color: TEXT_CREAM, fontSize: 'clamp(13px,2vw,15px)', fontFamily: SERIF }}>{item.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── AI Videos ─────────────────────────────────────────────────────────────────
function Videos() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="videos" className="section-pad" style={{ background: BG_PANEL }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading label="Learning" title="AI Classes We Did" />
        <div className="videos-grid">
          {AI_VIDEOS.map(v => (
            <div key={v.id}
              style={{ background: BG_CARD, border: `1px solid ${GOLD_DIM}`, overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GOLD_MID; el.style.boxShadow = '0 12px 40px rgba(201,168,76,0.07)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GOLD_DIM; el.style.boxShadow = 'none' }}
            >
              <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#050810', overflow: 'hidden' }}>
                {activeId === v.id ? (
                  <iframe
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={v.title}
                  />
                ) : (
                  <div
                    style={{ position: 'absolute', inset: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => setActiveId(v.id)}
                  >
                    <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={`Thumbnail for ${v.title}`}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, transition: 'opacity 0.3s' }}
                    />
                    <div style={{ position: 'relative', zIndex: 1, width: 60, height: 60, borderRadius: '50%', background: 'rgba(201,168,76,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 24px rgba(201,168,76,0.4)', transition: 'transform 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill={BG_DARK}><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ color: GOLD, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>{v.channel}</p>
                <h3 style={{ fontFamily: SERIF, color: TEXT_CREAM, fontSize: 18, marginBottom: 10, fontWeight: 700 }}>{v.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.65 }}>{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Campus Photos ──────────────────────────────────────────────────────────────
function Campus() {
  const [selected, setSelected] = useState(0)

  return (
    <section id="campus" className="section-pad" style={{ background: BG_DARK }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeading label="Our School" title="Campus Highlights" />
        <div className="campus-grid">
          {/* Main image */}
          <div className="campus-main">
            <img
              key={selected}
              src={SCHOOL_PHOTOS[selected].url}
              alt={`${SCHOOL_PHOTOS[selected].label} at Enzy Royal College`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(0deg,rgba(10,14,26,0.95) 0%,transparent 100%)', padding: 'clamp(32px,5vw,64px) 28px 28px' }}>
              <p style={{ color: GOLD, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 8 }}>{SCHOOL_PHOTOS[selected].label}</p>
              <p style={{ color: TEXT_CREAM, fontFamily: SERIF, fontSize: 'clamp(14px,2vw,17px)', fontStyle: 'italic', lineHeight: 1.5 }}>{SCHOOL_PHOTOS[selected].caption}</p>
            </div>
          </div>

          {/* Thumbnails + quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SCHOOL_PHOTOS.map((p, i) => (
              <div key={i} onClick={() => setSelected(i)}
                style={{ display: 'flex', cursor: 'pointer', border: `1px solid ${selected === i ? GOLD_MID : GOLD_DIM}`, background: selected === i ? 'rgba(201,168,76,0.06)' : 'transparent', transition: 'border-color 0.3s, background 0.3s', overflow: 'hidden' }}
              >
                <div style={{ width: 90, height: 70, flexShrink: 0, overflow: 'hidden', background: BG_CARD }}>
                  <img src={p.url} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: selected === i ? 1 : 0.5, transition: 'opacity 0.3s' }} />
                </div>
                <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ color: selected === i ? GOLD : TEXT_MUTED, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4, transition: 'color 0.3s' }}>{p.label}</p>
                  <p style={{ color: TEXT_MUTED, fontSize: 12, lineHeight: 1.4 }}>{p.caption}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 8, padding: 24, border: `1px solid ${GOLD_DIM}`, background: 'rgba(201,168,76,0.03)' }}>
              <p style={{ fontFamily: SERIF, color: TEXT_CREAM, fontSize: 'clamp(14px,2vw,17px)', fontStyle: 'italic', lineHeight: 1.75 }}>
                "Enzy Royal College has always been a place where excellence is not just expected — it is cultivated."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
                <div style={{ width: 20, height: 1, background: GOLD }} />
                <p style={{ color: GOLD, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>The Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── XO Game ────────────────────────────────────────────────────────────────────
function XOGame() {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [scores, setScores] = useState({ X: 0, O: 0 })

  const winner = calculateWinner(squares)
  const isDraw = !winner && squares.every(Boolean)

  const handleClick = (i: number) => {
    if (squares[i] || winner || isDraw) return
    const next = [...squares]
    next[i] = xIsNext ? 'X' : 'O'
    setSquares(next)
    setXIsNext(!xIsNext)
    const w = calculateWinner(next)
    if (w) setScores(prev => ({ ...prev, [w]: prev[w as 'X' | 'O'] + 1 }))
  }

  const reset = () => { setSquares(Array(9).fill(null)); setXIsNext(true) }

  const statusMsg = winner ? `Player ${winner} wins!` : isDraw ? 'Draw — well played!' : `Player ${xIsNext ? 'X' : 'O'}'s turn`

  return (
    <section id="game" className="section-pad" style={{ background: BG_PANEL }}>
      <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
        <SectionHeading label="Play" title="XO Game" />

        <div className="scoreboard">
          {(['X', 'O'] as const).map(p => (
            <div key={p} style={{ flex: 1, padding: '16px', background: BG_CARD, border: `1px solid ${p === 'X' ? GOLD_DIM : 'rgba(232,224,208,0.15)'}`, textAlign: 'center' }}>
              <p style={{ color: p === 'X' ? GOLD : TEXT_MID, fontSize: 24, fontFamily: SERIF, fontWeight: 900, marginBottom: 4 }}>{p}</p>
              <p style={{ color: TEXT_MUTED, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Player {p}</p>
              <p style={{ color: TEXT_CREAM, fontSize: 28, fontWeight: 700 }}>{scores[p]}</p>
            </div>
          ))}
        </div>

        <div style={{ background: BG_CARD, border: `1px solid ${GOLD_DIM}`, padding: 'clamp(20px,5vw,36px)' }}>
          <div style={{ marginBottom: 24, padding: '12px', background: (winner || isDraw) ? 'rgba(201,168,76,0.12)' : 'transparent', border: (winner || isDraw) ? `1px solid ${GOLD_MID}` : '1px solid transparent', transition: 'all 0.3s' }}>
            <p style={{ color: winner || isDraw ? GOLD : TEXT_MID, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>{statusMsg}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 24 }}>
            {squares.map((sq, i) => (
              <button key={i} onClick={() => handleClick(i)}
                style={{
                  height: 'clamp(72px, 20vw, 100px)',
                  background: sq ? 'rgba(201,168,76,0.07)' : 'rgba(201,168,76,0.03)',
                  border: `1px solid ${sq ? GOLD_MID : 'rgba(201,168,76,0.15)'}`,
                  cursor: sq || winner || isDraw ? 'not-allowed' : 'pointer',
                  fontSize: 'clamp(28px,8vw,38px)', fontWeight: 900,
                  color: sq === 'X' ? GOLD : TEXT_CREAM, fontFamily: SERIF,
                  transition: 'background 0.2s, border-color 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onMouseEnter={e => { if (!sq && !winner && !isDraw) { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = GOLD_MID } }}
                onMouseLeave={e => { if (!sq) { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)' } }}
              >
                {sq}
              </button>
            ))}
          </div>

          <button onClick={reset}
            style={{ background: GOLD, color: BG_DARK, padding: '13px 40px', border: 'none', cursor: 'pointer', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, transition: 'background 0.2s, transform 0.2s', width: '100%' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#dbb85c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = GOLD; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
          >
            New Game
          </button>
        </div>
      </div>
    </section>
  )
}

// ── GitHub Guide ───────────────────────────────────────────────────────────────
function GitHubGuide() {
  return (
    <section id="github" className="section-pad" style={{ background: BG_DARK }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeading label="Developer Skills" title="How to Open a GitHub Account" />
        <div style={{ display: 'grid', gap: 14 }}>
          {GITHUB_STEPS.map(s => (
            <div key={s.step} className="gh-step">
              <div style={{ flexShrink: 0, width: 44, height: 44, border: `1px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, fontFamily: SERIF, fontWeight: 700, fontSize: 17 }}>
                {s.step}
              </div>
              <div style={{ paddingTop: 2 }}>
                <h3 style={{ fontFamily: SERIF, color: TEXT_CREAM, fontSize: 'clamp(15px,2.5vw,18px)', marginBottom: 8, fontWeight: 700 }}>{s.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: 'clamp(13px,2vw,15px)', lineHeight: 1.7 }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36, textAlign: 'center', padding: 'clamp(24px,5vw,36px) 32px', border: `1px solid ${GOLD_MID}`, background: 'rgba(201,168,76,0.05)' }}>
          <p style={{ fontFamily: SERIF, color: TEXT_CREAM, fontSize: 'clamp(16px,3vw,20px)', marginBottom: 20, fontStyle: 'italic' }}>
            Ready to start your developer journey?
          </p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: GOLD, color: BG_DARK, padding: '15px 36px', fontWeight: 700, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s, transform 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#dbb85c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = GOLD; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
          >
            Go to GitHub.com →
          </a>
        </div>
      </div>
    </section>
  )
}

// ── QR Code Generator ──────────────────────────────────────────────────────────
function QRGenerator() {
  const [input, setInput] = useState('https://github.com')
  const [value, setValue] = useState('https://github.com')
  const [size, setSize] = useState(200)

  const generate = () => { if (input.trim()) setValue(input.trim()) }
  const handleKey = (e: React.KeyboardEvent) => { if (e.key === 'Enter') generate() }

  return (
    <section id="qr" className="section-pad" style={{ background: BG_PANEL }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <SectionHeading label="Utility" title="QR Code Generator" />
        <div style={{ background: BG_CARD, border: `1px solid ${GOLD_DIM}`, padding: 'clamp(24px,6vw,48px)' }}>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', color: GOLD, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10, textAlign: 'left' }}>
              URL or Text
            </label>
            <input
              type="text" value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="https://your-url.com or any text..."
              style={{ width: '100%', background: 'rgba(201,168,76,0.05)', border: `1px solid ${GOLD_MID}`, color: TEXT_CREAM, padding: '14px 16px', fontSize: 15, outline: 'none', fontFamily: 'monospace', boxSizing: 'border-box', transition: 'border-color 0.25s' }}
              onFocus={e => (e.target.style.borderColor = GOLD)}
              onBlur={e => (e.target.style.borderColor = GOLD_MID)}
            />
          </div>

          <div style={{ marginBottom: 20, textAlign: 'left' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', color: GOLD, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10 }}>
              <span>QR Size</span>
              <span>{size}px</span>
            </label>
            <input type="range" min={120} max={280} value={size} onChange={e => setSize(Number(e.target.value))}
              style={{ width: '100%', accentColor: GOLD, cursor: 'pointer' }}
            />
          </div>

          <button onClick={generate}
            style={{ background: GOLD, color: BG_DARK, border: 'none', padding: '14px 40px', cursor: 'pointer', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, width: '100%', marginBottom: 32, transition: 'background 0.2s, transform 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#dbb85c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = GOLD; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
          >
            Generate QR Code
          </button>

          {value && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <div style={{ background: '#ffffff', padding: 16, border: `4px solid ${GOLD_MID}`, display: 'inline-block' }}>
                <QRCodeSVG value={value} size={size} level="H" includeMargin={false} />
              </div>
              <p style={{ color: TEXT_MUTED, fontSize: 12, fontFamily: 'monospace', wordBreak: 'break-all', maxWidth: 320 }}>
                {value.length > 60 ? value.slice(0, 60) + '…' : value}
              </p>
            </div>
          )}

          <p style={{ color: TEXT_MUTED, fontSize: 12, marginTop: 20, lineHeight: 1.7 }}>
            Scan with any smartphone camera to open the link instantly.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  const links = ['graduants', 'Schedule', 'AI Classes', 'Campus', 'XO Game', 'GitHub', 'QR Code']
  const hrefs = ['#graduants', '#schedule', '#videos', '#campus', '#game', '#github', '#qr']
  return (
    <footer style={{ background: '#050810', borderTop: `1px solid ${GOLD_DIM}`, padding: 'clamp(32px,6vw,52px) 24px', textAlign: 'center' }}>
      <p style={{ fontFamily: SERIF, color: GOLD, fontSize: 22, marginBottom: 10, fontWeight: 700 }}>Enzy Royal College</p>
      <p style={{ color: TEXT_MUTED, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 28 }}>Class of 2025 / 2026</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, maxWidth: 180, margin: '0 auto 28px' }}>
        <div style={{ flex: 1, height: 1, background: GOLD_MID }} />
        <span style={{ color: GOLD, fontSize: 14 }}>✦</span>
        <div style={{ flex: 1, height: 1, background: GOLD_MID }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(12px,3vw,32px)', flexWrap: 'wrap', marginBottom: 28 }}>
        {links.map((label, i) => (
          <a key={label} href={hrefs[i]}
            style={{ color: TEXT_MUTED, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
            onMouseLeave={e => (e.currentTarget.style.color = TEXT_MUTED)}
          >
            {label}
          </a>
        ))}
      </div>
      <p style={{ color: '#3a3530', fontSize: 12 }}>© 2026 Enzy Royal College · All rights reserved.</p>
    </footer>
  )
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: BG_DARK, minHeight: '100vh', fontFamily: SANS }}>
      <GlobalStyles />
      <Nav />
      <Hero />
      <graduants />
      <Schedule />
      <Videos />
      <Campus />
      <XOGame />
      <GitHubGuide />
      <QRGenerator />
      <Footer />
    </div>
  )
}
