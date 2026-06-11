export const NAV_LINKS = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Case Studies", href: "case-studies" },
  { label: "Projects",     href: "projects" },
  { label: "Skills",       href: "skills" },
  { label: "Contact", href: "contact" },
];

export const HERO_TAGS = [
 "WordPress",
  "React",
  "PHP",
  "Next.js",
  "CMS Operations",
  "Staged Deployment",
  "MySQL",
  "Photoshop",
];

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Cybertech Corporation",
    period: " September 2024 – May 2025",
    desc: "Manage two ongoing client projects for Japanese publishers: (1) Monthly PDF-to-web conversion of a digital magazine using a CMS, including spreadsheet-based production tracking, custom character normalization tooling, text comparison QC, and Photoshop image prep — all submitted through a multi-level Japanese client approval workflow. (2) Backlog-driven WordPress maintenance for a Japanese-language site — implementing all changes in staging, coordinating with a Japanese content lead for language verification, editing legacy PHP templates via FTP, and deploying to production only after explicit approval. Also handle e-commerce product uploads and CRM/Google Sheets workflow tracking.",
  },
  {
    role: "IT Intern",
    company: "Knowles Training Institute",
    period: "   February 2024 – May 2024",
    desc: "Developed and maintained responsive WordPress websites, combining research-driven content strategies with user-focused design to improve engagement and SEO performance. Managed content updates across multiple domains, implemented site enhancements, and leveraged analytics to optimize performance and search visibility.",
  },
  {
    role: "Social Media Manager",
    company: "RMB",
    period: "January 2022 – August 2022",
    desc: "Managed social media content and engagement across multiple platforms, including Facebook, Instagram, TikTok, and YouTube. Handled customer interactions, created visual content, and analyzed performance metrics to improve reach and audience engagement.",
  },
];

export const ABOUT_TRAITS = [
   {
    id: 1,
    title: "Full Stack Development",
    desc: "Builds end-to-end web applications using React, PHP, Node.js, and MySQL — from UI to database.",
  },
  {
    id: 2,
    title: "Structured Workflow Operations",
    desc: "Experienced in backlog-driven deployments, staging environments, approval chains, and production release governance — including for Japanese-language clients.",
  },
  {
    id: 3,
    title: "Problem Solver",
    desc: "Builds custom tooling when off-the-shelf solutions fall short — including a character normalization checker built on the job for a live publishing client.",
  },
  {
    id: 4,
    title: "Continuous Learner",
    desc: "Always exploring new technologies and best practices to stay ahead in the field.",
  },
];

export const ABOUT_STATS = [
   ["8+", "Projects Completed"],
  ["1+", "Years Experience"],
  ["2", "Japanese Publishing Clients"],
  ["20+", "Technologies"],
];

export const PROJECTS = [
  {
    title: "Hatchery Manager",
    category: "Full-Stack / SaaS",
    desc: "A comprehensive hatchery management system that tracks batches, incubators, hatch rates, customers, payments, and media uploads. Includes a dashboard for key metrics, automatic candling and hatch dates, and backup/restore functionality via JSON or CSV. Built on Supabase for cloud storage and real-time updates.",
    tags: ["React Native", "Supabase", "CRUD", "Cloud Storage", "Backup/Restore", "Offline & Online"],
    img: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveDemo: "#",
    repo: "https://github.com/B-nardo/HatcheryManager",
  },
  {
    title: "Bakes by K Website",
    category: "Front-End",
    desc: "A modern bakery website showcasing products, brand identity, and online presence, designed with a visually appealing layout and smooth user experience to highlight offerings and attract customers.",
    tags: ["Webflow", "Responsive Design", "UI/UX Design"],
    img: "/bbksite.png",
    liveDemo: "https://bakesbyk.webflow.io/",
    repo: "#",
  },
  {
    title: "Bakes by K. – Smart Retail & Financial Management System",
    category: "Full-Stack",
    desc: "A bakery-focused POS and financial management system that handles transactions, tracks inventory, and generates real-time revenue and profit insights, helping small businesses make data-driven decisions and optimize operations.",
    tags: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "POS System", "Data Analytics"],
    img: "/bbksystem.png",
    liveDemo: "https://bbk-system.vercel.app/",
    repo: "https://github.com/B-nardo/BBK-System",
  },
  {
    title: "Bookmark Manager",
    category: "Full-Stack",
    desc: "A Laravel application for managing saved links with category and tag organization, including user authentication to ensure each user can securely access and manage their own bookmarks.",
    tags: ["Laravel", "PHP", "MySQL", "Authentication", "CRUD"],
    img: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveDemo: "#",
    repo: "https://github.com/B-nardo/bookmap-app",
  },
  {
    title: "Developer Snippet Manager",
    category: "Full-Stack",
    desc: "A Laravel-based CRUD application for storing and organizing code snippets, featuring authentication and a tagging system that allows users to securely manage and retrieve their personal snippets.",
    tags: ["Laravel", "PHP", "MySQL", "Authentication", "CRUD"],
    img: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveDemo: "#",
    repo: "https://github.com/B-nardo/dev-snippet-manager",
  },
  {
    title: "WooCommerce Checkout Removal Demo",
    category: "WordPress",
    desc: "A WordPress/WooCommerce customization project that disables the default checkout functionality, demonstrating ability to modify e-commerce workflows and tailor user experiences according to business requirements.",
    tags: ["WordPress", "WooCommerce", "PHP", "Plugin Customization"],
    img: "/woocommerce.png",
    liveDemo: "https://woocommerce-demo.gt.tc/",
    repo: "",
  },
  {
    title: "BrightSmile Dental Care Clinic Website",
    category: "WordPress",
    desc: "A modern dental clinic website showcasing services, business information, and appointment booking, designed with a clean UI to enhance patient trust and provide an intuitive user experience.",
    tags: ["React.js", "Tailwind CSS", "Responsive Design", "UI/UX Design"],
    img: "/brightsmile.png",
    liveDemo: "https://brightsmiledental.ct.ws/",
    repo: "#",
  },
  {
    title: "Servora – Client Booking & Billing Suite",
    category: "Full-Stack",
    desc: "A booking and billing system designed for service-based businesses, streamlining appointments, automating invoice generation, and tracking payments with real-time revenue insights and client history.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "MVC Architecture", "REST API"],
    img: "/servora.png",
    liveDemo: "https://servora.gt.tc/dashboard",
    repo: "https://github.com/B-nardo/Servora",
  },
  {
    title: "FlowPilot CRM",
    category: "Full-Stack",
    desc: "A scalable, multi-tenant CRM system that centralizes lead management, enforces structured sales workflows, and improves team accountability through task tracking, role-based access, and real-time pipeline dashboards.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "MVC Architecture", "REST API"],
    img: "/flowpilot.png",
    liveDemo: "https://flowpilot.ct.ws/",
    repo: "https://github.com/B-nardo/FlowPilot",
  },
  {
    title: "Notes App",
    category: "Full-Stack",
    desc: "A beginner-friendly notes application that allows users to create, edit, and delete notes, demonstrating core CRUD operations and basic data management.",
    tags: ["PHP", "MySQL", "JavaScript", "CRUD"],
    img: "/notes.png",
    liveDemo: "https://notes-app-ten-tau.vercel.app/",
    repo: "https://github.com/B-nardo/notes-app",
  },
  {
    title: "Google Homepage Clone",
    category: "Front-End",
    desc: "A responsive clone of the Google homepage built to replicate its clean UI and layout, demonstrating attention to detail in design, styling, and user interface structure.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    img: "/google-clone.png",
    liveDemo: "https://google-clone-black-five.vercel.app/",
    repo: "https://github.com/B-nardo/Google-Clone",
  },
];

export const PROJECT_FILTERS = [
  "All Projects",
  "Full-Stack",
  "Front-End",
  "WordPress",
  "Full-Stack / SaaS"


];

export const SKILLS = [
   {
    cat: "Languages",
    color: "yellow",
    icon: "general",
    items: ["C#", "Java", "JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    cat: "Frontend Development",
    color: "blue",
    icon: "frontend",
    items: [
      "HTML5",
      "CSS3",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Radix UI",
      "Responsive Design",
    ],
  },
  {
    cat: "Backend Development",
    color: "green",
    icon: "backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "PHP"],
  },
  {
    cat: "Database & Storage",
    color: "purple",
    icon: "database",
    items: ["MongoDB", "SQL", "MySQL", "SQLite", "PostgreSQL"],
  },
  {
    cat: "CMS & WordPress",
    color: "orange",
    icon: "cms",
    items: [
      "WordPress (Admin)",
      "WordPress (FTP Template Editing)",
      "WooCommerce",
      "Custom CMS",
      "Staging / Production Deployment",
      "Backlog-Driven Workflows",
      "Plugin Customization",
    ],
  },
  {
    cat: "Tools & Technologies",
    color: "teal",
    icon: "tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Framer",
      "Supabase",
      "Postman",
      "npm/yarn",
      "Canva",
      "Photoshop",
      "Character Normalization Tooling",
      "Text Comparison Tools",
      "Google Sheets",
    ],
  },
  {
    cat: "Deployment",
    color: "red",
    icon: "deploy",
    items: ["Vercel", "Expo"],
  },
];

export const PROFICIENCY = [
  { name: "JavaScript", pct: 90 },
  { name: "React.js", pct: 85 },
  { name: "Node.js", pct: 80 },
  { name: "MongoDB", pct: 75 },
  { name: "CSS/Tailwind", pct: 85 },
  { name: "Express.js", pct: 80 },
];

export const SKILL_FEATURES = [
  {
    icon: "globe",
    title: "Web Development",
    desc: "Full-stack apps with modern frameworks",
  },
  {
    icon: "phone",
    title: "Responsive Design",
    desc: "Mobile-first approach for all devices",
  },
  {
    icon: "gitbranch",
    title: "Version Control",
    desc: "Git workflow and collaborative development",
  },
  {
    icon: "zap",
    title: "Performance",
    desc: "Optimized apps for speed and efficiency",
  },
];

export const CONTACT_INFO = [
  { icon: "mail", label: "Email", value: "bernardopjoseii@gmail.com" },
  { icon: "smartphone", label: "Mobile", value: "09215151793" },
  { icon: "location", label: "Location", value: "Philippines" },
  { icon: "clock", label: "Response Time", value: "Within 24 hours" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/B-nardo" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bernardo-jose-ii-73193a402" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const CASE_STUDIES = [
  {
    id: "wordpress-maintenance",
    title: "Multilingual WordPress Maintenance & Controlled Deployment Workflow",
    summary: "Backlog-driven staging-to-production workflow for a Japanese-language WordPress site with legacy template support.",
    tags: ["WordPress", "FTP", "Japanese", "CMS"],
    meta: [
      { label: "Platform",      value: "WordPress" },
      { label: "Environment",   value: "Client staging → production" },
      { label: "Theme",         value: "Custom legacy template" },
      { label: "Access Method", value: "WordPress admin + FTP" },
      { label: "Language",      value: "Japanese" },
      { label: "Role",          value: "WordPress Operations & Template Support" },
    ],
    images: [
       {
        title: "Backlog / Task Ticket",
        src: "/studies/01-01-redacted.png",
        caption: "Example backlog ticket describing a requested website update.",
      },
       {
        title: "WordPress Editor",
        src: "/studies/01-02-redacted.png",
        caption: "Implementing requested updates within the WordPress editor.",
      },
       {
        title: "Staging Page Preview",
        src: "/studies/01-03-redacted.png",
        caption: "Staging preview used for internal review before production deployment.",
      },
       {
        title: "FTP File Access",
        src: "/studies/01-04-redacted.png",
        caption: "Accessing theme files via FTP to modify legacy template components.",
      },
       {
        title: "Before vs After Page",
        src: "/studies/01-05-redacted.png",
        caption: "Example layout improvement based on backlog request.",
      },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: "Maintained and enhanced a Japanese-language WordPress website operating under a structured backlog and staging-based deployment process. All updates were implemented in staging, reviewed internally, and deployed to production only after approval. In addition to content updates, I modified legacy template files via FTP when feature adjustments or structural changes were required.",
      },
      {
        type: "steps",
        heading: "Deployment Workflow",
        items: [
          "Client logs issue in backlog.",
          "I review and interpret task requirements.",
          "Changes implemented in staging environment.",
          "Staging URL submitted with time log.",
          "Japanese content lead verifies language accuracy.",
          "Upon 'go signal,' changes deployed to production.",
          "Work minutes reported for accountability.",
        ],
        note: "This ensured zero direct live edits without approval.",
      },
      {
        type: "bullets",
        heading: "Responsibilities",
        items: [
          "Implemented backlog-driven content and layout updates",
          "Applied changes exclusively in staging before production release",
          "Generated review URLs for QA",
          "Logged time spent per task",
          "Coordinated with Japanese-language lead for verification",
          "Deployed approved updates to live environment",
          "Edited legacy theme files via FTP when template adjustments were required",
          "Added and removed template features as instructed",
        ],
      },
      {
        type: "bullets",
        heading: "Technical Contributions",
        items: [
          "Modified custom WordPress template files via FTP",
          "Maintained layout integrity in legacy theme environment",
          "Ensured no regressions during structural edits",
          "Supported feature additions and removals at template level",
        ],
      },
      {
        type: "bullets",
        heading: "Key Challenges",
        items: [
          "Managing Japanese-language content without direct fluency",
          "Maintaining stability within older custom theme architecture",
          "Avoiding layout breakage during template edits",
          "Strict adherence to release approval hierarchy",
        ],
      },
      {
        type: "bullets",
        heading: "Results & Impact",
        items: [
          "Maintained stable production environment",
          "Prevented unapproved live changes",
          "Supported multilingual governance process",
          "Delivered reliable turnaround under structured backlog system",
        ],
      },
    ],
  },
  {
    id: "pdf-to-web-conversion",
    title: "Digital Magazine PDF-to-Web Conversion & Content Quality Workflow",
    summary: "Monthly conversion of print-format Japanese magazine PDFs into structured web articles with custom QC tooling.",
    tags: ["Content Production", "QC", "Photoshop", "Japanese", "Publishing"],
    meta: [
      { label: "System Type",  value: "Spreadsheet-driven publishing workflow" },
      { label: "Content Type", value: "Monthly digital magazine (Japanese)" },
      { label: "Role",         value: "Content Production & Quality Control Specialist" },
    ],
    images: [
      {
        title: "Spreadsheet Production Tracker",
        src: "/studies/02-01-redacted.png",
        caption: "Spreadsheet-based workflow used to track page production and publication status.",
      },
      {
        title: "PDF Source Page",
        src: "/studies/02-02-redacted.png",
        caption: "Source PDF page used for web article conversion.",
      },
      {
        title: "CMS Draft Page",
        src: "/studies/02-03-redacted.png",
        caption: "Draft article created from the source PDF before approval.",
      },
      {
        title: "Text Comparison Tool",
        src: "/studies/02-04-redacted.png",
        caption: "Text comparison tool used to ensure the web article matches the source PDF.",
      },
      {
        title: "Character Checker / Detection Tool",
        src: "/studies/02-05-redacted.png",
        caption: "Custom tool used to detect and normalize characters for web compatibility.",
      },
      {
        title: "Image Editing Example",
        src: "/studies/02-06-redacted.png",
        caption: "Cleaning and preparing article thumbnail images before publishing.",
      },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: "Managed the monthly conversion of print-format magazine PDFs into structured web articles using a spreadsheet-based production tracking system. Implemented additional quality-control measures to ensure typographic consistency, character normalization, and visual optimization in a multilingual environment.",
      },
      {
        type: "steps",
        heading: "Publishing Workflow",
        items: [
          "Pages assigned via centralized spreadsheet (page number, title, special issue classification, author, publication date, QA URL field, daily production logging).",
          "Converted PDF content into structured web drafts.",
          "Submitted drafts for Japanese lead review.",
          "After internal approval → forwarded to Japanese client.",
          "Upon client approval → published live.",
        ],
      },
      {
        type: "bullets",
        heading: "Responsibilities",
        items: [
          "Converted print-formatted PDFs into structured web articles",
          "Ensured proper heading hierarchy and formatting consistency",
          "Logged daily output for production tracking",
          "Generated preview versions (20% content) for paywalled pages using internal tools",
          "Submitted QA URLs for multi-level approval",
          "Maintained strict deadline adherence",
        ],
      },
      {
        type: "subsections",
        heading: "Advanced Quality Control Measures",
        subsections: [
          {
            subheading: "Character Normalization",
            intro: "The client required half-width English numbers and letters instead of full-width characters. To ensure compliance:",
            bullets: [
              "Used detection tools to identify full-width characters",
              "Built a custom checker to detect and normalize specific characters",
              "Converted problematic symbols (e.g., full-width) into web-safe equivalents",
              "Ensured content was web-friendly and encoding-safe",
            ],
          },
          {
            subheading: "Content Accuracy Verification",
            intro: "Since the content was in Japanese and I do not speak the language:",
            bullets: [
              "Used text comparison tools to verify consistency between PDF source and web draft",
              "Cross-checked formatting and character accuracy",
              "Ensured zero missing or altered content during transfer",
            ],
          },
          {
            subheading: "Image & Visual Optimization",
            intro: "Used Adobe Photoshop to:",
            bullets: [
              "Create OGP (Open Graph) images for social sharing",
              "Design eye-catching feature images",
              "Clean and optimize existing images",
              "Adjust layout consistency for web presentation",
            ],
          },
        ],
      },
      {
        type: "bullets",
        heading: "Tools Utilized",
        items: [
          "Spreadsheet-based production tracker",
          "Character width detection tools",
          "Custom-built character compliance checker",
          "Text comparison software",
          "Internal content preview generator tools",
          "Adobe Photoshop",
        ],
      },
      {
        type: "bullets",
        heading: "Key Challenges",
        items: [
          "Converting print layout to web-friendly structure",
          "Maintaining typographic standards (full-width vs half-width compliance)",
          "Ensuring textual consistency in a language I do not speak",
          "Delivering high-volume structured content monthly",
        ],
      },
      {
        type: "bullets",
        heading: "Results & Impact",
        items: [
          "Converted and published 30+ articles per month with zero missed deadlines until thhe end of my tenure",
          "Reduced typographic inconsistencies",
          "Prevented character encoding errors",
          "Improved web-readiness and shareability via optimized OGP assets",
          "Maintained high content accuracy through structured QA system",
        ],
      },
    ],
  },
];
