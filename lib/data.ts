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
};

export type Shot = { src: string; w: number; h: number; caption: string };

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
  /** brand colours lifted from the product itself */
  brand: { from: string; to: string };
  shots: Shot[];
  mobile: Shot;
};

const d = (src: string, caption: string, h = 1000, w = 1600): Shot => ({ src, w, h, caption });

export const projects: Project[] = [
  {
    slug: "loyaltypro",
    title: "LoyaltyPro",
    kind: "QR cashback & loyalty platform",
    year: "2025",
    tagline: "Loyalty cards that live in a QR code.",
    summary:
      "A multi-tier cashback system for shops. Customers scan a unique QR card, earn rewards automatically and watch their balance update in real time, while the business runs everything from a POS terminal and dashboard.",
    live: "https://www.loyalty-qr.com",
    liveLabel: "loyalty-qr.com",
    stack: ["React", "Node.js", "Express", "REST API", "VPS"],
    role: "Designed, built and deployed solo: frontend, backend and VPS hosting.",
    problem:
      "Small businesses track customer rewards on paper cards or spreadsheets. It is slow, easy to get wrong, and gives owners no view of who actually comes back.",
    solution:
      "LoyaltyPro replaces that with scannable QR loyalty cards. Cashback is calculated from the purchase and the customer's tier, every transaction is audited, and customers can check their balance without installing anything.",
    highlights: [
      "Multi-tier engine (Silver, Gold, Platinum) with dynamic cashback rates",
      "POS terminal: scan a card or type a UID, then create a purchase",
      "QR card management with batch creation, assignment and blocking",
      "Full transaction audit trail with search, filters and CSV export",
      "Per-category cashback rules, loyalty tiers and special offers",
      "Up to 40% higher retention during client pilot runs",
    ],
    brand: { from: "#4338ca", to: "#a21caf" },
    shots: [
      d("/shots/loyalty-hero-d.webp", "Landing page"),
      d("/shots/lp-dashboard.webp", "Business dashboard", 682, 1536),
      d("/shots/lp-pos.webp", "POS terminal", 682, 1536),
      d("/shots/lp-cards.webp", "QR card management", 682, 1536),
      d("/shots/lp-transactions.webp", "Transaction audit trail", 682, 1536),
      d("/shots/lp-rules.webp", "Cashback rules & tiers", 682, 1536),
      d("/shots/loyalty-features-d.webp", "Feature overview"),
    ],
    mobile: { src: "/shots/loyalty-hero-m.webp", w: 780, h: 1688, caption: "Mobile" },
  },
  {
    slug: "covercell",
    title: "CoverCell",
    kind: "Mobile device insurance platform",
    year: "2025",
    tagline: "Phone protection, priced by the model.",
    summary:
      "An end-to-end device protection platform: instant model-based pricing, multi-plan policies, optional add-ons at checkout, customer accounts and a claims flow.",
    live: "https://cover-cell.com",
    liveLabel: "cover-cell.com",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST API", "Stripe", "VPS"],
    role: "Designed, built and deployed solo: frontend, backend and VPS hosting.",
    problem:
      "Buying phone insurance usually means vague tiers and one-size-fits-all pricing. People want to know what their own handset costs to cover, quickly.",
    solution:
      "CoverCell prices each plan from the exact device model, so a quote takes seconds and needs no photos. Plans and add-ons such as express replacement and accessory cover are configured in one responsive flow, with a customer area for devices and claims.",
    highlights: [
      "Instant quotes from model-based pricing across 200+ device records",
      "Multi-plan policy configuration with optional add-on checkout",
      "Customer accounts with devices, claims tracking and payments (Stripe)",
      "Content hub and SEO setup: services, blog, structured metadata",
      "Front-end state and asset delivery tuned for a 1.5s faster average page load",
    ],
    brand: { from: "#1d4ed8", to: "#6d3fd9" },
    shots: [
      d("/shots/covercell-hero-d.webp", "Landing page"),
      d("/shots/covercell-pricing-d.webp", "Plans & pricing"),
      d("/shots/cc-services.webp", "What's covered"),
      d("/shots/cc-signin.webp", "Customer sign-in"),
      d("/shots/cc-blog.webp", "Content hub"),
    ],
    mobile: { src: "/shots/covercell-hero-m.webp", w: 780, h: 1688, caption: "Mobile" },
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

export const numbers = [
  { value: 5, suffix: "+", label: "client projects delivered", note: "100% on time, via Fiverr" },
  { value: 40, suffix: "%", label: "retention lift", note: "LoyaltyPro client pilot runs" },
  { value: 1.5, suffix: "s", label: "faster page loads", note: "CoverCell, 200+ device records", decimals: 1 },
  { value: 95, suffix: "%", label: "complexity-analysis accuracy", note: "Final-year project" },
];

export const process = [
  { n: "01", title: "Understand", text: "I start from the user and the business problem, not the tech. What needs to be faster, clearer or automated?" },
  { n: "02", title: "Build", text: "React interfaces and Node APIs in small, reviewable pieces, with state, errors and empty screens designed from day one." },
  { n: "03", title: "Ship & run", text: "I deploy to a VPS, wire up the domain and SSL, and stay on the hook for what happens after launch." },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive design"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Firebase", "MongoDB"] },
  { group: "Languages", items: ["JavaScript (ES6+)", "Python", "C / C++", "Java"] },
  { group: "Workflow", items: ["Git & GitHub", "Docker", "VPS deployment", "AI-assisted development"] },
];

export const experience = [
  {
    period: "2024 – Now",
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
    title: "Online CS tutor, algorithms",
    place: "Remote",
    points: [
      "Ran a 16-week 1:1 curriculum on dynamic programming, greedy algorithms and recurrences.",
      "Wrote 20+ original practice problems with worked solutions.",
    ],
  },
  {
    period: "2021 – 2025",
    title: "BS Computer Science",
    place: "Sukkur IBA University",
    points: ["Data structures & algorithms, web engineering, databases, operating systems, AI and ML."],
  },
];
