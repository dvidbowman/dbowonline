import Image from "next/image";
import Logo from "../../../../public/Logo.jpg";
import Link from "next/link";
import IconMenu from "~/icons/IconMenu";
import IconClose from "~/icons/IconClose";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const navMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  return (
    <nav className="bg-gray mx-10 h-24 w-full md:mx-20">
      <div className="flex h-full w-full items-center justify-between px-4 md:px-[vw]">
        <div className="flex h-full w-1/3 items-center">
          <Link href="/">
            <h1 className="px-4 text-[2rem] font-bold tracking-tight text-zinc-800">
              david<span className="text-blue-300 hover:text-zinc-800">.</span>
            </h1>
          </Link>
        </div>

        <div className="w-items-center h-full w-2/3 justify-end text-xl text-zinc-800 sm:hidden md:flex">
          <ul className="hidden items-center sm:flex">
            <Link href="/">
              <li className="border-b-blue-300 px-4 hover:border-b-2">home</li>
            </Link>
            <Link href="/aboutme">
              <li className="border-b-blue-300 px-4 hover:border-b-2">
                about me
              </li>
            </Link>
            <Link href="/projects">
              <li className="border-b-blue-300 px-4 hover:border-b-2">
                projects
              </li>
            </Link>
            <Link href="/cv">
              <li className="border-b-blue-300 px-4 hover:border-b-2">cv</li>
            </Link>
          </ul>
        </div>

        <div
          onClick={navMenu}
          className="cursor-pointer pl-24 text-zinc-800 hover:text-blue-300 md:hidden"
        >
          <IconMenu size={32} />
        </div>
      </div>

      <div
        className={
          navMenuOpen
            ? "fixed left-0 top-24 h-screen w-full bg-[#dbdbdb] bg-scroll px-14 pt-8 duration-300 ease-in md:hidden"
            : "fixed left-[-100%] top-24 w-full px-14 pt-8 duration-300 ease-in"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            onClick={navMenu}
            className="cursor-pointer text-zinc-800 hover:text-blue-300"
          >
            <IconClose size={32} />
          </div>
        </div>
        {/*NavMenu contents */}
        <div className="flex-col text-4xl">
          <ul>
            <Link href="/">
              <li
                onClick={() => setNavMenuOpen(false)}
                className="cursor-pointer border-b-blue-300 px-4 py-4 hover:border-b-2"
              >
                home
              </li>
            </Link>
            <Link href="/aboutme">
              <li
                onClick={() => setNavMenuOpen(false)}
                className="cursor-pointer border-b-blue-300 px-4 py-4 hover:border-b-2"
              >
                about me
              </li>
            </Link>
            <Link href="/projects">
              <li
                onClick={() => setNavMenuOpen(false)}
                className="cursor-pointer border-b-blue-300 px-4 py-4 hover:border-b-2"
              >
                projects
              </li>
            </Link>
            <Link href="/cv">
              <li
                onClick={() => setNavMenuOpen(false)}
                className="cursor-pointer border-b-blue-300 px-4 py-4 hover:border-b-2"
              >
                cv
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
