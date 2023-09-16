import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeadingSection from "../../components/content/HeadingSection";

import mournes from "../../../public/mournes.jpg";
import davidMournes from "../../../public/davidmournes.jpg";
import toubkalSummit from "../../../public/toubkalsummit.jpg";
import atlasOne from "../../../public/atlasone.png";
import atlasTwo from "../../../public/atlastwo.png";

const Outdoors: NextPage = () => {
  return (
    <>
      <Head>
        <title>outdoors - david.</title>
      </Head>
      <main>
        <HeadingSection
          layeredHeading={true}
          pageHeading="about me"
          pageSubheading="outdoors"
        />
        <section className="mt-10 animate-fade-in-down md:mt-16">
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
                placeholder="blur"
              />
              <div className="flex flex-col items-center pb-8 md:flex-row">
                <Image
                  src={davidMournes}
                  alt="David in the Mourne Mountains"
                  height={700}
                  width={400}
                  placeholder="blur"
                />
                <p className="mx-12 pt-10 text-center italic md:pt-0">
                  one of the oldest family traditions for me was a trip to the
                  Mournes every Easter Sunday. It was a chance to catch up with
                  uncles, aunties, cousins and grandparents.
                </p>
              </div>
              <p className="pb-4">
                In October of 2018, I travelled with a group of friends to
                Marrakesh in Morocco before setting off on a week-long
                expedition in the Atlas Mountains, starting in the village of
                Imlil. Led by two local tour guides, we planned to reach the
                summit of{" "}
                <Link
                  href="https://en.wikipedia.org/wiki/Toubkal"
                  className="underline decoration-blue-300 duration-[150ms] ease-in-out hover:text-blue-300"
                >
                  Toubkal
                </Link>
                , the highest point in North Africa at a height of 4,167m -
                almost 5x the height of the tallest in Northern Ireland!
              </p>
              <p className="pb-4">
                I hadn't travelled <span className="italic">that</span> much of
                the world before this trip, but Morocco is by far the most
                beautiful country I have visited yet. Hiking the Atlas mountains
                was unlike anything we have in Northern Ireland. So many little
                towns and villages line the lower valley rivers, and clouds
                match the snow-topped peaks; the contrasts easily made it an
                unforgettable experience for me.
              </p>
              <p className="pb-8">
                I remember the day of the final climb to the summit as maybe the
                most physically challenging thing I'd ever done. It started with
                an early rise at 4:00AM, leaving the refuge with flashlights
                strapped to our hands and heads, crampons tied to our feet,
                hoping to reach the top just in time for the sunrise. We slowly
                and carefully made our way up as a fall at the wrong angle may
                have sent you down the longest slip and slide of your life.
                Halfway there, as everyone took a short breather, I reached for
                my water bottle only to find it completely frozen through. We
                soldiered on in single file to reach the peak just before
                10:00AM, and the decent weather allowed for a pretty decent
                view.
              </p>
              <div className="flex flex-col items-center justify-between pb-8 lg:flex-row">
                <Image
                  src={atlasOne}
                  alt="Atlas Mountains"
                  height={800}
                  width={500}
                  className="m-2"
                  placeholder="blur"
                />
                <Image
                  src={toubkalSummit}
                  alt="Group at Toubkal summit"
                  height={800}
                  width={500}
                  className="m-2"
                  placeholder="blur"
                />
                <Image
                  src={atlasTwo}
                  alt="Atlas Mountains"
                  height={800}
                  width={500}
                  className="m-2"
                  placeholder="blur"
                />
              </div>
              <p className="pb-4">
                The descent back to the refuge was slow going but everyone made
                it back for a well-deserved meal - except me, as I immediately
                felt awful and couldn't force myself to eat or drink anything. I
                headed back to sleep for a couple of hours to shake off what I
                assumed was altitude sickness, and thankfully woke up feeling
                fine again. The remaining hike back down to Imlil through the
                rocky and brown lower mountains was light work, and everyone
                made the journey safely.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Outdoors;
