import Link from "next/link";

type Props = {
  open: boolean;
};

export default function HeaderLinks({ open }: Props) {
  return (
    <div
      className={`${
        open
          ? "visible translate-y-0 opacity-100 transition-all duration-1000"
          : "invisible -translate-y-36 opacity-0"
      } mr-auto flex flex-col gap-8 xsPlus:visible xsPlus:right-0 xsPlus:ml-auto xsPlus:mr-0 xsPlus:mt-0 xsPlus:translate-y-0 xsPlus:flex-row xsPlus:opacity-100`}
    >
      <Link
        href="/"
        className="font-heading font-semibold before:text-orange-500 before:content-['#']"
      >
        главная
      </Link>
      <Link
        href="/projects"
        className="font-heading font-semibold before:text-orange-500 before:content-['#']"
      >
        проекты
      </Link>
      <Link
        href="/about-me"
        className="font-heading font-semibold before:text-orange-500 before:content-['#']"
      >
        о-себе
      </Link>
    </div>
  );
}
