import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import project_img_1 from "public/movies-explorer-frontend.png";
// import project_img_2 from "public/how-to-learn.png";
import project_img_3 from "public/russian-travel.png";
// import project_img_4 from "public/mesto.png";
// import project_img_5 from "public/mesto_react.png";
import project_img_6 from "public/react-mesto-api-full.png";
import Link from "next/link";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: "600",
});

export default function Projects() {
  return (
    <section className="flex w-full flex-wrap items-center justify-between">
      <div className="mb-12 flex w-full flex-col flex-wrap items-center sm:flex-row sm:justify-between">
        <h2
          className={`${montserrat.className} after:content[""] relative mr-auto flex text-3xl font-medium after:absolute after:-right-4 after:top-1/2 after:z-40 after:block after:h-[1px] after:w-[10vw] after:-translate-y-1/2 after:translate-x-full after:bg-third-color sm:inline-block`}
        >
          #проекты
        </h2>
        <Link
          href={"/projects"}
          className="ml-auto mt-8 flex border border-orange-500 px-4 py-2 text-right sm:mt-0 sm:inline-block"
        >
          {"Просмотреть все >>"}
        </Link>
      </div>

      <div className="grid items-start gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="overflow-hidden rounded-xl border border-third-color">
          <Image src={project_img_1} alt="Picture of the Movies" />
          <ul className="flex flex-wrap gap-x-2 gap-y-4 border-b border-third-color p-2">
            <li className="project__tech">React</li>
          </ul>

          <div className="flex flex-col p-4">
            <h3
              className={`${montserrat.className} font-medium" inline-block text-2xl`}
            >
              Movies
            </h3>
            <p className="my-4 inline-block">
              Дипломная работа в Яндекс.Практикум
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={
                  "https://github.com/DenisShamanskiy/movies-explorer-frontend"
                }
                target="_blank"
                className="inline-block max-w-fit rounded-lg border border-third-color p-2"
              >
                {"Github frontend"}
              </Link>
              <Link
                href={"https://github.com/DenisShamanskiy/movies-explorer-api"}
                target="_blank"
                className="inline-block max-w-fit rounded-lg border border-third-color p-2"
              >
                {"Github backend"}
              </Link>
              <Link
                href={"https://disk.yandex.ru/d/c-BipWYdCCPnFw"}
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Figma"}
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-third-color">
          <Image src={project_img_6} alt="Picture of the Movies" />
          <ul className="flex flex-wrap gap-x-2 gap-y-4 border-b border-third-color p-2">
            <li className="project__tech">React</li>
          </ul>

          <div className="p-4">
            <h3
              className={`${montserrat.className} font-medium" inline-block text-2xl`}
            >
              React Mesto Api Full
            </h3>
            <p className="my-4 inline-block">
              Для проекта Mesto написан backend.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={"https://github.com/DenisShamanskiy/react-mesto-api-full"}
                target="_blank"
                className="inline-block rounded-lg border border-third-color p-2"
              >
                {"Github frontend"}
              </Link>
              <Link
                href={"https://github.com/DenisShamanskiy/express-mesto"}
                target="_blank"
                className="inline-block rounded-lg border border-third-color p-2"
              >
                {"Github backend"}
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="overflow-hidden rounded-xl border border-third-color">
          <Image src={project_img_5} alt="Picture of the Movies" />
          <ul className="flex flex-wrap gap-x-2 gap-y-4 border-b border-third-color p-2">
            <li className="project__tech">React</li>
          </ul>

          <div className="p-4">
            <h3
              className={`${montserrat.className} font-medium" inline-block text-2xl`}
            >
              Mesto React Auth
            </h3>
            <p className="my-4 inline-block">
              Проект Mesto портирован на React. Добавлена авторизация.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={"https://github.com/DenisShamanskiy/react-mesto-auth"}
                target="_blank"
                className="inline-block rounded-lg border border-third-color p-2"
              >
                {"Github"}
              </Link>
              <Link
                href={"https://denisshamanskiy.github.io/react-mesto-auth/"}
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Github Pages"}
              </Link>
              <Link
                href={
                  "https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1"
                }
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Figma"}
              </Link>
            </div>
          </div>
        </div> */}
        {/* <div className="overflow-hidden rounded-xl border border-third-color">
          <Image src={project_img_4} alt="Picture of the Movies" />
          <ul className="flex flex-wrap gap-x-2 gap-y-4 border-b border-third-color p-2">
            <li className="project__tech">HTML CSS JS</li>
          </ul>

          <div className="p-4">
            <h3
              className={`${montserrat.className} font-medium" inline-block text-2xl`}
            >
              Mesto
            </h3>
            <p className="my-4 inline-block">
              Интерактивная страница, где можно добавлять и удалять фотографии
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={"https://github.com/DenisShamanskiy/mesto"}
                target="_blank"
                className="inline-block rounded-lg border border-third-color p-2"
              >
                {"Github"}
              </Link>
              <Link
                href={"https://denisshamanskiy.github.io/mesto/"}
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Github Pages"}
              </Link>
              <Link
                href={
                  "https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1"
                }
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Figma #1"}
              </Link>
              <Link
                href={
                  "https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1"
                }
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Figma #2"}
              </Link>
              <Link
                href={
                  "https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1"
                }
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Figma #3"}
              </Link>
            </div>
          </div>
        </div> */}
        <div className="xs overflow-hidden rounded-xl border border-third-color">
          <Image src={project_img_3} alt="Picture of the Movies" />
          <ul className="flex flex-wrap gap-x-2 gap-y-4 border-b border-third-color p-2">
            <li className="project__tech">HTML CSS</li>
          </ul>

          <div className="p-4">
            <h3
              className={`${montserrat.className} font-medium" inline-block text-2xl`}
            >
              Russian Travel
            </h3>
            <p className="my-4 inline-block">
              Адаптивная вёрстка сайта под различные разрешения экранов
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={"https://github.com/DenisShamanskiy/russian-travel"}
                target="_blank"
                className="inline-block rounded-lg border border-third-color p-2"
              >
                {"Github"}
              </Link>
              <Link
                href={"https://denisshamanskiy.github.io/russian-travel/"}
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Github Pages"}
              </Link>
              <Link
                href={
                  "https://www.figma.com/file/5S2WSbEFL6awjVWJ0NWL8Q/Sprint-3_-Russia-_-desktop-mobile?node-id=28503%3A0"
                }
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Figma"}
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="overflow-hidden rounded-xl border border-third-color">
          <Image src={project_img_2} alt="Picture of the Movies" />
          <ul className="flex flex-wrap gap-x-2 gap-y-4 border-b border-third-color p-2">
            <li className="project__tech">HTML CSS</li>
          </ul>

          <div className="p-4">
            <h3
              className={`${montserrat.className} font-medium" inline-block text-2xl`}
            >
              How to Learn
            </h3>
            <p className="my-4 inline-block">Базовые возможности HTML и CSS</p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={"https://github.com/DenisShamanskiy/how-to-learn"}
                target="_blank"
                className="inline-block rounded-lg border border-third-color p-2"
              >
                {"Github"}
              </Link>
              <Link
                href={"https://denisshamanskiy.github.io/how-to-learn/"}
                target="_blank"
                className="inline-block whitespace-nowrap rounded-lg border border-third-color p-2"
              >
                {"Github Pages"}
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
