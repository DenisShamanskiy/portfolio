import { Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: ["700"],
});

type PropsSkill = {
  header: string;
  skills: string[];
};

export default function Skill({ header, skills }: PropsSkill) {
  return (
    <li className="mb-4 inline-block min-w-[200px] max-w-[300px] shrink grow basis-0 rounded-xl border border-third-color">
      <div
        className={`${montserrat.className} border-b border-third-color p-2 font-bold`}
      >
        {header}
      </div>

      <ul className="flex flex-wrap items-start justify-start gap-2 p-2">
        {skills.map((skill, index) => (
          <li key={index} className="skill-block__skill">
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
}
