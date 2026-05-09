"use client";

import {
  Code2,
  Monitor,
  Server,
  Database,
  Container,
  Network,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={18} />,
  Monitor: <Monitor size={18} />,
  Server: <Server size={18} />,
  Database: <Database size={18} />,
  Container: <Container size={18} />,
  Network: <Network size={18} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0d1424]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// tech.stack"
          title="Tools I ship"
          highlight="production code with."
          subtitle="From schema design to containerized deployment — the full picture."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const isOrange = cat.color === "orange";
            return (
              <div
                key={cat.category}
                className="card-base p-6 group hover:shadow-[0_20px_60px_rgba(56,189,248,0.08)]"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isOrange
                        ? "bg-[#38bdf8]/10 text-[#38bdf8]"
                        : "bg-[#818cf8]/10 text-[#818cf8]"
                    }`}
                  >
                    {iconMap[cat.icon]}
                  </div>
                  <h3
                    className="text-[#f1f5f9] font-bold text-base"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {cat.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={isOrange ? "tag-chip" : "tag-chip tag-chip-cyan"}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* System design highlights */}
        <div className="mt-10 card-base p-6 border-[rgba(56,189,248,0.2)]">
          <h3
            className="text-[#38bdf8] text-sm font-bold mb-4"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            // system_design_highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Real-time telemetry ingestion at 1,000+ events/sec via WebSocket & MQTT",
              "Secure multi-tenant SaaS with RBAC + JWT across isolated tenants",
              "PostgreSQL schema design, indexing & query optimization for IoT workloads",
              "Event-driven architecture connecting devices, backend, and dashboards",
              "Docker + Nginx containerized deployments in Linux production environments",
              "IPC socket bridge between Node.js and Python firmware services",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2">
                <span className="text-[#38bdf8] text-xs mt-0.5 flex-shrink-0">▸</span>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
