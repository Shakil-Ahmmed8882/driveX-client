const CarImage = ({ url }: { url: string }) => {
  return (
    <img
      src={
        url ||
        "https://i.pinimg.com/564x/fd/18/0b/fd180b826f3f21fde530e8a4e38899e5.jpg"
      }
      alt="Car Image"
      width="800"
      height="600"
      className="w-full rounded-lg overflow-hidden object-cover aspect-[4/3]"
    />
  );
};

export default CarImage;
