import HeadingTitle from "@/shared/title/HeadingTitle";
import SaleCard from "./SaleCard";
import saleProduct1 from "../../../assets/images/saleproduct1.webp";
import { useGetAllProductQuery } from "@/redux/features/api/product/productApi";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  categoryId: string;
  images: string[];
  isFeatured: boolean;
  isDeleted: boolean;
  status: boolean;
  createdAt: string;
  updatedAt: string;
};

const SaleProducts = () => {
  const { data } = useGetAllProductQuery(undefined);
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <HeadingTitle
        leftTitle="Sale Items"
        rightTitle="View All Sale Items"
        link="/products"
      ></HeadingTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {data?.data.map((product: TProduct) => (
          <SaleCard
            key={product._id}
            brandName={product.name}
            itemName={product.name}
            currentPrice={product.price}
            previousPrice={8.75}
            img={saleProduct1}
          ></SaleCard>
        ))}
        {/* <SaleCard
          brandName="VW MERCH"
          itemName={`"Campers On Tour" Enamel Campervan Mug`}
          currentPrice={6.75}
          previousPrice={8.75}
          img={saleProduct1}
        ></SaleCard>
        */}
      </div>
    </div>
  );
};

export default SaleProducts;
