type TSidePanelProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

const SidePanel = ({
  title,
  description,
  backgroundImage,
}: TSidePanelProps) => {

  return (
    <div className="hidden md:block md:w-1/2 bg-[#232323] relative">
      <img
        className="h-[100vh] w-full object-cover  absolute top-0 z-10 "
        src={backgroundImage}
        alt="background"
      />
      <div className="flex flex-col items-center justify-center text-center text-white h-full z-50 relative p-10">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="mt-4 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default SidePanel;
