import { IoBagHandleOutline } from "react-icons/io5";
import logo from "../assets/images/logo.png";
import { LiaCcAmazonPay } from "react-icons/lia";
import { FaCcPaypal, FaGooglePay } from "react-icons/fa";
import product from "../assets/images/saleproduct1.webp";

const CheckOut = () => {
  return (
    <>
      <div className="relative flex flex-col items-center pb-4 mt-10 border-b-2 border-gray-300">
        {/* Centered Logo */}
        <img src={logo} alt="Logo" className="h-16" />

        {/* Icon positioned at the end quarter of the right side */}
        <div className="absolute top-0 right-1/4">
          <IoBagHandleOutline size={24} className="text-gray-600" />
        </div>
      </div>
      <div className="flex h-screen">
        <div className="w-1/2 h-screen space-y-3 bg-white">
          <h4 className="my-2 text-center text-gray-500">Checkout</h4>
          <div className="flex items-center justify-center gap-3">
            <button className="flex items-center px-5 text-white rounded btn btn-primary">
              shop <LiaCcAmazonPay className="text-white size-10" />
            </button>
            <button className="px-5 text-white rounded btn btn-warning">
              PayPal
              <FaCcPaypal className="text-white bg-transparent size-10" />
            </button>
            <button className="px-5 rounded btn btn-neutral">
              <FaGooglePay className="text-white size-10" />
            </button>
          </div>
          <div className="flex flex-col w-full px-5">
            <div className="divider">or</div>
          </div>
          <div className="p-5">
            <h2 className="mb-3 text-2xl font-bold text-gray-500">
              Billing Details
            </h2>

            <form className="">
              <div className="grid grid-cols-2 space-x-2">
                <div className="mb-5">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Company Name(Optional)
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select your country<span className="text-red-500">*</span>
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                State Address<span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 space-x-2">
                <div className="mb-5">
                  <input
                    type="text"
                    id="base-input"
                    placeholder="House number and street name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    id="base-input"
                    placeholder="Apartment, suite,unit etc. (optional)"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Town/City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Provinence<span className="text-red-500">*</span>
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Posy Code<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-px h-screen bg-black"></div>
        <div className="w-1/2 h-screen bg-gray-100">
          <div className="sticky top-0 p-5 space-y-5">
            <div className="flex items-center justify-between">
              <img className="size-10" src={product} alt="" />
              <h3>"Camper on tour" Enamel Mug</h3>
              <h5>tk45.00</h5>
            </div>
            <div className="flex items-center justify-between">
              <h3>Subtotal</h3>
              <h5>45.00</h5>
            </div>
            <div className="flex items-center justify-between">
              <h3>Shipping</h3>
              <h5>Enter shipping address</h5>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Total</h3>
              <h5>45.00</h5>
            </div>
            <button className="w-full py-2 text-white bg-red-500">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
