import HeadingTitle from "@/shared/title/HeadingTitle";
import FeaturedCard from "./FeaturedCard";

const FeaturedProducts = () => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <HeadingTitle
        leftTitle="Feature Items"
        rightTitle="View All Feature Items"
      ></HeadingTitle>
      <div className="flex items-center justify-around overflow-x-auto">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
