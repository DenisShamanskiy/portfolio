import HeaderLink from "./HeaderLink";

type Props = {
  setOpen: (open: boolean) => void;
  open: boolean;
};

export default function HeaderLinks({ setOpen, open }: Props) {
  return (
    <nav
      className={`${
        open
          ? "visible translate-x-0 transition-all duration-500"
          : "invisible -translate-x-full transition-all duration-500"
      } absolute top-16 z-50 flex w-full rounded-b-xl border-t border-orange-500 bg-[#eeeeee] shadow-md xsPlus:visible xsPlus:static xsPlus:top-0 xsPlus:mr-4 xsPlus:w-auto xsPlus:translate-x-0 xsPlus:border-none xsPlus:shadow-none`}
    >
      <ul className="m-4 flex w-full flex-col gap-4 xsPlus:m-0 xsPlus:flex-row xsPlus:gap-8">
        <HeaderLink setOpen={setOpen} href="/" title="главная" />
        <HeaderLink setOpen={setOpen} href="/projects" title="проекты" />
        <HeaderLink setOpen={setOpen} href="/about-me" title="о-себе" />
      </ul>
    </nav>
  );
}
