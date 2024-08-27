import React from 'react';

// Define props type
interface OverviewCardProps {
  title: string;
  value: string | number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => (
  <div className="bg-gradient-to-r from-[#2d2d2d] to-[#2B2B2B] p-7 rounded-lg shadow-lg">
    <h2 className="text-xl text-[#9e9e9e] leading-10 font-semibold">{title}</h2>
    <p className="text-4xl mt-4">
      <span className="text-[gray] pr-3 ">$</span>{value}
    </p>
  </div>
);

export default OverviewCard;
