import FeaturedCard from "./FeaturedCard";

const FeaturedProducts = () => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
