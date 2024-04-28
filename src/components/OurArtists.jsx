import { MdOutlineStarPurple500, MdOutlineEmail } from "react-icons/md";
import { TiSocialGooglePlus, TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
const OurArtists = () => {
    return (
        <div className="bg-white py-5 md:py-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">Creative Modern Artist</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-5 md:my-10">
                    <div
                     data-aos='fade-right'
                      data-aos-duration='1800'
                       className=" flex flex-col justify-center items-center gap-2 border p-5 rounded-md bg-gray-50">
                        {/* image */}
                        <div>
                            <img
                                className="rounded-full"
                                src="https://i.ibb.co/zNYDnCk/1.jpg"
                                alt=""
                            />
                        </div>
                        <div className="lg:text-lg">John Smith</div>
                        <div className=" text-orange-400 flex gap-1">
                            {/* rating */}
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                        </div>
                        <div className="flex gap-1">
                            <div className="border border-[#38b469] rounded-full p-2 text-[#38b469] hover:bg-green-200">
                                <a href="">
                                    {" "}
                                    <MdOutlineEmail />
                                </a>
                            </div>
                            <div className="border border-blue-800 rounded-full p-2 text-blue-900 hover:bg-blue-400">
                                <a href="">
                                    <TiSocialFacebook />
                                </a>
                            </div>
                            <div className="border border-blue-500 rounded-full p-2 text-blue-500 hover:bg-blue-200">
                                <a href="">
                                    <CiTwitter />
                                </a>
                            </div>
                            <div className="border border-orange-700 rounded-full p-2 text-orange-700 hover:bg-orange-200">
                                <a href="">
                                    <TiSocialGooglePlus />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-down'
                     data-aos-duration='2000'
                      className=" flex flex-col justify-center items-center gap-2 border p-5 rounded-md bg-gray-50">
                        {/* image */}
                        <div>
                            <img
                                className="rounded-full"
                                src="https://i.ibb.co/RTbLSB4/4.jpg"
                                alt=""
                            />
                        </div>
                        <div className="lg:text-lg">Jane Smith</div>
                        <div className=" text-orange-400 flex gap-1">
                            {/* rating */}
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                        </div>
                        <div className="flex gap-1">
                            <div className="border  border-[#38b469] rounded-full p-2 text-[#38b469] hover:bg-green-200">
                                <a href="">
                                    {" "}
                                    <MdOutlineEmail />
                                </a>
                            </div>
                            <div className="border border-blue-800 rounded-full p-2 text-blue-900 hover:bg-blue-400">
                                <a href="">
                                    <TiSocialFacebook />
                                </a>
                            </div>
                            <div className="border border-blue-500 rounded-full p-2 text-blue-500 hover:bg-blue-200">
                                <a href="">
                                    <CiTwitter />
                                </a>
                            </div>
                            <div className="border border-orange-700 rounded-full p-2 text-orange-700 hover:bg-orange-200">
                                <a href="">
                                    <TiSocialGooglePlus />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-down' data-aos-duration='2000' className=" flex flex-col justify-center items-center gap-2 border p-5 rounded-md bg-gray-50">
                        {/* image */}

                        <div>
                            <img
                                className="rounded-full"
                                src="https://i.ibb.co/m4D7L3h/2.jpg"
                                alt=""
                            />
                        </div>
                        <div className="lg:text-lg">Rust Cohle</div>
                        <div className=" text-orange-400 flex gap-1">
                            {/* rating */}
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                        </div>
                        <div className="flex gap-1">
                            <div className="border  border-[#38b469] rounded-full p-2 text-[#38b469] hover:bg-green-200">
                                <a href="">
                                    {" "}
                                    <MdOutlineEmail />
                                </a>
                            </div>
                            <div className="border border-blue-800 rounded-full p-2 text-blue-900 hover:bg-blue-400">
                                <a href="">
                                    <TiSocialFacebook />
                                </a>
                            </div>
                            <div className="border border-blue-500 rounded-full p-2 text-blue-500 hover:bg-blue-200">
                                <a href="">
                                    <CiTwitter />
                                </a>
                            </div>
                            <div className="border border-orange-700 rounded-full p-2 text-orange-700 hover:bg-orange-200">
                                <a href="">
                                    <TiSocialGooglePlus />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-right' data-aos-duration='1800' className=" flex flex-col justify-center items-center gap-2 border p-5 rounded-md bg-gray-50">
                        {/* image */}

                        <div>
                            <img
                                className="rounded-full"
                                src="https://i.ibb.co/V2V4p31/3.jpg"
                                alt=""
                            />
                        </div>
                        <div className="lg:text-lg">Antony Iglesias</div>
                        <div className=" text-orange-400 flex gap-1">
                            {/* rating */}
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                        </div>
                        <div className="flex gap-1">
                            <div className="border  border-[#38b469] rounded-full p-2 text-[#38b469] hover:bg-green-200">
                                <a href="">
                                    {" "}
                                    <MdOutlineEmail />
                                </a>
                            </div>
                            <div className="border border-blue-800 rounded-full p-2 text-blue-900 hover:bg-blue-400">
                                <a href="">
                                    <TiSocialFacebook />
                                </a>
                            </div>
                            <div className="border border-blue-500 rounded-full p-2 text-blue-500 hover:bg-blue-200">
                                <a href="">
                                    <CiTwitter />
                                </a>
                            </div>
                            <div className="border border-orange-700 rounded-full p-2 text-orange-700 hover:bg-orange-200">
                                <a href="">
                                    <TiSocialGooglePlus />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurArtists;