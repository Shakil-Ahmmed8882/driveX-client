const CarFeatures = () => {
    const features = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 fill-primaryColor text-primaryColor"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        ),
        text: '5 Passengers',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 fill-primaryColor text-primaryColor"
          >
            <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"></path>
            <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"></path>
            <path d="M10 20h4"></path>
            <circle cx="16" cy="20" r="2"></circle>
            <circle cx="8" cy="20" r="2"></circle>
          </svg>
        ),
        text: '2 Luggage',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 fill-primaryColor text-primaryColor"
          >
            <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <path d="M6 8h12"></path>
            <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"></path>
            <path d="M6.6 15.6A2 2 0 1 0 10 17v-5"></path>
          </svg>
        ),
        text: 'Air Conditioning',
      },
    ];
  
    return (
      <div className="flex flex-wrap gap-4 pb-6">
        {features.map((feature, index) => (
          <CarFeature key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
    );
  };
  
  export default CarFeatures;



type CarFeatureProps = {
  icon: React.ReactNode;
  text: string;
};

const CarFeature: React.FC<CarFeatureProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="description">{text}</span>
    </div>
  );
};
