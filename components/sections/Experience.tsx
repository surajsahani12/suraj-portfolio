"use client";

import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// work.history"
          title="Where I've"
          highlight="built things."
          align="left"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#38bdf8] via-[#38bdf8]/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-8 md:ml-14">
                {/* Dot */}
                <div className="absolute -left-[3.25rem] top-6 w-4 h-4 rounded-full bg-[#38bdf8] border-4 border-[#080d17] hidden md:block z-10" />

                {/* Card */}
                <div className="card-base p-6 md:p-8 w-full group">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={18} className="text-[#38bdf8]" />
                      </div>
                      <div>
                        <h3
                          className="text-[#f1f5f9] font-bold text-lg"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-[#38bdf8] text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                        <CalendarDays size={12} />
                        <span style={{ fontFamily: "JetBrains Mono, monospace" }}>
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#475569]">
                        <MapPin size={11} />
                        <span>{exp.location}</span>
                      </div>
                      <span className="tag-chip">{exp.type}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="text-[#38bdf8] text-xs mt-1 flex-shrink-0">▸</span>
                        <p className="text-[#94a3b8] text-sm leading-relaxed">{b}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
