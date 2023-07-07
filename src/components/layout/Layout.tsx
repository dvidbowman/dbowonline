import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/*bg-gradient-to-b from-slight-off-white to-[#cecece] */}
      <div
        id="app"
        className={`flex h-full min-h-[100vh] flex-col bg-slight-off-white`}
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
