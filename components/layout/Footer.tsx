"use client";

import { Github, Linkedin, Mail, Terminal, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#080d17]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#38bdf8] flex items-center justify-center text-[#080d17]">
            <Terminal size={12} className="text-white" />
          </div>
          <span
            className="text-[#f1f5f9] font-bold text-sm"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            suraj.dev
          </span>
        </div>

        {/* Copyright */}
        <p
          className="text-[#475569] text-sm flex items-center gap-1"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          <Code2 size={13} className="text-[#38bdf8]" />
          Built by Suraj Sahani · {new Date().getFullYear()}
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-[#1e293b] flex items-center justify-center text-[#475569] hover:text-[#38bdf8] hover:border-[rgba(56,189,248,0.3)] transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
