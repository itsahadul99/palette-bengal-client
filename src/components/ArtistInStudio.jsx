/* eslint-disable react/no-unescaped-entities */
const ArtistInStudio = () => {
    return (
        <div className="bg-[#F4F4F4]">
                <div className="max-w-7xl mx-auto py-5 md:py-10">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center py-5 md:py-10"> Artists in the Studio</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 md:gap-8">
                        <div 
                            data-aos="fade-left"
                            data-aos-duration="1800"
                        className="flex flex-col justify-center items-center text-center gap-5 p-5">
                            <div>
                                <img className="md:w-[350px] md:h-[300px] mx-auto rounded-lg" src="http://artcrafts.wpengine.com/wp-content/uploads/2017/02/proces2.jpg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-sm md:text-xl font-semibold">Caricature Artist at Work</h1>
                                <p className="text-xs md:text-sm">A caricature artist is also referred to as a caricaturist. Each artist uses their experience and training to develop their own unique style. Caricature artists are not the same as a cartoon artist.</p>
                            </div>
                        </div>
                        <div 
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        className="flex flex-col justify-center items-center text-center gap-5 p-5">
                            <div>
                                <img className="md:w-[350px] md:h-[300px] mx-auto rounded-lg" src="http://artcrafts.wpengine.com/wp-content/uploads/2017/02/proces1.jpg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-sm md:text-xl font-semibold">Creativity Finds Expression</h1>
                                <p className="text-xs md:text-sm">Painting, coloring, writing, making music, and making crafts are all creative activities. Creative expression helps children articulate their feelings and thoughts. They think critically about their world.</p>
                            </div>
                        </div>
                        <div 
                        data-aos="fade-right"
                        data-aos-duration="1800"
                        className="flex flex-col justify-center items-center text-center gap-5 p-5">
                            <div>
                                <img className="md:w-[350px] md:h-[300px] mx-auto rounded-lg" src="http://artcrafts.wpengine.com/wp-content/uploads/2017/02/proces4.jpg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-sm md:text-xl font-semibold">Watercolor makes indelible Impression!</h1>
                                <p className="text-xs md:text-sm">“Unlike many other mediums, watercolor does some of the work for you it's done well watercolor can create an illusion that the paint arrived magically.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ArtistInStudio;