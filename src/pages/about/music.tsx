import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeadingSection from "../../components/content/HeadingSection";

import freeroamProject from "../../../public/freeroamproject.png";

const Music: NextPage = () => {
  return (
    <>
      <Head>
        <title>music - david.</title>
      </Head>
      <main className="mx-12 md:mx-24">
        <HeadingSection
          layeredHeading={true}
          pageHeading="about me"
          pageSubheading="music"
        />
        <section className="mt-10 animate-fade-in-down md:mt-16">
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
        </section>
      </main>
    </>
  );
};

export default Music;
