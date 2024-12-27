import { Link } from "react-router-dom";
import profileImg from "../../../../../assets/images/dashboard/profileDrivex.jpg";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectCurrentUser } from "../../../../../redux/features/auth/authSlice";
import { Close } from "../../../../../assets/icons/Icons";
import { useRef } from "react";
import useClickOutside from "../../../../../hooks/useClickOutside";
type SidebarProfileProps = {
  showProfile: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarProfile: React.FC<SidebarProfileProps> = ({ showProfile, setShowProfile }) => {

  const  user  = useAppSelector(selectCurrentUser);
  const email = user?.email
  const userName = user?.email.split("@")[0];
  const sidebarProfileRef = useRef(null)
  useClickOutside(sidebarProfileRef, ()=> setShowProfile(false))


  return (
    <div
    ref={sidebarProfileRef}
    className={`
    ${showProfile?'visible w-80 !text-white translate-x-0':'translate-x-80 invisible w-80'}
    transition-all duration-500
    
    fixed z-50 overflow-y-auto pb-32 right-0 top-0 pt-32 bg-[#2D2D2F]  shadow-lg rounded-lg p-6 h-screen `}>
      <button onClick={() => setShowProfile(false)} className="absolute right-5 top-8">
        <Close />
      </button>
      {/* Profile Info */}
      <div className="text-center mb-6">
        <div className="flex justify-center">
          <img
            src={profileImg} // Replace with your image source
            alt="Profile"
            className="rounded-full w-24 h-24 border-4 border-white -mt-16 shadow-lg"
          />
        </div>

        <h2 className="mt-7 text-xl font-semibold text-white">
          {userName || "Someone"}
        </h2>
        <p className="text-sm description pt-2">{email}</p>
        <div className="flex justify-center space-x-8 mt-4">
          <div>
            <span className="block text-xl font-bold ">20,160</span>
            <span className="text-sm text-[#c3c3c3]">Follower</span>
          </div>
          <div>
            <span className="block text-xl font-bold ">478,888</span>
            <span className="text-sm text-[#c3c3c3]">Following</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="space-y-2">
        <Link
          to="/user/dashboard/coming-soon"
          className="flex items-center  hover:bg-[black] p-2 rounded-md"
        >
          <span className="text-sm">Profile</span>
        </Link>
        <Link
          to="/user/dashboard/coming-soon"
          className="flex items-center  hover:bg-[black] p-2 rounded-md"
        >
          <span className="text-sm">Followers</span>
        </Link>
        <Link
          to="/user/dashboard/coming-soon"
          className="flex items-center  hover:bg-[black] p-2 rounded-md"
        >
          <span className="text-sm">Friends</span>
        </Link>
        <Link
          to="/user/dashboard/coming-soon"
          className="flex items-center  hover:bg-[black] p-2 rounded-md"
        >
          <span className="text-sm">Gallery</span>
        </Link>
      </div>

      {/* Post Input */}
      <div className="mt-6">
        <textarea
          placeholder="What are you thinking..."
          className="w-full p-3 rounded-md border-none !bg-[#2C2C2E] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button className="w-full  bg-primaryColor mt-20 text-white py-2 rounded-md hover:bg-blue-600">
          Post
        </button>
      </div>
    </div>
  );
};

export default SidebarProfile;
