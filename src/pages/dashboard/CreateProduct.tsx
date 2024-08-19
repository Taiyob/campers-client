import { useCreateMutation } from "@/redux/features/api/product/productApi";
import {
  setCategoryId,
  setDescription,
  setImages,
  setName,
  setPrice,
  setStockQuantity,
} from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useState } from "react";

const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const { name, price, stockQuantity, description, categoryId, images } =
    useAppSelector((state: RootState) => state.product);
  const [create] = useCreateMutation();

  const [newImage, setNewImage] = useState("");
  const handleAddImage = () => {
    if (newImage) {
      // Update the images array
      dispatch(setImages([...images, newImage]));
      setNewImage(""); // Clear the input field after adding
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the create mutation function
      await create({
        name,
        price,
        stockQuantity,
        description,
        categoryId,
        images,
      }).unwrap();
      // Optionally handle success (e.g., show a success message or redirect)
    } catch (error) {
      // Optionally handle error (e.g., show an error message)
      console.error("Failed to create product:", error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-green-500 font-bold my-10 text-center">
        Add New Item
      </h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="stockQuantity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock Quantity
          </label>
          <input
            type="text"
            id="stockQuantity"
            name="stockQuantity"
            value={stockQuantity}
            onChange={(e) => dispatch(setStockQuantity(Number(e.target.value)))}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-5">
          <label
            htmlFor="categoryId"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            id="categoryId"
            name="categoryId"
            value={categoryId}
            onChange={(e) => dispatch(setCategoryId(e.target.value))}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="images"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image
          </label>
          <input
            type="text"
            id="images"
            name="images"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        {/* <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div> */}
        <button
          type="submit"
          onClick={handleAddImage}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
