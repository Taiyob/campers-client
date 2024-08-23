const SortingProduct = () => {
  return (
    <div className="">
      <select className="w-full max-w-xs select" name="shortBy" title="shortBy">
        <option disabled>Short by:</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </div>
  );
};

export default SortingProduct;
