import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateItem = () => {
    const loadedItem = useLoaderData();
    const { user } = useContext(AuthContext)
    // console.log(loadedItem);
    const navigate = useNavigate();
    const handleUpdateItem = e => {
        e.preventDefault()
        const form = e.target;
        const item_name = form.name.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customizable.value;
        const description = form.description.value;
        const stockStatus = form.stock_status.value;
        const image = form.image.value;
        const processingTime = form.processing_time.value;
        const userEmail = user.email;
        const userName = user.displayName;
        const updateItem = { item_name, sub_category, image, price, rating, customization, description, stockStatus, processingTime, userEmail, userName }
        // console.log(craftItem);
        fetch(`https://palette-of-bengal-server.vercel.app/updateItem/${loadedItem._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have successfully update this item',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/myArtCraft')
                }
            })
    }
    return (
        <div className='lg:min-h-[calc(100vh-120px)] bg-[#F4F3F0] p-5'>
            <div className=' lg:w-1/2 mx-auto text-[#1B1A1A] mt-3'>
                <div className='bg-[#F4F4F4] p-5 md:p-8 space-y-3 rounded-lg shadow-lg'>
                    <div className='text-center '>
                        <h1 className='text-xl font-bold lg:text-4xl'>Update Art & Craft</h1>
                        <p className='w-2/3 mx-auto my-2 font-semibold'>
                            Here you can update your Art & Craft item with the below information..
                        </p>
                    </div>
                    <form onSubmit={handleUpdateItem} className="mx-auto font-semibold space-y-3 ">
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Item Name:</label>
                                <input type="text" name='name' placeholder="Item Name" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal" defaultValue={loadedItem.item_name} />
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Sub Category Name: </label>
                                <select name="sub_category" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal" defaultValue={loadedItem.sub_category}>
                                    <option>Landscape Painting</option>
                                    <option>Portrait Drawing</option>
                                    <option>Watercolour Painting</option>
                                    <option>Oil Painting</option>
                                    <option>Charcoal Sketching</option>
                                    <option>Cartoon Drawing</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Price:</label>
                                <input type="text" name='price' placeholder="Enter price" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" defaultValue={loadedItem.price} />
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Rating</label>
                                <input type="text" name='rating' placeholder="Enter ratings ( 1 to 10 )" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" defaultValue={loadedItem.rating} />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Customizable:</label>
                                <select name="customizable" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal" defaultValue={loadedItem.customization}>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Image:</label>
                                <input type="text" name='image' placeholder="Enter image url" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" defaultValue={loadedItem.image} />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Stock Status:</label>
                                <select name="stock_status" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal" defaultValue={loadedItem.stockStatus}>
                                    <option>In Stock</option>
                                    <option>Made to Order</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Processing Time:</label>
                                <input type="text" name='processing_time' placeholder="Enter processing time (hour)" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" defaultValue={loadedItem.processingTime} />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm lg:text-xl">Short Description: </label>
                            <textarea name='description' placeholder="Write short description" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm h-16" defaultValue={loadedItem.description} />
                        </div>
                        <input type='submit' value='Update' className='text-center w-full border-2 text-sm md:text-xl lg:text-2xl bg-[#9ADE7B] cursor-pointer p-3'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;