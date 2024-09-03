import { Menu } from "lucide-react";
import { SearchIcon } from "../assets/icons/Icons";
import { useAppDispatch } from "../redux/hooks";
import { setNavbarState } from "../redux/features/global/global.slice";
import SidebarProfile from "../modules/userDashboard/dashboard/features/profile/Profile";
import { useState } from "react";

const DashboardNavbar = (): JSX.Element => {
  const dispach = useAppDispatch()
  const [showProfile, setShowProfile] = useState(false)

  return (
    <header className="flex h-16 pt-16 pb-8 items-center gap-4 bg-[#252525] lg:h-[60px]">
      <Menu onClick={() => dispach(setNavbarState())} className="cursor-pointer md:hidden block ml-6"/>
      <h1 className="flex-1 font-semibold text-lg "></h1>
      <div className="flex items-center gap-4">
        <form className="flex-1 sm:flex-initial ">
          <div className="relative flex items-center bg-[#3e3e3e] py-2 rounded-full px-3">
            <SearchIcon />
            <input
              type="text"
              className=" bg-transparent focus-within:outline-none pl-1 rounded-full "
              placeholder="search..."
              name="search"
            />
          </div>
        </form>
        <button
          onClick={() => setShowProfile(true)}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
          type="button"
          id="radix-:r1g:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1724740805~exp=1724744405~hmac=867cfdfa78932efeb71c61661fbbd449666666d2a4bb9c30b826981632974768&w=740"
            width={32}
            height={32}
            className="rounded-full"
            alt="Avatar"
            style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
          />
          <span className="sr-only">Toggle user menu</span>
        </button>
      </div>

      {/* Profile  */}
      
      <SidebarProfile {...{showProfile, setShowProfile}}/>
    </header>
  );
};

export default DashboardNavbar;
