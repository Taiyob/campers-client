const DisPlayProductByNumberAndPagination = () => {
  return (
    <div className="">
      <select className="w-full max-w-xs select" name="display" title="display">
        <option disabled selected>
          Display
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </div>
  );
};

export default DisPlayProductByNumberAndPagination;
