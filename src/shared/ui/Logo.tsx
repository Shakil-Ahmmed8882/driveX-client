import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link to={"/"}>
      {/* <div className={` flex items-center gap-2`}>
      <img src={logo} className={`${className} size-8 md:size-12`} />
  
      { isLabel && <p className="text-[white]">DRIVEX</p>}

    </div> */}

      <div className="shrink-0">
        <Link to="/" className="text-3xl flex text-[white] items-center">Drive<span className="text-primaryColor font-bold">X</span></Link>
      </div>
    </Link>
  );
};

export default Logo;
