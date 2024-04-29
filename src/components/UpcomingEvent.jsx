const UpcomingEvent = () => {
    return (
        <div className="my-5 lg:my-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center"> Take a Part Inside the Arts </h1>
                <p className="text-sm md:text-lg font-semibold mt-5 text-center my-5 opacity-80 italic">See upcoming happenings nearby...</p>
                <div className="space-y-3">
                    <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-center p-5 border bg-[#FAFAFA]">
                        <div className="flex-1 flex justify-between items-center">
                            <div>
                                <h1 className="text-lg md:text-xl font-bold">Mar 13 – Mar 19</h1>
                            </div>
                            <div>
                                <img src="https://demo.themnific.com/cultera/wp-content/uploads/2018/05/milan-2698731_1920-150x150.jpg" alt="" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-sm md:text-xl font-semibold mb-5 cursor-pointer">John Derek Teaches Historical Course</h1>
                            <p className="text-sm md:text-lg italic opacity-80">Double Tree, Columbus Ohio – 12:00 am</p>
                            <p className="text-sm md:text-lg w-11/12">Dr John Derek, will address in the course ‘Verifiable Jesus to Written Gospels’ in our Department this semester.</p>
                        </div>
                    </div>
                    <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                     className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-center p-5 border bg-[#FFFF]">
                        <div className="flex-1 flex justify-between items-center">
                            <div>
                                <h1 className="text-lg md:text-xl font-bold">Aug 11 – Aug 20</h1>
                            </div>
                            <div>
                                <img src="https://demo.themnific.com/cultera/wp-content/uploads/2018/05/asian-girl-74007_1280-150x150.jpg" alt="" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-sm md:text-xl font-semibold mb-5 cursor-pointer">Chinese Chair Culture Group Meeting</h1>
                            <p className="text-sm md:text-lg italic opacity-80">Madison Square Garden, New York – 12:00 am</p>
                            <p className="text-sm md:text-lg w-11/12">The Cultural Group is an easygoing fortnightly gathering bunch concentrating on Chinese culture gratefulness</p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-center p-5 border bg-[#FAFAFA]">
                        <div className="flex-1 flex justify-between items-center">
                            <div>
                                <h1 className="text-lg md:text-xl font-bold">Mar 13 – Mar 19</h1>
                            </div>
                            <div>
                                <img src="https://demo.themnific.com/cultera/wp-content/uploads/2018/05/hero-3320778-150x150.png" alt="" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-sm md:text-xl font-semibold mb-5 cursor-pointer">GreenWorks Trashion Show</h1>
                            <p className="text-sm md:text-lg italic opacity-80">Cooper Hewitt Smithsonian Design Museum, New York NY – 12:00 am</p>
                            <p className="text-sm md:text-lg w-11/12">Dr John Derek, will address in the course ‘Verifiable Jesus to Written Gospels’ in our Department this semester.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;