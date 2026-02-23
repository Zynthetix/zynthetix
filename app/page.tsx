import HeroText from '@/components/HeroText';
import Nav from '@/components/Nav';
import {
  ArrowRight,
  Check,
  Download,
  Github,
  Layers,
  Lock,
  Mic,
  Terminal,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden dot-grid"
          style={{
            borderBottom: '1px solid var(--border)',
            minHeight: '88vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            className="hero-orb"
            style={{ top: '-120px', left: '-80px', opacity: 0.9 }}
          />
          <div
            className="hero-orb"
            style={{
              top: '60px',
              right: '-200px',
              width: '480px',
              height: '480px',
              opacity: 0.5,
            }}
          />

          <div className="max-w-6xl mx-auto px-6 py-32 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8 fade-up fade-up-1">
                <div className="pulse-dot" />
                <span className="tag">
                  Open source · macOS · <HeroText />
                </span>
              </div>

              <h1
                className="fade-up fade-up-2 mb-7"
                style={{
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(48px, 6.5vw, 80px)',
                  color: 'var(--text)',
                  letterSpacing: '-0.03em',
                  lineHeight: '1.04',
                }}
              >
                Software that
                <br />
                <span style={{ color: 'var(--text)' }}>thinks, listens,</span>
                <br />
                and acts.
              </h1>

              <p
                className="fade-up fade-up-3 mb-10 leading-relaxed"
                style={{
                  fontSize: '18px',
                  color: 'var(--text2)',
                  maxWidth: '520px',
                }}
              >
                Focused AI-native tools for macOS. Runs 100% locally on your
                machine. No API keys. No subscriptions. No data leaves your
                device.
              </p>

              {/* Product mini-cards */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-up fade-up-4"
                style={{ maxWidth: '560px' }}
              >
                {[
                  {
                    icon: <Terminal size={15} />,
                    name: 'AutoAgent',
                    version: 'v0.2.1',
                    desc: 'Agentic terminal cockpit for AI-assisted dev.',
                    dmg: 'https://github.com/Zynthetix/zynthetix-autoagent/releases/latest',
                    href: '/autoagent',
                  },
                  {
                    icon: <Mic size={15} />,
                    name: 'Voice',
                    version: 'v2.0.2',
                    desc: 'Local speech-to-text, system-wide.',
                    dmg: 'https://github.com/Zynthetix/zynthetix-voice/releases/latest',
                    href: '/voice',
                  },
                ].map(({ icon, name, version, desc, dmg, href }) => (
                  <div
                    key={name}
                    className="card-glow rounded-xl p-5 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ color: 'var(--text)' }}>{icon}</span>
                      <span
                        style={{
                          fontWeight: 600,
                          color: 'var(--text)',
                          fontSize: '14px',
                        }}
                      >
                        {name}
                      </span>
                      <span className="tag" style={{ marginLeft: 'auto' }}>
                        {version}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'var(--text2)',
                        lineHeight: '1.65',
                      }}
                    >
                      {desc}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <a
                        href={dmg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: '11px', padding: '6px 12px' }}
                      >
                        <Download size={12} /> Download
                      </a>
                      <Link
                        href={href}
                        className="btn-ghost"
                        style={{ fontSize: '11px', padding: '6px 12px' }}
                      >
                        Learn more <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center gap-8 mt-12 fade-up fade-up-5"
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '32px',
                }}
              >
                {[
                  { val: '100%', label: 'Local processing' },
                  { val: '2', label: 'macOS products' },
                  { val: 'MIT', label: 'Open source' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "'Inter', -apple-system, sans-serif",
                        fontWeight: 700,
                        fontSize: '22px',
                        color: 'var(--text)',
                        lineHeight: 1.1,
                      }}
                    >
                      {val}
                    </div>
                    <div
                      className="font-mono mt-1"
                      style={{
                        fontSize: '11px',
                        color: 'var(--text3)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Products ──────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-12">Products</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AutoAgent Card */}
            <div
              className="card-glow hover-lift rounded-xl overflow-hidden"
              style={{ minHeight: '480px' }}
            >
              <div
                className="font-mono relative overflow-hidden"
                style={{
                  background: '#0A0A0D',
                  borderBottom: '1px solid var(--border)',
                  padding: '20px 24px',
                  height: '200px',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: 'var(--border2)' }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: 'var(--border)' }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: 'var(--border2)' }}
                  />
                  <span
                    className="ml-3 font-mono"
                    style={{ fontSize: '10px', color: 'var(--text3)' }}
                  >
                    zynthetix-autoagent — bash
                  </span>
                </div>
                <div style={{ fontSize: '11px', lineHeight: '1.8' }}>
                  <div className="term-line" style={{ color: 'var(--text3)' }}>
                    <span style={{ color: 'var(--text2)' }}>→</span>{' '}
                    <span style={{ color: 'var(--text)' }}>claude</span>
                    <span style={{ color: 'var(--text2)' }}>
                      {' '}
                      &quot;refactor auth module&quot;
                    </span>
                  </div>
                  <div className="term-line" style={{ color: 'var(--text3)' }}>
                    <span style={{ color: 'var(--text2)' }}>◆</span> Analyzing
                    24 files…
                  </div>
                  <div className="term-line" style={{ color: 'var(--text3)' }}>
                    <span style={{ color: 'var(--text2)' }}>✓</span> Modified{' '}
                    <span style={{ color: 'var(--text2)' }}>
                      src/auth/handler.ts
                    </span>
                  </div>
                  <div className="term-line" style={{ color: 'var(--text3)' }}>
                    <span style={{ color: 'var(--text2)' }}>✓</span> Tests
                    passing (18/18)
                  </div>
                  <div className="term-line" style={{ color: 'var(--text2)' }}>
                    <span className="cursor-blink" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag-accent tag">macOS</span>
                      <span className="tag">Open source</span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Inter', -apple-system, sans-serif",
                        fontWeight: 700,
                        fontSize: '24px',
                        color: 'var(--text)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      AutoAgent
                    </h2>
                  </div>
                  <Terminal size={20} style={{ color: 'var(--border2)' }} />
                </div>
                <p
                  className="mb-6"
                  style={{
                    fontSize: '13px',
                    color: 'var(--text2)',
                    lineHeight: '1.7',
                    maxWidth: '360px',
                  }}
                >
                  The cockpit for AI-assisted development. Manage multiple AI
                  agent terminal sessions in a split-grid layout — without the
                  chaos.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    'Real PTY sessions with 256-colour support',
                    'Terminal grid: Solo → Dual → 2×2 → 4×4',
                    'Persistent project tabs + git worktrees',
                    'Kanban, context panel, roadmap built in',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3"
                      style={{ fontSize: '12px', color: 'var(--text3)' }}
                    >
                      <Check
                        size={13}
                        style={{ color: 'var(--text)', flexShrink: 0 }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Zynthetix/zynthetix-autoagent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '12px', padding: '8px 16px' }}
                  >
                    <Github size={13} /> View on GitHub
                  </a>
                  <Link
                    href="/autoagent"
                    className="btn-ghost"
                    style={{ fontSize: '12px', padding: '8px 16px' }}
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Voice Card */}
            <div
              className="card-glow hover-lift rounded-xl overflow-hidden"
              style={{ minHeight: '480px' }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  background: '#0A0A0D',
                  borderBottom: '1px solid var(--border)',
                  padding: '20px 24px',
                  height: '200px',
                }}
              >
                <div className="flex items-center justify-center h-full">
                  <div
                    className="flex items-center gap-4 px-6 py-4 rounded-[28px]"
                    style={{
                      background: 'var(--s1)',
                      border: '1px solid var(--border2)',
                    }}
                  >
                    <div style={{ color: 'var(--text)' }}>
                      <Mic size={16} />
                    </div>
                    <div className="wave-container">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="wave-bar" />
                      ))}
                    </div>
                    <div
                      className="font-mono"
                      style={{ fontSize: '10px', color: 'var(--text3)' }}
                    >
                      recording…
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(200,200,200,0.06) 0%, transparent 70%)',
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag-accent tag">Apple Silicon</span>
                      <span className="tag">v2.0.2</span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Inter', -apple-system, sans-serif",
                        fontWeight: 700,
                        fontSize: '24px',
                        color: 'var(--text)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      Voice
                    </h2>
                  </div>
                  <Mic size={20} style={{ color: 'var(--border2)' }} />
                </div>
                <p
                  className="mb-6"
                  style={{
                    fontSize: '13px',
                    color: 'var(--text2)',
                    lineHeight: '1.7',
                    maxWidth: '360px',
                  }}
                >
                  Press a hotkey and speak — your words are typed wherever your
                  cursor is. Powered by whisper.cpp running locally. Zero
                  internet required.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    'Double-tap Right ⌥ or hold for push-to-talk',
                    'whisper.cpp with Metal GPU — fully offline',
                    'Floating pill widget with live waveform',
                    'Text snippet expansion + transcription history',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3"
                      style={{ fontSize: '12px', color: 'var(--text3)' }}
                    >
                      <Check
                        size={13}
                        style={{ color: 'var(--text)', flexShrink: 0 }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Zynthetix/zynthetix-voice/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '12px', padding: '8px 16px' }}
                  >
                    <Download size={13} /> Download DMG
                  </a>
                  <Link
                    href="/voice"
                    className="btn-ghost"
                    style={{ fontSize: '12px', padding: '8px 16px' }}
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Philosophy ────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-12">Philosophy</div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--border)',
            }}
          >
            {[
              {
                icon: <Zap size={18} />,
                title: 'Focused',
                body: "Every product does exactly one thing, done properly. No dashboards for dashboards' sake. No enterprise bloat.",
              },
              {
                icon: <Lock size={18} />,
                title: 'Offline-first',
                body: 'Your voice stays on your machine. Your code stays on your machine. No telemetry. No usage tracking. No accounts.',
              },
              {
                icon: <Layers size={18} />,
                title: 'Native',
                body: 'Built for macOS. Uses Metal, system fonts, OS-level APIs. Feels like it belongs there — fast, lightweight, unobtrusive.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="p-10 bg-s1 hover-brutal"
                style={{ transition: 'all 300ms' }}
              >
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center mb-6"
                  style={{
                    background: 'var(--s2)',
                    border: '1px solid var(--border2)',
                    color: 'var(--text)',
                  }}
                >
                  {icon}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Inter', -apple-system, sans-serif",
                    fontWeight: 700,
                    fontSize: '17px',
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text2)',
                    lineHeight: '1.7',
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Footer ──────────────────────────────────────────────── */}
        <footer
          className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between"
          style={{ color: 'var(--text3)', fontSize: '12px' }}
        >
          <span className="font-mono">
            © {new Date().getFullYear()} Zynthetix
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/voice"
              className="transition-colors duration-200 text-[var(--text3)] hover:text-[var(--text)]"
            >
              Voice
            </Link>
            <Link
              href="/autoagent"
              className="transition-colors duration-200 text-[var(--text3)] hover:text-[var(--text)]"
            >
              AutoAgent
            </Link>
            <a
              href="https://github.com/Zynthetix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors duration-200 text-[var(--text3)] hover:text-[var(--text)]"
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
