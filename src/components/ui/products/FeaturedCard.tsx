import a1 from "../../../assets/images/a3.webp";
// import a2 from '../../../assets/images/a2.webp'
// import a3 from '../../../assets/images/a3.webp'
// import a4 from '../../../assets/images/a4.webp'

const FeaturedCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
      <img src={a1} alt="" />
      <div className="text-sm font-medium"></div>
    </div>
  );
};

export default FeaturedCard;
