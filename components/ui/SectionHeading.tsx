"use client";

interface SectionHeadingProps {
  tag: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-16 ${alignClass}`}>
      <span className="section-tag">{tag}</span>
      <h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {title}{" "}
        {highlight && (
          <span className="gradient-text-orange">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
