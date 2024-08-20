import { useCreateCategoryMutation } from "@/redux/features/api/category/categoryApi";
import { setImage, setName } from "@/redux/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const CreateCategory = () => {
  const dispatch = useAppDispatch();
  const { name, image } = useAppSelector((state: RootState) => state.category);
  const [createCategory] = useCreateCategoryMutation(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Before");
      const category = await createCategory({ name, image }).unwrap();
      console.log("Category=>", category);
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  return (
    <div>
      <h2 className="my-10 text-3xl font-bold text-center text-green-500">
        Add New Category
      </h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category name
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
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => dispatch(setImage(e.target.value))}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-[#3a8472] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
