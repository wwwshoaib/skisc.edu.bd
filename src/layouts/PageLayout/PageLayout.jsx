import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import Navbar from "../../components/Navbar/Navbar";


const PageLayout = () => {
    return (
        <div className="bg-blue-100">
            <HeaderPage></HeaderPage>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default PageLayout;