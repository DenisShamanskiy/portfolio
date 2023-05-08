import { Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export default function Skills() {
  return (
    <section className="flex w-11/12 flex-wrap items-center justify-between gap-8">
      <h2
        className={`${montserrat.className} after:content[""] relative inline-block text-3xl font-medium after:absolute after:-right-4 after:top-1/2 after:z-50 after:block after:h-[1px] after:w-[10vw] after:-translate-y-1/2 after:translate-x-full after:bg-third-color`}
      >
        #скилы
      </h2>
      <div className="flex w-full grid-cols-4 flex-wrap gap-4">
        <div className="mb-4 rounded-xl border border-third-color">
          <div
            className={`${montserrat.className} border-b border-third-color p-2 font-bold`}
          >
            Языки
          </div>
          <ul className="flex items-start justify-start gap-2 p-2">
            <li className="skill-block__skill">JavaScript</li>
            <li className="skill-block__skill">TypeScript</li>
          </ul>
        </div>

        <div className="mb-4 rounded-xl border border-third-color">
          <div
            className={`${montserrat.className} border-b border-third-color p-2 font-bold`}
          >
            Библиотеки
          </div>
          <ul className="flex items-start justify-start gap-2 p-2">
            <li className="skill-block__skill">React</li>
            <li className="skill-block__skill">Next</li>
            <li className="skill-block__skill">Express</li>
          </ul>
        </div>

        <div className="mb-4 rounded-xl border border-third-color">
          <div
            className={`${montserrat.className} border-b border-third-color p-2 font-bold`}
          >
            Базы данных
          </div>
          <ul className="flex items-start justify-start gap-2 p-2">
            <li className="skill-block__skill">SQLite</li>
            <li className="skill-block__skill">PostgreSQL</li>
          </ul>
        </div>

        <div className="mb-4 rounded-xl border border-third-color">
          <div
            className={`${montserrat.className} border-b border-third-color p-2 font-bold`}
          >
            Остальное
          </div>
          <ul className="flex items-start justify-start gap-2 p-2">
            <li className="skill-block__skill">HTML</li>
            <li className="skill-block__skill">CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
