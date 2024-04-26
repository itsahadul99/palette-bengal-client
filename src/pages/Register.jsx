import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const {createUser, error, setError} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        setError(null)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(user);
        if (password.length < 6) {
            setError('Password length must be at least 6 character');
            return;
        }
        if (!/^(?=.*[A-Z])/.test(password)) {
            setError('Password must have an one Uppercase letter')
            return;
        }
        if (!/^(?=.*[a-z])/.test(password)) {
            setError('Password must have an one Lowercase letter')
            return;
        }
        createUser(email, password)
        .then(() => {
            toast.success('Successfully register !!')
            navigate('/')
        })
        .catch(error => {
            toast.error(`${error.message}`)
        })
        
    }
    return (
        <div className="w-full max-w-md p-5 space-y-3 rounded-xl border-2 border-dotted bg-white font-sans mx-auto my-5 lg:my-14">
            <h1 className="text-3xl font-bold text-center text-[#9ADE7B]">Register</h1>
            {/* Input fields and the form started */}
            <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Your Name
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-[#9ADE7B] focus:outline-none focus:border-2  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Your Email <span className="text-[#FA7070] text-xs">&#9733;</span>
                    </label>
                    <input type="email" required name="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md border border-[#9ADE7B] focus:outline-none focus:border-2  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Phot URL 
                    </label>
                    <input type="text" name="photo_URL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border border-[#9ADE7B] focus:outline-none focus:border-2  " />
                </div>
                <div className="space-y-2 text-sm relative">
                    <label htmlFor="password" className="block">
                        Password <span className="text-[#FA7070] text-xs">&#9733;</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} required name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-[#9ADE7B] focus:outline-none  focus:border-2 " />
                    <div onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-[36px]">
                        {
                            showPassword ? < FaEyeSlash size={18} /> : <FaEye size={18} />
                        }
                    </div>
                    <div>
                        {
                            error && <h5 className="text-[#FA7070]">{error}</h5>
                        }
                    </div>
                </div>
                {/* Sign in Button */}
                <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#9ADE7B] text-white border-y-4 duration-500 overflow-hidden focus:border-[#9ADE7B] z-50 group">
                    Register
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s Create
                    </span>
                    <span className="bg-[#508D69] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-[#508D69] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-[#508D69] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-[#508D69] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
            </form >
            <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                Already have an account?
                <Link to='/login' className="underline hover:text-[#508D69] font-bold">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;