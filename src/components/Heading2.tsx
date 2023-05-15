import { Montserrat_Alternates } from "next/font/google";
import { ReactNode } from "react";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: ["700"],
});

type PropsHeading2 = {
  children: ReactNode;
};

export default function Heading2({ children }: PropsHeading2) {
  return (
    <h2
      className={`${montserrat.className} after:content[""] relative inline-block text-2xl font-medium before:text-orange-500 before:content-['#'] after:absolute after:-right-4 after:top-1/2 after:z-50 after:block after:h-[1px] after:w-[10vw] after:-translate-y-1/2 after:translate-x-full after:bg-orange-500 sm:text-3xl`}
    >
      {children}
    </h2>
  );
}
