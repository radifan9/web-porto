import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

const TECH_STACK = [
  { name: "JavaScript", icon: "" },
  { name: "React", icon: "" },
  { name: "Node.js", icon: "" },
  { name: "Go", icon: "" },
  { name: "PostgreSQL", icon: "" },
  { name: "Docker", icon: "" },
  { name: "Git", icon: "" },
  { name: "Python", icon: "" },
  { name: "C", icon: "" },
  { name: "C++", icon: "" },
  { name: "ExpressJS", icon: "" },
  { name: "React Router", icon: "" },
  { name: "Redux", icon: "" },
  { name: "Tailwind", icon: "" },
];

const WORK_EXPERIENCES = [
  {
    title: "Fullstack Web Developer",
    company: "Koda Tech Academy",
    img: "/koda.png",
    startAt: "Jun 2025",
    endAt: "Present",
    responsibilities: [
      "Developed Prospera - E-Wallet Web App with JWT authentication, Redis caching, and interactive charts",
      "Built Tickitz - Movie Booking platform with Golang backend, React frontend, and CI/CD automation",
      "Implemented protected routes, RESTful APIs, and deployed with Docker Compose",
    ],
    techUsed: [
      "JavaScript",
      "Go",
      "React",
      "Redux",
      "Gin",
      "PostgreSQL",
      "Docker",
      "Redis",
    ],
  },
  {
    title: "Fullstack Developer Talent",
    company: "PT DumbWays Indonesia Teknologi",
    img: "/dumbways.png",
    startAt: "May 2025",
    endAt: "Jun 2025",
    responsibilities: [
      "Developed personal website with built-in CMS for managing portfolios dynamically",
      "Designed responsive UI using HTML, CSS, and Tailwind CSS",
      "Implemented server-side rendering with Handlebars.js and Express.js",
    ],
    techUsed: [
      "JavaScript",
      "Express.js",
      "PostgreSQL",
      "Handlebars",
      "Tailwind CSS",
    ],
  },
];

const PROJECTS = [
  {
    name: "Prospera - E-Wallet App",
    img: "/prospera-1.png",
    description:
      "Digital wallet web application with fund transfers, transaction history, and financial insights dashboard",
    tech: ["React", "PostgreSQL", "Redis", "JWT", "Recharts"],
    period: "Sep - Oct 2025",
  },
  {
    name: "Tickitz - Movie Booking",
    img: "/tickitz-1.png",
    description:
      "Full-featured movie ticket booking platform with seat selection and real-time transactions",
    tech: ["React", "Go", "PostgreSQL", "Docker", "CI/CD"],
    period: "Jun - Sep 2025",
  },
];

const EDUCATION = [
  {
    degree: "Computer Engineering",
    school: "Brawijaya University",
    level: "Bachelor Degree",
    period: "2022 - 2024",
    gpa: "3.85/4.00",
    description:
      "Focused on computer networking, database systems, AI/ML, and embedded systems. Thesis: ESP32-based squat form detector using Random Forest algorithm.",
  },
  {
    degree: "Electronics Engineering",
    school: "Electronic Engineering Polytechnic Institute of Surabaya",
    level: "Associate Degree",
    period: "2017 - 2022",
    gpa: "3.34/4.00",
    description:
      "Foundation in electrical engineering, embedded systems, and IoT. Final Project: Automated conveyor belt with Computer Vision for tomato sorting.",
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:flex-row md:gap-12 md:py-10">
        <div className="w-64 md:w-130">
          <img alt="Radif" className="rounded-xl" src="/profile-pic.jpg" />
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="text-3xl font-bold md:text-6xl">Hi, Im Radif 👋</div>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-100">
            Fullstack Developer & AI/ML Enthusiast
          </p>
          <p className="text-center md:text-left">
            Passionate about building secure, responsive, and scalable
            applications, while also exploring the intersection of AI, IoT, and
            real-world automation. With a background in Electrical and Computer
            Engineering, I bring a multidisciplinary perspective to software
            development.
          </p>

          <div className="flex gap-3">
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>Surabaya, Indonesia</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            <span className="text-gray-500 dark:text-gray-100">
              Available for new projects
            </span>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="flex flex-col items-start justify-start gap-4 py-8 md:gap-12 md:py-10">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="flex w-full flex-wrap gap-3">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium"
            >
              {/* <span>{tech.icon}</span> */}
              <span className="dark:text-gray-600">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experiences */}
      <section className="flex flex-col items-start justify-start gap-4 py-8 md:gap-12 md:py-10">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <div className="flex w-full flex-col gap-8">
          {WORK_EXPERIENCES.map((exp, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="w-14">
                <img alt={exp.company} className="rounded" src={exp.img} />
              </div>
              <div className="text-xl font-bold">{exp.title}</div>
              <div className="text-green-600">{exp.company}</div>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startAt} - {exp.endAt}
              </div>
              <ul className="list-inside list-disc text-gray-600 dark:text-gray-100">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <ul className="mt-2 flex flex-wrap gap-2 text-xs font-medium text-gray-700">
                {exp.techUsed.map((tech) => (
                  <li key={tech} className="rounded-full bg-gray-200 px-3 py-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="flex flex-col items-start justify-start gap-4 py-8 md:gap-12 md:py-10">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="grid w-full gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-400"
            >
              <div>
                <img alt={project.name} src={project.img} />
              </div>
              <h3 className="mb-2 text-xl font-bold">{project.name}</h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-100">
                {project.period}
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-100">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs dark:text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="flex flex-col items-start justify-start gap-4 py-8 md:gap-12 md:py-10">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="flex w-full flex-col gap-6">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="text-xl font-bold">{edu.degree}</div>
              <div className="text-green-600">{edu.school}</div>
              <div className="text-gray-500 dark:text-gray-400">
                {edu.level} • {edu.period} • GPA: {edu.gpa}
              </div>
              <p className="text-gray-600 dark:text-gray-100">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg justify-center text-center">
          <h2 className="mb-4 text-3xl font-bold">Lets Connect</h2>
          <p className="mb-6 text-gray-600">
            Im always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="https://linkedin.com/in/radifaghnadiin"
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </Link>
          <Link
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="mailto:radif.aghnadiin@gmail.com"
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Email
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
