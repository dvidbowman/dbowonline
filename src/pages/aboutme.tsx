import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import freeroamProject from "../../public/freeroamproject.png";
import profilePicture from "../../public/profile.jpg";
import coursework from "../../public/alevelcourseworksc.png";
import mournes from "../../public/mournes.jpg";
import davidMournes from "../../public/davidmournes.jpg";
import toubkalSummit from "../../public/toubkalsummit.jpg";
import atlasOne from "../../public/atlasone.png";
import atlasTwo from "../../public/atlastwo.png";

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>about - david.</title>
      </Head>
      <main className="mx-12 md:mx-24">
        <section className="animate-title-fade-in border-b border-zinc-800 dark:border-slight-off-white">
          <div className="pb-8 pt-0 md:py-16">
            <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl">
              about me
            </h1>
          </div>
        </section>
        <section className="mt-10 animate-fade-in-down md:mt-16">
          <div className="grid grid-flow-row-dense items-center sm:grid-cols-1 md:grid-cols-3">
            <div>
              <Image
                src={profilePicture}
                alt="Picture of David"
                className="h-64 object-cover md:min-h-[20vw] md:min-w-[30vw]"
              />
            </div>
          </div>
          <div className="py-12 text-center text-2xl font-light md:text-left md:text-4xl">
            <p className="pb-4">
              I'm a 22-year-old computer science graduate from Belfast, Northern
              Ireland
            </p>
            <p>
              I love learning new things, which extends to everything that I do
            </p>
          </div>
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
                />
                <p className="pt-4 text-center text-xl italic md:text-left">
                  one of the forms in my A-Level Coursework - can you tell I
                  like blue and grey?
                </p>
              </div>
              <p className="">
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
            </div>
          </div>
          <div className="text-xl font-light md:text-2xl">
            <h1 className="text-3xl font-bold md:text-4xl">music</h1>
            <div className="py-12 md:mx-4">
              <p className="pb-4">
                Music is another one of my biggest passions. Over the last 7 or
                so years it has become a big part of my life - I listen to, look
                for, or even try to make my own music every day. Some of my
                biggest inspirations in life are musicians and bands, like{" "}
                <Link
                  href="https://twitter.com/iameden"
                  className="font-semibold duration-[150ms] ease-in-out hover:text-blue-300"
                >
                  EDEN
                </Link>
                ,{" "}
                <Link
                  href="https://twitter.com/iamnovoamor"
                  className="font-semibold duration-[150ms] ease-in-out hover:text-blue-300"
                >
                  Novo Amor
                </Link>{" "}
                and{" "}
                <Link
                  href="https://twitter.com/HotMulligan"
                  className="font-semibold duration-[150ms] ease-in-out hover:text-blue-300"
                >
                  Hot Mulligan
                </Link>
                , to name a very select few.
              </p>
              <p className="pb-8">
                I started learning how to play guitar by myself for fun in 2018
                without much prior musical experience, and later moved on to
                learning electronic music production using{" "}
                <Link
                  href="https://www.ableton.com/en/live/"
                  className="underline decoration-blue-300 duration-[150ms] ease-in-out hover:text-blue-300"
                >
                  Ableton Live 10
                </Link>{" "}
                at the beginning of 2020. Music as a hobby lets me get the
                creative energy out, while software and programming scratches
                the logical problem-solving itch.
              </p>
              <div className="flex flex-col items-center justify-between pb-8 md:flex-row">
                <p className="pb-6 text-center text-xl italic md:mx-[5%] md:pt-0 md:text-left">
                  one of my favourite things i've made, after nearly 3 years of
                  learning:
                </p>
                <iframe
                  width="100%"
                  height="200"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346212480&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="rounded-xl md:mx-[5%] md:w-[35%] lg:w-[40%]"
                ></iframe>
              </div>
              <div className="mx-auto flex flex-col items-center">
                <Image
                  src={freeroamProject}
                  alt="Project file for the song 'freeroam'"
                  className="pb-12"
                />
                <p className="h-full text-center text-xl italic md:pl-12 md:pt-0 md:text-left">
                  the Ableton project for the song 'freeroam'
                </p>
              </div>
            </div>
          </div>
          <div className="text-xl font-light md:text-2xl">
            <h1 className="text-3xl font-bold md:text-4xl">
              the great outdoors
            </h1>
            <div className="py-12 md:mx-4">
              <p className="pb-8">
                I have always enjoyed being outside. I spent most of my
                childhood playing football with two trees as the goalposts, or a
                classic game of 'hunt' to get the adrenaline pumping. As I got
                older and friend groups changed, I started to do a lot of
                hiking. I mean, with the Mourne Mountains right on our doorstep,
                it would be rude not to. They are almost perfect; never too cold
                but never too warm, not too technical but not too easy, and
                great views to top it off.
              </p>
              <Image
                src={mournes}
                alt="Panorama of the Mourne Mountains"
                className="pb-8"
              />
              <div className="flex flex-col items-center pb-8 md:flex-row">
                <Image
                  src={davidMournes}
                  alt="David in the Mourne Mountains"
                  height={700}
                  width={400}
                />
                <p className="mx-12 pt-10 text-center italic md:pt-0">
                  one of the oldest family traditions for me was a trip to the
                  Mournes every Easter Sunday. It was a chance to catch up with
                  uncles, aunties, cousins and grandparents.
                </p>
              </div>
              <p className="pb-8">
                In October of 2018, I travelled with a group of friends to
                Marrakesh in Morocco before setting off on a week-long
                expedition in the Atlas Mountains. Led by two local tour guides,
                we planned to reach the summit of{" "}
                <Link
                  href="https://en.wikipedia.org/wiki/Toubkal"
                  className="underline decoration-blue-300 duration-[150ms] ease-in-out hover:text-blue-300"
                >
                  Toubkal
                </Link>
                , the highest point in North Africa at a height of 4,167m -
                almost 5x the height of the tallest in Northern Ireland!
              </p>
              <div className="flex flex-col items-center justify-between lg:flex-row">
                <Image
                  src={atlasOne}
                  alt="Atlas Mountains"
                  height={800}
                  width={500}
                  className="m-2"
                />
                <Image
                  src={toubkalSummit}
                  alt="Group at Toubkal summit"
                  height={800}
                  width={500}
                  className="m-2"
                />
                <Image
                  src={atlasTwo}
                  alt="Atlas Mountains"
                  height={800}
                  width={500}
                  className="m-2"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMe;
