import g1 from "../../../assets/images/g1.webp";
import g2 from "../../../assets/images/g2.webp";
import g3 from "../../../assets/images/g3.webp";
import g4 from "../../../assets/images/g4.webp";

const MainGallery = () => {
  return (
    <div className="max-w-[1500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-10">
      <div className="grid h-screen grid-cols-2 grid-rows-2">
        {/* Left Column */}
        <div className="relative row-span-2 p-4 ">
          <img className="w-full h-full" src={g1} alt="" />
          <button
            type="submit"
            className="absolute px-8 py-2 mb-2 text-white transform -translate-x-1/2 bg-red-500 rounded bottom-4 left-1/2"
          >
            Shop Hiking Gear
          </button>
        </div>

        {/* Right Column Top */}
        <div className="relative col-span-1 p-4">
          <img className="w-full h-full" src={g2} alt="" />
          <button
            type="submit"
            className="absolute px-8 py-2 mb-2 text-white transform -translate-x-1/2 bg-red-500 rounded bottom-4 left-1/2"
          >
            Shop Camping
          </button>
        </div>

        {/* Right Column Bottom (Divided Horizontally) */}
        <div className="grid grid-cols-2 col-span-1 gap-4">
          <div className="relative p-4">
            <img className="w-full h-full" src={g3} alt="" />
            <button
              type="submit"
              className="absolute w-2/3 px-4 py-2 mb-2 text-white transform -translate-x-1/2 bg-red-500 rounded bottom-4 left-1/2"
            >
              Shop Climbing
            </button>
          </div>
          <div className="relative p-4">
            <img className="w-full h-full" src={g4} alt="" />
            <button
              type="submit"
              className="absolute w-2/3 px-4 py-2 mb-2 text-white transform -translate-x-1/2 bg-red-500 rounded bottom-4 left-1/2"
            >
              Shop Tents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGallery;
//
//
