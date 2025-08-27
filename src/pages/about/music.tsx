import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeadingSection from "../../components/content/HeadingSection";

import freeroamProject from "../../../public/music/freeroamproject.png";
import bstCover from "../../../public/music/bst-cover.png";
import allyoursCover from "../../../public/music/allyours-cover.png";
import freeroamCover from "../../../public/music/freeroam-cover.png";
import blessingCover from "../../../public/music/blessing-cover.png";

const Music: NextPage = () => {
  return (
    <>
      <Head>
        <title>music - david.</title>
      </Head>
      <main>
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
              <p className="pb-12">
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
              <div className="grid grid-cols-2 gap-4 pb-12 md:mx-16 lg:mx-24">
                <Link
                  href="https://soundcloud.com/dvidsc/bst"
                  className="duration-75 ease-in-out hover:scale-105"
                >
                  <div className="flex flex-row">
                    <div>
                      <Image
                        src={bstCover}
                        alt="Cover art for the song 'bst'"
                        height={125}
                        className="min-w-[100px]"
                        placeholder="blur"
                      />
                    </div>

                    <div className="m-auto ml-4 md:ml-8">
                      <h1 className="font-normal">bst</h1>
                      <p className="italic">4:53 - 23/03/23</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="https://soundcloud.com/dvidsc/blessing"
                  className="duration-75 ease-in-out hover:scale-105"
                >
                  <div className="flex flex-row">
                    <div>
                      <Image
                        src={blessingCover}
                        alt="Cover art for the song 'blessing'"
                        height={125}
                        className="min-w-[100px]"
                        placeholder="blur"
                      />
                    </div>

                    <div className="m-auto ml-4 md:ml-8">
                      <h1 className="font-normal">blessing</h1>
                      <p className="italic">3:46 - 18/09/23</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://soundcloud.com/dvidsc/all-yours"
                  className="duration-75 ease-in-out hover:scale-105"
                >
                  <div className="flex flex-row">
                    <div>
                      <Image
                        src={allyoursCover}
                        alt="Cover art for the song 'all yours'"
                        height={125}
                        className="min-w-[100px]"
                        placeholder="blur"
                      />
                    </div>

                    <div className="m-auto ml-4 md:ml-8">
                      <h1 className="font-normal">all yours</h1>
                      <p className="italic">2:59 - 25/03/25</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://soundcloud.com/dvidsc/freeroam"
                  className="duration-75 ease-in-out hover:scale-105"
                >
                  <div className="flex flex-row">
                    <div>
                      <Image
                        src={freeroamCover}
                        alt="Cover art for the song 'freeroam'"
                        height={125}
                        className="min-w-[100px]"
                        placeholder="blur"
                      />
                    </div>

                    <div className="m-auto ml-4 md:ml-8">
                      <h1 className="font-normal">freeroam</h1>
                      <p className="italic">4:59 - 18/09/22</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="mx-auto flex flex-col items-center pb-12">
                <Image
                  src={freeroamProject}
                  alt="Project file for the song 'freeroam'"
                  className="pb-12"
                  placeholder="blur"
                />
                <p className="h-full text-center text-xl italic md:pl-12 md:pt-0 md:text-left">
                  the Ableton project for the song 'freeroam'
                </p>
              </div>
              <p className="pb-4">
                I definitely find it to be somewhat of a love-hate relationship.
                Writing a good song with just yourself and an instrument is a
                challenge in and of itself - doing the same thing with the
                infinite number of creative choices available in modern
                electronic music <span className="line-through">can be</span>
                <span className="font-normal"> IS</span> quite overwhelming.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Music;
