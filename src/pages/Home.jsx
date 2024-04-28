/* eslint-disable no-unused-vars */

import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import ArtistInStudio from "../components/ArtistInStudio";
import ArtCraftCategory from "./ArtCraftCategory";

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
                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 px-5 gap-5 md:gap-10 items-center">
                        {
                            loadedData.slice(0, 6).map(singleItem => 
                            <div 
                             key={singleItem._id} 
                             className="space-y-4 rounded-lg p-6 shadow-lg">
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
            {/* Creative Modern Artist */}
            {/* <div className="min-h-screen hero" style={{ backgroundImage: 'url(https://i.ibb.co/ZS8XxhJ/bg.jpg)' }}>
                <div className=" max-w-7xl mx-auto">
                    <div className="hero-overlay bg-opacity-50"></div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-white my-5 lg:my-8">Creative Modern Artists</h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-8 text-center text-neutral-content">
                        <div className="relative">
                            <div>
                                <img className="rounded-lg" src="http://artcrafts.wpengine.com/wp-content/uploads/2017/02/artist1.jpg" alt="" />
                            </div>
                            <div className="bg-gray-200 h-2/6 bg-opacity-80 *:font-black *:text-black w-full absolute -bottom-10 z-20 rounded-b-md">
                                <div className="flex justify-center items-center h-full gap-5 *:cursor-pointer">
                                    <FaFacebook size={30} />
                                    <FaLinkedin size={30} />
                                    <FaTwitter size={30} />
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <img src="http://artcrafts.wpengine.com/wp-content/uploads/2017/02/artist2.jpg" alt="" />
                            </div>
                            <div className="bg-gray-200 h-2/6 bg-opacity-80 *:font-black *:text-black w-full absolute -bottom-10 z-20 rounded-b-md">
                                <div className="flex justify-center items-center h-full gap-5 *:cursor-pointer">
                                    <FaFacebook size={30} />
                                    <FaLinkedin size={30} />
                                    <FaTwitter size={30} />
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <img src="http://artcrafts.wpengine.com/wp-content/uploads/2017/02/artist3.jpg" alt="" />
                            </div>
                            <div className="bg-gray-200 h-2/6 bg-opacity-80 *:font-black *:text-black w-full absolute -bottom-10 z-20 rounded-b-md">
                                <div className="flex justify-center items-center h-full gap-5 *:cursor-pointer">
                                    <FaFacebook size={30} />
                                    <FaLinkedin size={30} />
                                    <FaTwitter size={30} />
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <img src="http://artcrafts.wpengine.com/wp-content/uploads/2017/02/artist4.jpg" alt="" />
                            </div>
                            <div className="bg-gray-200 h-2/6 bg-opacity-80 *:font-black *:text-black w-full absolute -bottom-10 z-20 rounded-b-md">
                                <div className="flex justify-center items-center h-full gap-5 *:cursor-pointer">
                                    <FaFacebook size={30} />
                                    <FaLinkedin size={30} />
                                    <FaTwitter size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Art & Craft Categories section */}
            <ArtCraftCategory />
            {/* Artists in the Studio Section */}
            <ArtistInStudio />
        </div>
    );
};

export default Home;