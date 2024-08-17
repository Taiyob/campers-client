import HeadingTitle from "@/shared/title/HeadingTitle";
import SaleCard from "./SaleCard";

const SaleProducts = () => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <HeadingTitle
        leftTitle="Sale Items"
        rightTitle="View All Sale Items"
      ></HeadingTitle>
      <div className="">
        <SaleCard></SaleCard>
      </div>
    </div>
  );
};

export default SaleProducts;
