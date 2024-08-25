/*
    import { useState } from "react";

const Product = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleRangeChange = (value: number) => {
    setMaxValue(value);
  };

  const handleMinInputChange = (value: number) => {
    setMinValue(value);
    if (value <= maxValue) {
      setMaxValue(value); // Update range slider if within bounds
    }
  };

  const handleMaxInputChange = (value: number) => {
    setMaxValue(value);
    if (value >= minValue) {
      setMinValue(value); // Update range slider if within bounds
    }
  };

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

          <div className="collapse collapse-arrow bg-[#f5f5f5]">
            <input
              type="checkbox"
              title="filter"
              name="my-accordion-2"
              className="peer"
            />
            <div className="text-xl font-medium collapse-title peer-checked:bg-[#f5f5f5]">
              Price
            </div>
            <div className="collapse-content peer-checked:block">
              <input
                type="range"
                min={minValue}
                max={100}
                value={maxValue}
                onChange={(e) => handleRangeChange(Number(e.target.value))}
                className="range range-xs"
              />
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 input input-bordered">
                  <span>$</span>
                  <input
                    type="text"
                    className="grow"
                    value={minValue}
                    onChange={(e) =>
                      handleMinInputChange(Number(e.target.value))
                    }
                    placeholder="$"
                  />
                </label>

                <label className="flex items-center gap-2 input input-bordered">
                  <span>$</span>
                  <input
                    type="text"
                    className="grow"
                    value={maxValue}
                    onChange={(e) =>
                      handleMaxInputChange(Number(e.target.value))
                    }
                    placeholder="$"
                  />
                </label>
              </div>
            </div>
          </div>
          </div>
          <div className="w-full bg-[#f5f5f5]">
            <h1>Right</h1>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  
  export default Product;
  
*/

/*
    import { useState } from "react";

const Product = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (value: number) => {
    setRangeValue(value);
    setMinValue(0);
    setMaxValue(value);
  };

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

          <div className="collapse collapse-arrow bg-[#f5f5f5]">
            <input
              type="checkbox"
              title="filter"
              name="my-accordion-2"
              className="peer"
            />
            <div className="text-xl font-medium collapse-title peer-checked:bg-[#f5f5f5]">
              Price
            </div>
            <div className="collapse-content peer-checked:block">
              <input
                type="range"
                min={minValue}
                max={100}
                value={rangeValue}
                onChange={(e) => handleRangeChange(Number(e.target.value))}
                className="range range-xs"
              />
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 input input-bordered">
                  <span>$</span>
                  <input
                    type="text"
                    className="grow"
                    value={minValue}
                    onChange={(e) => setMinValue(Number(e.target.value))}
                    placeholder="$"
                  />
                </label>

                <label className="flex items-center gap-2 input input-bordered">
                  <span>$</span>
                  <input
                    type="text"
                    className="grow"
                    value={maxValue}
                    onChange={(e) => setMaxValue(Number(e.target.value))}
                    placeholder="$"
                  />
                </label>
              </div>
            </div>
          </div>
          </div>
          <div className="w-full bg-[#f5f5f5]">
            <h1>Right</h1>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  
  export default Product;
  
*/

/*
  <button
              onClick={decrement}
              className="text-xl font-semibold bg-gray-100 border-0 border-r-2 border-black rounded-none btn btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-gray-100 hover:border-black"
            >
              -
            </button>
            <span className="mx-4 text-xl">{count}</span>
            <button
              onClick={increment}
              className="text-xl font-semibold bg-gray-100 border-0 border-l-2 border-black rounded-none btn btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-gray-100 hover:border-black"
            >
              +
            </button>
            <button className="ml-3 bg-red-600 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Add to basket
            </button>
*/

{
  /* <div className="divider divider-vertical"></div> */
}
{
  /* <div className="w-1 h-full bg-gray-300"></div> */
}

// single umage upload:

/*
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

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const { name, price, stockQuantity, description, categoryId, images } =
    useAppSelector((state: RootState) => state.product);
  const [create] = useCreateMutation();

  //const [newImage, setNewImage] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.status === 200) {
        console.log(data);
        // data.data.display_url
        return data.data.url; // Get the URL of the uploaded image
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Failed to upload image:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (newImage) {
    //   dispatch(setImages([...images, newImage]));
    // }

    let imageUrl = "";

    if (newImage) {
      imageUrl = await handleImageUpload(newImage);
      if (imageUrl) {
        dispatch(setImages([...images, imageUrl]));
      }
    }

    try {
      await create({
        name,
        price,
        stockQuantity,
        description,
        categoryId,
        images: imageUrl ? [...images, imageUrl] : images,
        //images: newImage ? [...images, newImage] : images,
      }).unwrap();
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <h2 className="my-10 text-3xl font-bold text-center text-green-500">
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
            rows={4}
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
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 w-32 h-32 object-cover"
            />
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;

*/
