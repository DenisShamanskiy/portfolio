import { Montserrat_Alternates } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import telegram from "public/telegram.svg";
import github from "public/github.svg";
import linkedin from "public/linkedin.svg";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: "600",
});

export default function Footer() {
  return (
    <footer className="mx-auto mb-4 mt-28 w-full min-w-[360px] border-t border-first-color px-8 pt-8">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 flex justify-between gap-8">
          <div className="footer__info">
            <p className="mb-4">Денис Шаманский</p>
            <p>Фронтенд разработчик</p>
          </div>
          <div className="footer__media">
            <div
              className={`${montserrat.className} mb-4 text-2xl font-semibold`}
            >
              Медиа
            </div>
            <div className="flex gap-2">
              <Link
                href={"https://t.me/Denis_Shamanskiy"}
                className="mt-2 flex items-center gap-2"
              >
                <Image
                  src={telegram}
                  alt="Picture of the author"
                  className="w-6"
                />
              </Link>
              <Link
                href={"https://github.com/DenisShamanskiy"}
                className="mt-2 flex items-center gap-2"
              >
                <Image
                  src={github}
                  alt="Picture of the author"
                  className="w-6"
                />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D1%88%D0%B0%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-832b18b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBsVOoSPMQjOlvS3tZua7Cg%3D%3D"
                }
                className="mt-2 flex items-center gap-2"
              >
                <Image
                  src={linkedin}
                  alt="Picture of the author"
                  className="w-6"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">© Все права защищены 2023</div>
      </div>
    </footer>
  );
}
