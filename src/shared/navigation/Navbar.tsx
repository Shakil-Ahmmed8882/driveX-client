// import { Link, NavLink } from "react-router-dom";
// import { homePaths } from "../../routes/homeRoutes";
// import Logo from "../ui/Logo";
// import DrawerNavigation from "./DrawerNavigation";
// import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import Container from "../layouts/Container";
// import { ROLE } from "../constants/global";
// import SearchIcon from "../ui/search/ui/SearchIcon";
// import SearchResultLayout from "../ui/search/SearchResultLayout";
// import { setSearchClick } from "../../redux/features/global/global.slice";

// const Navbar = () => {

//   return (
//     <Container className="pb-0 pt-3">
//       <header className="md:h-24 border-b pb-4 relative border-[#676767] z-50 items-center  flex justify-between ">
//         <article className="flex gap-3  items-center  ">
//           <Logo />
//           <article className=" text-[#a6a5a5] hidden md:flex gap-3 pl-8">
//             {homePaths?.map((route) => (
//               <NavLink
//                 to={route.path}
//                 className={({ isActive }) => (isActive ? "text-white" : "")}
//               >
//                 {route?.name}
//               </NavLink>
//             ))}

//             {/* Dashboard */}
//             {user && (
//               <NavLink
//                 to={
//                   user?.role == ROLE.USER
//                     ? "/user/dashboard"
//                     : "/admin/dashboard"
//                 }
//                 className={({ isActive }) =>
//                   isActive ? "text-white" : " -ml-4"
//                 }
//               >
//                 Dashboard
//               </NavLink>
//             )}
//           </article>
//         </article>

//         {/* lg */}
//         <div>
//           <div className="flex items-center gap-6">
//             <div className="flex justify-end w-full ml-auto ">
//               <SearchIcon onClick={handleSearchClick}/>
//               <SearchResultLayout/>
//             </div>

//             <div className="hidden md:flex items-center gap-6">

//             {user ? (
//               <div className="primaryGradient p-[2px] active:p-5 rounded-lg">
//               <button
//                 onClick={() => dispach(logout())}
//                 className="text-[white] text-sm bg-[#171919]  p-2 rounded-lg px-5"
//               >
//                 Logout
//               </button>
//                 </div>
//             ) : (
//               <Link to={"/sign-up"}>
//                 <div className="primaryGradient p-[2px] active:p-5 rounded-lg">
//                 <button className="text-[white] text-sm bg-[#171919]  p-2 rounded-lg px-5">
//                   Sign up
//                 </button>

//                 </div>
//               </Link>
//             )}
//             </div>

//           </div>
//           {/* <div className="hidden md:flex">
//       <button className="text-[white] text-sm bg-[#313030]  uppercase p-2 rounded-lg px-5">Sign Up</button>
//       </div> */}
//         </div>

//         {/* sm */}
//         <DrawerNavigation />
//       </header>
//     </Container>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import Logo from "../ui/Logo"; // Your custom Logo component
import { homePaths } from "../../routes/homeRoutes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { setSearchClick } from "../../redux/features/global/global.slice";

import { SearchIcon } from "lucide-react";
import SearchResultLayout from "../ui/search/SearchResultLayout";

import DrawerNavigation from "./DrawerNavigation";
import Container from "../layouts/Container";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispach = useAppDispatch();

  // search
  const handleSearchClick = () => {
    dispach(setSearchClick(true));
  };

  return (
    <header className=" bg-[#0000003b] top-0 sticky right-0 left-0  z-50">
      <Container className="!p-0 !py-8">
        <div className="">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <Link to="/" title="Home">
                <Logo /> {/* Use your Logo component */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden ml-10 mr-auto space-x-8   lg:flex md:items-center md:justify-start ">
              {homePaths?.map((item) => (
                <Link to={item.path} key={item.name}>
                  <a className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>

            <div className="">
              <div className="flex  items-center gap-3 md:mr-5  ">
                <SearchIcon
                  className="size-6 text-[#bdbdbd] cursor-pointer hover:text-white"
                  onClick={handleSearchClick}
                />{" "}
                <SearchResultLayout />
                {/* Mobile Menu Button */}
                <DrawerNavigation />
              </div>
            </div>

            {/* Sign Up Button */}
            <div className="relative hidden lg:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg"></div>
              {user ? (
                <button
                  onClick={() => dispach(logout())}
                  className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full w-full"
                >
                  Sign out
                </button>
              ) : (
                <Link
                  to="/sign-up"
                  className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full w-full"
                >
                  Sign up
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
