import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeadingSection from "../../components/content/HeadingSection";
import portmoreHide from "../../../public/birding/portmore_hide.jpg";
import merlinBirdId from "../../../public/birding/merlin_bird_info.png";
import merlinBirdIdSpecies from "../../../public/birding/merlin_bird_species.png";
import merlinBirdIdLifeList from "../../../public/birding/merlin_bird_life_list.png";
import blackGuillemot from "../../../public/birding/black_guillemot.png";
import vortexDiamondback from "../../../public/birding/vortex_diamondbacks.jpg";
import commonMagpie from "../../../public/birding/common_magpie.jpg";
import eurasianRobin from "../../../public/birding/eurasian_robin.jpg";
import hoodedCrow from "../../../public/birding/hooded_crow.jpg";
import squirrel from "../../../public/birding/squirrel.jpg";
import piedWagtail from "../../../public/birding/pied_wagtail.jpg";

const Birding: NextPage = () => {
  return (
    <>
      <Head>
        <title>birding - david.</title>
      </Head>
      <main>
        <HeadingSection
          layeredHeading={true}
          pageHeading="about me"
          pageSubheading="birding"
        />
        <section className="mt-10 animate-fade-in-down md:mt-16">
          <div className="text-xl font-light md:text-2xl">
            <h1 className="text-3xl font-bold md:text-4xl">
              birding, birdwatching, twitching - whatever you call it!
            </h1>
            <div className="py-12 md:mx-4">
              <p className="pb-10">
                It really does seem to creep up on you. One minute you'd call
                any black bird a 'crow'. The next you are driving 45 minutes,
                wading through ankle-deep puddles, standing in one place for an
                hour, all just to catch a{" "}
                <span className="italic">glimpse</span> of a ringtail Hen
                Harrier you read about on the{" "}
                <Link
                  href="https://nibirds.blogspot.com/"
                  className="hyperlink hover:text-blue-300"
                >
                  nibirds
                </Link>{" "}
                rare sightings blog - and the best part, I didn't even see it...
              </p>
              <div className="flex flex-col items-center md:pb-8 xl:flex-row">
                <p className="mx-12 pb-8 text-center italic">
                  the lovely Portmore Lough; i made it to the hide with feet
                  wetter than i'd maybe have liked... that's why you keep spare
                  socks in the car!
                </p>
                <Image
                  src={portmoreHide}
                  alt="The view from the RSPB Portmore Lough Bird Hide"
                  placeholder="blur"
                  height={500}
                  width={700}
                  className="shrink"
                />
              </div>
              <p className="pb-8 pt-10">
                I think people have historically and still do consider birding
                to be a hobby reserved for older people - like you'd only ever
                do it if you were retired and had all the money and all the free
                time. And I suppose that's what really surprised me about it; I
                became a birdwatcher on my lunch breaks, seeing and hearing Pied
                Wagtails while walking to the shop for a can of Coke. I became a
                birdwatcher on my Saturday cycles along the coast, seeing
                Cormorants and Shags all piled atop one another on a rocky
                outcrop. I became a birdwatcher sitting in my car eating a
                McDonalds, as a curious Hooded Crow watched me through the
                window hoping I'd throw it one of my chips.
              </p>
              <p className="pb-10">
                I suppose I just started to take more notice of the world around
                me. Suddenly I'm walking to the shop on my lunch break and I
                recognise the familiar birdsong of the wagtails through the din
                of the passing cars. Soon after I was out on my bike for a nice
                evening cycle, when coming up along the lough I spotted a little
                black and white shape diving underneath the water. "Funny
                looking duck", I thought to myself, but I{" "}
                <span className="italic">swear</span> it had red feet. "What
                kind of duck has red feet? Wait, can ducks can swim underwater?"
                This mysterious creature had really piqued my interest. I
                watched on for another couple of minutes as it dove and rose,
                and decided this was one for the all-knowing internet; Google,
                show me "black and white bird red feet diving uk".
              </p>
              <div className="flex flex-col items-center py-8 xl:flex-row">
                <Image
                  src={blackGuillemot}
                  alt="A Black Guillemot stood on a group of rocks, taken from the RSPB website"
                  height={100}
                  width={800}
                  placeholder="blur"
                />

                <p className="mx-12 pt-10">
                  Google says it's a Black Guillemot, live in the flesh, and
                  verifiably NOT a duck.{" "}
                  <span className="italic">Yeah right</span>. I learn that these
                  are common birds here in the UK and Ireland, yet I've never
                  seen one before. Or maybe I had and just never cared enough to
                  give it my time of day. I think this was the first time a
                  random bird had ever captured my full attention.
                  <br />
                  <br />
                  <span className="text-sm italic">
                    not my image, taken from the{" "}
                    <Link
                      className="hyperlink hover:text-blue-300"
                      href="https://www.rspb.org.uk/birds-and-wildlife/black-guillemot"
                    >
                      RSPB website
                    </Link>
                  </span>
                </p>
              </div>

              <p className="pt-10">
                I remember thinking how cool it looked with it's flashy red legs
                and (almost) completely jet-black body, but that someone must
                have forgotten to colour in their wings. Everyone has heard
                David Attenborough narrate the nature documentaries starring the
                beautiful birds-of-paradise, with the bright colouring and
                extravagant mating rituals - I think that's typically where your
                mind goes if someone tells you to imagine a cool-looking bird;
                the fanned tail of a peacock or a technicolour parrot. But this
                was the first time I sat and appreciated the ones that were
                living just down the road. The little Guillemot doesn't know,
                but it kickstarted the slow change to my perception of local
                wildlife over the last couple of years. I'd love to tell it.
              </p>
              <p className="pt-8 italic">
                Though it'd probably just look at me all weird and think, "Huh,
                funny looking duck".
              </p>
            </div>

            <h1 className="text-3xl font-bold md:text-4xl">in it for real</h1>

            <div className="py-12 md:mx-4">
              <p className="pb-8">
                After my run-in with the guillemot, I learned of the Merlin Bird
                ID app by Cornell Lab. It shows lots of information and pictures
                of commonly reported species in your area, and can even identify
                the birds around you in real time using just the sound of their
                calls! The bit that really had me interested though was the
                'Life List' - basically, you keep a log of your first sightings
                of unique species, attaching information like the date and
                location you saw them. Much like Pokemon, minus the part where
                you catch them and make them fight to the death. Now when I left
                the house I'd catch myself scanning the sky and the shrubbery
                searching for a new 'Lifer' to add to the list.
              </p>

              <p className="pb-10">
                It sounds funny, but if someone asked if I was a birdwatcher at
                this point, I could have looked them dead in the eye and said
                no... It still wasn't something I actively thought too much
                about, it didn't take up much of my free time - I didn't even
                own a pair of binoculars!
              </p>

              <div className="flex flex-col items-center justify-between px-8 md:px-16 xl:flex-row">
                <Image
                  src={merlinBirdId}
                  alt="A screenshot of the 'Likely Birds' section on the Merlin Bird ID App"
                  height={100}
                  width={300}
                  className="m-2 aspect-auto shrink"
                  placeholder="blur"
                />
                <Image
                  src={merlinBirdIdSpecies}
                  alt="A screenshot of the Pied Wagtail species description on the Merlin Bird ID App"
                  height={100}
                  width={300}
                  className="m-2 shrink"
                  placeholder="blur"
                />
                <Image
                  src={merlinBirdIdLifeList}
                  alt="A screenshot of David's 'Life List' section on the Merlin Bird ID App"
                  height={100}
                  width={300}
                  className="m-2 shrink"
                  placeholder="blur"
                />
              </div>

              <p className="pb-8 pt-10">
                And then I decided I should really get some binoculars. £15 on
                Amazon, 8x magnification, small enough to fit in my pocket when
                I go for a cycle. I was filling up the life list with the common
                birds you'll see day-to-day like the Hooded Crow, Eurasian
                Robin, Common Woodpigeon - but I really wanted to up the
                shorebird representation. Any time I went out on my bike I'd
                throw the binos in my pocket and make sure my Merlin app was
                updated, hoping to see something new combing through the
                seaweed.
              </p>
              <p className="pb-8">
                It was a strong Autumn to early Spring, adding 33 new species to
                the list at different times and from different locations. Some
                standouts include the beautiful Western House Martins that will
                forever remind me of fading Summer, and the Common Kestrel that
                hovered along the cliffs of a coastal walk with a new friend -
                Fine, you can call me a birdwatcher.
              </p>
              <p className="pb-12">
                It finally became one of my main hobbies that Spring into
                Summer. A tough string of months was forcing me outside more
                than ever in my life as I looked for some distraction that
                didn't involve staring at a screen. I bought a new bike and was
                cycling sometimes 5 days a week, always with the binoculars
                folded up in my pocket because I knew I had never cycled out to
                watch the Terns diving and felt worse for it. I wasn't even
                doing it for the Life List at this point. Some days it felt like
                the only things keeping me sane were sore legs, obnoxiously loud
                Oystercatchers and rocks that make for really good seats.
              </p>
              <div className="flex flex-col items-center pb-8 xl:flex-row">
                <div className="mx-6 pb-8 md:mx-12">
                  <p className="pb-6">
                    Despite it all, I was enjoying the birding so much that I
                    felt like I was beginning to outgrow the compact little
                    binos. After a year of faithful service it was time to
                    invest in some bigger weaponry; the Vortex Diamondback HD
                    8x42s. I am <span className="italic">obsessed</span> with
                    these, and that's putting it lightly - they (expectedly)
                    blew my old pair out of the water. Never had I been more
                    excited to get outside and stare at a gull.
                  </p>
                  <p className="">
                    The Diamondbacks are much bigger with a 42mm objective lens
                    (my last were only 22mm) and came with a cool harness-case
                    to carry and store them in. Bigger lenses means a wider
                    field-of-view and the overall better glass quality gives a
                    much clearer and more accurate picture of your subject. I
                    find it crazy that these aren't even close to the
                    'top-of-the-range' optics price-wise, but could easily last
                    for life with enough care. I've even got some cool pictures
                    through them using my phone!
                  </p>
                </div>

                <Image
                  src={vortexDiamondback}
                  alt="The Vortex Diamondback HD 8x42 binoculars resting on a rock beside the sea"
                  height={100}
                  width={600}
                  placeholder="blur"
                />
              </div>

              <div></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Birding;
