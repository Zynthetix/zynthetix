import Nav from "@/components/Nav";
import {
  Mic,
  Command,
  Type,
  History,
  Globe,
  Wand2,
  Download,
  Github,
  Check,
  Cpu,
  Keyboard,
  ShieldAlert,
  HardDrive
} from "lucide-react";

export const metadata = {
  title: "Voice — Zynthetix",
  description: "A WisprFlow-like macOS speech-to-text app. Runs 100% locally using whisper.cpp — no API key, no internet, no subscription required.",
};

export default function VoicePage() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cbf]" />
            <p className="text-xs font-medium tracking-widest text-[#7c5cbf] uppercase">Voice</p>
            <span className="text-[10px] font-mono text-[#5a5a65] bg-[#2a2a2e]/50 px-2 py-0.5 rounded ml-2">v2.0.0</span>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-[#e8e8ea] leading-[1.1] max-w-3xl mb-8">
            Press a hotkey. Speak. Done.
          </h1>
          <p className="text-[#9a9a9f] text-xl leading-relaxed max-w-2xl mb-10 font-light">
            A WisprFlow-like macOS speech-to-text app. Runs 100% locally using whisper.cpp — no API key, no internet, no subscription required.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Zynthetix/zynthetix-voice/releases/download/v2.0.0/Zynthetix.Voice-2.0.0-arm64.dmg"
              className="flex items-center gap-2 bg-[#7c5cbf] hover:bg-[#6b4dac] active:scale-[0.98] text-white text-sm font-medium px-5 py-3 rounded-lg transition-all shadow-sm"
            >
              <Download size={18} />
              Download for macOS
            </a>
            <a
              href="https://github.com/Zynthetix/zynthetix-voice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#9a9a9f] hover:text-[#e8e8ea] bg-[#2a2a2e]/30 hover:bg-[#2a2a2e]/60 border border-[#2a2a2e] text-sm font-medium px-5 py-3 rounded-lg transition-all"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">How it works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Type size={24} />,
                title: "Click anywhere",
                body: "Put your cursor in any text field — browser, Slack, terminal, notes, anything."
              },
              {
                step: "02",
                icon: <Mic size={24} />,
                title: "Double-tap Right ⌥",
                body: "The floating pill appears and starts recording. Or hold Right ⌥ for push-to-talk."
              },
              {
                step: "03",
                icon: <Wand2 size={24} />,
                title: "Paste instantly",
                body: "Text is completely processed locally and injected straight into your cursor via clipboard paste."
              },
            ].map(({ step, icon, title, body }) => (
              <div key={step} className="bg-[#161618]/30 border border-[#2a2a2e]/50 p-8 rounded-xl hover:border-[#3a3a3f] transition-all group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#7c5cbf] border border-[#7c5cbf]/30 bg-[#7c5cbf]/10 px-2 py-1 rounded">
                      {step}
                    </span>
                    <div className="text-[#5a5a65] group-hover:text-[#e8e8ea] transition-colors">
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-[#e8e8ea] mb-3">{title}</h3>
                  <p className="text-sm text-[#9a9a9f] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">Features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HardDrive size={20} />,
                title: "100% Local processing",
                body: "Local speech-to-text via whisper.cpp. Fully offline processing — zero data leaves your machine. No API keys required."
              },
              {
                icon: <Wand2 size={20} />,
                title: "Floating pill widget",
                body: "An always-on-top pill with an animated audio waveform shows your recording state."
              },
              {
                icon: <Command size={20} />,
                title: "Global hotkey",
                body: "Double-tap Right ⌥ to toggle, or hold to push-to-talk. Works perfectly in every app."
              },
              {
                icon: <Keyboard size={20} />,
                title: "Text snippet expansion",
                body: "Say a trigger word to magically insert pre-defined large blocks of text. Great for boilerplate."
              },
              {
                icon: <History size={20} />,
                title: "Dashboard interface",
                body: "Review transcription history, configure snippets, view stats, and access settings via a local web interface."
              },
              {
                icon: <Globe size={20} />,
                title: "Multi-language support",
                body: "Understands English, Spanish, French, German, Japanese, and numerous other languages seamlessly."
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

        {/* Models */}
        <section className="py-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">Selectable Models</p>
          </div>

          <div className="bg-[#161618]/30 border border-[#2a2a2e] rounded-xl p-8 mb-6">
            <p className="text-[#9a9a9f] text-sm leading-relaxed mb-8">
              Zynthetix Voice automatically downloads your selected Whisper model directly from HuggingFace on its first run. After that, everything runs 100% offline. Change models via Settings inside the tray menu.
            </p>

            <div className="overflow-x-auto border border-[#2a2a2e] rounded-lg bg-[#0f0f10]">
              <table className="w-full text-left text-sm text-[#9a9a9f]">
                <thead className="bg-[#161618]/50 text-[#e8e8ea] border-b border-[#2a2a2e]">
                  <tr>
                    <th className="px-6 py-4 font-medium">Model</th>
                    <th className="px-6 py-4 font-medium">Download Size</th>
                    <th className="px-6 py-4 font-medium">Processing Speed</th>
                    <th className="px-6 py-4 font-medium">Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2a2e]">
                  <tr className="hover:bg-[#161618]/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#e8e8ea]">Tiny</td>
                    <td className="px-6 py-4 font-mono text-xs">~75 MB</td>
                    <td className="px-6 py-4">Fastest</td>
                    <td className="px-6 py-4">Good</td>
                  </tr>
                  <tr className="hover:bg-[#161618]/30 transition-colors bg-[#7c5cbf]/5 relative">
                    <td className="px-6 py-4 font-medium text-[#7c5cbf] flex items-center gap-2">Base <span className="bg-[#7c5cbf] text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Default</span></td>
                    <td className="px-6 py-4 font-mono text-xs">~142 MB</td>
                    <td className="px-6 py-4">Fast</td>
                    <td className="px-6 py-4">Better</td>
                  </tr>
                  <tr className="hover:bg-[#161618]/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#e8e8ea]">Small</td>
                    <td className="px-6 py-4 font-mono text-xs">~462 MB</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">Great</td>
                  </tr>
                  <tr className="hover:bg-[#161618]/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#e8e8ea]">Medium</td>
                    <td className="px-6 py-4 font-mono text-xs">~1.5 GB</td>
                    <td className="px-6 py-4">Slower</td>
                    <td className="px-6 py-4">Best</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Setup */}
        <section className="py-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">Setup</p>
          </div>

          <div className="bg-[#161618]/30 border border-[#2a2a2e] rounded-xl p-8">
            <ol className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:h-[calc(100%-32px)] before:w-px before:bg-[#2a2a2e]">
              {[
                ["Download & install", "Get the .dmg, open it, and drag the app to your /Applications folder. No Node.js or setup needed."],
                ["First launch (Unsigned Build)", "Right-click Zynthetix Voice.app → Open. Click Open in the dialog to bypass macOS Gatekeeper."],
                ["Download Model", "The app lives quietly in your menu bar (🎙 icon). On your very first transcription attempt, the app must download the base Whisper model (~142 MB)."],
                ["Grant permissions", "Allow Microphone (to hear you speak) and Accessibility (to inject transcribed text) when requested inside your System Settings."],
                ["Start dictating", "Click a text field anywhere, double-tap Right ⌥, speak naturally, and double-tap again. Text enters via clipboard."],
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

        {/* Tech stack */}
        <section className="py-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">Architecture</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#2a2a2e] rounded-lg overflow-hidden border border-[#2a2a2e]">
            {[
              ["Electron", "System tray & keybindings"],
              ["whisper.cpp", "Local transcription engine"],
              ["osascript", "Accessibility text injection"],
              ["SQLite", "Stats & snippet memory"],
              ["React + Vite", "Interface & Dashboard SPA"],
              ["Express Server", "Local API endpoint (port 7789)"],
            ].map(([name, desc]) => (
              <div key={name} className="bg-[#161618]/50 px-6 py-5 hover:bg-[#1c1c1f] transition-colors">
                <p className="text-sm font-medium text-[#e8e8ea] mb-1">{name}</p>
                <p className="text-xs text-[#5a5a65]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Permissions */}
        <section className="py-20 border-b border-[#2a2a2e]">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-1 rounded-full bg-[#3a3a3f]" />
            <p className="text-xs font-medium tracking-widest text-[#5a5a65] uppercase">Permissions required</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2a2a2e] rounded-lg overflow-hidden border border-[#2a2a2e]">
            {[
              ["Microphone", "Capture your voice while recording via the OS."],
              ["Accessibility", "Simulate Cmd+V keyboard strokes to paste text dynamically into other applications."],
            ].map(([perm, reason]) => (
              <div key={perm} className="bg-[#161618]/50 px-6 py-5 hover:bg-[#1c1c1f] transition-colors flex items-start gap-4">
                <ShieldAlert size={16} className="text-[#5a5a65] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#e8e8ea] mb-1">{perm}</p>
                  <p className="text-sm text-[#5a5a65]">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 flex items-center justify-between text-[#5a5a65] text-xs font-medium">
          <span>© {new Date().getFullYear()} Zynthetix</span>
          <a href="https://github.com/Zynthetix/Zynthetix" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8ea] transition-colors duration-200">
            github.com/Zynthetix
          </a>
        </footer>

      </main>
    </>
  );
}
