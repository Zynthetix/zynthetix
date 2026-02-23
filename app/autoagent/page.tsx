import Nav from '@/components/Nav';
import {
  AlertTriangle,
  ArrowRight,
  Download,
  Github,
  LayoutGrid,
  Maximize2,
  Save,
  Shield,
  Terminal,
} from 'lucide-react';

export const metadata = {
  title: 'AutoAgent — Zynthetix',
  description:
    'The cockpit for AI-assisted development. Manage multiple AI agent terminal sessions in parallel.',
};

export default function AutoAgentPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden dot-grid"
          style={{
            borderBottom: '1px solid var(--border)',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            className="hero-orb"
            style={{
              top: '-80px',
              right: '-120px',
              width: '500px',
              height: '500px',
              opacity: 0.5,
            }}
          />
          <div
            className="hero-orb"
            style={{
              bottom: '-160px',
              left: '-80px',
              width: '360px',
              height: '360px',
              opacity: 0.3,
            }}
          />

          <div className="max-w-6xl mx-auto px-6 py-28 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: copy */}
              <div>
                <div className="flex items-center gap-3 mb-7 fade-up fade-up-1">
                  <span className="tag-accent tag">AutoAgent</span>
                  <span className="tag">v0.2.1</span>
                  <span className="tag">Apple Silicon</span>
                </div>
                <h1
                  className="mb-6 fade-up fade-up-2"
                  style={{
                    fontFamily: "'Inter', -apple-system, sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(40px, 5vw, 64px)',
                    color: 'var(--text)',
                    letterSpacing: '-0.03em',
                    lineHeight: '1.06',
                  }}
                >
                  The cockpit for
                  <br />
                  AI-assisted dev.
                </h1>
                <p
                  className="mb-9 fade-up fade-up-3 leading-relaxed"
                  style={{
                    fontSize: '17px',
                    color: 'var(--text2)',
                    maxWidth: '440px',
                  }}
                >
                  Manage multiple AI agent terminal sessions in parallel —
                  without the chaos. Works with Claude Code, Copilot CLI, Aider,
                  and any CLI-based agent.
                </p>
                <div className="flex flex-wrap gap-3 fade-up fade-up-4">
                  <a
                    href="https://github.com/Zynthetix/zynthetix-autoagent/releases/download/v0.2.1/Zynthetix.AutoAgent_0.2.1_aarch64.dmg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Download size={15} /> Download DMG — v0.2.1
                  </a>
                  <a
                    href="https://github.com/Zynthetix/zynthetix-autoagent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <Github size={15} /> View on GitHub
                  </a>
                </div>
                <p
                  className="font-mono mt-5 fade-up fade-up-5"
                  style={{ fontSize: '11px', color: 'var(--text3)' }}
                >
                  Requires macOS 13+ · Apple Silicon
                </p>
              </div>

              {/* Right: terminal grid mockup */}
              <div className="fade-up fade-up-3">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: '#0A0A0D',
                    border: '1px solid var(--border2)',
                  }}
                >
                  {/* Title bar */}
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{
                      background: 'var(--s2)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: 'var(--border2)' }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: 'var(--border)' }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: 'var(--border2)' }}
                    />
                    <span
                      className="ml-3 font-mono"
                      style={{ fontSize: '10px', color: 'var(--text3)' }}
                    >
                      Zynthetix AutoAgent
                    </span>
                  </div>
                  {/* 2×2 terminal grid */}
                  <div
                    className="grid grid-cols-2 gap-px"
                    style={{ background: 'var(--border)' }}
                  >
                    {[
                      {
                        label: 'agent-1',
                        lines: [
                          {
                            text: '$ claude --dangerously-skip-permissions',
                            color: 'var(--text2)',
                          },
                          {
                            text: '◆ Reading codebase…',
                            color: 'var(--text3)',
                          },
                          {
                            text: '✓ Plan ready (12 steps)',
                            color: 'var(--text2)',
                          },
                        ],
                      },
                      {
                        label: 'agent-2',
                        lines: [
                          {
                            text: '$ aider --model claude',
                            color: 'var(--text2)',
                          },
                          {
                            text: '◆ Editing auth/handler.ts',
                            color: 'var(--text3)',
                          },
                          {
                            text: '✓ Tests passing (24/24)',
                            color: 'var(--text2)',
                          },
                        ],
                      },
                      {
                        label: 'agent-3',
                        lines: [
                          {
                            text: '$ git log --oneline -5',
                            color: 'var(--text2)',
                          },
                          {
                            text: 'a3f92bc feat: add retry logic',
                            color: 'var(--text3)',
                          },
                          {
                            text: 'b12de01 fix: null guard',
                            color: 'var(--text3)',
                          },
                        ],
                      },
                      {
                        label: 'agent-4',
                        lines: [
                          { text: '$ npm run build', color: 'var(--text2)' },
                          { text: '▶ vite build', color: 'var(--text3)' },
                          {
                            text: '✓ dist/ ready (1.2s)',
                            color: 'var(--text2)',
                          },
                        ],
                      },
                    ].map(({ label, lines }) => (
                      <div
                        key={label}
                        className="font-mono p-3"
                        style={{
                          background: '#0A0A0D',
                          fontSize: '10px',
                          lineHeight: '1.7',
                          height: '96px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          className="mb-1"
                          style={{ color: 'var(--border2)' }}
                        >
                          {label}
                        </div>
                        {lines.map((l, i) => (
                          <div
                            key={i}
                            className="term-line"
                            style={{
                              color: l.color,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {l.text}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Features ──────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-12">Features</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <LayoutGrid size={17} />,
                title: 'Terminal grid layouts',
                body: 'Solo, Side-by-Side, Stacked, 3 Columns, 2×2, 3×3, 4×4. Switch layouts without killing running sessions.',
              },
              {
                icon: <Terminal size={17} />,
                title: 'Real PTY sessions',
                body: 'Full xterm.js with 256-colour support, your default shell ($SHELL), and proper ANSI rendering for spinner-based CLIs.',
              },
              {
                icon: <Save size={17} />,
                title: 'Persistent project tabs',
                body: 'Open projects are remembered across restarts. ⌘1–9 keyboard shortcuts let you switch instantly.',
              },
              {
                icon: <AlertTriangle size={17} />,
                title: 'Smart shrink warning',
                body: 'When reducing terminals, choose exactly which sessions to close. Nothing is killed without your consent.',
              },
              {
                icon: <Shield size={17} />,
                title: 'Env sanitization',
                body: 'CI flags and IDE variables are stripped so agent CLIs behave exactly as they would in a native terminal.',
              },
              {
                icon: <Maximize2 size={17} />,
                title: 'Focused design',
                body: 'Dark UI, 8px grid, subtle 1px borders. No glassmorphism. No distractions. Just your agents running.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="card-glow rounded-xl p-7">
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center mb-5"
                  style={{
                    background: 'var(--s2)',
                    border: '1px solid var(--border2)',
                    color: 'var(--text)',
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Inter', -apple-system, sans-serif",
                    fontWeight: 700,
                    fontSize: '15px',
                    color: 'var(--text)',
                    marginBottom: '8px',
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

        {/* ─── Tech stack ────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-10">Built with</div>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-px rounded-xl overflow-hidden"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--border)',
            }}
          >
            {[
              ['Tauri v2', 'App shell · lightweight native'],
              ['React 19 + TypeScript', 'Frontend'],
              ['xterm.js v6', 'Terminal emulator'],
              ['portable-pty (Rust)', 'Real PTY backend'],
              ['Tailwind CSS v4', 'Styling'],
              ['Zustand', 'State management'],
            ].map(([name, desc]) => (
              <div
                key={name}
                className="px-6 py-5 bg-s1 hover:bg-s2 transition-colors duration-200"
              >
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '4px',
                  }}
                >
                  {name}
                </p>
                <p
                  className="font-mono"
                  style={{ fontSize: '11px', color: 'var(--text3)' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Install ───────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-12">Install</div>
          <div className="max-w-2xl">
            {[
              ['Download', 'Get the .dmg from the Releases page on GitHub.'],
              [
                'Open',
                'Open the .dmg → drag Zynthetix AutoAgent.app to /Applications.',
              ],
              [
                'First launch',
                'macOS blocks unsigned apps. Right-click → Open → click Open. One time only.',
              ],
            ].map(([step, desc], i, arr) => (
              <div
                key={step}
                className="flex items-start gap-6"
                style={{ paddingBottom: i < arr.length - 1 ? '32px' : 0 }}
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-mono"
                    style={{
                      background: 'var(--s2)',
                      border: '1px solid var(--border2)',
                      color: 'var(--text2)',
                      fontSize: '12px',
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      className="w-px flex-1 mt-1"
                      style={{ background: 'var(--border)', minHeight: '24px' }}
                    />
                  )}
                </div>
                <div className="pt-2.5">
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: '4px',
                    }}
                  >
                    {step}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text2)',
                      lineHeight: '1.7',
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ───────────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="card-glow rounded-xl p-12 text-center relative overflow-hidden">
            <div
              className="hero-orb"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                opacity: 0.2,
                width: '400px',
                height: '400px',
              }}
            />
            <div className="relative">
              <h2
                className="mb-4"
                style={{
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}
              >
                Ready to run your agents?
              </h2>
              <p
                className="mb-8 mx-auto"
                style={{
                  fontSize: '15px',
                  color: 'var(--text2)',
                  maxWidth: '400px',
                  lineHeight: '1.7',
                }}
              >
                Download AutoAgent and bring your AI workflow under control.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/Zynthetix/zynthetix-autoagent/releases/download/v0.2.1/Zynthetix.AutoAgent_0.2.1_aarch64.dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Download size={15} /> Download DMG — v0.2.1
                </a>
                <a
                  href="https://github.com/Zynthetix/zynthetix-autoagent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Github size={15} /> View Source <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ────────────────────────────────────────────────── */}
        <footer
          className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between"
          style={{ color: 'var(--text3)', fontSize: '12px' }}
        >
          <span className="font-mono">
            © {new Date().getFullYear()} Zynthetix
          </span>
          <a
            href="https://github.com/Zynthetix/zynthetix-autoagent"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors duration-200 text-[var(--text3)] hover:text-[var(--text)]"
          >
            <Github size={13} /> github.com/Zynthetix
          </a>
        </footer>
      </main>
    </>
  );
}
