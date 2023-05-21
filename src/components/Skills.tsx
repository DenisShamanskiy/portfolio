import Heading2 from "./Heading2";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section className="flex w-full flex-wrap items-center justify-between gap-8">
      <Heading2>скилы</Heading2>
      <ul className="mt-12 flex flex-wrap items-start gap-4">
        <Skill header="Языки" skills={["JavaScript", "TypeScript"]} />
        <Skill
          header="Библиотеки"
          skills={["React", "ReactRouter", "Redux", "Axios"]}
        />
        <Skill header="Фреймворки" skills={["Next", "Express"]} />
        <Skill header="Базы данных" skills={["MongoDB"]} />
      </ul>
    </section>
  );
}
