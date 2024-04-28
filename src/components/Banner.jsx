import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <Swiper
            pagination={true}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 2000,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="bg-[#F4F4F4] py-5">
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-120px)] max-w-7xl mx-auto ">
                    <div className="flex justify-even gap-5 md:gap-8 items-center w-full">
                        <div>
                            <img className="lg:h-[400px]" src={'http://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider1.png'} alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 lg:gap-5 h-full'>
                            <div className='lg:w-2/3'>
                                <img className='md:w-[500px]' src={'https://t3.ftcdn.net/jpg/05/57/04/76/360_F_557047649_CbCAFT8NfXkHffKu3l8O5jgV1dUpmfKE.jpg'} alt="" />
                            </div>
                            <div className=' lg:w-2/3'>
                                <Fade>
                                    <h3 className='text-xs md:text-lg font-bold'>Name: <span className='font-semibold'>Wall Painting</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Artist: <span className='font-semibold'>D K Jon</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Category: <span className='font-semibold'>Painting</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Published: <span className='font-semibold'>2024</span></h3>
                                </Fade>
                            </div>
                        </div>
                        <div>
                            <img className="lg:h-[400px]" src={'http://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider2.png'} alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-120px)] max-w-7xl mx-auto ">
                    <div className="flex justify-even gap-5 md:gap-8 items-center w-full">
                        <div>
                            <img className="lg:h-[400px]" src={'http://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider1.png'} alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 lg:gap-5 h-full'>
                            <div className='lg:w-2/3'>
                                <img className='md:w-[500px]' src={'https://cdn.britannica.com/24/189624-131-BAF1184D/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg'} alt="" />
                            </div>
                            <div className=' lg:w-2/3'>
                                <Fade>
                                    <h3 className='text-xs md:text-lg font-bold'>Name: <span className='font-semibold'>Wall Painting</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Artist: <span className='font-semibold'>Leonardo da Vinci</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Category: <span className='font-semibold'>Art Work</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Published: <span className='font-semibold'>1503 to 1519</span></h3>
                                </Fade>
                            </div>
                        </div>
                        <div>
                            <img className="lg:h-[400px]" src={'http://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider2.png'} alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-120px)] max-w-7xl mx-auto ">
                    <div className="flex justify-even gap-5 md:gap-8 items-center w-full">
                        <div>
                            <img className="lg:h-[400px]" src={'http://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider1.png'} alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 lg:gap-5 h-full'>
                            <div className='lg:w-2/3'>
                                <img className='md:w-[500px]' src={'https://www.bengalarts.org/uploads/art_artist/artwork/15396738971007375442_nodpkroac12vp07ud1lcbb1eb4.jpg'} alt="" />
                            </div>
                            <div className=' lg:w-2/3'>
                                <Fade>
                                    <h3 className='text-xs md:text-lg font-bold'>Name: <span className='font-semibold'>Famine</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Artist: <span className='font-semibold'>Joynul Abedin</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Category: <span className='font-semibold'>Art</span></h3>
                                    <h3 className='text-xs md:text-lg font-bold'>Published: <span className='font-semibold'>1943</span></h3>
                                </Fade>
                            </div>
                        </div>
                        <div>
                            <img className="lg:h-[400px]" src={'http://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider2.png'} alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;