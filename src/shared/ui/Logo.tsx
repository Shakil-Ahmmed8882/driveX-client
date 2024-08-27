import logo from "../../assets/images/shared/logo.png";

const Logo= ({isLabel = true}) => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} className="size-12" />
  
      { isLabel && <p className="text-[white]">DRIVEX</p>}

    </div>
  );
};

export default Logo; 