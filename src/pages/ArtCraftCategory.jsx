import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtCraftCategory = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allCategories')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData(data);
            })
    }, [])
    return (
        <div className="bg-[#F4F4F4] py-5 md:py-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center"> Art & Craft Categories </h1>
                <p className="text-sm md:text-lg font-semibold mt-5 text-center">Select a category to know more</p>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5 md:gap-8 my-5">
                    {
                        data.map(item => <Link key={item._id} to={`/allCategories/${item.sub_categoryname}`} >
                            <div>
                                <div
                                    className="space-y-3 p-5 bg-white rounded-md shadow-md hover:scale-105 cursor-pointer">
                                    <img className="md:w-[300px] md:h-[300px] " src={item.image} alt="" />
                                    <h3 className="text-sm md:text-lg font-bold">{item.sub_categoryname}</h3>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ArtCraftCategory;