import { PiDotsNineBold } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <a href="#" className="mr-4 hover:underline">
        Gmail
      </a>

      <a href="#" className="mr-4 hover:underline">
        Images
      </a>

      <div className="group">
        <PiDotsNineBold className="text-xl cursor-pointer" />
        <div className="invisible group-hover:visible absolute right-0 mr-6 bg-zinc-700 p-2 rounded shadow">
          <p>Google Apps</p>
        </div>
      </div>

      <div className="group">
        <img
          src="https://placekitten.com/40/40"
          alt="Avatar"
          className="ml-4 h-8 w-8 rounded-full cursor-pointer hover:opacity-75"
        />
        <div className="invisible group-hover:visible absolute right-0 mr-1 bg-zinc-700 p-2 rounded shadow">
          <p>Google Account</p>
          <div className="text-gray-400">
            <p>John Doe</p>
            <p>johndoe@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
