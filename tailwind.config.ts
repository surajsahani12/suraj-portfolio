import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: {
          primary: "#080d17",
          secondary: "#0d1424",
          card: "#0f1929",
          border: "#1e293b",
        },
        accent: {
          blue: "#38bdf8",
          "blue-dim": "#0284c7",
          indigo: "#818cf8",
          "indigo-dim": "#4f46e5",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#94a3b8",
          muted: "#475569",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        glow: "glow 2s ease-in-out infinite alternate",
        "scan-line": "scanLine 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(56,189,248,0.1)" },
          "100%": { boxShadow: "0 0 40px rgba(56,189,248,0.3)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,189,248,0.15), transparent)",
        "card-glow":
          "linear-gradient(135deg, rgba(56,189,248,0.05), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
