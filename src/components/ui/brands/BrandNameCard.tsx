import brandLogo from "../../../assets/images/brandLogo1.avif";

const BrandNameCard = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-white border border-gray-200">
      <img src={brandLogo} alt="" />
    </div>
  );
};

export default BrandNameCard;
