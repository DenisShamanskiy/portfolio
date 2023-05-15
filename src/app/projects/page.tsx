import { Montserrat_Alternates } from "next/font/google";
import project_img_1 from "public/movies-explorer-frontend.png";
import project_img_2 from "public/how-to-learn.png";
import project_img_3 from "public/russian-travel.png";
import project_img_4 from "public/mesto.png";
import project_img_5 from "public/mesto_react.png";
import project_img_6 from "public/react-mesto-api-full.png";
import Project from "@/components/Project";
import ProjectLink from "@/components/ProjectLink";
import Heading2 from "@/components/Heading2";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export default function Page() {
  return (
    <>
      <div className="block w-full self-start">
        <h1
          className={`${montserrat.className} text-2xl font-medium before:text-orange-500 before:content-['/'] sm:text-3xl`}
        >
          проекты
        </h1>
        <p className="mt-4 text-sm sm:text-base">Мои проекты</p>
      </div>
      <section className="mx-auto flex w-full flex-wrap items-center justify-between">
        <Heading2>учебные</Heading2>

        <ul className="mt-12 grid items-start gap-4 sm:grid-cols-2 mdPlus:grid-cols-3">
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
            technologies="React, Express"
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
            image={project_img_5}
            technologies="React"
            title="Mesto React Auth"
            description="Проект Mesto портирован на React. Добавлена авторизация."
          >
            <ProjectLink href="https://github.com/DenisShamanskiy/react-mesto-auth">
              Github
            </ProjectLink>
            <ProjectLink href="https://denisshamanskiy.github.io/react-mesto-auth/">
              Github Pages
            </ProjectLink>
            <ProjectLink href="https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1">
              Figma
            </ProjectLink>
          </Project>
          <Project
            image={project_img_4}
            technologies="HTML CSS JS"
            title="Mesto"
            description="Интерактивная страница, где можно добавлять и удалять фотографии"
          >
            <ProjectLink href="https://github.com/DenisShamanskiy/mesto">
              Github
            </ProjectLink>
            <ProjectLink href="https://denisshamanskiy.github.io/mesto/">
              Github Pages
            </ProjectLink>
            <ProjectLink href="https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1">
              Figma #1
            </ProjectLink>
            <ProjectLink href="https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1">
              Figma #2
            </ProjectLink>
            <ProjectLink href="https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1">
              Figma #3
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
          <Project
            image={project_img_2}
            technologies="HTML CSS"
            title="How to Learn"
            description="Базовые возможности HTML и CSS"
          >
            <ProjectLink href="https://github.com/DenisShamanskiy/how-to-learn">
              Github
            </ProjectLink>
            <ProjectLink href="https://denisshamanskiy.github.io/how-to-learn/">
              Github Pages
            </ProjectLink>
          </Project>
        </ul>
      </section>
    </>
  );
}
