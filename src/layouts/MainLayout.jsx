import { Outlet } from "react-router-dom";
import Nav from "../components/shayred/Nav";
import Footer from "../components/shayred/Footer";

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;