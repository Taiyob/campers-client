import HeadingTitle from "@/shared/title/HeadingTitle";
import FeaturedCard from "./FeaturedCard";
import { useGetAllFeaturedProductQuery } from "@/redux/features/api/product/productApi";

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

const FeaturedProducts = () => {
  const { data } = useGetAllFeaturedProductQuery(undefined);
  console.log(data?.data);
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <HeadingTitle
        leftTitle="Feature Items"
        rightTitle="View All Feature Items"
      ></HeadingTitle>
      <div className="flex flex-wrap justify-center gap-4 overflow-x-auto">
        {data?.data.map((product: TProduct) => (
          <FeaturedCard key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
