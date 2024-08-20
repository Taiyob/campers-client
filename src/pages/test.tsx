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
