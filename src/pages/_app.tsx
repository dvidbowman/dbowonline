import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/layout/Layout";
import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
