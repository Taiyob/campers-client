import DisPlayProductByNumberAndPagination from "@/components/ui/filter/DisPlayProductByNumberAndPagination";
import ProductFilter from "@/components/ui/filter/ProductFilter";
import SortingProduct from "@/components/ui/filter/SortingProduct";
import SaleCard from "@/components/ui/products/SaleCard";
import { useGetAllProductQuery } from "@/redux/features/api/product/productApi";
import saleProduct1 from "../assets/images/saleproduct1.webp";

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

const Product = () => {
  const { data } = useGetAllProductQuery(undefined);
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>

      <div
        role="status"
        className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex "
      >
        <div className=" w-full h-48 bg-[#f5f5f5] sm:w-96 dark:bg-gray-700">
          <h1 className="p-3 text-2xl font-bold">Filters</h1>
          <ProductFilter />
        </div>

        <div className="w-full bg-[#f5f5f5]">
          <h1 className="p-3 text-2xl font-bold">Products</h1>
          <div className="flex items-center justify-between px-3">
            <div className="">
              <h5>Showing 1-24 of 42 products</h5>
            </div>
            <DisPlayProductByNumberAndPagination />
            <SortingProduct />
            <div className="">
              <h3>View</h3>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-3">
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
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Product;
