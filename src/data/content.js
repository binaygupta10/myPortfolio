import {
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiHibernate,
  SiMysql,
  SiOpensearch,
  SiSwagger,
  SiPostman,
  SiApachemaven,
} from "react-icons/si";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa";

export const profile = {
  name: "Binay Kumar Gupta",
  role: "Backend Engineer",
  tagline: "Java · Spring Boot · PostgreSQL · AWS",
  location: "Bengaluru, India",
  email: "binaygupta730@gmail.com",
  phone: "+91 7908794876",
  summary:
    "Backend engineer with ~4 years building Java / Spring Boot services on PostgreSQL and AWS. I own services end-to-end — schema design, query tuning, third-party integrations, and production on-call. Experience spans RBI-regulated lending (Protium) and hospitality tech (Simplotel).",
  resume: "Binay_Kumar_Gupta_Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/binay-gupta-1ba191191/",
    leetcode: "https://leetcode.com/",
    gitlab: "https://gitlab.com/",
    github: "https://github.com/binaygupta10",
    website: "https://binaygupta.in",
  },
};

export const roles = [
  "Backend Engineer",
  "Java & Spring Boot Developer",
  "Cloud-Native Systems Builder",
  "Fintech Platform Engineer",
];

export const stats = [
  { value: "~4", suffix: "yrs", label: "Backend engineering" },
  { value: "700", suffix: "+", label: "Hotels served" },
  { value: "500", suffix: "+", label: "LeetCode solved" },
  { value: "97", suffix: "th", label: "GATE percentile" },
];

export const experience = [
  {
    company: "Simplotel Technologies",
    role: "Senior Software Engineer",
    period: "May 2025 — Present",
    location: "Bengaluru, India",
    tag: "Hospitality SaaS",
    points: [
      "Channel-manager integration (current): pulling rates, restrictions and inventory from third-party channel managers into Simplotel's booking engine — rolling out across 700+ hotels.",
      "Built the two-way MakeMyTrip Affiliate API sync — live on 100+ hotels — outbound push of inventory & rates, inbound consumption of MMT bookings.",
      "Added a new payment gateway with idempotent, concurrency-safe reconciliation between gateway callbacks and booking records, plus defensive retry on partial failures.",
      "Wrote CloudFormation stacks provisioning AWS resources across 5 backend services on Docker / Kubernetes via GitLab CI.",
    ],
  },
  {
    company: "Protium Finance",
    role: "Software Engineer (Intern → Full-time)",
    period: "Dec 2023 — May 2025",
    location: "Bengaluru, India",
    tag: "RBI-regulated Fintech",
    points: [
      "Designed KYC/VKYC integration (Digio, NSDL) end-to-end — partner-API contract, polling + webhook handling, and the verification state machine fronting ~1,000 loan applications/month.",
      "Carried on-call rotation for the lending backend — debugged live issues and shipped fixes for recurring failure modes.",
      "Drove security-findings work across two VAPT cycles — triaged and patched vulnerabilities flagged by external auditors under RBI compliance.",
      "Stood up an async document pipeline on AWS — S3 storage + Lambda subscribed to SQS — replacing manual document handling in the loan flow.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Software Engineer",
    period: "Nov 2020 — Aug 2022",
    location: "Kolkata, India",
    tag: "Enterprise",
    points: [
      "Shipped new backend features in Java — modern Spring Boot services alongside legacy Java EE / JSP layers in the same codebase.",
      "Worked daily against enterprise databases (Oracle, DB2, SQL Server) — wrote SQL, traced production issues, and pushed releases through the client's QA / deploy pipeline.",
    ],
  },
];

export const projects = [
  {
    title: "Fixuji — Home Services Marketplace",
    stack: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
    blurb:
      "Early backend engineer at a home-services startup. Built the booking pipeline for a marketplace operating across 3 Indian cities.",
    highlight: "Owned the car-wash vertical — ~70% of company revenue.",
    accent: "#8b5cf6",
  },
  {
    title: "Data Integrity for Fog Computing",
    stack: ["C++", "Botan", "HMAC-SHA256"],
    blurb:
      "M.Tech thesis — a data-integrity verification scheme for fog / edge data transfers using HMAC-SHA256 block checksums, built with the Botan crypto library.",
    highlight: "Defended at IIIT Allahabad (Cyber Laws & Info Security).",
    accent: "#22d3ee",
  },
  {
    title: "MakeMyTrip Two-Way Sync",
    stack: ["Spring Boot", "REST", "Webhooks", "PostgreSQL"],
    blurb:
      "Two-way MakeMyTrip Affiliate API integration for Simplotel — outbound inventory & rate push, inbound booking consumption.",
    highlight: "Live across 100+ hotels on the platform.",
    accent: "#f472b6",
  },
  {
    title: "Async Document Pipeline",
    stack: ["AWS S3", "Lambda", "SQS", "Java"],
    blurb:
      "Event-driven document pipeline for a lending backend — S3 for storage with Lambda consumers subscribed to SQS queues.",
    highlight: "Replaced manual document handling in the loan flow.",
    accent: "#6366f1",
  },
];

export const achievements = [
  {
    title: "GATE 2022 — Computer Science",
    detail: "97th percentile among 100,000+ candidates.",
  },
  {
    title: "LeetCode",
    detail: "500+ problems solved · top 15% in global weekly contests.",
  },
  {
    title: "CodeKaze National Coding Competition",
    detail: "Ranked 1,276 out of 10,000+ participants.",
  },
];

export const skillGroups = [
  {
    label: "Languages & Core Java",
    items: [
      "Java",
      "SQL",
      "Multi-threading & Concurrency",
      "Design Patterns",
      "Microservices",
      "Defensive Programming",
    ],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Spring MVC", "Hibernate", "jOOQ", "REST API Design"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Oracle", "MySQL", "OpenSearch"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (S3, Lambda, SQS, EC2)",
      "CloudFormation",
      "Docker",
      "Kubernetes",
      "GitLab CI",
    ],
  },
  {
    label: "Fintech / Security",
    items: ["KYC & VKYC (Digio, NSDL)", "VAPT Remediation", "RBI Compliance"],
  },
  {
    label: "Testing & Tools",
    items: ["JUnit", "Mockito", "Log4j / Logback", "Postman", "Swagger", "Maven"],
  },
];

export const marqueeTech = [
  { icon: FaJava, name: "Java" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiHibernate, name: "Hibernate" },
  { icon: FaAws, name: "AWS" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiKubernetes, name: "Kubernetes" },
  { icon: SiGitlab, name: "GitLab CI" },
  { icon: SiOpensearch, name: "OpenSearch" },
  { icon: SiMysql, name: "MySQL" },
  { icon: FaDatabase, name: "Oracle" },
  { icon: SiSwagger, name: "Swagger" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiApachemaven, name: "Maven" },
];

export const education = [
  {
    school: "Indian Institute of Information Technology, Allahabad",
    degree: "M.Tech — Cyber Laws & Information Security",
    period: "Aug 2022 — May 2024",
    grade: "GPA 8.83 / 10",
  },
  {
    school: "Cooch Behar Government Engineering College",
    degree: "B.Tech — Computer Science & Engineering",
    period: "Aug 2016 — May 2020",
    grade: "GPA 8.38 / 10",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
