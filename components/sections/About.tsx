"use client";

import { GraduationCap, Award, Building2, Terminal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, education, certifications } from "@/data/portfolio";

const highlights = [
  { label: "Real-Time Telemetry", desc: "WebSocket & MQTT pipelines at 1,000+ msg/sec" },
  { label: "Multi-Tenant SaaS", desc: "RBAC, JWT auth, isolated tenant architecture" },
  { label: "Full-Stack Ownership", desc: "Schema → API → UI → Docker → Production" },
  { label: "Industrial IoT Focus", desc: "Embedded Linux, IPC, firmware interfaces" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(129,140,248,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// about.me"
          title="Architecting systems, not just"
          highlight="writing code."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — prose */}
          <div className="space-y-6">
            <p className="text-[#94a3b8] text-base leading-relaxed">
              I&apos;m{" "}
              <span className="text-[#f1f5f9] font-medium">Suraj Sahani</span>,
              a Full-Stack Software Engineer at{" "}
              <span className="text-[#38bdf8] font-medium">
                Embedos Engineering LLP
              </span>{" "}
              in Mumbai. My work lives at the intersection of industrial
              hardware and modern web — I build the systems that make real-world
              machines observable, configurable, and controllable through a
              browser.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              Over 2.5 years, I&apos;ve shipped full production systems: from
              designing PostgreSQL schemas optimized for high-throughput IoT
              writes, to building React dashboards with draggable widget layouts,
              to containerizing everything with Docker behind an Nginx reverse
              proxy. I work closely with firmware and hardware teams, which means
              I actually understand the constraints I&apos;m building against.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              My engineering instinct is to make things{" "}
              <span className="text-[#f1f5f9] font-medium">
                reliable first, fast second, and beautiful third
              </span>
              . I find messy legacy codebases interesting, not discouraging.
            </p>

            {/* Current role card */}
            <div className="card-base p-5 flex items-start gap-4 mt-6">
              <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0">
                <Building2 size={18} className="text-[#38bdf8]" />
              </div>
              <div>
                <p className="text-[#f1f5f9] font-semibold text-sm">
                  Full-Stack Software Engineer
                </p>
                <p className="text-[#94a3b8] text-xs">
                  Embedos Engineering LLP · Nov 2023 – Present
                </p>
                <p className="text-[#475569] text-xs mt-1">Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* Right — cards */}
          <div className="space-y-4">
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="card-base p-4 group">
                  <div className="flex items-center gap-2 mb-1">
                    <Terminal size={12} className="text-[#38bdf8]" />
                    <span
                      className="text-[#f1f5f9] text-sm font-semibold"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {h.label}
                    </span>
                  </div>
                  <p className="text-[#475569] text-xs leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="card-base p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#818cf8]/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-[#818cf8]" />
              </div>
              <div>
                <p className="text-[#f1f5f9] font-semibold text-sm">
                  {education.degree}
                </p>
                <p className="text-[#94a3b8] text-xs">
                  {education.institution}
                </p>
                <p className="text-[#475569] text-xs">{education.period}</p>
                <div className="mt-2">
                  <span className="tag-chip">CGPA {education.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card-base p-5">
              <div className="flex items-center gap-2 mb-4">
                <Award size={15} className="text-[#38bdf8]" />
                <span
                  className="text-[#f1f5f9] font-semibold text-sm"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Certifications
                </span>
              </div>
              <div className="space-y-2">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[#38bdf8] text-xs mt-0.5">▸</span>
                    <div>
                      <p className="text-[#f1f5f9] text-xs font-medium">
                        {c.title}
                      </p>
                      <p className="text-[#475569] text-xs">{c.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
