import { Link } from "react-router-dom";
import logo from "../../assets/images/shared/logo.png";

const Logo = ({ isLabel = true, className = "" }) => {
  return (
    <Link to={"/"}>
      {/* <div className={` flex items-center gap-2`}>
      <img src={logo} className={`${className} size-8 md:size-12`} />
  
      { isLabel && <p className="text-[white]">DRIVEX</p>}

    </div> */}

      <div className="shrink-0">
        <a href="#" title="" className="flex">
          <img
            className="w-auto h-9"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
            alt=""
          />
        </a>
      </div>
    </Link>
  );
};

export default Logo;
