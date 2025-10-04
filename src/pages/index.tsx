import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-56 md:w-72">
          <img className="rounded-xl" src="/profile-pic.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">Hi, Im Radif 👋</div>
          <p className="text-xl font-medium text-gray-600">
            Full-Stack Developer & AI/ML Enthusiast
          </p>
          <p className="text-center">
            Passionate about building secure, responsive, and scalable
            applications, while also exploring the intersection of AI, IoT, and
            real-world automation. With a background in Electrical and Computer
            Engineering, I bring a multidisciplinary perspective to software
            development.
          </p>
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
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
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
