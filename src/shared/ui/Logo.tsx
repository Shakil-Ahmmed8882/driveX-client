import { Link } from "react-router-dom";
import logo from "../../assets/images/shared/logo.png";

const Logo= ({isLabel = true, className = ''}) => {
  return (
    <Link to={'/'}>
    <div className={` flex items-center gap-2`}>
      <img src={logo} className={`${className} size-8 md:size-12`} />
  
      { isLabel && <p className="text-[white]">DRIVEX</p>}

    </div>
    </Link>
  );
};

export default Logo; 