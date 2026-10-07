import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HeadingSection from "../../components/content/HeadingSection";

const BBC8034: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elevator Pitch - References</title>
      </Head>
      <main>
        <HeadingSection
          layeredHeading={true}
          pageHeading="BBC8034 Elevator Pitch"
          pageSubheading="References"
        />
        <section className="mt-10 animate-fade-in-down md:mt-16">
          <div className="text-xl font-light md:text-2xl">
            <h1 className="text-3xl font-bold md:text-4xl">references</h1>
            <div className="py-12 md:mx-4">
              <p className="pb-12">
                <strong>UN Environment Programme (2022)</strong> Global
                Peatlands Assessment: The State of the World's Peatlands.
                Available at:{" "}
                <Link
                  href="https://globalpeatlands.org/sites/default/files/2022-12/peatland_assessment.pdf"
                  className="hyperlink hover:text-blue-300"
                >
                  https://globalpeatlands.org/sites/default/files/2022-12/peatland_assessment.pdf
                </Link>{" "}
                (Accessed: 2 October 2026).
              </p>
              <p className="pb-12">
                <strong>DAERA NI (2025)</strong> Northern Ireland Peatland
                Strategy to 2040. Available at:{" "}
                <Link
                  href="https://www.daera-ni.gov.uk/publications/northern-ireland-peatland-strategy-2040"
                  className="hyperlink hover:text-blue-300"
                >
                  https://www.daera-ni.gov.uk/publications/northern-ireland-peatland-strategy-2040
                </Link>{" "}
                (Accessed: 2 October 2026).
              </p>
              <p className="pb-12">
                <strong>
                  Okumah, M., Walker, C., Martin-Ortega, J., Ferré, M., Glenk,
                  K. and Novo, P. (2019)
                </strong>{" "}
                How much does peatland restoration cost? Insights from the UK.
                University of Leeds - SRUC Report. Available at:{" "}
                <Link
                  href="https://www.researchgate.net/publication/331592457"
                  className="hyperlink hover:text-blue-300"
                >
                  https://www.researchgate.net/publication/331592457
                </Link>{" "}
                (Accessed: 2 October 2026).
              </p>
              <p className="pb-12">
                <strong>Yorkshire Peat Partnership (2024)</strong> Yorkshire
                Peat Partnership 15 Year Report 2009-2024. Available at:
                <Link
                  href="https://www.yppartnership.org.uk/news/15-years-yorkshire-peat-partnership"
                  className="hyperlink hover:text-blue-300"
                >
                  https://www.yppartnership.org.uk/news/15-years-yorkshire-peat-partnership
                </Link>{" "}
                (Accessed: 2 October 2026).
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BBC8034;
