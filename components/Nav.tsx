import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export default function Nav() {
  return (
    <header className="border-b border-[#2a2a2e] sticky top-0 bg-[#0f0f10]/80 backdrop-blur-md z-50">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Zynthetix Logo"
            width={24}
            height={24}
            className="opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[#e8e8ea] font-medium tracking-tight text-sm">
            Zynthetix
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/autoagent"
            className="text-[#5a5a65] hover:text-[#e8e8ea] text-sm transition-colors duration-200 font-medium"
          >
            AutoAgent
          </Link>
          <Link
            href="/voice"
            className="text-[#5a5a65] hover:text-[#e8e8ea] text-sm transition-colors duration-200 font-medium"
          >
            Voice
          </Link>
          <a
            href="https://github.com/Zynthetix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a5a65] hover:text-[#e8e8ea] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
