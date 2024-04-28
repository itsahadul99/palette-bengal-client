import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddArtCraft = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    // console.log(user);
    const handleAddItem = e => {
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
        const craftItem = { item_name, sub_category, image, price, rating, customization, description, stockStatus, processingTime, userEmail, userName }
        // console.log(craftItem);
        fetch('http://localhost:5000/addCraft', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craftItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have successfully added item',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/')
                }
            })
    }
    return (
        <div className='lg:min-h-[calc(100vh-120px)] bg-[#F4F3F0] p-5'>
            <Helmet>
                <title>Palette Bengal || Add Art & Craft </title>
            </Helmet>
            <div className=' lg:w-1/2 mx-auto text-[#1B1A1A] mt-5'>
                <div className='bg-[#F4F4F4] p-5 md:p-8 space-y-5 rounded-lg shadow-lg'>
                    <div className='text-center '>
                        <h1 className='text-xl font-bold lg:text-4xl pb-1'>Add Art & Craft</h1>
                        <p className='w-2/3 mx-auto my-2 font-semibold'>
                            Here you can add your Art & Craft item with the below information..
                        </p>
                    </div>
                    <form onSubmit={handleAddItem} className="mx-auto font-semibold space-y-3 ">
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Item Name:</label>
                                <input type="text" name='name' required placeholder="Item Name" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Sub Category Name: </label>
                                <select required name="sub_category" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal">
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
                                <input required type="text" name='price' placeholder="Enter price" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Rating:</label>
                                <input type="text" name='rating' placeholder="Enter ratings ( 1 to 10 )" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Customizable:</label>
                                <select name="customizable" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Image:</label>
                                <input required type="text" name='image' placeholder="Enter image url" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Stock Status:</label>
                                <select required name="stock_status" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal">
                                    <option>In Stock</option>
                                    <option>Made to Order</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Processing Time:</label>
                                <input required type="text" name='processing_time' placeholder="Enter processing time (hour)" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm lg:text-xl">Short Description: </label>
                            <textarea name='description' placeholder="Write short description" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm h-16" />
                        </div>
                        <input type='submit' value='Add' className='text-center w-full border-2 text-sm md:text-xl lg:text-2xl bg-[#9ADE7B] cursor-pointer p-3'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArtCraft;