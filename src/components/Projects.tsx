import Image from "next/image";
import project_img_1 from "public/movies-explorer-frontend.png";
import project_img_3 from "public/russian-travel.png";
import project_img_6 from "public/react-mesto-api-full.png";
import Link from "next/link";
import Heading2 from "./Heading2";
import Project from "./Project";
import ProjectLink from "./ProjectLink";

export default function Projects() {
  return (
    <section className="flex w-full flex-wrap items-center justify-between">
      <div className="mb-12 flex w-full flex-col flex-wrap items-center sm:flex-row sm:justify-between">
        <Heading2>проекты</Heading2>
        <Link
          href={"/projects"}
          className="ml-auto mt-8 flex border border-orange-500 px-4 py-2 text-right font-main transition-all hover:border-orange-200 hover:bg-orange-200 sm:mt-0 sm:inline-block"
        >
          {"Просмотреть все >>"}
        </Link>
      </div>
      <ul className="grid items-start gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Project
          image={project_img_1}
          technologies="React"
          title="Movies"
          description="Дипломная работа в Яндекс.Практикум"
        >
          <ProjectLink href="https://github.com/DenisShamanskiy/movies-explorer-frontend">
            Github frontend
          </ProjectLink>
          <ProjectLink href="https://github.com/DenisShamanskiy/movies-explorer-api">
            Github backend
          </ProjectLink>
          <ProjectLink href="https://disk.yandex.ru/d/c-BipWYdCCPnFw">
            Figma
          </ProjectLink>
        </Project>
        <Project
          image={project_img_6}
          technologies="React Express"
          title="React Mesto Api Full"
          description="Для проекта Mesto написан backend"
        >
          <ProjectLink href="https://github.com/DenisShamanskiy/react-mesto-api-full">
            Github frontend
          </ProjectLink>
          <ProjectLink href="https://github.com/DenisShamanskiy/express-mesto">
            Github backend
          </ProjectLink>
        </Project>
        <Project
          image={project_img_3}
          technologies="HTML CSS"
          title="Russian Travel"
          description="Адаптивная вёрстка сайта под различные разрешения экранов"
        >
          <ProjectLink href="https://github.com/DenisShamanskiy/russian-travel">
            Github
          </ProjectLink>
          <ProjectLink href="https://denisshamanskiy.github.io/russian-travel/">
            Github Pages
          </ProjectLink>
          <ProjectLink href="https://www.figma.com/file/5S2WSbEFL6awjVWJ0NWL8Q/Sprint-3_-Russia-_-desktop-mobile?node-id=28503%3A0">
            Figma
          </ProjectLink>
        </Project>
      </ul>
    </section>
  );
}
