import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyArtCraft = () => {
    const { user } = useContext(AuthContext)
    // console.log(typeof(user.email));
    const [myArtCraft, setMyArtCraft] = useState([]);
    const [displayMyArtCraft, setDisplayMyArtCraft] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myArtCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDisplayMyArtCraft(data)
                setMyArtCraft(data)
            })
    }, [user])
    const handleDelete = id => {
        // console.log('Delete soon', id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myArtCraft/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingItem = displayMyArtCraft.filter(item => item._id !== id)
                            setDisplayMyArtCraft(remainingItem)
                        }
                    })
            }
        });

    }
    const handleCustomizationYes = () => {
        const nonCustomization = myArtCraft.filter(item => item.customization !== "No")
        setDisplayMyArtCraft(nonCustomization)
    }
    const handleCustomizationNo = () => {
        const customization = myArtCraft.filter(item => item.customization !== "Yes")
        setDisplayMyArtCraft(customization)
    }
    return (
        <div className="py-5 md:py-10 bg-white text-black">
            <Helmet>
                <title>Palette Bengal || My Art & Craft</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">My Art & Craft</h1>
                <div>
                    <div className="flex justify-end my-5">
                        <div className="dropdown dropdown-left">
                            <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                            <ul tabIndex={0} className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={handleCustomizationYes}>Customization- Yes</a></li>
                                <li><a onClick={handleCustomizationNo}>Customization- No</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 px-5 gap-5 md:gap-10 items-center">
                        {
                            displayMyArtCraft.map(singleItem => <div key={singleItem._id} className="space-y-4 rounded-lg p-6 shadow-lg">
                                <img width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-cover"
                                    src={singleItem.image}
                                    alt={`${singleItem.item_name}`} />
                                <div className="grid gap-2">
                                    <h1 className="text-lg font-semibold">{singleItem.item_name}</h1>
                                </div>
                                <div className="text-sm font-semibold flex justify-between">
                                    <p>Stock Status: {singleItem.stockStatus}</p>
                                    <p>Customizable: {singleItem.customization}</p>
                                </div>
                                <div className="text-sm font-semibold flex justify-between">
                                    <p>Price: {singleItem.price}$</p>
                                    <p>Rating: {singleItem.rating}</p>
                                </div>
                                <div className="flex justify-center gap-3 lg:gap-10">
                                    <Link to={`/updateItem/${singleItem._id}`}><button className="rounded-md border bg-[#9ADE7B] font-bold px-2 md:px-4 py-2  duration-300 hover:bg-gray-200">Update</button></Link>
                                    <button onClick={() => handleDelete(singleItem._id)} className="rounded-md border bg-red-500 font-bold px-2 md:px-4 py-2  duration-300 hover:bg-gray-200">Delete</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                {
                    displayMyArtCraft.length === 0 && myArtCraft.length === 0 && <div className="flex flex-col justify-center items-center lg:min-h-[calc(100vh-500px)] space-y-3 my-5">
                        <img className="w-36" src={'https://i.ibb.co/0ttkf0m/pngegg.png'} alt="" />
                        <h1 className="font-semibold text-lg">You do not added any Art & Craft</h1>
                        <p className="text-sm font-semibold">Please add first</p>
                        <Link to="/addArtCraft"><button className="rounded-md border bg-[#9ADE7B] font-bold px-2 md:px-4 py-2  duration-300 hover:bg-gray-200">Add Art & Craft</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyArtCraft;