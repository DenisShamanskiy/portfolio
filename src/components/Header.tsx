import { Montserrat_Alternates } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: "600",
});

export default function Header() {
  return (
    <header className="mx-auto flex h-16 w-11/12 min-w-[360px] max-w-5xl pt-8">
      <div className="ml-auto flex gap-8 pr-6">
        <Link
          href="/"
          className={`${montserrat.className} font-semibold before:content-['#']`}
        >
          главная
        </Link>
        <Link
          href="/"
          className={`${montserrat.className} font-semibold before:content-['#']`}
        >
          проекты
        </Link>
        <Link
          href="/"
          className={`${montserrat.className} font-semibold before:content-['#']`}
        >
          о-себе
        </Link>
      </div>
    </header>
  );
}
