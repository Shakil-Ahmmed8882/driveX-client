
import React from "react";
import { Flex, Divider, Skeleton, Space } from "antd";

export const CardSkeleton: React.FC = () => {
  return (
    <Flex gap="middle" vertical>
      <Space>
        <div className=" w-[200px] sm:w-[300px] md:w-[360px] lg:w-[300px]">
          
            <Skeleton.Image className="!w-full" active={true}  />
          <Skeleton.Node active={true} className="!w-full"/>
          <Skeleton active={true}></Skeleton>
        </div>
      </Space>
      <Divider />
    </Flex>
  );
};
