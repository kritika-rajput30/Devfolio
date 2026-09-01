// Single source of truth for the Freelance Work list cards + their /work/:slug
// detail pages. Content mirrors the reference case studies.

import easysportspassHome from "../assets/freelance/easysportspass-home.jpg";
import artndirtHome from "../assets/freelance/artndirt-home.jpg";
import scholarOnboarding from "../assets/freelance/scholar-onboarding.jpg";

export const PROJECTS = [
  {
    slug: "easysportspass",
    n: "01",
    // list card
    cardMeta: "B2B Fitness · 2024",
    cardDesc:
      "Connecting gym owners with corporate wellness programs at scale.",
    cardTags: ["React", ".NET", "MySQL", "Stripe"],
    // detail page
    category: "B2B Fitness Platform",
    year: "2024",
    status: "Live",
    titleLines: ["EasySports", "Pass"],
    title: "EasySportsPass",
    summary:
      "A comprehensive B2B platform connecting gym owners with corporate clients — enabling bulk employee wellness memberships at scale.",
    liveUrl: "https://easysportspass.com",
    liveLabel: "easysportspass.com",
    ideaLead:
      "Gym owners were losing bulk membership revenue because the B2B corporate wellness market had no easy tooling to manage large accounts.",
    ideaBody: [
      "EasySportsPass bridges that gap — giving gym owners a dashboard to list facilities, set corporate rates, and manage member access; while giving HR teams a portal to onboard employees, track usage, and handle recurring payments via Stripe. The core goal: zero-friction enrollment where an employee gets access with a single company link, no manual paperwork.",
      "I built the frontend in React with Tailwind CSS, backed by a .NET (C#) REST API with MySQL for data storage. The system handles role-based auth (gym owner / corporate admin / employee), membership lifecycle management, and an analytics dashboard showing gym capacity utilization in real time.",
    ],
    details: [
      ["Client", "EasySportsPass"],
      ["Industry", "Fitness / Wellness"],
      ["My Role", "Full Stack Developer"],
      ["Timeline", "6 months · 2024"],
    ],
    tech: [
      "React.js",
      ".NET",
      "C#",
      "MySQL",
      "Stripe",
      "Tailwind CSS",
      "JWT Auth",
      "REST API",
    ],
    shots: 3,
    screenshots: [{ src: easysportspassHome, label: "Homepage" }],
  },
  {
    slug: "artndirt",
    n: "02",
    cardMeta: "E-Commerce · 2024",
    cardDesc: "Art marketplace with a custom Razorpay subscription plugin.",
    cardTags: ["WordPress", "WooCommerce", "PHP", "Razorpay"],
    category: "Art E-Commerce",
    year: "2024",
    status: "Live",
    titleLines: ["Art N", "Dirt"],
    title: "Art N Dirt",
    summary:
      "A WordPress-based art marketplace for independent artists, built with a custom Razorpay subscription plugin from scratch.",
    liveUrl: "https://artndirt.com",
    liveLabel: "artndirt.com",
    ideaLead:
      "Independent artists needed a way to sell original work and offer exclusive content subscriptions — without paying platform fees to middlemen.",
    ideaBody: [
      "Art N Dirt is a WordPress-powered e-commerce site for an independent art studio. The core challenge was enabling recurring memberships — artists wanted to offer exclusive print drops and digital content on a subscription basis. WooCommerce didn't support Razorpay subscriptions out of the box, so I built a custom WordPress plugin that handles webhook verification, subscription lifecycle events (create, renew, cancel), and payment state sync with the WooCommerce order system.",
      "The result: artists can offer tiered memberships (monthly/yearly), ship physical prints to subscribers, and gate premium digital content — all through a single dashboard, with Indian payment rails via Razorpay.",
    ],
    details: [
      ["Client", "Art N Dirt Studio"],
      ["Industry", "Art / Creative"],
      ["My Role", "WordPress Developer"],
      ["Timeline", "3 months · 2024"],
    ],
    tech: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Razorpay API",
      "Custom Plugin",
      "MySQL",
      "REST Webhooks",
      "Elementor",
    ],
    shots: 3,
    screenshots: [{ src: artndirtHome, label: "Homepage" }],
  },
  {
    slug: "scholar",
    n: "03",
    cardMeta: "Mobile · EdTech · 2024",
    cardDesc:
      "Personalised LMS connecting learners, mentors, and communities.",
    cardTags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    category: "Mobile · EdTech",
    year: "2024",
    status: "Live",
    titleLines: ["Scholar", "LMS"],
    title: "Scholar",
    summary:
      "A personalised learning management system connecting learners, mentors, and communities — on iOS and Android.",
    liveUrl: null,
    liveLabel: null,
    ideaLead:
      "Generic e-learning platforms treat every learner the same. Scholar doesn't.",
    ideaBody: [
      "Scholar adapts course content, pacing, and recommendations to each student's progress and learning style. Instructors get cohort dashboards and live session tools. Learners get personalised paths, peer community boards, mentor chat, and auto-generated certificates on completion.",
      "Built with React Native for a true cross-platform experience, backed by a Node.js API and MongoDB. Real-time features — live sessions, chat, notifications — run on Socket.io. The community feed shown in the screenshots highlights how learners connect, share milestones, and grow together.",
    ],
    details: [
      ["Platform", "iOS & Android"],
      ["Industry", "EdTech"],
      ["My Role", "Full Stack Mobile Dev"],
      ["Timeline", "6 months · 2024"],
    ],
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT Auth",
      "Push Notifications",
    ],
    shots: 8,
    device: "mobile",
    screenshots: [{ src: scholarOnboarding, label: "Onboarding" }],
  },
  {
    slug: "taskflow",
    n: "04",
    cardMeta: "Mobile · Productivity · 2023",
    cardDesc:
      "Kanban-style project management app built for remote teams.",
    cardTags: ["Flutter", "Dart", "Supabase", "BLoC"],
    category: "Mobile · Productivity",
    year: "2023",
    status: null,
    titleLines: ["Task", "Flow"],
    title: "TaskFlow",
    summary:
      "Kanban-style project management app built for remote teams — on iOS and Android.",
    liveUrl: null,
    liveLabel: null,
    ideaLead:
      "Remote teams needed a task manager that felt native, not like a stripped-down web app.",
    ideaBody: [
      "TaskFlow gives remote teams a visual Kanban board to plan sprints, assign tasks, and track blockers in real time. Deep linking lets members jump straight to a card from Slack or email. Built with Flutter for a pixel-perfect native feel on both platforms from a single codebase, with Supabase handling real-time sync and auth.",
    ],
    details: [
      ["Platform", "iOS & Android"],
      ["Industry", "Productivity"],
      ["My Role", "Flutter Developer"],
      ["Timeline", "3 months · 2023"],
    ],
    tech: [
      "Flutter",
      "Dart",
      "Supabase",
      "BLoC",
      "Deep Linking",
      "Push Notifications",
      "Real-time Sync",
    ],
    shots: 3,
    device: "mobile",
  },
  {
    slug: "shopsnap",
    n: "05",
    cardMeta: "Mobile · Shopping · 2023",
    cardDesc: "A simple and fast mobile shopping app for everyday use.",
    cardTags: ["React Native", "Node.js", "MongoDB"],
    category: "Mobile · Shopping",
    year: "2023",
    status: null,
    titleLines: ["Shop", "Snap"],
    title: "ShopSnap",
    summary:
      "A simple and fast mobile shopping app for everyday use — on iOS and Android.",
    liveUrl: null,
    liveLabel: null,
    ideaLead:
      "Shopping apps are often bloated. ShopSnap strips it back to what matters.",
    ideaBody: [
      "ShopSnap is a clean, lightweight shopping app that lets users browse products, save favourites, and checkout quickly. Built with React Native for cross-platform support and a Node.js + MongoDB backend handling product listings, user carts, and order history. The focus was on speed and simplicity — fast load times, minimal friction at checkout.",
    ],
    details: [
      ["Platform", "iOS & Android"],
      ["Industry", "E-Commerce"],
      ["My Role", "Mobile Developer"],
      ["Timeline", "2 months · 2023"],
    ],
    tech: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Push Notifications",
    ],
    shots: 4,
    device: "mobile",
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
