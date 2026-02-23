import Nav from '@/components/Nav';
import {
  Command,
  Download,
  Github,
  Globe,
  HardDrive,
  History,
  Keyboard,
  Mic,
  ShieldAlert,
  Type,
  Wand2,
} from 'lucide-react';

export const metadata = {
  title: 'Voice — Zynthetix',
  description:
    'Local speech-to-text for macOS. Press a hotkey, speak, and your words appear wherever your cursor is. Powered by whisper.cpp — no internet required.',
};

export default function VoicePage() {
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
            style={{ top: '-80px', left: '-60px', opacity: 0.8 }}
          />
          <div
            className="hero-orb"
            style={{
              bottom: '-160px',
              right: '-120px',
              width: '400px',
              height: '400px',
              opacity: 0.4,
            }}
          />

          <div className="max-w-6xl mx-auto px-6 py-28 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: copy */}
              <div>
                <div className="flex items-center gap-3 mb-7 fade-up fade-up-1">
                  <span className="tag-accent tag">Voice</span>
                  <span className="tag">v2.0.2</span>
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
                  Press a hotkey.
                  <br />
                  Speak. Done.
                </h1>
                <p
                  className="mb-9 fade-up fade-up-3 leading-relaxed"
                  style={{
                    fontSize: '17px',
                    color: 'var(--text2)',
                    maxWidth: '440px',
                  }}
                >
                  Local speech-to-text for macOS powered by whisper.cpp. No API
                  key. No internet. No subscription. Works in every app.
                </p>
                <div className="flex flex-wrap gap-3 fade-up fade-up-4">
                  <a
                    href="https://github.com/Zynthetix/zynthetix-voice/releases/download/v2.0.2/Zynthetix.Voice-2.0.2-arm64.dmg"
                    className="btn-primary"
                  >
                    <Download size={15} /> Download DMG — free
                  </a>
                  <a
                    href="https://github.com/Zynthetix/zynthetix-voice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <Github size={15} /> Source on GitHub
                  </a>
                </div>
                <p
                  className="font-mono mt-5 fade-up fade-up-5"
                  style={{ fontSize: '11px', color: 'var(--text3)' }}
                >
                  Requires macOS 13 Ventura+ · Apple Silicon
                </p>
              </div>

              {/* Right: waveform widget mockup */}
              <div className="fade-up fade-up-3 flex justify-center lg:justify-end">
                <div className="relative">
                  <div
                    className="hero-orb"
                    style={{
                      top: '50%',
                      left: '50%',
                      width: '280px',
                      height: '280px',
                      transform: 'translate(-50%,-50%)',
                      opacity: 0.25,
                    }}
                  />
                  <div className="relative flex flex-col items-center gap-6">
                    {/* Pill */}
                    <div
                      className="flex items-center gap-5 px-8 py-5 rounded-xl"
                      style={{
                        background: 'var(--s2)',
                        border: '1px solid var(--border2)',
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: 'var(--s2)',
                          border: '1px solid var(--border2)',
                          color: 'var(--text)',
                        }}
                      >
                        <Mic size={16} />
                      </div>
                      <div className="wave-container" style={{ gap: '3px' }}>
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className="wave-bar"
                            style={{ width: '3px' }}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="pulse-dot" />
                        <span
                          className="font-mono"
                          style={{ fontSize: '10px', color: 'var(--text3)' }}
                        >
                          listening
                        </span>
                      </div>
                    </div>
                    {/* Transcript bubble */}
                    <div
                      className="rounded-xl px-5 py-3 max-w-sm"
                      style={{
                        background: 'var(--s1)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <p
                        className="font-mono"
                        style={{
                          fontSize: '12px',
                          color: 'var(--text2)',
                          lineHeight: '1.6',
                        }}
                      >
                        <span style={{ color: 'var(--text3)' }}>▎</span>{' '}
                        &quot;Open auth handler and refactor the token
                        validation logic&quot;
                        <span className="cursor-blink" />
                      </p>
                    </div>
                    <div
                      className="font-mono"
                      style={{ fontSize: '10px', color: 'var(--text3)' }}
                    >
                      ↳ injected at cursor position
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How it works ──────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-12">How it works</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: <Type size={18} />,
                title: 'Click anywhere',
                body: 'Put your cursor in any text field — browser, Slack, terminal, notes, code editor. Any app.',
              },
              {
                step: '02',
                icon: <Mic size={18} />,
                title: 'Double-tap Right ⌥',
                body: 'The floating pill appears and starts recording. Or hold Right ⌥ for push-to-talk mode.',
              },
              {
                step: '03',
                icon: <Wand2 size={18} />,
                title: 'Text appears',
                body: 'whisper.cpp processes locally in under 2 s and injects the transcription straight to your cursor via paste.',
              },
            ].map(({ step, icon, title, body }) => (
              <div key={step} className="card-glow rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="tag-accent tag">{step}</span>
                  <div style={{ color: 'var(--text)' }}>{icon}</div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Inter', -apple-system, sans-serif",
                    fontWeight: 700,
                    fontSize: '16px',
                    color: 'var(--text)',
                    marginBottom: '10px',
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

        {/* ─── Features ──────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-12">Features</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <HardDrive size={17} />,
                title: '100% local processing',
                body: 'whisper.cpp runs on Metal GPU. Zero data leaves your machine. No API keys required.',
              },
              {
                icon: <Wand2 size={17} />,
                title: 'Floating pill widget',
                body: 'Always-on-top pill shows an animated waveform while you speak. Disappears when done.',
              },
              {
                icon: <Command size={17} />,
                title: 'Global hotkey',
                body: 'Double-tap Right ⌥ to toggle, or hold for push-to-talk. Works in every app, every time.',
              },
              {
                icon: <Keyboard size={17} />,
                title: 'Snippet expansion',
                body: 'Say a trigger word to instantly insert pre-defined blocks of text. Perfect for boilerplate.',
              },
              {
                icon: <History size={17} />,
                title: 'Transcription history',
                body: 'Every transcription is saved locally. Search, copy, and replay past recordings from the tray.',
              },
              {
                icon: <Globe size={17} />,
                title: 'Multi-language',
                body: 'English, Spanish, French, German, Japanese and many more — whisper understands them all.',
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

        {/* ─── Models ────────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-4">Selectable Models</div>
          <p
            className="mb-10"
            style={{
              fontSize: '13px',
              color: 'var(--text2)',
              maxWidth: '560px',
              lineHeight: '1.7',
            }}
          >
            Auto-downloaded from HuggingFace on first use. Runs 100% offline
            after that. Change models via Settings inside the tray menu.
          </p>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--s1)',
            }}
          >
            <table className="w-full text-left" style={{ fontSize: '13px' }}>
              <thead
                style={{
                  borderBottom: '1px solid var(--border)',
                  background: 'var(--s2)',
                }}
              >
                <tr>
                  {['Model', 'Size', 'Speed', 'Accuracy'].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-4 font-mono"
                      style={{
                        fontSize: '11px',
                        color: 'var(--text3)',
                        letterSpacing: '0.06em',
                        fontWeight: 600,
                      }}
                    >
                      {h.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Tiny',
                    size: '~75 MB',
                    speed: 'Fastest',
                    accuracy: 'Good',
                    accent: false,
                  },
                  {
                    name: 'Base',
                    size: '~142 MB',
                    speed: 'Fast',
                    accuracy: 'Better',
                    accent: true,
                  },
                  {
                    name: 'Small',
                    size: '~462 MB',
                    speed: 'Medium',
                    accuracy: 'Great',
                    accent: false,
                  },
                  {
                    name: 'Medium',
                    size: '~1.5 GB',
                    speed: 'Slower',
                    accuracy: 'Best',
                    accent: false,
                  },
                ].map(({ name, size, speed, accuracy, accent }) => (
                  <tr
                    key={name}
                    style={{
                      borderTop: '1px solid var(--border)',
                      background: accent
                        ? 'var(--s2)'
                        : 'transparent',
                    }}
                  >
                    <td className="px-6 py-4">
                      <span
                        style={{
                          color: 'var(--text)',
                          fontWeight: accent ? 600 : 400,
                        }}
                      >
                        {name}
                      </span>
                      {accent && (
                        <span
                          className="tag-accent tag ml-3"
                          style={{ fontSize: '9px', padding: '2px 6px' }}
                        >
                          Default
                        </span>
                      )}
                    </td>
                    <td
                      className="px-6 py-4 font-mono"
                      style={{ color: 'var(--text3)', fontSize: '12px' }}
                    >
                      {size}
                    </td>
                    <td className="px-6 py-4" style={{ color: 'var(--text2)' }}>
                      {speed}
                    </td>
                    <td className="px-6 py-4" style={{ color: 'var(--text2)' }}>
                      {accuracy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Setup ─────────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-12">Setup</div>
          <div className="max-w-2xl">
            {[
              [
                'Download & install',
                'Get the .dmg, open it, drag Zynthetix Voice.app to /Applications. No Node.js needed.',
              ],
              [
                'First launch',
                'Right-click the app → Open. Click Open in the security dialog. One time only.',
              ],
              [
                'Download model',
                'On first use the app downloads the Whisper base model (~142 MB) from HuggingFace.',
              ],
              [
                'Grant permissions',
                'Allow Microphone access and Accessibility access when prompted in System Settings.',
              ],
              [
                'Start dictating',
                'Click a text field, double-tap Right ⌥, speak naturally, double-tap again.',
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

        {/* ─── Architecture ──────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-10">Architecture</div>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-px rounded-xl overflow-hidden"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--border)',
            }}
          >
            {[
              ['Electron', 'System tray & global hotkeys'],
              ['whisper.cpp', 'Local transcription · Metal GPU'],
              ['osascript', 'Accessibility text injection'],
              ['SQLite', 'History & snippet storage'],
              ['React + Vite', 'Settings & dashboard UI'],
              ['Express', 'Local API server (port 7789)'],
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

        {/* ─── Permissions ───────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="section-label mb-10">Permissions</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                label: 'Microphone',
                reason:
                  'Capture audio while the recording pill is active. Only records when you activate the hotkey.',
              },
              {
                label: 'Accessibility',
                reason:
                  'Simulate ⌘V to paste transcribed text into whichever app has focus.',
              },
            ].map(({ label, reason }) => (
              <div
                key={label}
                className="card-glow rounded-xl p-7 flex items-start gap-4"
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'var(--s2)',
                    border: '1px solid var(--border2)',
                    color: 'var(--text)',
                  }}
                >
                  <ShieldAlert size={15} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: '6px',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text2)',
                      lineHeight: '1.7',
                    }}
                  >
                    {reason}
                  </p>
                </div>
              </div>
            ))}
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
            href="https://github.com/Zynthetix/zynthetix-voice"
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
