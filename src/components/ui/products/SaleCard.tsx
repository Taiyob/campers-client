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
    <div className="w-full max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <Link to="/products-details">
        <img className="p-8 rounded-t-lg" src={img} alt="product image" />
      </Link>
      <div className="px-5 pb-5">
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <span className="mr-3 text-2xl font-bold text-red-700 dark:text-white">
              ${currentPrice}
            </span>
            {previousPrice && (
              <span className="text-xl text-gray-600 line-through">
                ${previousPrice}
              </span>
            )}
          </div>
          {/* You can add a badge or other elements here if needed */}
        </div>
        <Link to="/product-details" className="block mb-4">
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
            className="text-white hover:text-white hover:font-extrabold w-full bg-red-700 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
