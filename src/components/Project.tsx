import { ReactNode } from "react";
import { Montserrat_Alternates } from "next/font/google";
import Image, { StaticImageData } from "next/image";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: ["700"],
});

type PropsProject = {
  image: StaticImageData;
  technologies: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function Project({
  image,
  technologies,
  title,
  description,
  children,
}: PropsProject) {
  return (
    <li className="overflow-hidden rounded-xl border border-third-color text-sm sm:text-base">
      <Image
        src={image}
        alt={`Picture for ${title} project`}
        className="aspect-video"
      />
      <ul className="flex flex-wrap gap-x-2 gap-y-4 border-b border-third-color p-2">
        <li className="project__tech">{technologies}</li>
      </ul>
      <div className="flex flex-col p-4">
        <h3
          className={`${montserrat.className} font-medium" inline-block text-xl sm:text-2xl`}
        >
          {title}
        </h3>
        <p className="my-4 inline-block">{description}</p>
        <div className="flex flex-wrap gap-2">{children}</div>
      </div>
    </li>
  );
}
