import { Link } from "react-router-dom";

type THeadingTitle = {
  leftTitle?: string;
  rightTitle?: string;
};

const HeadingTitle = ({ leftTitle, rightTitle }: THeadingTitle) => {
  return (
    <div className="flex items-center justify-between my-10">
      <h2 className="text-2xl font-bold text-black">{leftTitle}</h2>
      <Link to="">
        <h5 className="text-sm font-semibold text-red-500">{rightTitle}</h5>
      </Link>
    </div>
  );
};

export default HeadingTitle;
