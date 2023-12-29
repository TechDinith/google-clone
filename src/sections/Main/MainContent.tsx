import SearchBar from "../../components/search-bar/SearchBar";

const MainContent = () => {
  return (
    <>
      <h1 className="text-[10vw] lg:text-[7vw] font-bold mb-5">Google</h1>

      <SearchBar />

      <div className="mt-6 space-x-4">
        <button className="bg-zinc-700 px-6 py-2 rounded-full hover:border-zinc-600 border-zinc-800 border-2">
          Google Search
        </button>
        <button className="bg-zinc-700 px-6 py-2 rounded-full hover:border-zinc-600 border-zinc-800 border-2">
          I'm Feeling Lucky
        </button>
      </div>

      <p className="mt-4 text-gray-400">Google offered in: English</p>
    </>
  );
};

export default MainContent;
