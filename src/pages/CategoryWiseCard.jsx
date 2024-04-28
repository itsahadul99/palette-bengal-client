import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryWiseCard = () => {
    const { sub_categoryname } = useParams();
    const [loadedData, setLoadedData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allCraft`)
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
            })
    }, [sub_categoryname])
    const filterData = loadedData.filter(item => item.sub_category === sub_categoryname)
    
    return (
        <div className="py-5 md:py-10 bg-[#F4F4F4] text-black">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center"> {sub_categoryname}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 px-5 gap-5 md:gap-10 items-center">
                    {
                        filterData.map(singleItem => <div key={singleItem._id} className="space-y-4 rounded-lg p-6 shadow-lg">
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
    );
};

export default CategoryWiseCard;