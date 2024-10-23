import placeholder from "../../../assets/images/home/featured/bg-car3.jpg";

export const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.src = placeholder;
};

const CarImage = ({ url }: { url: string }) => {
  // Handle image error

  return (
    <div >
      <img
      src={url || placeholder}
      alt=" Car Image"
      className="w-full h-full rounded-lg overflow-hidden "
      onError={handleError} // Attach the error handler
    />
    </div>
  );
};

export default CarImage;