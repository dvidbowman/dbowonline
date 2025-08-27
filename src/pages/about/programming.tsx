import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeadingSection from "../../components/content/HeadingSection";

import coursework from "../../../public/alevelcourseworksc.png";

const Programming: NextPage = () => {
  return (
    <>
      <Head>
        <title>programming - david.</title>
      </Head>
      <main>
        <HeadingSection
          layeredHeading={true}
          pageHeading="about me"
          pageSubheading="programming"
        />
        <section className="mt-10 animate-fade-in-down md:mt-16">
          <div className="text-xl font-light md:text-2xl">
            <h1 className="text-3xl font-bold md:text-4xl">programming</h1>
            <div className="py-12 md:mx-4">
              <p className="pb-4">
                I first started learning about the world of programming at a
                young age in secondary school - the subject had only just been
                introduced to our school, so we were the first year to be taught
                it. I remember we started learning with Microsoft VBA and Logo
                to create little quizzes and drawings.
              </p>
              <p className="pb-8">
                A few years later and I was learning the basics of
                object-oriented programming at A-Levels using C# for Windows
                Forms, with MySQL for some data storage and querying. These
                years really cemented my interest in software, and I knew I
                wanted to continue education in the field, but not{" "}
                <span className="italic">exactly</span> where I wanted to end
                up...
              </p>
              <div className="flex flex-col items-center pb-8 lg:flex-row">
                <Image
                  src={coursework}
                  alt="coursework"
                  width="506"
                  height="380"
                  className="md:mx-[10%]"
                  placeholder="blur"
                />
                <p className="pt-4 text-center text-xl italic md:text-left">
                  one of the forms in my A-Level Coursework - can you tell I
                  like blue and grey?
                </p>
              </div>
              <p className="pb-4">
                Two years pass, school has come and gone, and I moved on to
                pursue a degree in Computer Science. The course covered a wide
                range of topics and technologies; I found myself enjoying a lot
                of it, despite the move to online-only classes in early 2020. I
                also learned a lot about what I{" "}
                <span className="italic">don't</span> like doing (looking at
                you, theory of computation). I really just loved the
                satisfaction of working through problems while writing some
                code.
              </p>
              <p className="pb-8">
                I've tried to stay on top of my skills since leaving uni and
                moving to full-time employment, and I suppose this website is a
                direct result of that. My favourite thing is that I find I'm not
                often doing the same thing twice; there's always a new thing to
                create or problem to solve, even if that new thing is the most
                simple web-based text editor you've ever seen in your life.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Programming;
