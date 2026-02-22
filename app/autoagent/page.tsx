import Nav from "@/components/Nav";
import {
  Terminal,
  LayoutGrid,
  Save,
  Maximize2,
  AlertTriangle,
  Shield,
  Download,
  Github,
  Check
} from "lucide-react";

export const metadata = {
  title: "AutoAgent — Zynthetix",
  description: "The cockpit for AI-assisted development. Manage multiple AI agent terminal sessions in parallel.",
};

export default function AutoAgentPage() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cbf]" />
            <p className="text-xs font-medium tracking-widest text-[#7c5cbf] uppercase">AutoAgent</p>
            <span className="text-[10px] font-mono text-[#5a5a65] bg-[#2a2a2e]/50 px-2 py-0.5 rounded ml-2">v0.2.1</span>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-[#e8e8ea] leading-[1.1] max-w-3xl mb-8">
            The cockpit for AI-assisted development.
          </h1>
          <p className="text-[#9a9a9f] text-xl leading-relaxed max-w-2xl mb-10 font-light">
            Manage multiple AI agent terminal sessions in parallel — without the chaos.
            Works with Claude Code, Copilot CLI, Aider, GPT-Engineer, and any CLI-based agent.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Zynthetix/zynthetix-autoagent/releases/download/v0.2.1/Zynthetix.AutoAgent_0.2.1_aarch64.dmg"
              className="flex items-center gap-2 bg-[#7c5cbf] hover:bg-[#6b4dac] active:scale-[0.98] text-white text-sm font-medium px-5 py-3 rounded-lg transition-all shadow-sm"
            >
              <Download size={18} />
              Download for macOS
            </a>
            <a
              href="https://github.com/Zynthetix/zynthetix-autoagent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#9a9a9f] hover:text-[#e8e8ea] bg-[#2a2a2e]/30 hover:bg-[#2a2a2e]/60 border border-[#2a2a2e] text-sm font-medium px-5 py-3 rounded-lg transition-all"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
          <p className="text-xs text-[#5a5a65] mt-4 flex items-center gap-2">
            <Check size={12} className="text-[#7c5cbf]" />
            Requires macOS 13+ · Apple Silicon
          </p>
        </section>


        {/* Features */}
        <section className="py-24 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">Features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LayoutGrid size={20} />,
                title: "Terminal grid layouts",
                body: "Solo, Side by Side, Stacked, 3 Columns, 2×2, 3×3, 4×4. Switch layouts without killing running sessions."
              },
              {
                icon: <Terminal size={20} />,
                title: "Real PTY sessions",
                body: "Full xterm.js with 256-colour support, your default shell ($SHELL), and proper ANSI rendering for spinner-based CLIs."
              },
              {
                icon: <Save size={20} />,
                title: "Persistent project tabs",
                body: "Open projects are remembered across restarts. ⌘1–9 keyboard shortcuts let you switch instantly."
              },
              {
                icon: <AlertTriangle size={20} />,
                title: "Smart shrink warning",
                body: "When reducing terminals, choose exactly which sessions to close. Nothing is killed without your consent."
              },
              {
                icon: <Shield size={20} />,
                title: "Environment sanitization",
                body: "CI flags and IDE variables are stripped so agent CLIs behave exactly as they would in a native terminal."
              },
              {
                icon: <Maximize2 size={20} />,
                title: "Unified design system",
                body: "Clean dark UI: #0f0f10 background, Inter typography, 8px grid, subtle 1px borders. No glassmorphism."
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4 p-6 bg-[#161618]/30 border border-[#2a2a2e]/50 rounded-lg hover:border-[#3a3a3f] transition-all group">
                <div className="text-[#7c5cbf] bg-[#7c5cbf]/10 w-10 h-10 flex items-center justify-center rounded-md mb-2 group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <h3 className="text-base font-medium text-[#e8e8ea]">{title}</h3>
                <p className="text-sm text-[#9a9a9f] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">Built with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#2a2a2e] rounded-lg overflow-hidden border border-[#2a2a2e]">
            {[
              ["Tauri v2", "App shell · lightweight"],
              ["React 19 + TypeScript", "Frontend"],
              ["xterm.js v6", "Terminal emulator"],
              ["portable-pty (Rust)", "Real PTY backend"],
              ["Tailwind CSS v4", "Styling"],
              ["Zustand", "State management"],
            ].map(([name, desc]) => (
              <div key={name} className="bg-[#161618]/50 px-6 py-5 hover:bg-[#1c1c1f] transition-colors">
                <p className="text-sm font-medium text-[#e8e8ea] mb-1">{name}</p>
                <p className="text-xs text-[#5a5a65]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Install */}
        <section className="py-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">Install</p>
          </div>

          <div className="bg-[#161618]/30 border border-[#2a2a2e] rounded-xl p-8">
            <ol className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:h-[calc(100%-32px)] before:w-px before:bg-[#2a2a2e]">
              {[
                ["Download", "Get the .dmg from the Releases page."],
                ["Open", "Open the .dmg → drag Zynthetix AutoAgent.app to /Applications."],
                ["First launch", "macOS blocks unsigned apps. Right-click the app → Open → click Open. Once only."],
              ].map(([step, desc], i) => (
                <li key={step} className="flex items-start gap-6 relative">
                  <span className="w-10 h-10 rounded-full bg-[#0f0f10] border border-[#2a2a2e] flex items-center justify-center text-xs font-mono text-[#9a9a9f] z-10 flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className="pt-2">
                    <p className="text-base font-medium text-[#e8e8ea]">{step}</p>
                    <p className="text-sm text-[#9a9a9f] mt-1 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 flex items-center justify-between text-[#5a5a65] text-xs font-medium">
          <span>© {new Date().getFullYear()} Zynthetix</span>
          <a href="https://github.com/Zynthetix/zynthetix-autoagent" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8ea] transition-colors duration-200">
            github.com/Zynthetix/zynthetix-autoagent
          </a>
        </footer>

      </main>
    </>
  );
}
