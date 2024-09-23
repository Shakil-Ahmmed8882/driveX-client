<div className="lg:flex  rounded overflow-hidden shadow-lg bg-white m-4">
  
  {/* Car Image */}
  <div className="lg:w-1/3 w-full"></div>

  {/* Car Details */}
  <div className="lg:w-2/3 px-6 py-4 flex flex-col justify-between">
    <div>
      <h2 className="font-bold text-2xl mb-2"></h2>
      <p className="text-[#989898] text-md mb-4"></p>

      <div className="text-[#7a7a7a] mb-4">
        <div className="hidden md:flex justify-between">
          <span className="block border p-1 rounded-lg"></span>
          <span className="block border p-1 rounded-lg"></span>
        </div>

        <div className="hidden md:flex justify-between">
          <span className="flex items-center gap-2 border p-1 rounded-lg my-2 ">
            Color:
            <span className="w-5 h-5 rounded"></span>
          </span>
          <span className="block border p-1 rounded-lg my-2">
            <span className="font-bold"></span>
          </span>
        </div>

        <div className="flex justify-between items-center gap-3 mt-3"></div>
      </div>
    </div>
  </div>
</div>;
import React from "react";
import { Flex, Divider, Skeleton, Space } from "antd";

export const CardSkeleton: React.FC = () => {
  return (
    <Flex gap="middle" vertical>
      <Space>
        <div className=" !mx-auto  w-[300px]  sm:w-[500px] md:w-[360px] lg:w-[400px] md:flex gap-8 ">
          <Skeleton.Image className="!w-full h-full" active={true} />
          <Skeleton active={true}></Skeleton>
        </div>
      </Space>
      <Divider />
    </Flex>
  );
};
