import HeadingTitle from "@/shared/title/HeadingTitle";
import SaleCard from "./SaleCard";

const SaleProducts = () => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <HeadingTitle
        leftTitle="Sale Items"
        rightTitle="View All Sale Items"
      ></HeadingTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
        ></SaleCard>
        <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
        ></SaleCard>
        <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
        ></SaleCard>
        <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
        ></SaleCard>
        <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
        ></SaleCard>
        <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
        ></SaleCard>
        <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
        ></SaleCard>

        <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
        ></SaleCard>
      </div>
    </div>
  );
};

export default SaleProducts;
