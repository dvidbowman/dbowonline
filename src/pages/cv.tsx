import { type NextPage } from "next";
import Head from "next/head";
import HeadingSection from "~/components/content/HeadingSection";

const MyCV: NextPage = () => {
  return (
    <>
      <Head>
        <title>cv - david.</title>
      </Head>
      <main>
        <HeadingSection pageHeading="cv" />
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
                  employment in tech.
                </p>
              </div>
            </div>

            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Work Experience
                </h1>
                <p className="mb-2 pt-2 font-semibold">
                  2024 - Present | Purchasing Trainee / Data Analyst | Beggs &
                  Partners
                </p>

                <ul className="mb-3 ml-6 list-outside list-disc marker:text-blue-300 md:ml-12">
                  <li>
                    Interpreted data on sales to ensure proper stock is kept for
                    thousands of products across 13 different branches in
                    Northern Ireland and England as part of a small team
                  </li>
                  <li>
                    Handled communication between suppliers and sales
                    representatives to make sure orders for customers can be
                    fulfilled correctly and on time
                  </li>
                  <li>
                    Collection, sorting, and analysis of product-related data in
                    Excel to be used to make decisions on stocked/ sold items
                  </li>
                </ul>

                <p className="mb-3 pt-2 font-semibold">
                  In April 2025 I was temporarily moved to assist the product
                  management team full-time, which meant undertaking more
                  technically-focused responsibilities:
                </p>

                <ul className="ml-6 list-outside list-disc marker:text-blue-300 md:ml-12">
                  <li>
                    Creation, updating, and testing of new product codes to suit
                    individual suppliers’ pricing structures and price increases
                  </li>
                  <li>
                    Setting up new supplier accounts according to our agreed
                    terms to accurately feed data for sales reports
                  </li>
                  <li>
                    Performing large-scale system imports to streamline
                    functions like the product search with the help of AI,
                    reducing friction for the sales and stores teams.
                  </li>
                </ul>
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
                  <span className="pt-2 font-semibold">Applications:</span>{" "}
                  Microsoft Visual Studio 2012/2016, Visual Studio Code,
                  Eclipse, Android Studio, MATLAB, Intact iQ
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
                  Development of my time management skills have drastically
                  improved in recent years, both through completion of my
                  degree, and through my reactive role in full-time employment
                </p>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Problem Solving:</span>{" "}
                  Completing start-to-finish projects were the best
                  opportunities to build upon my problem-solving skills,
                  especially under time-pressure. Tackling a wide range of
                  problems in different technologies has allowed me to refine a
                  personal way of approaching roadblocks and how to get around
                  them
                </p>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Communication:</span>{" "}
                  Communicating my opinions, ideas or difficulties to other
                  members of my team has improved through the very group-based
                  nature of my education and employment.
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
