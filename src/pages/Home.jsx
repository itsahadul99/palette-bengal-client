/* eslint-disable no-unused-vars */

import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import ArtistInStudio from "../components/ArtistInStudio";
import ArtCraftCategory from "./ArtCraftCategory";
import OurArtists from "../components/OurArtists";

const Home = () => {
    const loadedData = useLoaderData();
    return (
        <div className="text-black dark:text-black">
            {/* banner section */}
            <Banner />
            {/* Art & Craft Section */}
            <div className="py-5 md:py-10 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center"> Art & Craft </h1>
                    <div 
                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 px-5 gap-5 md:gap-10 items-center pt-5">
                        {
                            loadedData.slice(0, 6).map(singleItem => 
                            <div 
                             key={singleItem._id} 
                             className="space-y-4 rounded-lg p-6 shadow-xl">
                                <img width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-cover"
                                    src={singleItem.image}
                                    alt={`${singleItem.item_name}`} />
                                <div className="grid gap-2">
                                    <h1 className="text-lg font-semibold text-center">{singleItem.item_name}</h1>
                                </div>
                                <div className="text-sm font-semibold flex justify-between">
                                    <p>Category: {singleItem.sub_category}</p>
                                    <p>Customizable: {singleItem.customization}</p>
                                </div>
                                <div className="text-sm font-semibold flex justify-between">
                                    <p>Price: {singleItem.price}$</p>
                                    <p>Rating: {singleItem.rating}</p>
                                </div>
                                <div className="flex justify-center">
                                    <Link to={`/allCraft/${singleItem._id}`}><button className="rounded-md border bg-[#9ADE7B] font-bold px-4 py-2  duration-300 hover:bg-gray-200">View Details</button></Link>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            {/* Art & Craft Categories section */}
            <ArtCraftCategory />
            {/* Creative Modern Artists */}
            <OurArtists />
            {/* Artists in the Studio Section */}
            <ArtistInStudio />
        </div>
    );
};

export default Home;