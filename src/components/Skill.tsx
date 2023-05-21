type PropsSkill = {
  header: string;
  skills: string[];
};

export default function Skill({ header, skills }: PropsSkill) {
  return (
    <li className="mb-4 inline-block min-w-[200px] max-w-[300px] shrink grow basis-0 rounded-xl border border-third-color">
      <div className="border-b border-third-color p-2 font-heading font-bold">
        {header}
      </div>

      <ul className="flex flex-wrap items-start justify-start gap-2 p-2 font-main">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </li>
  );
}
