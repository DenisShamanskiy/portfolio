import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

type PropsProjectLink = {
  href: Url;
  children: ReactNode;
};

export default function ProjectLink({ href, children }: PropsProjectLink) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-block max-w-fit rounded-lg border border-orange-500 p-2 font-heading transition-all hover:bg-orange-200"
    >
      {children}
    </Link>
  );
}
