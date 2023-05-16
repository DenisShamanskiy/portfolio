import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import photo from "public/photo-hero.jpg";
import Link from "next/link";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: "600",
});

export default function Hero() {
  return (
    <section className="grid w-full max-w-4xl grid-cols-1 items-center justify-between gap-4 xsPlus:grid-cols-2 sm:gap-8">
      <>
        <h1
          className={`${montserrat.className} text-2xl font-semibold sm:text-3xl `}
        >
          Денис Шаманский
          <br />
          <span className="text-orange-500">фронт-енд</span> разработчик
        </h1>
      </>
      <div className="flex flex-col justify-center">
        <Image src={photo} alt="Photo of the author" className="rounded-2xl" />
        <div className="m-auto p-2 text-center text-sm font-medium sm:text-base">
          Сейчас работаю над
          <Link
            href={"https://www.wordle-by-ds.ru/"}
            target="_blank"
            className="text-sm font-bold uppercase text-teal-500"
          >
            {" "}
            Wordle
          </Link>
        </div>
      </div>
    </section>
  );
}
