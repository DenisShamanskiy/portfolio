import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import email from "public/email.svg";
import Link from "next/link";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export default function Contacts() {
  return (
    <section className="w-full">
      <h2
        className={`${montserrat.className} after:content[""] relative inline-block text-3xl font-medium after:absolute after:-right-4 after:top-1/2 after:z-50 after:block after:h-[1px] after:w-[10vw] after:-translate-y-1/2 after:translate-x-full after:bg-third-color`}
      >
        #контакты
      </h2>
      <div className="mt-12 flex flex-wrap items-start justify-between gap-8">
        <p className=" max-w-xl">
          Если у вас есть вопрос, не стесняйтесь обращаться ко мне. Меня также
          интересуют возможности фриланса.
        </p>
        <div className="border border-third-color p-4">
          <h3 className="font-semibold">Пишите мне сюда</h3>

          <Link
            href={"mailto:d.g.shaman@yandex.ru"}
            className="mt-2 flex items-center gap-2"
          >
            <Image src={email} alt="Picture of the author" className="w-6" />
            d.g.shaman@yandex.ru
          </Link>
        </div>
      </div>
    </section>
  );
}
