'use client';

import { ChevronDown, Github, Mic, Terminal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Nav() {
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  }

  function closeDropdown() {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  }

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'hsl(220 10% 4% / 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border2)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 hover-lift">
          <Image
            src="/logo.png"
            alt="Zynthetix"
            width={28}
            height={28}
            className="rounded-md flex-shrink-0"
            priority
          />
          <span
            className="font-display tracking-tight text-[15px]"
            style={{
              color: 'var(--text)',
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 700,
            }}
          >
            Zynthetix
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-7">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              className="flex items-center gap-1.5 text-[13px] font-medium transition-all duration-200 text-[var(--text3)] hover:text-[var(--text)]"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Products
              <ChevronDown
                size={12}
                style={{
                  transition: 'transform 200ms ease',
                  transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            {productsOpen && (
              /* pt-2 bridges the gap so mouse stays inside the hover zone */
              <div
                className="absolute top-full left-0 pt-2"
                style={{ minWidth: '230px' }}
              >
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: 'var(--s1)',
                    border: '1px solid var(--border)',
                    minWidth: '230px',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.55)',
                  }}
                >
                  <Link
                    href="/autoagent"
                    className="flex items-center gap-3 px-4 py-3 transition-colors duration-150 hover:bg-s2"
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'var(--s2)',
                        border: '1px solid var(--border2)',
                      }}
                    >
                      <Terminal size={13} style={{ color: 'var(--text)' }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--text)',
                          lineHeight: 1.2,
                        }}
                      >
                        AutoAgent
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'var(--text3)',
                          marginTop: '2px',
                        }}
                      >
                        Agentic terminal management
                      </div>
                    </div>
                  </Link>

                  <div style={{ height: '1px', background: 'var(--border)' }} />

                  <Link
                    href="/voice"
                    className="flex items-center gap-3 px-4 py-3 transition-colors duration-150 hover:bg-s2"
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'var(--s2)',
                        border: '1px solid var(--border2)',
                      }}
                    >
                      <Mic size={13} style={{ color: 'var(--text)' }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--text)',
                          lineHeight: 1.2,
                        }}
                      >
                        Voice
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'var(--text3)',
                          marginTop: '2px',
                        }}
                      >
                        Local speech-to-text
                      </div>
                    </div>
                  </Link>

                  <div
                    style={{
                      padding: '8px 16px',
                      background: 'var(--s2)',
                      borderTop: '1px solid var(--border)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                        color: 'var(--text3)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      MORE COMING SOON
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-[13px] font-medium transition-all duration-200 text-[var(--text3)] hover:text-[var(--text)]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-[13px] font-medium transition-all duration-200 text-[var(--text3)] hover:text-[var(--text)]"
          >
            Contact
          </Link>

          <a
            href="https://github.com/Zynthetix"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 text-[var(--text3)] hover:text-[var(--text)]"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
        </div>
      </nav>
    </header>
  );
}
