import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import MainContent from "./sections/Main/MainContent";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-800 text-white">
      <header className="p-4 text-sm flex justify-end items-center">
        <Header />
      </header>

      <main className="flex flex-col flex-1 items-center justify-center mb-72 lg:mb-24">
        <MainContent />
      </main>

      <footer className="bg-zinc-900 h-20 flex flex-col">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
