import { FillStar } from "../../assets/icons/Index";

const Ratings = (): JSX.Element => {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4].map((star) => (
        <FillStar className="text-[#f09903]" />
      ))}
      <FillStar className="text-[gray]" />
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">(4.8)</span>
      </div>
    </div>
  );
};

export default Ratings;
