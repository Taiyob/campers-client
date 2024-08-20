import HeadingTitle from "@/shared/title/HeadingTitle";
import ProductCard from "./ProductCard";
import { useGetAllCategoriesQuery } from "@/redux/features/api/category/categoryApi";

type TCategory = {
  _id: string;
  name: string;
  image: string;
};

const ProductCategories = () => {
  const { data } = useGetAllCategoriesQuery(undefined);
  console.log(data.data);
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <HeadingTitle
        leftTitle="Categories"
        rightTitle="View All Category Items"
      ></HeadingTitle>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data?.data.map((category: TCategory) => (
          <ProductCard key={category._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
