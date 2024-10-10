import { Outlet } from "react-router-dom";

import { AppFooter } from "./shared/navigation/Footer";
import Navbar from "./shared/navigation/Navbar";



function App() {
  // return <div className="bg-[#282828] h-80">
  return (
    <div>
      <Navbar/>
        <Outlet/>
       <AppFooter/>
    </div>
  );
}

export default App;
