import { Link } from "react-router-dom";

type TItemInfo = {
  img: string;
  currentPrice: number;
  previousPrice?: number;
  itemName: string;
  brandName: string;
};

const SaleCard = ({
  currentPrice,
  previousPrice,
  itemName,
  brandName,
  img,
}: TItemInfo) => {
  return (
    <Link to="/products-details">
      <div className="w-full max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={img} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="mr-3 text-2xl font-bold text-red-700 dark:text-white">
                ${currentPrice}
              </span>
              <span className="text-xl text-gray-600 line-through">
                ${previousPrice}
              </span>
            </div>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"></span> */}
          </div>
          <Link to="#">
            <h5 className="font-semibold tracking-tight text-black text-small dark:text-white">
              {itemName}
            </h5>
          </Link>
          <div className="flex items-center justify-between mt-5">
            <span className="text-xl font-semibold text-gray-300 dark:text-white">
              {brandName}
            </span>
          </div>
          <div className="flex justify-end mt-10">
            <Link
              to="/cart"
              type="submit"
              className="text-white hover:text-white hover:font-extrabold w-full bg-red-700 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SaleCard;
