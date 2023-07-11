import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import IconGitHub from "../../icons/IconGitHub";

const WebDev: NextPage = () => {
  return (
    <>
      <Head>
        <title>web dev - david.</title>
      </Head>
      <main className="mx-12 md:mx-24">
        <section className="flex flex-row border-b border-zinc-800">
          <div className="pb-8 pt-0 md:py-16">
            <h1 className="text-center text-5xl font-bold text-zinc-800 md:text-left">
              my projects{" "}
              <span className="inline-block font-normal">
                <span className="text-blue-300">{">"} </span>this website
              </span>
            </h1>
          </div>
          <div className="pb-8"></div>
        </section>
        <section className="mt-10 text-xl font-light md:mt-16 md:text-2xl">
          <div className="md:mx-4">
            <div className="mt-6 flex w-full flex-col md:flex-row">
              <div className="md:w-[60%]">
                <h1 className="text-2xl font-semibold md:text-4xl">
                  building this website from scratch
                </h1>
                <p className="pt-6">
                  I decided I would like to keep a record of myself and what i'm
                  doing, a place to write about myself, my projects, and the
                  like. My own website seemed like the perfect idea, but just
                  copying a template or paying for a service didn't feel very in
                  the spirit of someone who enjoys coding. So I learned how to
                  do it myself.
                </p>
              </div>
              <div className="ml-4 pt-6 italic md:ml-32 md:w-[40%] md:pt-0">
                <h1 className="pb-2 text-2xl font-light md:pb-6 md:text-4xl">
                  what i used:
                </h1>
                <ul className="ml-6 list-inside list-disc marker:text-sm marker:text-blue-300">
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 md:pt-12">
              <p>
                Before I started making this website, I knew I was throwing
                myself off the deep end. I did one web development module in
                university and we only used basic HTML, CSS and Javascript. Safe
                to say React and Tailwind really threw everything I thought I
                knew out of the window right away (and I'm glad it did).
              </p>
              <p className="pt-4">
                I built the app using the{" "}
                <Link
                  href="https://create.t3.gg/"
                  className="underline decoration-blue-300"
                >
                  T3 Stack
                </Link>{" "}
                minus all the database or auth bits and pieces that I didn't
                think I'd need. Was there a better way to do it? I don't know
                yet, probably. But it consolidated everything I knew I wanted to
                use into one place just to help me start out.
              </p>
            </div>
            <div className="pt-16">
              <h1 className="text-2xl font-semibold md:text-4xl">
                how i learned
              </h1>
              <p className="pt-4">
                I started off learning by following the incredibly helpful{" "}
                <Link
                  href="https://nextjs.org/learn/foundations/about-nextjs"
                  className="underline decoration-blue-300"
                >
                  introduction to Next.js
                </Link>{" "}
                - this helped me to understand the 'normal JavaScript' {"-> "}
                React {"-> "} Next.js pipeline, and why I would even bother
                using a framework. There was a really good demo about building
                your own little Next.js blog - perfect, that's kind of what I
                was going for. I also looked at open-source code for more
                involved websites that I thought were well-designed, one of them
                being{" "}
                <Link
                  href="https://www.alveussanctuary.org/"
                  className="underline decoration-blue-300"
                >
                  alveussanctuary.org
                </Link>
                .
              </p>
              <p className="pt-4">
                Their website is WAY too overkill for anything I needed to do,
                but I still learned a huge amount just by looking at how the
                code is layed out. I started to really understand the importance
                of components, then using them for things like the navbar and
                footer.
              </p>
            </div>
            <div className="pt-16">
              <h1 className="text-2xl font-semibold md:text-4xl">
                the difficulties
              </h1>
              <p className="pt-4">
                Given that I didn't need to do anything revolutionary, the whole
                process has been a lot of fun so far, and pretty pain-free. I'm
                still fighting with the CSS every so often to get things where I
                want them, but Tailwind has made it so much easier to stay in a
                good workflow than in my previous experiences.
              </p>
            </div>
            <div className="pt-16">
              <h1 className="text-2xl font-semibold md:text-4xl">
                what i'm doing next
              </h1>
              <p className="py-4">
                My main focus at the beginning was just to make something
                functional and relatively nice to look at. I think I achieved
                that goal, but there are still many things I'd like to try, like
                different CSS animations to make things feel a bit less static.
                With enough time I'd also like to make the layout as responsive
                as possible - it does pretty well with different screen sizes
                for the most part, but it still needs a bit of fine tuning.
                Aside from that, I will probably separate the 'about' page into
                different pages. I'd like to say a lot more on the topics, but
                right now it feels a bit cluttered.
              </p>
            </div>
            <div className="py-16">
              <Link
                href="https://github.com/dvidbowman/dbowonline"
                rel="norefferer"
                target="_blank"
                className="hover:text-blue-300"
              >
                <IconGitHub
                  size={32}
                  className="inline-block hover:text-blue-300"
                />
                <h1 className="mx-4 inline-block underline decoration-blue-300">
                  You can find the code for this project here!
                </h1>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebDev;
