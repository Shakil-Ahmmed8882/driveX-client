import { Card } from "antd";

const CarsLoadingSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <Card className="animate-pulse" loading={true}></Card>
        <Card className="animate-pulse" loading={true}></Card>
        <Card className="animate-pulse" loading={true}></Card>
        <Card className="animate-pulse" loading={true}></Card>
        <Card className="animate-pulse" loading={true}></Card>
        <Card className="animate-pulse" loading={true}></Card>
        <Card className="animate-pulse" loading={true}></Card>
        <Card className="animate-pulse" loading={true}></Card>
        <Card className="animate-pulse" loading={true}></Card>
      </div>
    </>
  );
};

export default CarsLoadingSkeleton;
