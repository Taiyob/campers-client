const CategoryFilter = () => {
  return (
    <div className="collapse collapse-arrow bg-[#f5f5f5]">
      <input
        type="checkbox"
        title="filter"
        name="my-accordion-2"
        className="peer"
      />
      <div className="text-xl font-medium collapse-title peer-checked:bg-[#f5f5f5]">
        Category
      </div>
      <div className="collapse-content peer-checked:block">
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" className="checkbox checkbox-xs" />
          <span>category(3)</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
