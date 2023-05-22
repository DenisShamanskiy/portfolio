import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type Props = {
  setOpen: (open: boolean) => void;
  href: Url;
  title: string;
};

export default function HeaderLink({ setOpen, href, title }: Props) {
  return (
    <li>
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className="font-semibold transition-all duration-300 before:text-orange-500 before:content-['#'] hover:text-orange-500"
      >
        {title}
      </Link>
    </li>
  );
}
