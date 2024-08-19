const Product = () => {
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
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex "
      >
        <div className="flex items-center justify-center w-full h-48 bg-gray-300 sm:w-96 dark:bg-gray-700">
          <h1>Left</h1>
        </div>
        <div className="w-full bg-gray-400">
          <h1>Right</h1>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Product;
