import project_img_1 from "public/wordle.png";
import project_img_2 from "public/gpt-telegram-bot.png";
import project_img_3 from "public/movies-explorer-frontend.png";
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
          className="ml-auto mt-8 flex border border-orange-500 px-4 py-2 text-right font-main transition-all duration-300 hover:bg-orange-200 sm:mt-0 sm:inline-block"
        >
          {"Просмотреть все >>"}
        </Link>
      </div>
      <ul className="grid items-start gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Project
          image={project_img_1}
          technologies="React Express"
          title="Wordle"
          description="Браузерная игра в слова"
        >
          <ProjectLink href="https://www.wordle-by-ds.ru/">Сайт</ProjectLink>
          <ProjectLink href="https://github.com/DenisShamanskiy/react-demo-wordle">
            Github frontend
          </ProjectLink>
          <ProjectLink href="https://github.com/DenisShamanskiy/react-demo-wordle-api">
            Github backend
          </ProjectLink>
        </Project>
        <Project
          image={project_img_2}
          technologies="Express"
          title="GPT-TelegramBot"
          description="Telegram бот для работы с ChatGPT"
        >
          <ProjectLink href="https://t.me/GPTbyDSBot">Telegram</ProjectLink>
          <ProjectLink href="https://github.com/DenisShamanskiy/GPT-TelegramBot">
            Github
          </ProjectLink>
        </Project>
        <Project
          image={project_img_3}
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
      </ul>
    </section>
  );
}
