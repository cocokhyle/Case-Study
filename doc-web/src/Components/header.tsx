import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" w-full ">
      <div className="flex flex-col  ">
        <div className="flex flex-row justify-between w-full p-8">
          <Link href="/">
            <Image
              src="/legal_loggers_logo_wt.png"
              width={100}
              height={0}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
          <div className="flex flex-row gap-10 items-center justify-center font-semibold">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link
              href="/documentation"
              className="bg-blue-600 pt-2 pb-2 pr-5 pl-5 rounded-lg text-white hover:bg-blue-800"
            >
              Get Started
            </Link>
            {/* <input type="text" placeholder="Search" className="rounded-md p-2 bg-slate-200" /> */}
          </div>
        </div>
        <div className="border-solid border-[1px] border-slate-100 w-full"></div>
      </div>
    </header>
  );
}
