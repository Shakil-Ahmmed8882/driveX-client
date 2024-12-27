import React from 'react';

// Define props type
interface OverviewCardProps {
  title: string;
  value: string | number;
  className?: string ;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, className }) => (
  <div className={`${className} bg-gradient-to-r from-[#2d2d2d] to-[#2B2B2B] p-7 rounded-lg shadow-lg w-full mt-4 lg:mt-0`}>
    <h2 className="text-xl !text-[#9e9e9e] leading-10 font-semibold">{title}</h2>
    <p className="text-4xl mt-4">
      <span className="!text-[white] pr-3 ">{value}</span>
    </p>
  </div>
);

export default OverviewCard;
