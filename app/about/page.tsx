import Nav from '@/components/Nav';
import { Github, Globe, Layers, Lock, Mic, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative dot-grid overflow-hidden"
          style={{
            borderBottom: '1px solid var(--border)',
            padding: '100px 0 80px',
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="section-label mb-6 fade-up fade-up-1">About</div>
            <h1
              className="fade-up fade-up-2 mb-6"
              style={{
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(40px, 5.5vw, 68px)',
                color: 'var(--text)',
                letterSpacing: '-0.03em',
                lineHeight: '1.06',
                maxWidth: '720px',
              }}
            >
              AI that runs on
              <br />
              your machine.
              <br />
              Nothing else.
            </h1>
            <p
              className="fade-up fade-up-3"
              style={{
                fontSize: '16px',
                color: 'var(--text2)',
                maxWidth: '560px',
                lineHeight: '1.75',
              }}
            >
              Zynthetix builds focused AI-native tools for macOS. Every product
              is designed around one principle: your data stays on your device,
              always.
            </p>
          </div>
        </section>

        {/* ─── Mission ───────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-8">The Problem</div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 3vw, 32px)',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.25',
                }}
              >
                AI tools shouldn&apos;t require the cloud.
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text2)',
                  lineHeight: '1.85',
                  marginBottom: '16px',
                }}
              >
                The AI wave has been dominated by cloud-dependent tools that
                demand API keys, send your data to remote servers, and charge
                monthly recurring fees. We believe that&apos;s the wrong model.
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text2)',
                  lineHeight: '1.85',
                }}
              >
                The hardware inside a modern Mac — especially Apple Silicon — is
                more than capable of running powerful AI workloads locally. You
                just need software that takes full advantage of it. That&apos;s
                what we build.
              </p>
            </div>

            <div>
              <div className="section-label mb-8">The Approach</div>
              <div className="space-y-4">
                {[
                  {
                    icon: <Zap size={15} />,
                    title: 'Focused by design',
                    body: 'Every product in the Zynthetix suite does one thing, done properly. No feature sprawl, no enterprise dashboards, no bloat.',
                  },
                  {
                    icon: <Lock size={15} />,
                    title: 'Offline-first, always',
                    body: 'No telemetry. No usage tracking. No account creation. Your voice, your code, your data — on your machine.',
                  },
                  {
                    icon: <Layers size={15} />,
                    title: 'Native to macOS',
                    body: 'Built with Metal, system fonts, and OS-level APIs. Lightweight, fast, and feels like it belongs on your desktop.',
                  },
                ].map(({ icon, title, body }) => (
                  <div key={title} className="card-glow rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'var(--s2)',
                          border: '1px solid var(--border2)',
                          color: 'var(--text)',
                        }}
                      >
                        {icon}
                      </div>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--text)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {title}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'var(--text2)',
                        lineHeight: '1.7',
                        paddingLeft: '40px',
                      }}
                    >
                      {body}
                    </p>
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
          <div className="section-label mb-12">What We Build</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Terminal size={18} />,
                name: 'AutoAgent',
                tag: 'macOS',
                desc: 'A cockpit for AI-assisted development. Manage multiple agent terminal sessions in a split-grid layout with built-in Kanban, context panel, and roadmap.',
                href: '/autoagent',
              },
              {
                icon: <Mic size={18} />,
                name: 'Voice',
                tag: 'Apple Silicon',
                desc: 'Press a hotkey and speak. Your words are typed wherever your cursor is — powered by whisper.cpp running on-device with Metal GPU acceleration.',
                href: '/voice',
              },
            ].map(({ icon, name, tag, desc, href }) => (
              <Link
                key={name}
                href={href}
                className="card-glow hover-lift rounded-xl p-7 block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'var(--s2)',
                      border: '1px solid var(--border2)',
                      color: 'var(--text)',
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {name}
                    </div>
                    <span
                      className="tag"
                      style={{ marginTop: '2px', display: 'inline-block' }}
                    >
                      {tag}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text2)',
                    lineHeight: '1.7',
                  }}
                >
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Founder ───────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-12">Built By</div>

          <div className="card-glow rounded-xl p-8 max-w-lg">
            <div className="flex items-start gap-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold"
                style={{
                  background: 'var(--s2)',
                  border: '1px solid var(--border2)',
                  color: 'var(--text)',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                K
              </div>
              <div className="flex-1">
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    marginBottom: '4px',
                  }}
                >
                  Karthik Kurra
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--text3)',
                    marginBottom: '12px',
                  }}
                >
                  Founder &amp; Developer
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text2)',
                    lineHeight: '1.75',
                    marginBottom: '16px',
                  }}
                >
                  Developer building AI-native tools that respect user privacy.
                  Frustrated by cloud-locked AI software, Karthik started
                  Zynthetix to prove that powerful AI tooling can run entirely
                  on your own hardware.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://karthik.zynthetix.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors duration-200 text-[var(--text3)] hover:text-[var(--text)]"
                    style={{ fontSize: '12px' }}
                  >
                    <Globe size={13} />
                    karthik.zynthetix.in
                  </a>
                  <a
                    href="https://github.com/GruheshKurra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors duration-200 text-[var(--text3)] hover:text-[var(--text)]"
                    style={{ fontSize: '12px' }}
                  >
                    <Github size={13} />
                    GruheshKurra
                  </a>
                </div>
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
