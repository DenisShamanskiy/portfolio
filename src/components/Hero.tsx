import Image from "next/image";
import photo from "public/photo-hero.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid w-full max-w-4xl grid-cols-1 items-center justify-between gap-4 xsPlus:grid-cols-2 sm:gap-8">
      <>
        <h1 className="font-heading text-2xl font-semibold sm:text-3xl">
          Денис Шаманский
          <br />
          <span className="text-orange-500">фронт-енд</span> разработчик
        </h1>
      </>
      <div className="flex flex-col justify-center">
        <Image src={photo} alt="Photo of the author" className="rounded-2xl" />
        <div className="m-auto p-2 text-center font-main text-base font-medium sm:text-lg">
          Сейчас работаю над{" >>"}
          <Link
            href={"https://www.wordle-by-ds.ru/"}
            target="_blank"
            className="rounded-bl-xl rounded-tr-xl bg-orange-500 px-3 py-1 font-heading text-lg tracking-wider text-[#eee] transition-all duration-300 hover:bg-transparent hover:text-orange-500 sm:text-xl"
          >
            wordle
          </Link>
          {"<<"}
        </div>
      </div>
    </section>
  );
}
