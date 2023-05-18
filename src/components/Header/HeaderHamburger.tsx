type Props = {
  setOpen: (open: boolean) => void;
  open: boolean;
};

export default function HeaderHamburger({ setOpen, open }: Props) {
  return (
    <button
      className="relative top-0 ml-auto block h-[50px] w-[50px] xsPlus:hidden"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4 ${
          open && "ring-4"
        }`}
      >
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={`h-[2px] w-7 origin-left transform bg-orange-500 transition-all duration-300 ${
              open && "translate-x-10"
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 transform rounded bg-orange-500 transition-all delay-75 duration-300 ${
              open && "translate-x-10"
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 origin-left transform bg-orange-500 transition-all delay-150 duration-300 ${
              open && "translate-x-10"
            }`}
          ></div>

          <div
            className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
              open && "w-12 translate-x-0"
            }`}
          >
            <div
              className={`absolute h-[2px] w-5 rotate-0 transform bg-orange-500 transition-all delay-300 duration-500 ${
                open && "rotate-45"
              }`}
            ></div>
            <div
              className={`absolute h-[2px] w-5 -rotate-0 transform bg-orange-500 transition-all delay-300 duration-500 ${
                open && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
}
