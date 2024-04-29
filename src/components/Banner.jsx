import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useTypewriter } from 'react-simple-typewriter';
const Banner = () => {
    const [text1] = useTypewriter({
        words:['Wall Painting'],
        typeSpeed: 100,
        loop: true
    })
    const [text2] = useTypewriter({
        words:['Rakibul Hasan'],
        typeSpeed: 100,
        loop: true
    })
    const [text3] = useTypewriter({
        words:['Painting'],
        typeSpeed: 110,
        loop: true
    })
    const [text4] = useTypewriter({
        words:['2024'],
        typeSpeed: 115,
        loop: true
    })
    return (
        <Swiper
            pagination={true}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 2500,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="bg-[#F4F4F4] py-5">
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-120px)] max-w-7xl mx-auto ">
                    <div className="flex justify-even gap-5 md:gap-8 items-center w-full">
                        <div
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        >
                            <img className="lg:h-[400px]" src={'http://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider1.png'} alt="" />
                        </div>
                        <div 
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className='flex flex-col justify-center items-center gap-2 lg:gap-5 h-full'>
                            <div
                             
                             className='lg:w-2/3'>
                                <img className='md:w-[500px]' src={'https://t3.ftcdn.net/jpg/05/57/04/76/360_F_557047649_CbCAFT8NfXkHffKu3l8O5jgV1dUpmfKE.jpg'} alt="" />
                            </div>
                            <div className=' lg:w-2/3'>

                                <h3 className='text-xs md:text-lg font-bold'>Name: <span className='font-semibold'>{text1}</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Artist: <span className='font-semibold'>{text2}</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Category: <span className='font-semibold'>{text3}</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Published: <span className='font-semibold'>{text4}</span></h3>

                            </div>
                        </div>
                        <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        >
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
                                <h3 className='text-xs md:text-lg font-bold'>Name: <span className='font-semibold'>Wall Painting</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Artist: <span className='font-semibold'>Leonardo da Vinci</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Category: <span className='font-semibold'>Art Work</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Published: <span className='font-semibold'>1503 to 1519</span></h3>

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
                                <h3 className='text-xs md:text-lg font-bold'>Name: <span className='font-semibold'>Famine</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Artist: <span className='font-semibold'>Joynul Abedin</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Category: <span className='font-semibold'>Art</span></h3>
                                <h3 className='text-xs md:text-lg font-bold'>Published: <span className='font-semibold'>1943</span></h3>

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