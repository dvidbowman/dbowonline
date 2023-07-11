import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const MyProjects: NextPage = () => {
  return (
    <>
      <Head>
        <title>projects - david.</title>
      </Head>
      <main className="mx-12 flex min-h-screen flex-col md:mx-24">
        <section className="border-b border-zinc-800">
          <div className="pb-8 pt-0 md:py-16">
            <h1 className="text-center text-5xl font-bold text-zinc-800 md:text-left">
              my projects
            </h1>
          </div>
        </section>
        <section className="">
          <div className="my-4 px-16 pb-8 pt-16">
            <Link href="/projects/dissertation">
              <h1 className="pb-4 text-3xl text-zinc-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-300 md:text-4xl">
                dissertation
              </h1>
            </Link>

            <p className="text-xl font-light md:text-3xl">
              My final year project at university; an Android mobile application
              used to support the colorimetric analysis of "smart wound
              dressings" developed by the QUB chemistry department
            </p>
          </div>
          <div className="my-4 px-16 py-8">
            <Link href="/projects/webdev">
              <h1 className="pb-4 text-3xl text-zinc-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-300 md:text-4xl">
                this website
              </h1>
            </Link>
            <p className="text-xl font-light md:text-3xl">
              I created this website from scratch using Next.js and Tailwind
              CSS, written in TypeScript
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyProjects;
