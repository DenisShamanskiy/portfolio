export default function Quote() {
  return (
    <figure className="relative m-0 w-full rounded-2xl border border-third-color font-main before:absolute before:-top-4 before:left-4 before:block before:bg-[#eeeeee] before:text-6xl before:font-bold before:content-['\201c'] after:absolute after:-bottom-10 after:right-4 after:block after:bg-[#eeeeee] after:text-6xl after:font-bold after:content-['\201d'] ">
      <blockquote className="relative z-20 p-4 text-center text-xl font-medium sm:p-8 sm:text-2xl">
        Помимо нашей способности к суждениям мы обладаем еще и нашим мнением о
        нашей способности судить
      </blockquote>
      <figcaption className="absolute right-1 z-10 p-2 text-base">
        Фридрих Ницше
      </figcaption>
    </figure>
  );
}
