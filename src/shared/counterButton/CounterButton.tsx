import { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  return (
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
  );
};

export default CounterButton;
