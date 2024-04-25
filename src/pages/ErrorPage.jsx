import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-3">
            <h1 className="text-2xl sm:text-4xl font-bold">Oops!!</h1>
            <p className="text-lg sm:text-xl font-semibold">Page not found</p>
            <Link to ="/"><button className="btn">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;