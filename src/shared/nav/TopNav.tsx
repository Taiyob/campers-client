import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#3a8472] max-w-[2520px] mx-auto px-4 py-2 md:px-10 xl:px-20">
        <div className="hidden md:flex text-white text-center md:text-left mb-2 md:mb-0 space-x-4">
          <span className="block md:inline">Need Help?</span>
          <span className="block md:inline">061 344 3656</span>
          <span className="block md:inline">|</span>
          <span className="block md:inline">orders@campers.co.bd</span>
        </div>
        <div className="text-white space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center">
          <Link to="" className="hover:underline">
            Our Story
          </Link>
          <span className="text-gray-400 hidden md:inline">|</span>
          <Link to="" className="hover:underline">
            Where to Buy
          </Link>
          <span className="text-gray-400 hidden md:inline">|</span>
          <Link to="" className="hover:underline">
            Our Brands
          </Link>
          <span className="text-gray-400 hidden md:inline">|</span>
          <Link to="" className="hover:underline">
            Blogs
          </Link>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="" className="text-white hover:text-gray-300">
            <LuFacebook />
          </Link>
          <Link to="" className="text-white hover:text-gray-300">
            <FaInstagram />
          </Link>
          <Link to="" className="text-white hover:text-gray-300">
            <FiTwitter />
          </Link>
          <Link to="" className="text-white hover:text-gray-300">
            <TfiEmail />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
