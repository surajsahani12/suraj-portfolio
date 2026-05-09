"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Code,
  MapPin,
  Zap,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { personalInfo, stats } from "@/data/portfolio";

const ROLES = [
  "Full-Stack Engineer",
  "IoT Platform Builder",
  "Backend Architect",
  "Real-Time Systems Dev",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(129,140,248,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-[#38bdf8]/20" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r border-b border-[#38bdf8]/20" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center z-10">
        {/* Status badge */}
        <div className="flex items-center gap-2 bg-[#0f1929] border border-[#1e293b] rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span
            className="text-xs text-[#94a3b8]"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f1f5f9] mb-4 leading-none tracking-tight"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="gradient-text-orange">
            {personalInfo.name.split(" ")[1]}
          </span>
        </h1>

        {/* Animated role */}
        <div className="h-10 mb-6 flex items-center justify-center">
          <p
            className={`text-xl md:text-2xl font-medium text-[#818cf8] transition-all duration-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            {"// "}{ROLES[roleIdx]}
          </p>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-[#94a3b8] max-w-2xl leading-relaxed mb-4">
          {personalInfo.summary}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-[#475569] text-sm mb-10">
          <MapPin size={13} />
          <span style={{ fontFamily: "DM Sans, sans-serif" }}>
            {personalInfo.location}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            View Projects <ArrowRight size={16} />
          </button>
          <a
            href="/resume/Resume_Suraj.pdf"
            download
            className="btn-secondary"
          >
            <Download size={16} /> Download CV
          </a>
          <a   href="mailto:suraj.s.devops@gmail.com?subject=Hiring Inquiry&body=Hi Suraj," className="btn-secondary">
            <Mail size={16} /> Contact
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center gap-4 mb-20">
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Code, href: personalInfo.leetcode, label: "LeetCode" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-[#1e293b] flex items-center justify-center text-[#475569] hover:text-[#38bdf8] hover:border-[rgba(56,189,248,0.3)] transition-all duration-200"
              aria-label={label}
            >
              <Icon size={17} />
            </a>
          ))}
          <div className="w-px h-6 bg-[#1e293b]" />
          <span className="text-xs text-[#475569]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            suraj.s.devops@gmail.com
          </span>
        </div>

        {/* Stats row */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-base p-5 flex flex-col items-center gap-1"
            >
              <div className="flex items-center gap-0.5">
                <Zap size={12} className="text-[#38bdf8]" />
                <span
                  className="text-2xl md:text-3xl font-black gradient-text-orange"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <AnimatedCounter
                    end={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </span>
              </div>
              <span className="text-xs text-[#475569] text-center" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
