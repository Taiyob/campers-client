import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const ProductFilter = () => {
  return (
    <div>
      <PriceFilter />
      <CategoryFilter />
    </div>
  );
};

export default ProductFilter;
