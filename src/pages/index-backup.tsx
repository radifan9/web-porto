import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Swiper, SwiperSlide } from "swiper/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

// import {  } from "../components/";

const WORK_EXPERIENCES = [
  {
    title: "Full Stack Web Developer",
    company: "Koda Tech Academy",
    img: "/koda.png",
    startAt: "Oct 2022",
    endAt: "Present",
    responsibilities: [
      "Develop Tickitz and Prospera",
      "Attending class everyday",
    ],
    techUsed: [
      "JavaScript",
      "Go",
      "React",
      "Redux",
      "React Router",
      "Gin",
      "PostgreSQL",
    ],
  },

  {
    title: "Full Stack Web Developer",
    company: "Dumbways",
    img: "/dumbways.png",
    startAt: "Oct 2022",
    endAt: "Present",
    responsibilities: [
      "Develop Tickitz and Prospera",
      "Attending class everyday",
    ],
    techUsed: [
      "JavaScript",
      "Go",
      "React",
      "Redux",
      "React Router",
      "Gin",
      "PostgreSQL",
    ],
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:flex-row md:gap-12 md:py-10">
        <div className="w-56 md:w-8/10">
          <img alt="Radif" className="rounded-xl" src="/profile-pic.jpg" />
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="text-3xl font-bold md:text-6xl">Hi, Im Radif 👋</div>
          <p className="text-xl font-medium text-gray-600">
            Full-Stack Developer & AI/ML Enthusiast
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
            <div>Surabaya, Jawa Timur</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            <span className="text-gray-500">Available for new projects</span>
          </div>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="flex flex-col items-start justify-start gap-4 py-8 md:flex-row md:gap-12 md:py-10">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </section>

      {/* Work Experiences */}
      <section className="flex flex-col items-start justify-start gap-4 py-8 md:flex-row md:gap-12 md:py-10">
        {WORK_EXPERIENCES.map((el) => ({
          
        }))}

        <h2 className="text-2xl font-bold">Work Experiences</h2>
        <div className="flex flex-col gap-2">
          <div className="w-14">
            <img className="rounded-2xl" src="/koda.png" alt="" />
          </div>
          <div className="text-xl font-bold">Full Stack Web Developer</div>
          <div className="text-green-600">Koda Tech Academy</div>
          <div className="text-gray-500 dark:text-gray-400">
            Oct 2022 - Present
          </div>
          <ul className="list-inside list-disc text-gray-600">
            <li>Mentoring students in Full Stack Development bootcamp</li>
            <li>
              Teaching JavaScript, React, Node.js, and related technologies
            </li>
            <li>Providing code reviews and technical guidance</li>
            <li>Developing curriculum and learning materials</li>
            <li>Conducting technical interviews and assessments</li>
          </ul>
          <ul class="mt-2 flex gap-4 text-xs font-medium text-gray-700">
            <li class="rounded-full bg-gray-200 px-3 py-1">Python</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg justify-center text-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
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
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
