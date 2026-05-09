"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 20)
      e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // In production, wire up to an API route or EmailJS
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="py-28 relative">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// get.in.touch"
          title="Let's build"
          highlight="something real."
          subtitle="Open to full-time roles and interesting consulting work. Based in Mumbai, available remotely."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Info cards */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
              {
                icon: MapPin,
                label: "Location",
                value: personalInfo.location,
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card-base p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center text-[#38bdf8] flex-shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-[#475569] text-xs">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#f1f5f9] text-sm hover:text-[#38bdf8] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#f1f5f9] text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="card-base p-5">
              <p className="text-[#475569] text-xs mb-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                // social_links
              </p>
              <div className="flex gap-3">
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
                    className="flex-1 h-10 rounded-xl border border-[#1e293b] flex items-center justify-center text-[#475569] hover:text-[#38bdf8] hover:border-[rgba(56,189,248,0.3)] transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-base p-4 border-[rgba(129,140,248,0.2)] bg-[rgba(129,140,248,0.03)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-[#818cf8] text-sm font-medium">
                  Available for opportunities
                </p>
              </div>
              <p className="text-[#475569] text-xs mt-1">
                Open to full-time roles · Remote & Mumbai · Immediate joiner
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="card-base p-6 md:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <CheckCircle2 size={48} className="text-green-400" />
                  <h3 className="text-[#f1f5f9] font-bold text-xl" style={{ fontFamily: "Syne, sans-serif" }}>
                    Message sent!
                  </h3>
                  <p className="text-[#94a3b8] text-sm text-center">
                    Your default mail client should have opened. I'll get back to you soon.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-secondary text-sm py-2 px-5">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#475569] text-xs mb-1.5" htmlFor="name">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="form-input"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#475569] text-xs mb-1.5" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="form-input"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#475569] text-xs mb-1.5" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Job opportunity / Freelance project / Just saying hi"
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-[#475569] text-xs mb-1.5" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about the role, project, or whatever's on your mind..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="form-input resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={15} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
