import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode; // This can be a component or an SVG
};

type FeatureItemProps = {
  feature: Feature;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <div className="p-6 bg-[#252525db] shadow-md rounded-lg  ">
      <div className="text-4xl mb-4 text-primaryColor">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-[#aaa9a9]">{feature.description}</p>
    </div>
  );
};

export default FeatureItem;
