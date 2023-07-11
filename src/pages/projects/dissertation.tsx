import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import IconGitHub from "../../icons/IconGitHub";

const Dissertation: NextPage = () => {
  return (
    <>
      <Head>
        <title>dissertation - david.</title>
      </Head>
      <main className="mx-12 md:mx-24">
        <section className="border-b border-zinc-800">
          <div className="pb-8 pt-0 md:py-16">
            <h1 className="text-center text-5xl font-bold text-zinc-800 md:text-left">
              my projects{" "}
              <span className="inline-block font-normal">
                <span className="text-blue-300">{">"} </span>my dissertation
              </span>
            </h1>
          </div>
        </section>
        <section className="mt-10 text-xl font-light md:mt-16 md:text-2xl">
          <div className="md:mx-4">
            <div className="mt-6 flex w-full flex-col md:flex-row">
              <div className="md:w-[60%]">
                <h1 className="text-2xl font-semibold md:text-4xl">
                  colorimetric analysis of smart wound dressings
                </h1>
                <p className="pt-6">
                  My final year project at university involved the development
                  of an application for Android mobile devices that would be
                  used alongside colour-changing wound dressings developed by
                  the QUB chemistry department. These dressings were designed to
                  change colour in reaction to the state of a wound; if it
                  became infected, more CO2 would be produced and absorbed by
                  the bandage, causing the change in colour.
                </p>
              </div>
              <div className="ml-4 pt-6 italic md:ml-32 md:w-[40%] md:pt-0">
                <h1 className="pb-2 text-2xl font-light md:pb-6 md:text-4xl">
                  what i used:
                </h1>
                <ul className="ml-6 list-inside list-disc marker:text-sm marker:text-blue-300">
                  <li>Android Studio</li>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>OpenCV</li>
                </ul>
              </div>
            </div>
            <div className="pt-6 md:pt-12">
              <p>
                The main application was written in Java for Android devices
                running Android 11, and some PHP and MySQL was used to allow
                users to create 'accounts' in order to safely store their images
                and analysis in a database with username/password protection.
              </p>
            </div>
            <div className="pt-16">
              <h1 className="text-2xl font-semibold md:text-4xl">
                what the project entailed
              </h1>
              <p className="pt-4">
                The application would allow a user to take/upload an image of
                their bandage in order to know information about their wound{" "}
                <span className="italic">without removing the bandage</span>.
                This is because most infections will occur during inspection or
                replacement of dressings. The RGB values of pixels in the
                colour-changing segment of the bandage would then be used to
                check whether the wound has become infected - the segments would
                start blue, but then turn more orange/yellow as more CO2 is
                absorbed. The application returns the analysis, and the user
                knows whether they need to see a doctor.
              </p>
            </div>
            <div className="pt-16">
              <h1 className="text-2xl font-semibold md:text-4xl">
                the difficulties
              </h1>
              <p className="pt-4">
                I quickly learned the basics on the mobile side of things -
                setting up a basic UI using Android Studio was very intuitive,
                and I even created my own in-app camera function to eliminate
                some of the platform-dependency. There are near infinite
                resources online for simple database stuff, so the PHP/MySQL
                side of things was a comparative walk in the park versus my
                great battles with OpenCV.
              </p>
              <p className="pt-4">
                I used OpenCV to automatically detect and analyse the bandages,
                and with colour accuracy being the main concern, this presented
                a near-endless list of problems; how will it know where the
                bandage is? What effect will lighting have on the analysis? Are
                different cameras going to change results? It soon became clear
                that I started this project aiming a bit too high, so the focus
                was retargeted to research. Let's instead make a very basic app
                that has some primary functions with the goal of analysing the
                lighting's effect on results.
              </p>
              <p className="pt-4">
                I got the basic bandage detection to work after some wrestling
                with edge detectors, and a lot of calculations later the results
                obtained were promising. It seemed that consistent discernable
                colour changes could be detected across different lighting
                temperatures, and that with some more fine tuning it may be
                accurate enough to use medically.
              </p>
            </div>
            <div className="pt-16">
              <h1 className="text-2xl font-semibold md:text-4xl">
                what i learned
              </h1>
              <p className="pt-4">
                Before starting this project I had never tried mobile app
                development, used OpenCV, or learned any PHP. On top of this,
                the medical nature of the problem to be solved meant all of
                these factors combined definitely made it the most challenging
                but rewarding thing I've tackled yet.
              </p>
              <p className="pt-4">
                On the technical side of things I learned the basics of mobile
                application development on Android, along with my first bit of
                PHP, but the hardest stuff was definitely the OpenCV library. It
                allowed me a greater appreciation for anything computer vision
                related.
              </p>
              <p className="py-4">
                Overall, this project provided more for me in terms of personal
                skills; having to follow the entire life cycle from planning to
                evaluation let me hone skills that I can apply in almost any
                situation. I had a real chance to improve my organisation and
                time management through a larger project like this, constantly
                meeting small deadlines and not letting any one part of the
                system fall behind.
              </p>
            </div>
            <div className="py-16">
              <Link
                href="https://github.com/dvidbowman/DissertationAndroidApp"
                rel="norefferer"
                target="_blank"
                className="hover:text-blue-300"
              >
                <IconGitHub
                  size={32}
                  className="inline-block hover:text-blue-300"
                />
                <h1 className="mx-4 inline-block underline decoration-blue-300">
                  You can find the code for main application here!
                </h1>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dissertation;
