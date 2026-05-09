// ─────────────────────────────────────────────────────────────────────────────
// BACKEND-FOCUSED PORTFOLIO DATA
// Positioning: Systems / Backend Heavy Full-Stack Engineer
// Stack: Next.js + TypeScript + AI-ready Architecture
// ─────────────────────────────────────────────────────────────────────────────

// ─── PERSONAL INFO ───────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Suraj Sahani",
  role: "Backend-Focused Full-Stack Engineer",
  tagline:
    "Building scalable real-time systems, telemetry pipelines, and production-ready industrial platforms.",

  summary:
    "Backend-focused Full-Stack Engineer with 2.5+ years of experience architecting and deploying real-time industrial IoT and SaaS platforms. Specialized in REST API architecture, WebSocket/MQTT telemetry pipelines, RBAC-secured multi-tenant systems, containerized deployments, and Linux-based infrastructure. Experienced across the full engineering lifecycle — from database schema design and backend services to frontend dashboards and production deployments.",

  location: "Mumbai, India",
  email: "suraj.s.devops@gmail.com",
  phone: "+91-9372280358",

  github: "https://github.com/surajsahani12",
  linkedin: "https://www.linkedin.com/in/suraj-sahani-b9a018205/",
  leetcode: "https://leetcode.com/u/SK1_coder/",

  company: "Embedos Engineering LLP",
  available: true,
};

// ─── STATS ───────────────────────────────────────────────────────────────────
export const stats = [
  {
    value: 2.5,
    suffix: "+",
    label: "Years Experience",
    decimals: 1,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Telemetry Events/sec",
  },
  {
    value: 4,
    suffix: "+",
    label: "Production Systems Shipped",
  },
  {
    value: 20,
    suffix: "+",
    label: "Reusable Components Built",
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    category: "Backend & APIs",
    icon: "Server",
    color: "orange",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "JWT Authentication",
      "RBAC Authorization",
      "WebSocket",
      "MQTT",
      "IPC Socket Communication",
      "API Security",
      "Real-Time Data Pipelines",
    ],
  },
  {
    category: "System Design & Architecture",
    icon: "Network",
    color: "cyan",
    skills: [
      "Multi-Tenant Architecture",
      "Event-Driven Systems",
      "Real-Time Systems",
      "Industrial IoT Architecture",
      "Scalable Backend Design",
      "Telemetry Pipelines",
      "Distributed Communication",
      "System Design",
    ],
  },
  {
    category: "Infrastructure & Deployment",
    icon: "Container",
    color: "orange",
    skills: [
      "Docker",
      "Nginx",
      "Linux",
      "CI/CD",
      "PM2",
      "Containerization",
      "Reverse Proxy Configuration",
      "TLS / mTLS",
      "Production Deployments",
      "Server Configuration",
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "cyan",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Database Schema Design",
      "Query Optimization",
      "Sequelize ORM",
    ],
  },
  {
    category: "Languages",
    icon: "Code2",
    color: "orange",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "C++",
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    color: "cyan",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Real-Time Dashboards",
      "SCSS",
    ],
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experiences = [
  {
    company: "Embedos Engineering LLP",
    role: "Backend-Focused Full-Stack Engineer",
    period: "Nov 2023 – Present",
    location: "Mumbai, India",
    type: "Full-time",

    bullets: [
      "Architected and developed scalable backend systems and full-stack industrial IoT applications using Node.js, Express, PostgreSQL, React, and Next.js.",

      "Designed event-driven telemetry pipelines using WebSocket and MQTT processing 1,000+ real-time messages per second.",

      "Built modular REST API architecture with JWT authentication and RBAC authorization supporting secure multi-tenant deployments.",

      "Designed optimized PostgreSQL schemas, indexing strategies, and query workflows for high-throughput industrial workloads.",

      "Implemented Dockerized production deployments with Nginx reverse proxy configuration and Linux-based runtime environments.",

      "Developed IPC socket communication layer between Node.js backend services and Python firmware services for embedded Linux systems.",

      "Built reusable frontend component systems and real-time dashboards for industrial monitoring, telemetry visualization, and configuration management.",

      "Collaborated with firmware, hardware, QA, and product teams to deliver production-ready industrial platforms.",
    ],

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "WebSocket",
      "MQTT",
      "Docker",
      "Nginx",
      "Python",
      "Linux",
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,

    title: "Multi-Tenant Industrial IoT SaaS Platform",

    shortDesc:
      "Architected and modernized a legacy industrial monitoring platform into a scalable multi-tenant SaaS system with real-time telemetry and RBAC-secured APIs.",

    longDesc:
      "Led full-stack redevelopment of a legacy industrial IoT platform into a production-ready multi-tenant SaaS architecture. Designed secure REST APIs, telemetry ingestion pipelines, RBAC authorization systems, and containerized deployment workflows.",

    impact:
      "Contributed to ~20% business growth through improved monitoring workflows, scalability, and analytics visibility.",

    tags: [
      "React.js",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "WebSocket",
      "MQTT",
      "Docker",
      "Nginx",
      "Sequelize",
    ],

    highlights: [
      "Designed real-time telemetry ingestion pipeline handling 1,000+ events/sec",
      "Implemented secure multi-tenant RBAC architecture with JWT-based authentication",
      "Built configurable dashboards with draggable widgets, gauges, charts, and maps",
      "Containerized deployment using Docker and Nginx reverse proxy",
      "Optimized backend API performance and PostgreSQL query execution",
    ],

    architecture: [
      "IoT Devices → MQTT Broker → Node.js Services → WebSocket Streaming → React Dashboard",
      "Nginx reverse proxy for secure routing and deployment management",
      "Role-isolated tenant architecture with JWT-secured APIs",
    ],

    category: "SaaS Platform",
    featured: true,
  },

  {
    id: 2,

    title: "Embedded Firmware Management Platform",

    shortDesc:
      "Built complete embedded Linux web interface for firmware configuration, real-time telemetry, protocol management, and reporting.",

    longDesc:
      "Architected a backend-heavy embedded management system integrating Node.js backend services with Python firmware services using IPC sockets. Designed real-time telemetry streaming, REST APIs, and Linux deployment workflows.",

    impact:
      "Replaced manual firmware configuration workflows with centralized browser-based management system deployed on embedded Linux hardware.",

    tags: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express",
      "SQLite",
      "Python",
      "IPC Socket",
      "WebSocket",
      "Linux",
    ],

    highlights: [
      "Designed IPC communication layer between backend services and firmware processes",
      "Implemented dual-transport architecture using WebSocket + REST APIs",
      "Built centralized real-time telemetry dashboard",
      "Created reusable component architecture across configuration modules",
      "Deployed on Linux-based embedded hardware systems",
    ],

    architecture: [
      "Browser Dashboard → Node.js Backend → IPC Socket Layer → Python Firmware Services",
      "WebSocket used for telemetry streaming and live state synchronization",
      "REST APIs used for configuration, file management, and reporting",
    ],

    category: "Embedded Systems",
    featured: true,
  },

  {
    id: 3,

    title: "Role-Based Instrument Management System",

    shortDesc:
      "Backend-centric admin platform managing 32 industrial instruments with RBAC, real-time synchronization, and compliance tracking.",

    longDesc:
      "Designed centralized management architecture supporting secure role-based access control, audit tracking, reporting pipelines, and MQTT-based synchronization for distributed industrial systems.",

    impact:
      "Eliminated unauthorized access incidents and enabled centralized compliance reporting across all managed instruments.",

    tags: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MQTT",
      "React",
      "JWT",
    ],

    highlights: [
      "Implemented layered RBAC authorization system",
      "Designed MQTT-based real-time synchronization workflow",
      "Developed reporting pipeline with audit trail generation",
      "Built secure REST APIs for admin and reporting operations",
    ],

    architecture: [
      "Central Backend → MQTT → Distributed Instruments",
      "Role-layered authorization model for secure access isolation",
    ],

    category: "SaaS Platform",
    featured: false,
  },

  {
    id: 4,

    title: "Industrial Motor Monitoring & Alerting System",

    shortDesc:
      "Real-time telemetry and alerting platform monitoring industrial motors with automated notification workflows.",

    longDesc:
      "Developed backend APIs, telemetry ingestion services, and automated threshold-based alerting systems for industrial motor monitoring and operational analytics.",

    impact:
      "Reduced equipment downtime by 15% and improved operational response time by 30%.",

    tags: [
      "Node.js",
      "Express",
      "Python",
      "SQLite",
      "SMTP",
      "React",
    ],

    highlights: [
      "Built real-time telemetry monitoring pipeline",
      "Implemented automated alert engine with configurable thresholds",
      "Integrated SMTP notification workflows",
      "Designed secure configuration management APIs",
    ],

    architecture: [
      "Telemetry Source → Backend Processing → Alert Engine → SMTP Notifications",
    ],

    category: "Industrial Monitoring",
    featured: false,
  },
];

// ─── SERVICES ────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: "Layers",
    title: "Backend Architecture & APIs",
    desc:
      "Designing scalable backend systems, secure REST APIs, RBAC authorization, and high-throughput telemetry services.",
  },

  {
    icon: "Activity",
    title: "Real-Time Systems Engineering",
    desc:
      "Production-grade WebSocket and MQTT telemetry pipelines handling real-time industrial communication workloads.",
  },

  {
    icon: "LayoutDashboard",
    title: "Industrial IoT Platforms",
    desc:
      "End-to-end industrial monitoring systems with telemetry visualization, alerting, reporting, and device management.",
  },

  {
    icon: "ShieldCheck",
    title: "Infrastructure & Deployment",
    desc:
      "Dockerized deployments, Linux server environments, Nginx reverse proxy setup, and production runtime configuration.",
  },

  {
    icon: "Cpu",
    title: "System Design & Architecture",
    desc:
      "Scalable multi-tenant systems, event-driven workflows, and backend-heavy architecture for real-time applications.",
  },

  {
    icon: "Container",
    title: "Frontend & Dashboard Development",
    desc:
      "Modern dashboards and interfaces using React.js and JavaScript for real-time industrial applications.",
  },
];

// ─── AI FEATURES ─────────────────────────────────────────────────────────────
export const aiFeatures = [
  {
    title: "AI Portfolio Assistant",
    desc:
      "Interactive AI assistant integrated using Next.js API routes and LLM APIs to answer questions about projects, architecture, backend systems, and blogs.",
  },

  {
    title: "AI Blog Summarization",
    desc:
      "Context-aware AI summarization for technical blogs covering system design, deployment, real-time systems, and backend engineering.",
  },
];

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────
export const achievements = [
  {
    icon: "Zap",
    metric: "1,000+",
    label: "Events/sec",
    desc: "Real-time telemetry ingestion using MQTT & WebSocket",
  },

  {
    icon: "TrendingUp",
    metric: "+20%",
    label: "Business Growth",
    desc: "Driven through industrial SaaS modernization",
  },

  {
    icon: "Timer",
    metric: "+20%",
    label: "Faster Delivery",
    desc: "Reusable architecture and modular component systems",
  },

  {
    icon: "AlertTriangle",
    metric: "-15%",
    label: "Downtime Reduced",
    desc: "Real-time monitoring and proactive alert systems",
  },

  {
    icon: "Bell",
    metric: "+30%",
    label: "Response Efficiency",
    desc: "Automated alerting and operational visibility",
  },

  {
    icon: "Component",
    metric: "10%",
    label: "Deployments",
    desc: "Production Linux + Nginx deployment workflows",
  },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const education = {
  degree: "Bachelor of Computer Science",
  cgpa: "8.35 / 10.0",
  institution: "St. John College of Engineering and Management",
  university: "Mumbai University",
  period: "Aug 2019 – May 2023",
};

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export const certifications = [
  {
    title: "Programming Foundations with JavaScript, HTML & CSS",
    issuer: "Coursera",
  },
  {
    title: "Python for Everybody",
    issuer: "Coursera",
  },
  {
    title: "Azure DevOps",
    issuer: "Coursera",
  },
];
