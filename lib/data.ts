export const profile = {
  name: "Abdul Salam Ghanghro",
  short: "Abdul Salam",
  role: "Full-stack developer",
  location: "Karachi, Pakistan",
  email: "abdulsalamgh@outlook.com",
  github: "https://github.com/abdulsalam2121",
  linkedin: "https://www.linkedin.com/in/abdul-salam-ghanghro-6ab797207/",
  cv: "/Abdul_Salam_Ghanghro_CV.pdf",
  site: "https://abdulsalam.vercel.app",
  summary:
    "I design, build and ship complete web products — from the React interface to the Node API to the VPS it runs on.",
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  tagline: string;
  summary: string;
  live: string;
  liveLabel: string;
  stack: string[];
  role: string;
  problem: string;
  solution: string;
  highlights: string[];
  shots: { desktop: string; mobile: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "loyaltypro",
    title: "LoyaltyPro",
    kind: "QR cashback & loyalty platform",
    year: "2025",
    tagline: "Loyalty cards that live in a QR code.",
    summary:
      "A multi-tier cashback system for shops: customers scan a unique QR card, earn rewards automatically and watch their balance update in real time.",
    live: "https://www.loyalty-qr.com",
    liveLabel: "loyalty-qr.com",
    stack: ["React", "Node.js", "Express", "REST API"],
    role: "Designed, built and deployed solo — frontend, backend and VPS hosting.",
    problem:
      "Small businesses track customer rewards on paper cards or spreadsheets. It is slow, easy to get wrong, and gives owners no view of who actually comes back.",
    solution:
      "LoyaltyPro replaces that with scannable QR loyalty cards. Cashback is calculated automatically from the purchase and the customer's tier, every transaction is audited, and customers can check their balance without installing anything.",
    highlights: [
      "Multi-tier engine (Silver, Gold, Platinum) with dynamic cashback rates",
      "Customer portal: scan a unique QR, see balance and earning history",
      "Transaction auditing and real-time balance checks",
      "Business dashboard and customer login flows, multi-store ready",
      "Up to 40% higher retention during client pilot runs",
    ],
    shots: [
      {
        desktop: "/shots/loyalty-hero-d.webp",
        mobile: "/shots/loyalty-hero-m.webp",
        alt: "LoyaltyPro landing page",
      },
      {
        desktop: "/shots/loyalty-features-d.webp",
        mobile: "/shots/loyalty-features-m.webp",
        alt: "LoyaltyPro feature overview",
      },
    ],
  },
  {
    slug: "covercell",
    title: "CoverCell",
    kind: "Mobile device insurance platform",
    year: "2025",
    tagline: "Phone protection, priced by the model.",
    summary:
      "An end-to-end device protection platform with instant model-based quotes, multi-plan policies and optional add-ons at checkout.",
    live: "https://cover-cell.com",
    liveLabel: "cover-cell.com",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    role: "Designed, built and deployed solo — frontend, backend and VPS hosting.",
    problem:
      "Buying phone insurance usually means vague tiers and one-size-fits-all pricing. People want to know what their own handset costs to cover, quickly.",
    solution:
      "CoverCell prices each plan from the exact device model, so a quote takes seconds and needs no photos. Plans and add-ons such as express replacement and accessory cover are configured in a single responsive flow.",
    highlights: [
      "Instant quotes from model-based pricing across 200+ device records",
      "Multi-plan policy configuration with optional add-on checkout",
      "Front-end state and asset delivery tuned — 1.5s faster average page load",
      "Fully responsive, search-ready and installable on mobile",
    ],
    shots: [
      {
        desktop: "/shots/covercell-hero-d.webp",
        mobile: "/shots/covercell-hero-m.webp",
        alt: "CoverCell landing page",
      },
      {
        desktop: "/shots/covercell-pricing-d.webp",
        mobile: "/shots/covercell-pricing-m.webp",
        alt: "CoverCell plans and pricing",
      },
    ],
  },
];

export const otherWork = [
  {
    title: "Algorithm Benchmark",
    note: "Final-year project",
    desc: "Analyses C++ and Java code to estimate time and space complexity with 95% accuracy in 3.2s. D3.js charts, exportable PDF/TXT reports, used by 20+ students.",
    stack: ["React", "Node", "Firebase", "D3.js"],
    href: "https://github.com/abdulsalam2121/FYP-Benchmark",
  },
  {
    title: "Delight Hub",
    note: "E-commerce / services UI",
    desc: "Multi-module React app with 45+ reusable components across 5+ categories. Asset and bundle work lifted the Lighthouse performance score by 25 points.",
    stack: ["React", "CSS Modules", "JavaScript"],
    href: "https://github.com/abdulsalam2121/Delight-Hub",
  },
  {
    title: "Michigan Outage Prediction",
    note: "Machine learning",
    desc: "Spatio-temporal graph neural network research on power-outage risk in Michigan.",
    stack: ["Python", "GNN"],
    href: "https://github.com/abdulsalam2121/michigan-power-outage-prediction",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive design"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Firebase", "MongoDB"] },
  { group: "Languages", items: ["JavaScript (ES6+)", "Python", "C / C++", "Java"] },
  { group: "Workflow", items: ["Git & GitHub", "Docker", "VPS deployment", "AI-assisted development"] },
];

export const experience = [
  {
    period: "2024 — Now",
    title: "Freelance software developer",
    place: "Remote · Fiverr",
    points: [
      "Delivered custom React and Node.js applications for 5+ clients, every one on time.",
      "Turned client requirements into modular interfaces and secure REST APIs.",
      "Folded AI copilots into the workflow, cutting prototyping time by about 35%.",
    ],
  },
  {
    period: "2024",
    title: "Online CS tutor — algorithms",
    place: "Remote",
    points: [
      "Ran a 16-week 1:1 curriculum on dynamic programming, greedy algorithms and recurrences.",
      "Wrote 20+ original practice problems with worked solutions.",
    ],
  },
  {
    period: "2021 — 2025",
    title: "BS Computer Science",
    place: "Sukkur IBA University",
    points: ["Data structures & algorithms, web engineering, databases, operating systems, AI and ML."],
  },
];
