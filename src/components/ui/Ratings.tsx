import { FillStar } from "../../assets/icons/Index";

const Ratings = ({times = [1,2,3,4], unfilled = true, className = ''}): JSX.Element => {
  return (
    <div className={` flex items-center gap-2`}>
      {[...times].map(() => (
        <FillStar className={`${className} text-[#f09903] size-5`} />
      ))}
      {
        unfilled && <FillStar className={`text-[gray] |`} />
      }
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">(4.8)</span>
      </div>
    </div>
  );
};

export default Ratings;
