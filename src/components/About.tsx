import Image from "next/image";
import photo from "public/photo-about.jpg";
import Link from "next/link";
import Heading2 from "./Heading2";

export default function About() {
  return (
    <section className="grid w-full items-center justify-between gap-8 sm:grid-cols-2 md:grid-cols-[1fr,_2fr]">
      <Image
        src={photo}
        alt="Picture of the author"
        className="w-full max-w-[320px] rounded-2xl"
      />
      <div className="flex flex-col">
        <Heading2>о-себе</Heading2>
        <div className="mb-8 mt-12 flex flex-col gap-4 font-main">
          <p>Я фронтенд-разработчик из Санкт-Петербурга.</p>
          <p>
            Способен разрабатывать адаптивные веб-сайты, начиная с нуля, и
            превращать их в современные и удобные веб-интерфейсы. Моя цель -
            создавать красивые и функциональные сайты, которые помогут клиентам
            представить себя в интернете.
          </p>
        </div>
        <Link
          href={"/about-me"}
          className="ml-auto mt-8 flex border border-orange-500 px-4 py-2 text-right font-main transition-all hover:border-orange-200 hover:bg-orange-200 sm:mt-0 sm:inline-block"
        >
          {"Просмотреть все >>"}
        </Link>
      </div>
    </section>
  );
}
