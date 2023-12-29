import { FaCamera, FaMicrophone, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative w-8/12 lg:w-6/12 flex items-center ">
      <FaSearch className="absolute left-4 text-gray-500" />
      <input
        type="text"
        className="bg-zinc-800 w-full hover:bg-zinc-700 border-2 border-gray-600 rounded-full py-2 px-8 hover:border-gray-800"
      />
      <div className="absolute right-4 flex items-center gap-4">
        <FaMicrophone className="text-gray-500 cursor-pointer" />
        <FaCamera className="text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
