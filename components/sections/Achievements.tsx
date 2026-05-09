"use client";

import {
  Zap,
  TrendingUp,
  Timer,
  AlertTriangle,
  Bell,
  Component,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  Timer: <Timer size={20} />,
  AlertTriangle: <AlertTriangle size={20} />,
  Bell: <Bell size={20} />,
  Component: <Component size={20} />,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-[#0d1424]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// impact.metrics"
          title="Numbers that"
          highlight="tell the story."
          subtitle="Real metrics from production systems I've designed and shipped."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <div
              key={a.label}
              className="card-base p-6 group relative overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(56,189,248,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center text-[#38bdf8]">
                  {iconMap[a.icon]}
                </div>
                <span
                  className="text-4xl font-black gradient-text-orange"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {a.metric}
                </span>
              </div>

              <h3
                className="text-[#f1f5f9] font-bold text-sm mb-1"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {a.label}
              </h3>
              <p className="text-[#475569] text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
