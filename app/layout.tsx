import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suraj Sahani — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 2.5+ years building real-time industrial IoT platforms, SaaS dashboards, and scalable backend systems. Mumbai, India.",
  keywords: [
    "Suraj Sahani",
    "Full Stack Developer",
    "React Developer",
    "Node.js Engineer",
    "IoT Platform",
    "Industrial Monitoring",
    "Mumbai",
    "WebSocket",
    "MQTT",
    "PostgreSQL",
  ],
  authors: [{ name: "Suraj Sahani", url: "https://github.com/surajsahani12" }],
  openGraph: {
    title: "Suraj Sahani — Full-Stack Software Engineer",
    description:
      "Building real-time industrial IoT platforms and scalable web systems.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
