import HeadingTitle from "@/shared/title/HeadingTitle";
import BrandNameCard from "./BrandNameCard";

const BrandName = () => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <HeadingTitle leftTitle="Some Of The BIG Name Brands We Stock"></HeadingTitle>
      <div className="grid grid-cols-5">
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
        <BrandNameCard></BrandNameCard>
      </div>
    </div>
  );
};

export default BrandName;
