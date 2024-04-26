import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" divide-y">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <h3 className="text-sm md:text-2xl lg:text-3xl font-bold">Palette<span className="text-[#9ADE7B]">Bengal</span></h3>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-[#9ADE7B] font-bold">About Us</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">About Me</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Our Services</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Our Team</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-[#9ADE7B] font-bold">Help</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">About Us</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Get in Touch</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Discounts</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="tracking-wide uppercase text-[#9ADE7B] font-bold my-2">Newsletter</h6>
                        <div className="relative">
                            <input className="peer h-[50px] border-b-2 px-2 pt-4 focus:outline-non" type="text" id="navigate_ui_input_55" placeholder="" />
                            <label className="absolute left-2 top-0.5 text-xs  duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs" htmlFor="navigate_ui_input_55">
                                Email
                            </label>
                        </div>
                        <div className="mx-auto">
                            <button className="px-6 text-lg font-bold py-1 bg-[#9ADE7B] mt-2 w-2/3">Send </button>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-[#9ADE7B] font-bold">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <FaFacebook size={25} />
                            <FaTwitter size={25} />
                            <FaInstagram size={25} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center bg-base-100">© Palette of Bengal. All rights reserved.</div>
        </footer>
    );
};

export default Footer;