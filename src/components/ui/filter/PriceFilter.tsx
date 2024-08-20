import { useState } from "react";

const PriceFilter = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (value: number) => {
    setRangeValue(value);
    setMinValue(0);
    setMaxValue(value);
  };
  return (
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
  );
};

export default PriceFilter;
