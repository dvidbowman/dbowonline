type HeadingSectionProps = {
  layeredHeading?: boolean;
  pageHeading?: string;
  pageSubheading?: string;
};

const HeadingSection = ({
  layeredHeading,
  pageHeading,
  pageSubheading,
}: HeadingSectionProps) => {
  return (
    <section className="animate-title-fade-in border-b border-zinc-800 dark:border-slight-off-white">
      <div className="pb-8 pt-0 md:py-16">
        <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl">
          {pageHeading}{" "}
          <span
            className={
              layeredHeading ? "visible inline-block font-normal" : "hidden"
            }
          >
            <span className="text-blue-300">{">"} </span>
            {pageSubheading}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeadingSection;
