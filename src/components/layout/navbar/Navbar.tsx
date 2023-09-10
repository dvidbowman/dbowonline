import Link from "next/link";
import IconMenu from "~/icons/IconMenu";
import IconClose from "~/icons/IconClose";
import IconLightMode from "~/icons/IconLightMode";
import IconDarkMode from "~/icons/IconDarkMode";
import ThemeSwitch from "~/components/ThemeSwitch";
import { useState, useEffect, useRef } from "react";

export const Navbar: React.FC = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const navMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  const [aboutDropOpen, setAboutDropOpen] = useState(false);
  const aboutDrop = () => {
    setAboutDropOpen(!aboutDropOpen);
  };

  return (
    <nav className="bg-gray mx-10 h-24 w-full md:mx-20">
      <div className="flex h-full w-full items-center justify-between px-4 text-zinc-800 dark:text-slight-off-white md:px-[vw]">
        <div className="flex h-full w-1/3 items-center">
          <Link href="/" className="animate-fade-in-right">
            <h1 className="px-4 text-[2rem] font-bold tracking-tight">
              david
              <span className="text-blue-300 duration-150 ease-in-out hover:text-zinc-800 dark:hover:text-slight-off-white">
                .
              </span>
            </h1>
          </Link>
        </div>

        <div className="w-items-center h-full w-2/3 animate-fade-in-left justify-end text-xl sm:hidden md:flex">
          <ul className="hidden items-center sm:flex">
            <Link href="/">
              <li className="mx-4 border-b-blue-300 px-4 duration-[50ms] ease-out hover:scale-110 hover:border-b-2">
                home
              </li>
            </Link>
            <div
              className={
                aboutDropOpen
                  ? "scale-110 px-4 text-left duration-[50ms] ease-out"
                  : "border-l-zinc-800 px-4 text-left duration-[50ms] ease-out hover:scale-110"
              }
              onMouseEnter={aboutDrop}
              onMouseLeave={aboutDrop}
            >
              <button className="inline-flex w-full justify-center">
                about me
                <svg
                  className="h-7 w-7 text-blue-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              <div
                className={
                  aboutDropOpen
                    ? "absolute left-0 max-h-36 w-fit animate-fade-in-dropdown border-l-2 border-t-2 border-l-zinc-800 border-t-blue-300 bg-slight-off-white px-4 text-left dark:bg-zinc-900"
                    : "hidden"
                }
              >
                <ul className="font-light">
                  <li className="h-10 w-fit border-b-blue-300 py-2 duration-[50ms] ease-out hover:border-b-2">
                    <Link href="/about/programming">programming</Link>
                  </li>
                  <li className="h-10 w-fit border-b-blue-300 py-2 duration-[50ms] ease-out hover:border-b-2">
                    <Link href="/about/music">music</Link>
                  </li>
                  <li className="h-10 w-fit border-b-blue-300 py-2 duration-[50ms] ease-out hover:border-b-2">
                    <Link href="/about/outdoors">outdoors</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/projects">
              <li className="mx-4 border-b-blue-300 px-4 duration-[50ms] ease-out hover:scale-110 hover:border-b-2">
                projects
              </li>
            </Link>
            <Link href="/cv">
              <li className="border-b-blue-300 px-4 duration-[50ms] ease-out hover:scale-110 hover:border-b-2">
                cv
              </li>
            </Link>
            <div className="px-4 pt-3">
              <ThemeSwitch />
            </div>
          </ul>
        </div>

        <div
          onClick={navMenu}
          className="cursor-pointer text-zinc-800 hover:text-blue-300 dark:text-slight-off-white md:hidden"
        >
          <IconMenu size={32} />
        </div>
      </div>
      <div
        className={
          navMenuOpen
            ? "fixed left-0 top-0 h-screen w-[60%] bg-slight-off-white px-4 pt-8 duration-300 dark:bg-zinc-800 md:hidden"
            : "fixed left-[-100%] top-0 h-screen w-[60%] px-14 pt-8 duration-300"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            onClick={navMenu}
            className="animate-fade-in-right cursor-pointer pr-4 text-zinc-800 hover:text-blue-300 dark:text-slight-off-white"
          >
            <IconClose size={32} />
          </div>
        </div>
        {/*NavMenu contents */}
        <div className="mx-4 text-3xl">
          <ul>
            <li className="mx-4 h-14 w-fit cursor-pointer border-b-blue-300 pt-4 duration-[50ms] ease-out hover:scale-105 hover:border-b-2">
              <Link href="/" onClick={() => setNavMenuOpen(false)}>
                home
              </Link>
            </li>

            <li className="px-4 pt-6">
              about me <span className="text-blue-300">{">"} </span>
            </li>
            <ul>
              <li className="ml-8 h-14 w-fit cursor-pointer border-b-blue-300 pt-4 font-light duration-[50ms] ease-out hover:scale-105 hover:border-b-2">
                <Link
                  href="/about/programming"
                  onClick={() => setNavMenuOpen(false)}
                >
                  programming
                </Link>
              </li>

              <li className="ml-8 h-14 w-fit cursor-pointer border-b-blue-300 pt-4 font-light duration-[50ms] ease-out hover:scale-105 hover:border-b-2">
                <Link href="/about/music" onClick={() => setNavMenuOpen(false)}>
                  music
                </Link>
              </li>

              <li className="ml-8 h-14 w-fit cursor-pointer border-b-blue-300 pt-4 font-light duration-[50ms] ease-out hover:scale-105 hover:border-b-2">
                <Link
                  href="/about/outdoors"
                  onClick={() => setNavMenuOpen(false)}
                >
                  outdoors
                </Link>
              </li>
            </ul>

            <li className="mx-4 h-16 w-fit cursor-pointer border-b-blue-300 pt-6 duration-[50ms] ease-out hover:scale-105 hover:border-b-2">
              <Link href="/projects" onClick={() => setNavMenuOpen(false)}>
                projects
              </Link>
            </li>

            <li className="mx-4 h-16 w-fit cursor-pointer border-b-blue-300 pt-6 duration-[50ms] ease-out hover:scale-105 hover:border-b-2">
              <Link href="/cv" onClick={() => setNavMenuOpen(false)}>
                cv
              </Link>
            </li>

            <li className="pl-3 pt-8">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          navMenuOpen
            ? "fixed right-0 top-0 h-screen w-[40%] bg-zinc-800 opacity-60 transition-opacity delay-150 duration-[1200ms] md:hidden"
            : "fixed left-[100%] top-0 h-screen w-[40%] opacity-0"
        }
      />
    </nav>
  );
};
