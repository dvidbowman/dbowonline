import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        id="app"
        className={`flex h-full min-h-[100vh] flex-col bg-slight-off-white text-zinc-800 dark:bg-zinc-900 dark:text-slight-off-white`}
      >
        <header className="flex items-center justify-between">
          <Navbar />
        </header>
        <main tabIndex={-1} id="main" className="flex flex-grow flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
