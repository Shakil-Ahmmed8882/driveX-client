
import Ratings from "../../../components/ui/Ratings";

const CarDetailsContent = ({title, price}:{title: string; price: string | number}) => {
  return (
    <div className=" flex justify-between">
      {/* title and rating & pricing */}
      <article className="py-5 space-y-4">
       <Ratings/>
        <h1 className="text-2xl pt-3 sm:text-3xl lg:text-4xl font-bold">{title}</h1>
      </article>
      <div className=" md:text-2xl font-bold flex gap-1"><span className="text-[gray]">$</span>{price|| '40'}/day</div>
    </div>
  );
};

export default CarDetailsContent;
