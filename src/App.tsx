import { Outlet } from "react-router-dom";
import Navbar from "./shared/navigation/Navbar";
import Footer from "./shared/navigation/Footer";
import bg from "./assets/images/shared/backgroundimg2.jpg"

function App() {
  // return <div className="bg-[#282828] h-80">
  return (
    <div>
      <img src={bg} className="fixed inset-0 w-full opacity-15 -z-10" alt="" />
      <Navbar />
       <Outlet/>
       <Footer/>
    </div>
  );
}

export default App;
