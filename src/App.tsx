import { Outlet } from "react-router-dom";
import Navbar from "./shared/navigation/Navbar";
import Footer from "./shared/navigation/Footer";

function App() {
  // return <div className="bg-[#282828] h-80">
  return (
    <div>
      <Navbar />
       <Outlet/>
       <Footer/>
    </div>
  );
}

export default App;
