import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="px-2">
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;