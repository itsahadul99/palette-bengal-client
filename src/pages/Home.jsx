/* eslint-disable no-unused-vars */

import { useActionData } from "react-router-dom";
import Banner from "../components/Banner";
import AllArtCraft from "./AllArtCraft";

const Home = () => {
    const loadedData = useActionData();
    return (
        <div className="text-black dark:text-black">
            <Banner />
            <AllArtCraft />
        </div>
    );
};

export default Home;