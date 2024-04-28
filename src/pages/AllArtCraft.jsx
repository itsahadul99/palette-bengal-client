
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
const AllArtCraft = () => {
    const loadedData = useLoaderData()
    return (
        <div className="py-5 md:py-10 bg-[#F4F4F4] text-black">
            <Helmet>
                <title>Pallette Bengal || All Art & Craft</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">All Art & Craft </h1>
                <div className="overflow-x-auto my-5">
                    <table className="table space-y-2 md:space-y-5 bg-white">
                        {/* head */}
                        <thead>
                            <tr className="bg-gray-600 text-white text-sm font-medium">
                                <th>Item Name:</th>
                                <th>Sub Category Name:</th>
                                <th>Price:</th>
                                <th>Ratings</th>
                                <th>Stock Status:</th>
                                <th>Actions:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadedData.map(item => <tr key={item._id}>
                                    <td>{item.item_name}</td>
                                    <td>{item.sub_category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.stockStatus}</td>
                                    <td><Link to={`/allCraft/${item._id}`} className="rounded-md border bg-[#9ADE7B] font-semibold px-2 md:px-4 py-2  duration-300 hover:bg-gray-200">View Details</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllArtCraft;