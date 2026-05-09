"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080d17]/90 backdrop-blur-md border-b border-[#1e293b]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-[#38bdf8] flex items-center justify-center text-[#080d17]">
              <Terminal size={14} className="text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-[#f1f5f9] font-bold text-sm"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              suraj.dev
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 animated-underline ${
                  active === l.href.slice(1)
                    ? "text-[#38bdf8]"
                    : "text-[#94a3b8] hover:text-[#f1f5f9]"
                }`}
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:suraj.s.devops@gmail.com"
            className="hidden md:flex btn-primary text-sm py-2 px-5"
          >
            Hire Me
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080d17]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 md:hidden">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-2xl font-bold text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:suraj.s.devops@gmail.com"
            className="btn-primary mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
