import { Link } from "react-router-dom";
import category1 from "../../../assets/images/category1.jpg";

const ProductCard = () => {
  return (
    <Link to="" className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
          aspect-square 
          w-full 
          relative 
          overflow-hidden 
          rounded-xl
        "
        >
          <img
            className="
            object-cover 
            h-full 
            w-full 
            group-hover:scale-110 
            transition
          "
            src={category1}
            alt="Room"
          />
          <div
            className="
          absolute
          top-3
          right-3
        "
          ></div>
        </div>
        <div className="font-semibold text-lg"></div>
        <div className="font-light text-neutral-500">5 nights</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">Tools</div>
          <div className="font-light">All Things</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
