import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="max-w-[1500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-10">
      <div className="grid grid-cols-3">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Review;
