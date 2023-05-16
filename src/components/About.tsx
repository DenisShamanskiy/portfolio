import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import photo from "public/photo-about.jpg";
import Link from "next/link";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export default function About() {
  return (
    <section className="grid w-full items-center justify-between gap-8 sm:grid-cols-2 md:grid-cols-[1fr,_2fr]">
      <Image
        src={photo}
        alt="Picture of the author"
        className="w-full max-w-[320px] rounded-2xl"
      />
      <div className="flex flex-col">
        <h2
          className={`${montserrat.className} after:content[""] relative inline-block max-w-fit text-3xl font-medium after:absolute after:-right-4 after:top-1/2 after:z-50 after:block after:h-[1px] after:w-[10vw] after:-translate-y-1/2 after:translate-x-full after:bg-third-color`}
        >
          #о-себе
        </h2>
        <div className="mb-8 mt-12 flex flex-col gap-4">
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
          className="ml-auto inline-block border border-orange-500 px-4 py-2 text-right"
        >
          {"Просмотреть все >>"}
        </Link>
      </div>
    </section>
  );
}
