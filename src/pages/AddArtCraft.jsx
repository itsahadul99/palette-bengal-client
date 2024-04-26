import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddArtCraft = () => {
    const navigate = useNavigate();
    const handleAddItem = e => {
        e.preventDefault()
        const form = e.target;
        const item_name = form.name.value;
        const sub_category= form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customizable.value;
        const description = form.description.value;
        const craftItem = {item_name, sub_category, price, rating, customization, description}
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
            if(data.insertedId){
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
        <div className='min-h-[calc(100vh-120px)] bg-[#F4F3F0]'>
            <div className=' lg:w-1/2 mx-auto text-[#1B1A1A] mt-5'>
                <div className='bg-[#F4F4F4] p-5 space-y-5'>
                    <div className='text-center '>
                        <h1 className='text-xl font-bold lg:text-4xl'>Add Art & Craft</h1>
                        <p className='w-2/3 mx-auto my-2 font-semibold'>
                            Here you can add your Art & Craft item with the below information..
                        </p>
                    </div>
                    <form onSubmit={handleAddItem} className="mx-auto font-semibold space-y-3 ">
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Item Name:</label>
                                <input type="text" name='name' placeholder="Item Name" className="w-full rounded-md mt-1 text-xs sm:text-sm p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Sub Category Name: </label>
                                <input type="text" name='sub_category' placeholder="Enter sub category name" className="w-full rounded-md p-2 mt-1 text-xs sm:text-sm bg-white font-normal" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Price:</label>
                                <input type="text" name='price' placeholder="Enter price" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Rating</label>
                                <input type="text" name='rating' placeholder="Enter ratings" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Customizable:</label>
                                <input type="text" name='customizable' placeholder="Is it customizable" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-sm lg:text-xl">Image:</label>
                                <input type="text" name='details' placeholder="Enter image url" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm lg:text-xl">Short Description: </label>
                            <textarea  name='description' placeholder="Write short description" className="w-full rounded-md p-2 bg-white font-normal mt-1 text-xs sm:text-sm h-16" />
                        </div>
                        <input type='submit' value='Add' className='text-center w-full border-2 text-sm md:text-xl lg:text-2xl bg-[#9ADE7B] cursor-pointer p-3'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArtCraft;