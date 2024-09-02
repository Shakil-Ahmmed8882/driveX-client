import { Button } from "antd";

interface PrimaryButtonProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode; // Allow for custom button text or other elements
  type?: "default" | "primary" | "dashed" | "link"; // Allow different button types
  loading?: boolean; // Add support for loading state
}

const PrimaryButton = ({
  onClick,
  className = "",
  children = "Button", // Default text if none provided
  type = "primary",
  loading = false,
}: PrimaryButtonProps): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      className={`${className} w-1/3 primaryGradient/80 border-none !text-white hover:!primaryGradient/90`}
      type={type}
      loading={loading}
    >
      {children || "Book"}
    </Button>
  );
};

export default PrimaryButton;