import Image from "next/image";
import email from "public/email.svg";
import Link from "next/link";
import Heading2 from "./Heading2";

export default function Contacts() {
  return (
    <section className="w-full">
      <Heading2>контакты</Heading2>
      <div className="mt-12 flex flex-wrap items-start justify-between gap-8 font-main">
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
