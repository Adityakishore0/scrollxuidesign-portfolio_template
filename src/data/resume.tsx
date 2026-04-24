import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Karilyn Warp",
  initials: "kW",
  url: "https://karilynwarp.dev",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/newyork",
  title: "Senior Software Engineer",
  pronouns: "she/her",
  status: "Finding Issues",
  timezone: "America/New_York",
  timezoneLabel: "EST",
  description:
    "Full-Stack Engineer & Product Builder. I love crafting delightful user experiences and shipping products people care about. Always learning, always building.",
  summary:
    "After spending several years as a software engineer at fast-growing startups, I launched my own suite of developer tools aimed at making deployment and monitoring effortless. I hold a [degree in Computer Science from NYU](/#education) and have [interned at leading tech companies in New York and Seattle](/#work). I've also [competed in over 15 hackathons](/#hackathons) and spoken at regional developer conferences. I thrive at the intersection of elegant code and great design.",
  avatarUrl: "/baby.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@karilynwarp.dev",
    tel: "+12125550199",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Karilynwarp",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/Karilynwarp",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Karilynwarp",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@Karilynwarp",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@karilynwarp.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Vercel",
      href: "https://vercel.com",
      badges: [] as string[],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=64&h=64&fit=crop",
      start: "March 2023",
      end: "Present",
      description:
        "Led the development of new Edge Functions runtime capabilities, reducing cold start times by 60%. Collaborated with the design team to overhaul the dashboard UI in Next.js 14 with server components. Mentored three junior engineers and ran bi-weekly technical design reviews.",
    },
    {
      company: "Stripe",
      badges: [] as string[],
      href: "https://stripe.com",
      location: "New York, NY",
      title: "Software Engineer",
      logoUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=64&h=64&fit=crop",
      start: "July 2021",
      end: "February 2023",
      description:
        "Built and maintained core payment flow components used by millions of merchants globally. Developed a TypeScript SDK wrapper that cut integration time for partners by 40%. Drove adoption of automated regression testing across the checkout team.",
    },
    {
      company: "Figma",
      href: "https://figma.com",
      badges: [] as string[],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=64&h=64&fit=crop",
      start: "May 2020",
      end: "August 2020",
      description:
        "Prototyped a real-time cursor presence feature using CRDTs and WebSockets, later shipped in the main product. Wrote performance benchmarks that identified a 3× rendering bottleneck in the canvas layer.",
    },
    {
      company: "Datadog",
      href: "https://datadoghq.com",
      badges: [] as string[],
      location: "New York, NY",
      title: "Software Engineer Intern",
      logoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop",
      start: "January 2020",
      end: "April 2020",
      description:
        "Designed a pipeline health dashboard using React and D3.js, adopted by 12 internal teams within two months. Added Golang gRPC endpoints to the metrics ingestion service, improving throughput by 25%.",
    },
    {
      company: "DigitalOcean",
      href: "https://digitalocean.com",
      badges: [] as string[],
      location: "New York, NY",
      title: "Software Engineer Intern",
      logoUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=64&h=64&fit=crop",
      start: "June 2019",
      end: "August 2019",
      description:
        "Contributed to the App Platform beta, adding support for custom environment variable injection and build-time secrets. Fixed critical race conditions in the provisioning microservice, reducing deploy failures by 18%.",
    },
  ],
  education: [
    {
      school: "New York University",
      href: "https://nyu.edu",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=64&h=64&fit=crop",
      start: "2017",
      end: "2021",
    },
    {
      school: "Coursera / Stanford Online",
      href: "https://coursera.org",
      degree: "Machine Learning Specialization",
      logoUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=64&h=64&fit=crop",
      start: "2022",
      end: "2022",
    },
    {
      school: "AWS Training",
      href: "https://aws.training",
      degree: "AWS Certified Solutions Architect – Associate",
      logoUrl: "https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?w=64&h=64&fit=crop",
      start: "2021",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "DeployNow",
      href: "https://deploynow.dev",
      dates: "Feb 2024 – Present",
      active: true,
      description:
        "A zero-config deployment platform for Node.js and Python apps. Users push to GitHub and their app is live in under 30 seconds. Built with Next.js, Go microservices, and Kubernetes on the container scheduling, scaling, and isolation.",
      technologies: ["Next.js", "TypeScript", "Go", "Kubernetes", "PostgreSQL", "TailwindCSS", "Stripe"],
      links: [{ type: "Website", href: "https://deploynow.dev" }],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=400&fit=crop",
      video: "",
    },
    {
      title: "QubitCore Quantum Systems",
      href: "https://qubitcore.io",
      dates: "August 2023 – Present",
      active: true,
      description:
        "A quantum computing research platform focused on scalable qubit systems and hybrid quantum-classical computing. It lets developers simulate quantum circuits, solve optimization problems, and run quantum ML experiments without physical hardware.",
      technologies: [
        "Qiskit",
        "Python",
        "C++",
        "CUDA",
        "TensorFlow Quantum",
        "Rust",
        "Cloud Infrastructure",
        "Distributed Systems"
      ],
      links: [
        { type: "Platform", href: "https://qubitcore.io" },
        { type: "Research", href: "https://qubitcore.io/research" }
      ],
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
      video: ""
    },
    {
      title: "LogPulse",
      href: "https://logpulse.io",
      dates: "November 2023 – March 2024",
      active: true,
      description:
        "Real-time log aggregation and alerting SaaS for small engineering teams. Supports structured JSON logs, regex filters, and Slack/PagerDuty webhooks. Built on top of ClickHouse for sub-second queries.",
      technologies: ["Next.js", "Python", "ClickHouse", "Redis", "Docker", "TailwindCSS", "Stripe"],
      links: [
        { type: "Website", href: "https://logpulse.io" },
        { type: "Source", href: "https://github.com/Karilynwarp/logpulse" },
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      video: "",
    },
    {
      title: "FormCraft",
      href: "https://formcraft.so",
      dates: "June 2023 – October 2023",
      active: true,
      description:
        "A drag-and-drop form builder with conditional logic, file uploads, and webhook integrations. Processes over 500K submissions per month.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "Cloudflare Workers"],
      links: [{ type: "Website", href: "https://formcraft.so" }],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackNYU 2023",
      dates: "February 18th – 19th, 2023",
      location: "New York, New York",
      description: "Built a peer-to-peer tutoring marketplace using Next.js and Supabase that matched students with mentors in real time. Won Best Education Hack.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=80&h=80&fit=crop",
      win: "Best Education Hack",
      links: [] as { title: string; href: string }[],
    },
    {
      title: "ETHGlobal New York",
      dates: "September 22nd – 24th, 2023",
      location: "New York, New York",
      description: "Created a decentralized on-chain credential verification system using EAS (Ethereum Attestation Service), allowing companies to issue tamper-proof skill badges.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=80&h=80&fit=crop",
      links: [{ title: "Source", href: "https://github.com/Karilynwarp/chain-creds" }],
    },
    {
      title: "Hack the Planet 2022",
      dates: "November 12th – 13th, 2022",
      location: "Remote",
      description: "Developed a carbon footprint tracker mobile app that uses ML to estimate emissions from food photos taken by the user.",
      image: "https://images.unsplash.com/photo-1611095560823-c20a18b1bc3e?w=80&h=80&fit=crop",
      win: "1st Place – Sustainability Track",
      links: [] as { title: string; href: string }[],
    },
    {
      title: "DeveloperWeek NYC 2022",
      dates: "June 8th – 9th, 2022",
      location: "New York, New York",
      description: "Built a Slack bot that automatically summarizes long threads and action items using OpenAI GPT-3, reducing meeting prep time for remote teams.",
      image: "https://images.unsplash.com/photo-1573497701240-345a300b8d36?w=80&h=80&fit=crop",
      links: [{ title: "Github", href: "https://github.com/Karilynwarp/slackbot-summarizer" }],
    },
    {
      title: "Health Tech Hackathon 2021",
      dates: "October 2nd – 3rd, 2021",
      location: "New York, New York",
      description: "Designed and built a medication reminder app with caregiver oversight features using React Native and Firebase.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=80&h=80&fit=crop",
      links: [] as { title: string; href: string }[],
    },
    {
      title: "Hack the North 2021",
      dates: "September 17th – 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Created an AR-powered home design tool where users can place 3D furniture models in their rooms using their phone camera, powered by Three.js and WebXR.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=80&h=80&fit=crop",
      links: [{ title: "Source", href: "https://github.com/Karilynwarp/ar-home" }],
    },
    {
      title: "TreeHacks 2021",
      dates: "February 12th – 14th, 2021",
      location: "Stanford, CA (Remote)",
      description: "Built a browser extension that highlights dark patterns on e-commerce websites, flagging misleading subscription prompts and hidden fees.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80&h=80&fit=crop",
      win: "Best Consumer App",
      links: [{ title: "Source", href: "https://github.com/Karilynwarp/darkpattern-guard" }],
    },
    {
      title: "HackNYU 2020",
      dates: "February 7th – 9th, 2020",
      location: "New York, New York",
      description: "Developed a crowd-sourced noise complaint system for NYC residents that maps noise levels in real time and routes reports to the relevant city agency.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=80&h=80&fit=crop",
      links: [] as { title: string; href: string }[],
    },
    {
      title: "PennApps XX",
      dates: "September 6th – 8th, 2019",
      location: "Philadelphia, PA",
      description: "Built a smart calendar assistant that ingests email threads and automatically schedules follow-ups and meetings with zero user input.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=80&h=80&fit=crop",
      links: [] as { title: string; href: string }[],
    },
    {
      title: "MHacks 12",
      dates: "October 18th – 20th, 2019",
      location: "Ann Arbor, Michigan",
      description: "Created a real-time collaborative whiteboard app with drawing, sticky notes, and voting features built on Socket.io and Canvas API.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=80&h=80&fit=crop",
      links: [{ title: "Source", href: "https://github.com/Karilynwarp/collab-board" }],
    },
    {
      title: "HackUMass VII",
      dates: "November 1st – 3rd, 2019",
      location: "Amherst, Massachusetts",
      description: "Built a GitHub PR review assistant that auto-generates summaries of code changes using static analysis and NLP, helping reviewers prioritize complex diffs.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=80&h=80&fit=crop",
      links: [] as { title: string; href: string }[],
    },
    {
      title: "HackNYU 2019",
      dates: "February 15th – 17th, 2019",
      location: "New York, New York",
      description: "Prototyped a local community board app that aggregates neighborhood news, events, and lost & found posts in one feed, built with React Native.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=80&h=80&fit=crop",
      links: [] as { title: string; href: string }[],
    },
    {
      title: "Hack the Borough 2018",
      dates: "October 27th, 2018",
      location: "Brooklyn, New York",
      description: "Developed an offline-first study tool for NYC subway riders that syncs flashcard decks when connected and quizzes users while commuting.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=80&h=80&fit=crop",
      win: "Top 10 Finalist",
      links: [{ title: "Source", href: "https://github.com/Karilynwarp/subway-study" }],
    },
    {
      title: "CodeDay NYC 2018",
      dates: "April 14th – 15th, 2018",
      location: "New York, New York",
      description: "Built a music visualizer web app that generates animated particle systems in sync with audio input, using Web Audio API and Three.js.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop",
      links: [] as { title: string; href: string }[],
    },
    {
      title: "BigRedHacks 2018",
      dates: "September 28th – 30th, 2018",
      location: "Ithaca, New York",
      description: "Created a smart job board aggregator that scores postings by skill match and filters out duplicate listings across LinkedIn, Indeed, and Glassdoor.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=80&h=80&fit=crop",
      links: [] as { title: string; href: string }[],
    },
  ],
};