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
        className="w-full object-cover h-full absolute top-0 z-10"
        src={backgroundImage}
        alt="background"
      />
      <div className="flex flex-col items-center justify-center text-center  h-full z-50 relative p-10">
        <div className="relative z-20">
          <h3 className="text-4xl font-bold">{title}</h3>
          <p className="mt-4 text-lg">{description}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default SidePanel;
