import { Montserrat_Alternates } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: "600",
});

export default function Header() {
  return (
    <header className="top-0 mx-auto flex w-full min-w-[360px] max-w-5xl px-4 pb-2 pt-8 lg:px-0">
      <div className="ml-auto flex gap-8">
        <Link
          href="/"
          className={`${montserrat.className} font-semibold before:text-orange-500 before:content-['#']`}
        >
          главная
        </Link>
        <Link
          href="/projects"
          className={`${montserrat.className} font-semibold before:text-orange-500 before:content-['#']`}
        >
          проекты
        </Link>
        <Link
          href="/"
          className={`${montserrat.className} font-semibold before:text-orange-500 before:content-['#']`}
        >
          о-себе
        </Link>
      </div>
    </header>
  );
}
