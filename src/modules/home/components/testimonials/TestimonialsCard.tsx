import React from "react";
import Ratings from "../../../../components/ui/Ratings";

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, image, text }) => {
  return (
    <div className="bg-[#2a2a2a] p-4 rounded-lg shadow-lg text-white">
      <div className="flex  mb-4">
        <img src={image} alt={name} className="size-10  rounded-full mr-4" />
        <div>
          <article className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">{name}</h3>
          <Ratings className={'size-[11px]'} />

          </article>
          <p className="text-green-400 text-sm mt-2">{position}</p>
        </div>
      </div>
      <p className="text-md description italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;
