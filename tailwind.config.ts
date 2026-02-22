import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f10",
        surface1: "#161618",
        surface2: "#1e1e21",
        accent: "#7c5cbf",
        "accent-hover": "#6b4dac",
        border: "#2a2a2e",
        muted: "#5a5a65",
        subtle: "#3a3a3f",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
