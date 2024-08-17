import HeadingTitle from "@/shared/title/HeadingTitle";
import SaleCard from "./SaleCard";
import brand1 from "../../../assets/images/brand1.webp";

const FeaturedBrand = () => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <HeadingTitle
        leftTitle="Featured Brand - Outwell"
        rightTitle="View all"
      ></HeadingTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <SaleCard
          brandName="OUTWELL"
          itemName="Hillcrest Trap"
          currentPrice={87.95}
          img={brand1}
        ></SaleCard>
      </div>
    </div>
  );
};

export default FeaturedBrand;
