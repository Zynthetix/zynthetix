'use client';

import Nav from '@/components/Nav';
import { Github, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // Replace the value below with your web3forms access key from web3forms.com
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
            'e0b0e361-47cb-4866-8502-19d1033088c1',
          from_name: form.name,
          email: form.email,
          subject: form.subject || 'Contact from Zynthetix.in',
          message: form.message,
          botcheck: '',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--s1)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '13px',
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color 180ms ease',
    fontFamily: "'Inter', -apple-system, sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    color: 'var(--text3)',
    marginBottom: '6px',
    textTransform: 'uppercase',
  };

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
            <div className="section-label mb-6 fade-up fade-up-1">Contact</div>
            <h1
              className="fade-up fade-up-2 mb-5"
              style={{
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(40px, 5.5vw, 64px)',
                color: 'var(--text)',
                letterSpacing: '-0.03em',
                lineHeight: '1.06',
              }}
            >
              Get in touch.
            </h1>
            <p
              className="fade-up fade-up-3"
              style={{
                fontSize: '15px',
                color: 'var(--text2)',
                maxWidth: '480px',
                lineHeight: '1.7',
              }}
            >
              Questions, feedback, bug reports, or ideas — we&apos;re listening.
              Fill out the form or reach out directly on GitHub.
            </p>
          </div>
        </section>

        {/* ─── Form ──────────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div
                  className="card-glow rounded-xl p-10 flex flex-col items-center justify-center text-center"
                  style={{ minHeight: '360px' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                    style={{
                      background: 'var(--s2)',
                      border: '1px solid var(--border2)',
                    }}
                  >
                    <Send size={20} style={{ color: 'var(--text)' }} />
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: '20px',
                      color: 'var(--text)',
                      marginBottom: '10px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Message sent!
                  </h2>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text2)',
                      lineHeight: '1.7',
                      maxWidth: '320px',
                    }}
                  >
                    Thanks for reaching out. We&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-ghost mt-8"
                    style={{ fontSize: '12px', padding: '8px 16px' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Hidden honeypot for spam protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = 'var(--border2)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = 'var(--border)')
                        }
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = 'var(--border2)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = 'var(--border)')
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--border2)')
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--border)')
                      }
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us what's on your mind..."
                      value={form.message}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        lineHeight: '1.65',
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--border2)')
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--border)')
                      }
                    />
                  </div>

                  {status === 'error' && (
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'hsl(0 70% 60%)',
                        marginTop: '2px',
                      }}
                    >
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{
                      opacity: status === 'sending' ? 0.6 : 1,
                      cursor: status === 'sending' ? 'default' : 'pointer',
                    }}
                  >
                    <Send size={14} />
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="section-label mb-6">Other ways to reach us</div>

              <a
                href="https://github.com/Zynthetix"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow hover-lift rounded-xl p-5 flex items-center gap-4 block"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'var(--s2)',
                    border: '1px solid var(--border2)',
                  }}
                >
                  <Github size={16} style={{ color: 'var(--text)' }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}
                  >
                    GitHub
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'var(--text3)',
                      marginTop: '2px',
                    }}
                  >
                    Open issues &amp; discussions
                  </div>
                </div>
              </a>

              <a
                href="mailto:contact@zynthetix.in"
                className="card-glow hover-lift rounded-xl p-5 flex items-center gap-4 block"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'var(--s2)',
                    border: '1px solid var(--border2)',
                  }}
                >
                  <Mail size={16} style={{ color: 'var(--text)' }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'var(--text3)',
                      marginTop: '2px',
                    }}
                  >
                    contact@zynthetix.in
                  </div>
                </div>
              </a>

              <div
                className="card-glow rounded-xl p-5"
                style={{ background: 'var(--s1)' }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: 'var(--text3)',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Response time
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--text2)',
                    lineHeight: '1.65',
                  }}
                >
                  We typically respond within 1–2 business days. For urgent bug
                  reports, please open a GitHub issue — it&apos;s the fastest
                  path to a fix.
                </p>
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
              href="/about"
              className="transition-colors duration-200 text-[var(--text3)] hover:text-[var(--text)]"
            >
              About
            </Link>
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
