export const profile = {
  name: "Om Tilva",
  fullName: "Om Deepak Kumar Tilva",
  role: "Software Engineer",
  subrole: "Computer Science Engineering @ VIT Vellore",
  location: "Mangaluru, Karnataka, India",
  email: "omtilva1910@gmail.com",
  github: "https://github.com/OmTilva",
  linkedin: "https://www.linkedin.com/in/om-tilva-ab899428a",
  instagram: "https://www.instagram.com/om_tilva/",
  resumeFile: "/Om_Tilva_Resume.pdf",
  tagline: "I build real-time, production-grade systems — from live collaborative editors to distributed backends.",
  summary:
    "Computer Science undergrad at VIT Vellore with production internship experience at a Reliance Industries subsidiary. Comfortable across the stack — C++, Python, TypeScript, React, Node — with a focus on distributed systems, real-time infrastructure, and interfaces that hold up under real users.",
  availability: "Open to Software Engineering internships",
} as const;

export const stats = [
  { label: "CGPA", value: "8.30", suffix: "/10" },
  { label: "Users served", value: "550", suffix: "+" },
  { label: "Leadership roles", value: "3", suffix: "" },
  { label: "Shipped projects", value: "4", suffix: "" },
] as const;

export type ExperienceEntry = {
  id: string;
  role: string;
  org: string;
  orgNote?: string;
  duration: string;
  location: string;
  featured?: boolean;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "enercent",
    role: "Full-Stack Developer Intern",
    org: "Enercent Technologies Pvt. Ltd.",
    orgNote: "A Reliance Industries Subsidiary",
    duration: "Jun 2025 — Aug 2025",
    location: "Bengaluru, India",
    featured: true,
    points: [
      "Engineered production-grade frontend and backend modules for enterprise web applications, shipping end-to-end features across the full stack in a two-month engagement.",
      "Designed and integrated RESTful APIs with responsive React UI components, contributing to proprietary technology initiatives under enterprise IP and security standards.",
      "Collaborated with cross-functional engineering teams in an agile environment to accelerate feature delivery on a live production codebase.",
    ],
  },
  {
    id: "bulls-and-bears",
    role: "Technical Head",
    org: "Bulls & Bears Finance Club, VIT Vellore",
    duration: "Jan 2025 — Jan 2026",
    location: "Vellore, India",
    points: [
      "Architected and deployed two full-stack event platforms — Dalal Street and Cashflow — serving 550+ participants across Yantra Tech Week and GraVITas'24.",
      "Led a team of 5 engineers building live IPO simulations, dynamic stock-pricing algorithms, and real-time portfolio management with React, Node.js, and MongoDB.",
      "Directed the technical roadmap for a 170+ member club, aligning engineering milestones with event timelines and stakeholder requirements.",
    ],
  },
  {
    id: "student-council",
    role: "Technical Secretary, Student Council",
    org: "Vellore Institute of Technology",
    duration: "Aug 2023 — Present",
    location: "Vellore, India",
    points: [
      "Oversee technical planning and execution for institute-level events, coordinating across 100+ clubs to streamline registration systems and digital workflows.",
      "Primary technical liaison between a 5,000+ student body, technical teams, and faculty administration — resolving operational blockers under tight deadlines.",
    ],
  },
];

export const skills = [
  { category: "Languages", items: ["C++", "Python", "Java", "JavaScript", "TypeScript"] },
  { category: "Frameworks", items: ["React.js", "Next.js 15", "Node.js", "Express.js"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { category: "Cloud & DevOps", items: ["Docker", "AWS (EC2, S3)", "REST APIs", "Microservices"] },
  { category: "Tools", items: ["Git", "GitHub", "Prisma ORM", "Postman"] },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
] as const;

export type Project = {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  points: string[];
  link: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "parkflow",
    name: "ParkFlow",
    tagline: "Smart parking management system",
    stack: ["Next.js 15", "Node.js", "PostgreSQL", "Redis", "Docker"],
    points: [
      "Architected a microservice-oriented parking platform with real-time slot tracking, automated billing, and EV charging queue management.",
      "Implemented Redis caching for low-latency reads and Prisma ORM with PostgreSQL for relational data modeling.",
      "Containerized every service with Docker for reproducible deployments.",
    ],
    link: "https://github.com/OmTilva",
    featured: true,
  },
  {
    id: "collabcode-ai",
    name: "CollabCode AI",
    tagline: "AI-powered collaborative coding platform",
    stack: ["React", "Node.js", "WebSockets", "AI APIs"],
    points: [
      "Built a real-time collaborative IDE supporting simultaneous multi-user editing with conflict resolution, synced over WebSockets at sub-100ms latency.",
      "Integrated AI-driven code assistance, sandboxed code execution, and OAuth-based authentication.",
    ],
    link: "https://github.com/OmTilva",
    featured: true,
  },
  {
    id: "dalal-street",
    name: "Dalal Street",
    tagline: "Live stock market simulator",
    stack: ["React", "Node.js", "MongoDB", "REST APIs"],
    points: [
      "Real-time dynamic pricing, IPO simulations, and portfolio management for a live trading platform.",
      "Scaled to 300+ concurrent users during Yantra Tech Week with zero downtime.",
    ],
    link: "https://github.com/OmTilva",
    featured: true,
  },
  {
    id: "cashflow",
    name: "Cashflow",
    tagline: "Financial simulation platform",
    stack: ["React", "Node.js", "MongoDB"],
    points: [
      "Virtual investment simulation platform built for VIT GraVITas'24.",
      "Led a 5-engineer team and onboarded 250+ students through interactive trading workflows.",
    ],
    link: "https://github.com/OmTilva",
    featured: false,
  },
];

export type EducationEntry = {
  id: string;
  degree: string;
  school: string;
  duration: string;
  detail?: string;
  points: string[];
};

export const education: EducationEntry[] = [
  {
    id: "vit",
    degree: "B.Tech in Computer Science & Engineering",
    school: "Vellore Institute of Technology (VIT), Vellore",
    duration: "Aug 2023 — Jul 2027",
    detail: "CGPA: 8.30 / 10",
    points: [
      "Coursework spanning Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Computer Networks.",
      "Technical Secretary of the Student Council; Technical Head at Bulls & Bears Finance Club.",
    ],
  },
  {
    id: "puc",
    degree: "Pre-University Education",
    school: "Boscoss Pre-University College",
    duration: "2021 — 2023",
    points: ["Physics, Chemistry, Mathematics, and Computer Science."],
  },
  {
    id: "school",
    degree: "Secondary Education",
    school: "St Aloysius School",
    duration: "Graduated 2021",
    points: [],
  },
];

export const nav = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education" },
] as const;
