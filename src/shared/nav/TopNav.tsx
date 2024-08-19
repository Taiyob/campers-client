import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#3a8472] max-w-[2520px] mx-auto px-4 py-2 md:px-10 xl:px-20">
        <div className="hidden mb-2 space-x-4 text-center text-white md:flex md:text-left md:mb-0">
          <span className="block md:inline">Need Help?</span>
          <span className="block md:inline">061 344 3656</span>
          <span className="block md:inline">|</span>
          <span className="block md:inline">orders@campers.co.bd</span>
        </div>
        <div className="flex flex-col items-center space-y-2 text-white md:space-y-0 md:space-x-4 md:flex-row">
          <Link to="" className="hover:underline">
            Our Story
          </Link>
          <span className="hidden text-gray-400 md:inline">|</span>
          <Link to="" className="hover:underline">
            Where to Buy
          </Link>
          <span className="hidden text-gray-400 md:inline">|</span>
          <Link to="" className="hover:underline">
            Our Brands
          </Link>
          <span className="hidden text-gray-400 md:inline">|</span>
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
