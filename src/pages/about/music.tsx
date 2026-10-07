import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeadingSection from "../../components/content/HeadingSection";

import freeroamProject from "../../../public/music/freeroam_project.png";
import bstCover from "../../../public/music/bst_cover.png";
import allyoursCover from "../../../public/music/all_yours_cover.png";
import freeroamCover from "../../../public/music/freeroam_cover.png";
import blessingCover from "../../../public/music/blessing_cover.png";

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
                Music is another one of my biggest passions. Over the last 10 or
                so years it has become a big part of my life - I listen to, look
                for, play, or even try to make my own music every day. Many of
                my biggest inspirations in life are musicians and bands,
                including (but absolutely not limited to){" "}
                <Link
                  href="https://twitter.com/youvye"
                  className="hyperlink hover:text-blue-300"
                >
                  Yvette Young
                </Link>
                ,{" "}
                <Link
                  href="https://twitter.com/iamnovoamor"
                  className="hyperlink hover:text-blue-300"
                >
                  Novo Amor
                </Link>
                ,{" "}
                <Link
                  href="https://twitter.com/armslengthblues"
                  className="hyperlink hover:text-blue-300"
                >
                  Arm's Length
                </Link>
                , and{" "}
                <Link
                  href="https://twitter.com/songsbypocket"
                  className="hyperlink hover:text-blue-300"
                >
                  Pocket
                </Link>
                !
              </p>
              <p className="pb-12">
                I started learning how to play guitar by myself for fun in 2018
                without any prior musical experience and pretty quickly became
                obsessed, spending hours a day practicing until my fingers were
                too sore. It wasn't until I bought my first computer in late
                2019 that I became increasingly interested in producing
                electronic music rather than acoustic. I spent my teenage years
                listening to artists like Skrillex and Virtual Riot, but only
                now started to wonder how it was actually made. I fell down the{" "}
                <Link
                  href="https://www.ableton.com/en/live/"
                  className="hyperlink hover:text-blue-300"
                >
                  Ableton Live 10
                </Link>{" "}
                rabbit hole at the beginning of 2020 and quickly realised this
                was a completely different ball game.
              </p>
              <div className="mx-auto flex flex-col items-center pb-12">
                <Image
                  src={freeroamProject}
                  alt="Project file for the song 'freeroam'"
                  className="pb-12"
                  placeholder="blur"
                />
                <p className="h-full text-center text-xl italic md:pl-12 md:pt-0 md:text-left">
                  the Ableton project for my song 'freeroam'
                </p>
              </div>
              <p className="pb-4">
                I would say this is where a much deeper appreciation for all
                kinds of music began; learning just how difficult it was to make
                anything that remotely resembled one of my favourite songs was
                incredibly inspiring yet incredibly soul-crushing. It took
                literal <strong>MONTHS</strong> of work before I made anything
                in Ableton that I could say even slightly constituted as
                listenable music. Learning the software itself, learning how to
                create a chord progression, learning how to make an interesting
                drum pattern - it felt completely impossible at times.
              </p>
              <p className="pb-12">
                At the same time, this made it feel completely possible. Every
                time I opened a project I would learn something new. I would
                suddenly stumble into something that sparked inspiration, and I
                always felt like I was getting closer and closer to making
                something I could really say I was proud of. I definitely find
                it to be somewhat of a love-hate relationship. Writing a good
                song with just yourself and an instrument is a challenge in and
                of itself - doing the same thing with the infinite number of
                creative choices available in modern electronic music{" "}
                <span className="line-through">can be</span>
                <span className="font-normal"> IS</span> quite overwhelming.
              </p>

              {/* <div className="grid grid-cols-2 gap-4 pb-12 md:mx-16 lg:mx-24">
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
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Music;
