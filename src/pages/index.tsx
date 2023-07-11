import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/profile.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>davidbowman.dev</title>
      </Head>
      <main className="mx-12 items-center justify-center md:mx-20">
        <section className="grid w-full grid-flow-row-dense items-center pb-12 pt-8 sm:grid-cols-1 md:grid-cols-3">
          <div>
            <Image
              className="max-h-72 object-cover md:min-h-[40vw]"
              src={profilePicture}
              alt="Picture of David"
            />
          </div>
          <div className="mx-4 overflow-hidden md:col-span-2 md:pl-[10vw]">
            <h1 className="pb-2 pt-8 text-center text-[30px] font-semibold md:text-left md:text-[3vmax]">
              hi, i'm david bowman
            </h1>
            <h1 className="py-2 text-center text-[30px] font-light md:text-left md:text-[2.5vmax]">
              a software developer from
              <br />
              <p className="underline decoration-blue-300 decoration-2 underline-offset-4">
                belfast, northern ireland
              </p>
            </h1>
          </div>
        </section>

        <section className="pb-12">
          <div className="bg-[url('/sky5.jpg')]">
            <div className="h-full w-full items-center justify-center">
              <div className="grid grid-flow-row-dense grid-cols-1 px-10 py-6 md:grid-cols-2">
                <p className="pb-4 text-left text-[18px] font-normal text-slight-off-white md:pb-0">
                  I first started learning how to code in school at the age of
                  14, and have been learning every year since. I've written in a
                  lot of different languages, including{" "}
                  <strong>Java, JavaScript, C#, PHP</strong> and{" "}
                  <strong>MySQL</strong>. Throughout my education I've had the
                  chance to do all sorts, from{" "}
                  <strong>
                    websites (like this one!), machine learning, mobile apps{" "}
                  </strong>
                  and even some <strong>computer vision</strong>.
                </p>
                <p className="text-left text-[18px] font-normal text-slight-off-white md:pl-6">
                  I completed my <strong>BSc in Computer Science</strong> at{" "}
                  <strong>Queen's University Belfast</strong> in 2022, and am
                  now looking for work in software development. I haven't locked
                  myself into any specific sector, and I'm always trying to keep
                  a <strong>learning-first mindset</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="w-full justify-center text-left">
            <h1 className="text-[30px] text-zinc-800 lg:text-[2.5vw]">
              some of my projects<span className="text-blue-300">:</span>
            </h1>
          </div>

          <div className="w-full py-12">
            <div className="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2">
              {/*Column 1*/}
              <div className="px-4 pb-4">
                <Link href="/projects/dissertation">
                  <div className="bg-zinc-800 px-12 py-4 hover:bg-zinc-700 md:pt-8 lg:h-64">
                    <h1 className="text-left text-2xl font-medium text-slight-off-white underline decoration-blue-300 underline-offset-4">
                      dissertation
                    </h1>
                    <p className="pt-3 text-slight-off-white">
                      My final year project at university; an Android mobile
                      application written in Java, using OpenCV for scientific
                      analysis of images
                    </p>
                  </div>
                </Link>
              </div>

              {/*Column 2*/}
              <div className="px-4 pb-4">
                <Link href="/projects/webdev">
                  <div className="bg-zinc-800 px-12 py-4 hover:bg-zinc-700 md:pt-8 lg:h-64">
                    <h1 className="text-left text-2xl font-medium text-slight-off-white underline decoration-blue-300 underline-offset-4">
                      this website
                    </h1>
                    <p className="pt-3 text-slight-off-white">
                      I built this website myself using Next.js, Tailwind CSS
                      and TypeScript.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
