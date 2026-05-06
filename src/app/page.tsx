import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";

const metrics = [
  { value: "7+", label: "Production projects shipped" },
  { value: "4", label: "Industries covered in the portfolio" },
  { value: "2024-2025", label: "Recent professional experience window" },
];

const capabilities = [
  {
    title: "Frontend systems",
    description:
      "Next.js, React, TypeScript, responsive interfaces, SEO structure, and UI polish that holds up in production.",
    icon: Code2,
  },
  {
    title: "Full-stack delivery",
    description:
      "REST APIs, Firebase authentication, Firestore, storage, routing flows, and app architecture that supports real users.",
    icon: Database,
  },
  {
    title: "Mobile and product thinking",
    description:
      "React Native and Expo experience with an emphasis on usability, iteration speed, and business-facing features.",
    icon: Smartphone,
  },
];

const projects = [
  {
    title: "GWC",
    subtitle: "Gamers World Collective",
    category: "Esports platform",
    summary:
      "A comprehensive esports product with tournaments, community features, gaming clubs, blog publishing, and commerce.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
    highlights: [
      "Tournament registration and live community engagement",
      "Integrated merch and editorial content experience",
      "Authentication-ready product architecture",
    ],
    live: "https://www.gwchq.site/",
    repo: "https://github.com/abdullateef36/gwc-site",
  },
  {
    title: "Bibah's Collections",
    subtitle: "Fashion commerce reimagined",
    category: "E-commerce platform",
    summary:
      "A stylish fashion storefront built for browsing, conversion, and mobile-first shopping across multiple product categories.",
    stack: ["Next.js", "React", "Tailwind CSS", "Payment Flow"],
    highlights: [
      "Category-driven catalog and modern product discovery",
      "Mobile-first UI with secure transaction flow",
      "Inventory-minded commerce experience",
    ],
    live: "https://bibahs-collections.vercel.app/",
    repo: "https://github.com/abdullateef36/Bibahs-Collections",
  },
  {
    title: "Go Tech",
    subtitle: "Technology service website",
    category: "Business platform",
    summary:
      "A conversion-focused web experience for a tech brand, balancing service clarity, trust signals, and modern responsive presentation.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    highlights: [
      "Service-first information architecture",
      "Clean landing sections for credibility and lead generation",
      "Responsive layout built for fast scanning across devices",
    ],
    live: "https://go-tech-gules.vercel.app/",
    repo: "https://github.com/abdullateef36",
  },
  {
    title: "Finosell",
    subtitle: "Marketing site and finance dashboard",
    category: "Fintech product",
    summary:
      "Frontend delivery for a finance platform spanning a marketing website and admin dashboard with data-driven workflows.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Netlify"],
    highlights: [
      "Responsive financial services website with SEO focus",
      "Dashboard contribution with analytics and user workflows",
      "API collaboration and pre-release QA testing",
    ],
    live: "https://finosell.vercel.app/",
    repo: "https://github.com/abdullateef36/Finosell-Website",
  },
  {
    title: "StudentHost",
    subtitle: "Static hosting platform",
    category: "Infrastructure product",
    summary:
      "A hosting workflow that supports uploads, previews, unique site IDs, and proxy-based routing for static web projects.",
    stack: ["Next.js", "TypeScript", "Firebase Auth", "Storage", "Vercel"],
    highlights: [
      "User authentication and file management",
      "Live preview workflow for hosted sites",
      "Proxy-based routing for delivered projects",
    ],
    live: "https://hosting-platform-ikd3.vercel.app/",
    repo: "https://github.com/abdullateef36/Hosting-Platform",
  },
  {
    title: "Durells People Solutions",
    subtitle: "Corporate HR website",
    category: "Business website",
    summary:
      "A clean services-driven company website designed to present HR offerings clearly and establish a stronger digital presence.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Service-focused architecture for conversion",
      "Responsive layout and contact flow",
      "SEO-ready information design",
    ],
    live: "https://www.durellspeoplesolutions.com/",
    repo: "https://github.com/abdullateef36/Durells",
  },
  {
    title: "LJ Esports",
    subtitle: "Talent management experience",
    category: "Brand and content platform",
    summary:
      "A bold esports management website built around service storytelling, brand personality, and conversion-oriented content structure.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Editorial hero and section pacing",
      "Strong visual identity tuned for gaming audiences",
      "Service pages and audience-focused messaging",
    ],
    live: "https://lj-esports-hub.vercel.app/",
    repo: "https://github.com/abdullateef36",
  },
];

const experience = [
  {
    role: "Frontend Developer & Quality Assurance Engineer",
    company: "Finosell",
    period: "2024 - 2025",
    details: [
      "Developed and maintained the Finosell finance dashboard using React.",
      "Collaborated with backend developers to integrate RESTful APIs.",
      "Handled manual QA testing before production deployment.",
    ],
  },
  {
    role: "Frontend & Mobile Developer",
    company: "Essential Nigeria Limited",
    period: "2024 - 2025",
    details: [
      "Built and maintained web applications with React and Next.js.",
      "Developed cross-platform mobile apps with React Native and Expo.",
      "Improved scalability, performance, and code reusability across products.",
    ],
  },
  {
    role: "Undergraduate Intern",
    company: "LASTMA",
    period: "2021 - 2022",
    details: [
      "Supported web page updates under senior developer supervision.",
      "Managed payroll records and operational data with Microsoft Excel.",
      "Owned minor technical tasks and assisted with support work.",
    ],
  },
];

const education = [
  {
    title: "Higher National Diploma in Computer Science",
    school: "Yaba College of Technology, Lagos",
    period: "2022 - 2024",
  },
  {
    title: "National Diploma in Computer Science",
    school: "Yaba College of Technology, Lagos",
    period: "2018 - 2021",
  },
  {
    title: "Senior Secondary School Certificate",
    school: "Ikeja Senior Grammar School",
    period: "2013 - 2016",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Firebase",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "React Native",
  "Expo",
  "Git & GitHub",
  "Vercel",
  "Netlify",
  "Cloudinary",
  "Figma",
  "WordPress",
];

const moreLinks = [
  {
    label: "GitHub Profile",
    href: "https://github.com/abdullateef36",
  },
];

const profilePoints = [
  {
    title: "What I build",
    body: "Production-ready interfaces for startups and businesses that need clarity, speed, and strong visual structure.",
  },
  {
    title: "How I work",
    body: "I balance frontend polish with practical engineering, making sure layouts, flows, and integrations feel intentional.",
  },
];

const profileStats = [
  { value: "7+", label: "Live projects shipped" },
  { value: "Next.js", label: "Primary framework" },
  { value: "React Native", label: "Cross-platform range" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="mesh-lines" />
      </div>

      <section className="mx-auto min-h-screen max-w-7xl px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <header className="fade-rise flex flex-col gap-6 border-b border-[var(--line)] pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Akinola Oluwaseun Abdullateef
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl leading-none text-[var(--ink-strong)] sm:text-6xl lg:text-7xl">
              Frontend craft with full-stack range.
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="mailto:akinolaabdulateef36@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--card)] px-4 py-2 font-medium !text-[var(--ink-strong)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </Link>
            <Link
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-soft)]"
            >
              View CV
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </header>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-10">
            <div className="fade-rise stagger-1 grid gap-6">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--glass)] px-4 py-2 text-sm backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />
                Available for frontend and full-stack product work
              </div>

              <p className="max-w-3xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl">
                I design and ship production-ready web applications with
                Next.js, React, TypeScript, and Firebase. My work spans
                esports, e-commerce, finance, and hosting platforms, with a
                strong focus on interface quality, responsive behavior, and
                practical product delivery.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <Link
                  href="mailto:akinolaabdulateef36@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--ink-strong)] px-5 py-3 text-sm font-medium text-[#f7f0e7] transition hover:-translate-y-0.5"
                >
                  Start a Conversation
                  <Mail className="h-4 w-4" />
                </Link>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2">
                  <MapPin className="h-4 w-4" />
                  Lagos, Nigeria
                </span>
                <Link
                  href="https://github.com/abdullateef36"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 font-medium !text-[var(--ink-strong)] transition hover:border-[var(--accent)] hover:text-[var(--ink-strong)]"
                >
                  <Github className="h-4 w-4" />
                  github.com/abdullateef36
                </Link>
              </div>
            </div>

            <div className="fade-rise stagger-2 grid gap-4 md:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--card)] p-5 shadow-[0_16px_60px_rgba(22,18,12,0.06)]"
                >
                  <p className="font-display text-3xl text-[var(--ink-strong)]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="fade-rise stagger-3 grid gap-4 md:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--card)] p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-[var(--line)] bg-[var(--glass)] p-3">
                    <Icon className="h-5 w-5 text-[var(--accent-deep)]" />
                  </div>
                  <h2 className="text-lg font-semibold text-[var(--ink-strong)]">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="fade-rise stagger-2 lg:sticky lg:top-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line-strong)] bg-[linear-gradient(180deg,rgba(255,250,242,0.9),rgba(245,236,221,0.9))] p-4 shadow-[0_24px_90px_rgba(50,36,16,0.18)]">
              <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-[rgba(196,125,46,0.24)] blur-3xl" />
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-[rgba(106,78,42,0.18)] blur-3xl" />

              <div className="relative rounded-[1.6rem] bg-[var(--card-strong)] p-4">
                <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-[var(--line)] pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                      Profile
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[var(--ink-strong)]">
                      Building polished digital products with clear business
                      intent.
                    </p>
                  </div>
                  <div className="border-[var(--line)] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    2026
                  </div>
                </div>

                <div className="profile-flow">
                  <div className="profile-stage">
                    <div className="profile-stage__grid" />
                    <div className="profile-stage__beam profile-stage__beam-a" />
                    <div className="profile-stage__beam profile-stage__beam-b" />
                    <div className="profile-stage__copy profile-stage__copy-main">
                      <span className="profile-stage__eyebrow">Current focus</span>
                      <strong>Frontend systems with clearer pacing, better UX, and strong production readiness.</strong>
                    </div>
                    <div className="profile-stage__copy profile-stage__copy-side">
                      <span className="profile-stage__eyebrow">Approach</span>
                      <strong>Clean structure, sharp interaction choices, and engineering that can scale with product needs.</strong>
                    </div>
                    <div className="profile-stage__badge">
                      <span>Frontend Signal</span>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {profilePoints.map((point, index) => (
                      <article
                        key={point.title}
                        className="profile-story fade-rise"
                        style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                      >
                        <div className="profile-story__index">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-[var(--ink-strong)]">
                            {point.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">
                            {point.body}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {profileStats.map((item) => (
                      <div
                        key={item.label}
                        className="profile-stat"
                      >
                        <strong className="profile-stat__value">{item.value}</strong>
                        <span className="profile-stat__label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="fade-rise mb-10 flex flex-col gap-4 border-b border-[var(--line)] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Selected Work
            </p>
            <h2 className="mt-3 font-display text-3xl text-[var(--ink-strong)] sm:text-5xl">
              Multi-domain products, not just mockups.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            These projects span real business contexts, including commerce,
            fintech, infrastructure, HR, and gaming. The through-line is
            careful UX, practical engineering, and strong delivery pace.
          </p>
        </div>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="fade-rise rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_20px_70px_rgba(26,20,10,0.06)]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[rgba(196,125,46,0.14)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                      {project.category}
                    </span>
                    <span className="text-sm text-[var(--muted)]">
                      {project.subtitle}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl text-[var(--ink-strong)]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--line)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--glass)] p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                      Project notes
                    </p>
                    <div className="mt-4 grid gap-3">
                      {project.highlights.map((highlight) => (
                        <p
                          key={highlight}
                          className="rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-sm leading-6 text-[var(--muted-strong)]"
                        >
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--ink-strong)] px-4 py-2 text-sm text-[var(--bg)] transition hover:-translate-y-0.5"
                    >
                      Live Preview
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                      <Link
                        href={project.repo}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm font-medium !text-[var(--ink-strong)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
                      >
                        Source
                        <Github className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="fade-rise rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--glass)] p-3">
                <BriefcaseBusiness className="h-5 w-5 text-[var(--accent-deep)]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Experience
                </p>
                <h2 className="mt-2 font-display text-3xl text-[var(--ink-strong)]">
                  Recent roles
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--glass)] p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--ink-strong)]">
                        {item.role}
                      </h3>
                      <p className="text-sm text-[var(--muted-strong)]">
                        {item.company}
                      </p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      {item.period}
                    </p>
                  </div>
                  <div className="mt-4 grid gap-2">
                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-sm leading-7 text-[var(--muted)]"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="fade-rise stagger-1 rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--glass)] p-3">
                  <Layers3 className="h-5 w-5 text-[var(--accent-deep)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Toolkit
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-[var(--ink-strong)]">
                    Technical stack
                  </h2>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--line)] bg-[var(--glass)] px-3 py-2 text-sm text-[var(--muted-strong)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="fade-rise stagger-2 rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--glass)] p-3">
                  <GraduationCap className="h-5 w-5 text-[var(--accent-deep)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Education
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-[var(--ink-strong)]">
                    Academic foundation
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {education.map((item) => (
                  <article
                    key={`${item.school}-${item.title}`}
                    className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--glass)] p-5"
                  >
                    <h3 className="text-lg font-semibold text-[var(--ink-strong)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted-strong)]">
                      {item.school}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      {item.period}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
        <div className="fade-rise rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                More Links
              </p>
              <h2 className="mt-2 font-display text-3xl text-[var(--ink-strong)]">
                Additional launches and profile access
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {moreLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm font-medium !text-[var(--ink-strong)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-4 sm:px-8 lg:px-10">
        <div className="fade-rise overflow-hidden rounded-[2.5rem] border border-[var(--line-strong)] bg-[linear-gradient(135deg,#18140f_0%,#241b12_45%,#9b6526_140%)] p-8 text-[#f6efe6] shadow-[0_28px_90px_rgba(37,25,12,0.3)] sm:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d9c4aa]">
            Let&apos;s build
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl font-display text-3xl leading-tight sm:text-5xl">
                If the product needs clarity, speed, and strong frontend
                execution, I can help ship it.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e7d9c6] sm:text-base">
                I&apos;m open to opportunities where interface quality, product
                thinking, and reliable implementation matter.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:akinolaabdulateef36@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#f2e5d0] px-5 py-3 text-sm font-semibold !text-[#20160d] transition hover:-translate-y-0.5"
              >
                Email Me
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/abdullateef36"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] px-5 py-3 text-sm text-[#f6efe6] transition hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.5)]"
              >
                GitHub Profile
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
