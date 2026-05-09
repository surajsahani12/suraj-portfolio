"use client";

import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

const CATEGORIES = ["All", "SaaS Platform", "Embedded Systems", "Industrial Monitoring"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 bg-[#0d1424]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// key.projects"
          title="Production systems"
          highlight="I've shipped."
          subtitle="Four real platforms running on real hardware, handling real industrial workloads."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#38bdf8] text-white"
                  : "bg-[#0f1929] border border-[#1e293b] text-[#94a3b8] hover:border-[rgba(56,189,248,0.3)] hover:text-[#38bdf8]"
              }`}
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((project) => {
            const isExpanded = expanded === project.id;
            return (
              <div
                key={project.id}
                className={`card-base p-6 flex flex-col gap-4 transition-all duration-300 ${
                  project.featured ? "border-[rgba(56,189,248,0.2)]" : ""
                }`}
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {project.featured && (
                      <span className="tag-chip text-[10px] mb-2 inline-block">
                        ★ Featured
                      </span>
                    )}
                    <h3
                      className="text-[#f1f5f9] font-bold text-base leading-snug"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <span className="text-[#475569] text-xs mt-1 inline-block">
                      {project.category}
                    </span>
                  </div>
                  {/* <div className="flex gap-2 flex-shrink-0">
                    <a
                      href={`https://github.com/surajsahani12`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg border border-[#1e293b] flex items-center justify-center text-[#475569] hover:text-[#38bdf8] hover:border-[rgba(56,189,248,0.3)] transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                  </div> */}
                </div>

                {/* Short desc */}
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Impact */}
                <div className="flex items-start gap-2 bg-[rgba(129,140,248,0.05)] border border-[rgba(129,140,248,0.1)] rounded-xl p-3">
                  <TrendingUp size={13} className="text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <p className="text-[#818cf8] text-xs leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="tag-chip text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expand toggle */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : project.id)}
                  className="flex items-center gap-1.5 text-[#475569] hover:text-[#38bdf8] text-xs transition-colors"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  {isExpanded ? "collapse" : "show_highlights()"}
                </button>

                {/* Expanded highlights */}
                {isExpanded && (
                  <div className="border-t border-[#1e293b] pt-4 space-y-2">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <span className="text-[#38bdf8] text-xs mt-0.5 flex-shrink-0">▸</span>
                        <p className="text-[#94a3b8] text-xs leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        {/* <div className="mt-12 text-center">
          <a
            href="https://github.com/surajsahani12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={15} /> View All on GitHub <ExternalLink size={13} />
          </a>
        </div> */}
      </div>
    </section>
  );
}
