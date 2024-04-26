import { Outlet } from "react-router-dom";
import Nav from "../components/shayred/Nav";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../components/shayred/Footer";

const MainLayout = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 dark:border-violet-600"></div>
        </div>
    }
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;