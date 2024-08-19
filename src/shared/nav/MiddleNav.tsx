import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import { GiBeachBag } from "react-icons/gi";

const MiddleNav = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-[2000px] mx-auto px-4 py-2 md:px-10 xl:px-20">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <img
          className="w-20 h-auto sm:w-24 md:w-32 lg:w-40 xl:w-48"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center w-full mb-4 md:w-1/2 lg:w-1/3 md:mb-0">
        <fieldset className="w-full space-y-1 text-gray-800">
          <div className="flex">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Start your adventure"
              className="w-full p-3 text-gray-800 bg-gray-100 border sm:text-sm rounded-l-md focus:border-blue-500 focus:ring-0"
            />
            <span className="flex items-center px-3 text-white bg-red-500 pointer-events-none sm:text-sm rounded-r-md">
              <BiSearch className="text-xl" />
            </span>
          </div>
        </fieldset>
      </div>

      {/* Login and Basket */}
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        <Link to="" className="text-[#3a8472] text-sm md:text-base">
          Login
        </Link>
        <button
          className="px-6 py-2 md:px-8 md:py-3 bg-[#3a8472] rounded-md flex items-center justify-center whitespace-nowrap text-white text-2xl md:text-base"
          type="button"
        >
          Basket / TK0.00
          <GiBeachBag className="ml-4 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default MiddleNav;
