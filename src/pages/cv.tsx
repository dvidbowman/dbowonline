import { type NextPage } from "next";
import Head from "next/head";

const MyCV: NextPage = () => {
  return (
    <>
      <Head>
        <title>cv - david.</title>
      </Head>
      <main className="mx-12 flex min-h-screen flex-col lg:mx-24">
        <section className="animate-title-fade-in border-b border-zinc-800 dark:border-slight-off-white">
          <div className="pb-8 pt-0 md:py-16">
            <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl">
              cv
            </h1>
          </div>
        </section>
        <section className="my-12 mt-10 animate-fade-in-down text-xl font-light md:mt-16 md:px-4 md:text-2xl">
          <div className="h-full w-full">
            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Profile
                </h1>
                <p className="pt-2">
                  Recent Computer Science graduate with a wide array of
                  experience spanning multiple different programming languages,
                  methodologies and technologies. Currently searching for
                  employment in software development.
                </p>
              </div>
            </div>

            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Education
                </h1>
                <p className="pt-2 font-semibold">
                  2019 - 2022 | Queen's University Belfast
                </p>
                <p className="pb-2">BSc in Computer Science, 2:1 Grade</p>

                <p className="pt-2 font-semibold">
                  2016 - 2019 | Grosvenor Grammar School
                </p>
                <p className="pb-2">
                  A-levels: Software Systems Development (B), German (B),
                  Biology (B)
                  <br />
                  AS-Levels: Software Systems Development (B), German (C),
                  Biology (C)
                </p>
              </div>
            </div>

            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Technical Skills
                </h1>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">
                    Development Languages:
                  </span>{" "}
                  C++, C#, Java, JavaScript, HTML, Python, MySQL, SQL, PHP
                </p>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">
                    Development Environments:
                  </span>{" "}
                  Microsoft Visual Studio 2012/2016, Visual Studio Code,
                  Eclipse, Android Studio, MATLAB
                </p>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Operating Systems:</span>{" "}
                  Windows 7/10, Minor experience with Linux
                </p>
              </div>
            </div>

            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Work Skills
                </h1>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Time Management:</span>{" "}
                  Development of time management skills came throughout my
                  education, completing work to many project deadlines in recent
                  years
                </p>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Problem Solving:</span>{" "}
                  Individual projects were the best opportunities to build upon
                  my problem-solving skills, especially under time-pressure.
                  Tackling a wide range of problems in different technologies
                  has allowed me to refine a personal way of approaching
                  roadblocks, and how to get around them
                </p>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Communication:</span>{" "}
                  Communicating my opinions, ideas or difficulties to other
                  members of my team has improved through undertaking many
                  different group projects. Around half of the projects while
                  pursuing my degree were team based, with consistently good
                  scores achieved in each
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyCV;
