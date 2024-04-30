/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ArtistInStudio from "../components/ArtistInStudio";
import ArtCraftCategory from "./ArtCraftCategory";
import CreativeModernArtist from "../components/CreativeModernArtist";
import { Helmet } from "react-helmet-async";
import UpcomingEvent from "../components/UpcomingEvent";

const Home = () => {
    const loadedData = useLoaderData();
    return (
        <div className="text-black dark:text-black">
            <Helmet>
                <title>Palette Bengal || Home</title>
            </Helmet>
            {/* banner section */}
            <Banner />
            {/* Art & Craft Section */}
            <div className="py-5 md:py-10 bg-white  text-black min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center"> Art & Craft </h1>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-5 gap-5 md:gap-10 items-center pt-8">
                        {
                            loadedData.slice(0, 6).map(singleItem =>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    key={singleItem._id}
                                    className="space-y-3 rounded-lg p-5 shadow-xl">
                                    <div>
                                        <img className="h-[200px] w-[220px] mx-auto rounded-lg object-cover"
                                            src={singleItem.image}
                                            alt={`${singleItem.item_name}`} />
                                    </div>
                                    <h1 className="text-lg font-semibold text-center pt-2">{singleItem.item_name}</h1>
                                    <div className="text-sm font-semibold flex justify-between px-5">
                                        <p>Category: {singleItem.sub_category}</p>
                                        <p>Customizable: {singleItem.customization}</p>
                                    </div>
                                    <div className="text-sm font-semibold flex justify-between px-5">
                                        <p>Price: {singleItem.price}$</p>
                                        <p>Rating: {singleItem.rating}</p>
                                    </div>
                                    <div>
                                        <Link to={`/allCraft/${singleItem._id}`} className="ml-4"><button className="rounded-md border bg-[#9ADE7B] font-bold px-4 py-2  duration-300 hover:bg-gray-200">View Details</button></Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* Art & Craft Categories section */}
            <ArtCraftCategory />
            {/* Creative Modern Artists */}
            <CreativeModernArtist />
            {/* Artists in the Studio Section */}
            <ArtistInStudio />
            {/* Feature Events section*/}
            <UpcomingEvent />
        </div>
    );
};

export default Home;