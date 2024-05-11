import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
  return (
    <div className>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;