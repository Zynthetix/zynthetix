import Nav from "@/components/Nav";
import Link from "next/link";
import { Terminal, Mic, Download, ArrowRight, Check } from "lucide-react";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-32 pb-24 border-b border-[#2a2a2e]">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cbf]" />
              <p className="text-xs font-medium tracking-widest text-[#7c5cbf] uppercase">
                Zynthetix
              </p>
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-[#e8e8ea] leading-[1.1]">
              Tools built for developers working with AI agents.
            </h1>
            <p className="text-[#5a5a65] text-xl leading-relaxed max-w-xl font-light">
              We make focused macOS applications that fit cleanly into an AI-assisted
              development workflow — no clutter, no subscriptions.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="py-24 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">
              Products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AutoAgent Card */}
            <div className="group relative border border-[#2a2a2e] bg-[#161618]/50 p-8 rounded-xl hover:border-[#3a3a3f] transition-all duration-300">
              <div className="absolute top-8 right-8 text-[#2a2a2e] group-hover:text-[#3a3a3f] transition-colors">
                <Terminal size={32} strokeWidth={1} />
              </div>

              <div className="flex flex-col h-full gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-[10px] font-medium tracking-widest text-[#7c5cbf] uppercase">
                      macOS • Open Source
                    </p>
                    <span className="text-[10px] font-mono text-[#5a5a65] bg-[#2a2a2e]/50 px-1.5 py-0.5 rounded">
                      v0.2.1
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-[#e8e8ea] tracking-tight">
                    AutoAgent
                  </h2>
                </div>

                <p className="text-[#9a9a9f] text-sm leading-relaxed max-w-sm">
                  The cockpit for AI-assisted development. Manage multiple AI agent
                  terminal sessions in a split-grid workspace — without the chaos.
                </p>

                <ul className="space-y-3 mt-2">
                  {[
                    "Terminal grid layouts (Solo → 4×4)",
                    "Persistent project tabs",
                    "Real PTY sessions with 256-colour",
                    "⌘1–9 keyboard shortcuts"
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#5a5a65]">
                      <Check size={14} className="text-[#7c5cbf] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mt-auto pt-4">
                  <a
                    href="https://github.com/Zynthetix/zynthetix-autoagent/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#7c5cbf] hover:bg-[#6b4dac] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all active:scale-[0.98]"
                  >
                    <Download size={16} />
                    Download
                  </a>
                  <Link
                    href="/autoagent"
                    className="flex items-center gap-2 text-[#9a9a9f] hover:text-[#e8e8ea] text-sm font-medium transition-colors"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Voice Card */}
            <div className="group relative border border-[#2a2a2e] bg-[#161618]/50 p-8 rounded-xl hover:border-[#3a3a3f] transition-all duration-300">
              <div className="absolute top-8 right-8 text-[#2a2a2e] group-hover:text-[#3a3a3f] transition-colors">
                <Mic size={32} strokeWidth={1} />
              </div>

              <div className="flex flex-col h-full gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-[10px] font-medium tracking-widest text-[#7c5cbf] uppercase">
                      macOS • Apple Silicon
                    </p>
                    <span className="text-[10px] font-mono text-[#5a5a65] bg-[#2a2a2e]/50 px-1.5 py-0.5 rounded">
                      v1.1.0
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-[#e8e8ea] tracking-tight">
                    Voice
                  </h2>
                </div>

                <p className="text-[#9a9a9f] text-sm leading-relaxed max-w-sm">
                  Press a hotkey and speak — your words are typed wherever your cursor
                  is. Powered by Deepgram nova-3. Works in any app.
                </p>

                <ul className="space-y-3 mt-2">
                  {[
                    "Double-tap Right ⌥ to toggle",
                    "Floating pill with live waveform",
                    "Text snippet expansion",
                    "Menu bar — no Dock icon"
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#5a5a65]">
                      <Check size={14} className="text-[#7c5cbf] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mt-auto pt-4">
                  <a
                    href="https://github.com/Zynthetix/zynthetix-voice/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#7c5cbf] hover:bg-[#6b4dac] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all active:scale-[0.98]"
                  >
                    <Download size={16} />
                    Download
                  </a>
                  <Link
                    href="/voice"
                    className="flex items-center gap-2 text-[#9a9a9f] hover:text-[#e8e8ea] text-sm font-medium transition-colors"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">
              Philosophy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Focused", body: "Every product does one thing well. No dashboards, no enterprise bloat, no feature creep for its own sake." },
              { title: "Open", body: "Free to download. Source available. No accounts required. No usage tracking. Your data stays yours." },
              { title: "Native", body: "Built for macOS. Feels like it belongs there — fast, quiet, minimal. Respects system resources." },
            ].map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-[#e8e8ea]">{title}</h3>
                <p className="text-sm text-[#9a9a9f] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 flex items-center justify-between text-[#5a5a65] text-xs font-medium">
          <span>© {new Date().getFullYear()} Zynthetix</span>
          <a
            href="https://github.com/Zynthetix"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e8e8ea] transition-colors duration-200"
          >
            github.com/Zynthetix
          </a>
        </footer>
      </main>
    </>
  );
}
