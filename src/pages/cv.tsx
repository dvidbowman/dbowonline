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
                  Computer Science graduate with a wide array of experience
                  spanning multiple different programming languages,
                  methodologies and technologies. More recently developing an
                  interest in ecological conservation of our local areas and
                  wildlife in NI.
                </p>
              </div>
            </div>

            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Education
                </h1>
                <p className="pt-2 font-semibold">
                  2026 - Present | Queen's University Belfast
                </p>
                <p className="pb-2">
                  MSc in Ecological Management and Conservation Biology
                </p>
                <p className="pt-2 font-semibold">
                  2019 - 2022 | Queen's University Belfast
                </p>
                <p className="pb-2">BSc in Computer Science, 2:1 Grade</p>
              </div>
            </div>

            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Work Experience
                </h1>
                <p className="mb-2 pt-2 font-semibold">
                  May 2024 - Oct 2025 | Purchasing / Data Analyst | Beggs &
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
                    Excel to be used to make decisions on stocked/sold items
                  </li>
                </ul>

                <p className="mb-3 pt-2 font-semibold">
                  In April 2025 I was temporarily moved to assist the product
                  management team full-time, undertaking more
                  technically-focused responsibilities:
                </p>

                <ul className="ml-6 list-outside list-disc marker:text-blue-300 md:ml-12">
                  <li>
                    Creation, updating, and testing of new product codes to suit
                    individual suppliers’ pricing structures and price
                    increases/offers
                  </li>
                  <li>
                    Setting up new supplier accounts according to our agreed
                    terms to accurately feed data for sales reports
                  </li>
                  <li>
                    Performing large-scale system imports to streamline
                    functions like the product search with the help of AI,
                    reducing friction for the sales and stores teams
                  </li>
                </ul>
              </div>
            </div>

            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Work Skills
                </h1>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Time Management:</span>{" "}
                  Developed excellent time management skills throughout my
                  education and reactive role in full-time employment, including
                  working under time pressure plus the ability to prioritise
                  when faced with multiple tasks
                </p>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Communication:</span>{" "}
                  Improved communication of my ideas, opinions and difficulties
                  to team members over years of group-focused projects in
                  education and professional work. Spent entire employment
                  working in a team, and was highly dependent on clear
                  communication with co-workers and suppliers, speaking with new
                  people every week
                </p>
                <p className="pt-2">
                  <span className="pt-2 font-semibold">Problem Solving:</span>{" "}
                  Wide scope of education has allowed me to develop great
                  problem-solving skills in a wide array of both technical and
                  interpersonal challenges
                </p>
              </div>
            </div>

            <div className="m-auto mb-4 w-[90%] bg-[#f5f5f5] dark:bg-zinc-800 md:w-[70%]">
              <div className="h-full w-full px-10 py-8">
                <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-4 md:text-3xl">
                  Volunteering
                </h1>
                <p className="pt-2 font-semibold">
                  RSPB - Practical Work Off Reserve
                </p>
                <p className="pt-2">
                  Began volunteering with the RSPB Peatland Team, helping to
                  restore peatlands at their sites in the Antrim Hills.
                  Practical fieldwork includes brash/scrub control, data
                  collection and site feature identification. This has also
                  allowed me to develop my species ID skills.
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
          </div>
        </section>
      </main>
    </>
  );
};

export default MyCV;
