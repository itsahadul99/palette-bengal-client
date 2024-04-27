const ArtCraftCategory = () => {
    return (
        <div className="bg-[#F4F4F4] py-5 md:py-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center"> Art & Craft Categories </h1>
                <p className="text-sm md:text-lg font-semibold mt-5 text-center">Select a category to know more</p>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5 md:gap-8 my-5">
                    <div className="space-y-3 p-5 bg-white rounded-md shadow-md hover:scale-105 cursor-pointer hover:scale-105 cursor-pointer">
                        <img className="md:w-[300px]" src='http://artcrafts.wpengine.com/wp-content/uploads/2017/02/proces2.jpg' alt="" />
                        <h3 className="text-sm md:text-lg font-bold">Landscape Painting</h3>
                    </div>
                    <div className="space-y-3 p-5 bg-white rounded-md shadow-md hover:scale-105 cursor-pointer">
                        <img className="md:w-[300px]" src='http://artcrafts.wpengine.com/wp-content/uploads/2017/02/proces2.jpg' alt="" />
                        <h3 className="text-sm md:text-lg font-bold">Portrait Drawing</h3>
                    </div>
                    <div className="space-y-3 p-5 bg-white rounded-md shadow-md hover:scale-105 cursor-pointer">
                        <img className="md:w-[300px]" src='http://artcrafts.wpengine.com/wp-content/uploads/2017/02/proces2.jpg' alt="" />
                        <h3 className="text-sm md:text-lg font-bold">Watercolour Painting</h3>
                    </div>
                    <div className="space-y-3 p-5 bg-white rounded-md shadow-md hover:scale-105 cursor-pointer">
                        <img className="md:w-[300px]" src='http://artcrafts.wpengine.com/wp-content/uploads/2017/02/proces2.jpg' alt="" />
                        <h3 className="text-sm md:text-lg font-bold">Oil Painting</h3>
                    </div>
                    <div className="space-y-3 p-5 bg-white rounded-md shadow-md hover:scale-105 cursor-pointer">
                        <img className="md:w-[300px]" src='http://artcrafts.wpengine.com/wp-content/uploads/2017/02/proces2.jpg' alt="" />
                        <h3 className="text-sm md:text-lg font-bold">Charcoal Sketching</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtCraftCategory;