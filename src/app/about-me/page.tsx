import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import photo from "public/photo-3.jpg";
import Heading2 from "@/components/Heading2";
import Skill from "@/components/Skill";

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
          о-себе
        </h1>
        <p className="mt-4 text-sm sm:text-base">Кто я такой</p>
      </div>

      <section className="grid w-full grid-cols-1 items-center justify-between gap-4 sm:gap-8 min-[670px]:grid-cols-[1fr_,2fr]">
        <Image
          src={photo}
          alt="Photo of the author"
          className="float-left w-3/5 min-w-[300px] rounded-2xl min-[670px]:w-full"
        />
        <div>
          <p className="mb-4 text-sm md:text-base">
            Я фронтенд-разработчик самоучка из Санкт-Петербурга. Разработкой
            увлекся в 2020 году, а затем окончил курс на Яндекс.Практикум, где
            получил фундаментальные знания и навыки в веб-технологиях.
          </p>
          <p className="mb-4 text-sm md:text-base">
            Веб-разработка стала моим хобби, и я принял решение продолжить свое
            развитие самостоятельно. Я старательно следую за новыми технологиями
            и фреймворками, чтобы быть в курсе последних тенденций в
            веб-разработке. Я нацелен на решение сложных задач и готов работать
            в команде с другими разработчиками. Сейчас я ищу возможность начать
            свою карьеру в веб-разработке и продолжать профессиональный рост.
          </p>
        </div>
      </section>

      <section className="flex w-full flex-wrap items-center justify-between">
        <Heading2>скилы</Heading2>
        <ul className="mt-12 flex flex-wrap items-start gap-4">
          <Skill header="Языки" skills={["JavaScript", "TypeScript"]} />
          <Skill
            header="Библиотеки"
            skills={["React", "ReactRouter", "Redux", "Axios"]}
          />
          <Skill header="Фреймворки" skills={["Next", "Express"]} />
          <Skill header="Базы данных" skills={["MongoDB"]} />
          <Skill header="Инструменты" skills={["VSCode", "Figma", "Git"]} />
          <Skill header="Остальное" skills={["HTML", "CSS"]} />
        </ul>
      </section>

      <section className="flex w-full flex-wrap items-center justify-between">
        <Heading2>факты-обо-мне</Heading2>
        <ul className="mt-12 flex flex-wrap items-start gap-4">
          <li className="rounded-xl border border-third-color p-2">
            Я очень люблю дождь
          </li>
          <li className="rounded-xl border border-third-color p-2">
            Мой любимый фильм это Терминатор
          </li>
          <li className="rounded-xl border border-third-color p-2">
            Я болею за футбольный клуб Реал Мадрид
          </li>
          <li className="rounded-xl border border-third-color p-2">
            Я никогда не курил
          </li>
          <li className="rounded-xl border border-third-color p-2">
            Я люблю поиграть в X-Box
          </li>
          <li className="rounded-xl border border-third-color p-2">
            Любимые книги - трилогия{" "}
            <Link
              className="underline"
              target="_blank"
              href={
                "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D1%8C_%D0%BE_%D0%BF%D1%80%D0%BE%D1%88%D0%BB%D0%BE%D0%BC_%D0%97%D0%B5%D0%BC%D0%BB%D0%B8"
              }
            >
              «Память о прошлом Земли»
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
