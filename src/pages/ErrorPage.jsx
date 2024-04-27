import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <img className="md:w-[300px] md:h-[300px]" src="https://i.ibb.co/QKVdZBw/pngegg-1.png"  />
            <p className="text-lg sm:text-xl font-semibold my-3">Page not found</p>
            <Link to ="/"><button className="btn">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;