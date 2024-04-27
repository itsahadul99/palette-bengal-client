import { Link, useLoaderData } from "react-router-dom";

const AllArtCraft = () => {
    const loadedData = useLoaderData()
    return (
        <div className="py-5 md:py-10 bg-[#F4F4F4] text-black">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">All Art & Craft </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 px-5 gap-5 md:gap-10 items-center">
                    {
                        loadedData.map(singleItem => <div key={singleItem._id} className="space-y-4 rounded-lg p-6 shadow-lg">
                            <img width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-cover"
                             src={singleItem.image}
                            // src="https://i.ibb.co/KDQXQcr/apc.jpg"
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

export default AllArtCraft;