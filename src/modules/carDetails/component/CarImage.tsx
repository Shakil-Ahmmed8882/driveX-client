import placeholder from "../../../assets/images/home/featured/bg-car3.jpg";

const CarImage = ({ url }: { url: string }) => {
  // Handle image error
  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = placeholder;
  };

  return (
    <img
      src={url || placeholder}
      alt="Car Image"
      width="800"
      height="600"
      className="w-full rounded-lg overflow-hidden object-cover aspect-[4/3]"
      onError={handleError} // Attach the error handler
    />
  );
};

export default CarImage;