import SaleCard from "./SaleCard";
import saleProduct1 from "../../../assets/images/saleproduct1.webp";

const RelatedProduct = () => {
  return (
    <div className="my-5 space-y-3">
      <h1 className="text-2xl font-bold text-black">Related Product</h1>
      <SaleCard
        brandName="Image Brand"
        itemName="Image"
        currentPrice={5.75}
        previousPrice={8.75}
        img={saleProduct1}
      ></SaleCard>
    </div>
  );
};

export default RelatedProduct;
