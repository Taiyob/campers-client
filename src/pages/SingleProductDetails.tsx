import ImageMagnifier from "@/components/ImageMagnifier";
import product1 from "../assets/images/saleproduct1.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const SingleProductDetails = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="max-w-[1500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="grid grid-cols-2 gap-2 mt-10">
        <div className="w-full">
          <ImageMagnifier
            // src="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg"
            src={product1}
            width={300}
            height={200}
            magnifierHeight={100}
            magnifierWidth={100}
            zoomLevel={2}
            alt="Sample Image"
            className="w-full"
          />
        </div>
        <div className="">
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
          <h1 className="mb-10 text-4xl font-bold">
            Addis 3 in 1 Sponge Scourer (3pk)
          </h1>
          <span className="text-2xl font-semibold">
            <sup>tk</sup>45.00
          </span>
          <h3 className="mt-5 text-xl text-gray-400">3 in 1 Sponge Set</h3>
          <div className="flex items-center w-1/5 my-10 bg-gray-100 border border-gray-100 rounded-full">
            <button
              onClick={decrement}
              className="px-4 py-2 text-xl font-semibold bg-gray-100 border-r border-black rounded-tl-full rounded-bl-full"
            >
              -
            </button>
            <span className="mx-4 text-xl">{count}</span>
            <button
              onClick={increment}
              className="px-4 py-2 text-xl font-semibold bg-gray-100 border-l border-black rounded-tr-full rounded-br-full"
            >
              +
            </button>
            <button className="ml-3 text-white btn btn-active btn-primary">
              Add to basket
            </button>
          </div>
          <div className="mt-5">
            <Link
              to="/"
              className="flex items-center gap-3 text-xl text-green-500"
            >
              <CiHeart className="text-xl text-green-500" />
              Add to Wishlist
            </Link>
          </div>
          <h3 className="my-3 text-gray-600">Brand:CAM201317</h3>
          <h3 className="text-gray-600 ">
            Categories: Camp Equipment, Camp/Hike, Washing Up
          </h3>
        </div>
      </div>
      <div className="p-5 mt-10 space-y-5 bg-gray-200">
        <h2 className="text-2xl font-bold text-black">Description</h2>
        <p>
          DC provides a comprehensive awning installation service through our
          skilled team of professionals. Our experienced team has adeptly
          installed numerous awnings on a variety of customer vehicles. We
          adhere to a non-invasive approach when it comes to van fittings, and
          we only consider drilling if the manufacturer explicitly recommends it
          for a particular adapter and vehicle. Once you've made your purchase,
          we will coordinate a fitting appointment with you. However, if you
          have a specific date in mind, please reach out to us in advance to
          ensure we can accommodate your needs. For awnings exceeding 3 meters
          in length, a two-person installation team is necessary. Please be sure
          to select the appropriate awning size option to align with your
          requirements.
        </p>
        <h2 className="text-2xl font-bold text-black">Terms & conditions:</h2>
        <p>
          Awnings must be new and boxed, purchased from DC Leisure Group to
          ensure that all parts are present and the item is not faulty. Customer
          must contact DC Leisure to schedule a fitting date before purchasing
          to ensure we can meet your requirements.
        </p>
        <p>From time to time we have special offers on awnings.</p>
        <p>Please check before purchasing this service.</p>
      </div>
    </div>
  );
};

export default SingleProductDetails;
