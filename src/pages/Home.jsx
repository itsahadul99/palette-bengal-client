/* eslint-disable no-unused-vars */

import { useActionData } from "react-router-dom";
import Banner from "../components/Banner";
import AllArtCraft from "./AllArtCraft";

const Home = () => {
    const loadedData = useActionData();
    return (
        <div>
            <Banner />
            <AllArtCraft />
        </div>
    );
};

export default Home;