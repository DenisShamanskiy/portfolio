import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

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
    <li className="overflow-hidden rounded-xl border border-first-color font-main text-sm sm:text-base">
      <Image
        src={image}
        alt={`Picture for ${title} project`}
        className="aspect-video"
      />
      <ul className="flex flex-wrap gap-x-2 gap-y-4 border-b border-first-color p-2">
        <li>{technologies}</li>
      </ul>
      <div className="flex flex-col p-4">
        <h3 className="inline-block font-heading text-xl font-medium sm:text-2xl">
          {title}
        </h3>
        <p className="my-4 inline-block">{description}</p>
        <div className="flex flex-wrap gap-2">{children}</div>
      </div>
    </li>
  );
}
