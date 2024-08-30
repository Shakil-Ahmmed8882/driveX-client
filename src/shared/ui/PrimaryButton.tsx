import { Button } from "antd";

const PrimaryButton = ({
  clickHanlder,
}: {
  clickHanlder: () => void;
}): JSX.Element => {
  return (
    <Button
      onClick={clickHanlder}
      className="w-1/3 bg-primaryColor/80 border-none !text-white hover:!bg-primaryColor/90"
    >
      Book
    </Button>
  );
};

export default PrimaryButton;
