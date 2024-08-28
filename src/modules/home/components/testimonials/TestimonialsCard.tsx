import React from "react";

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, image, text }) => {
  return (
    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg text-white">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-400">{position}</p>
        </div>
      </div>
      <p className="text-lg italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;
