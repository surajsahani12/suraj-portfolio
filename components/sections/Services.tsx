"use client";

import {
  Layers,
  Activity,
  LayoutDashboard,
  ShieldCheck,
  Cpu,
  Container,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers size={20} />,
  Activity: <Activity size={20} />,
  LayoutDashboard: <LayoutDashboard size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Cpu: <Cpu size={20} />,
  Container: <Container size={20} />,
};

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// what.i.build"
          title="Services I"
          highlight="specialize in."
          subtitle="End-to-end engineering across the full stack — from real-time infrastructure to polished frontends."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card-base p-6 group relative overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(56,189,248,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <span
                className="absolute top-4 right-4 text-4xl font-black text-[#1e293b] group-hover:text-[rgba(56,189,248,0.1)] transition-colors duration-300"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center text-[#38bdf8] mb-4 group-hover:bg-[#38bdf8]/20 transition-colors">
                  {iconMap[s.icon]}
                </div>
                <h3
                  className="text-[#f1f5f9] font-bold text-base mb-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
