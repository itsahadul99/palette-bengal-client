import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Nav = () => {

    const { user, logOut, loading } = useContext(AuthContext)

    // console.log(user)
    const links = <>
        <li>
            <NavLink to='/' className={({ isActive }) =>
                isActive
                    ? "text-red-400 pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                    : "font-bold "
            }>
                Home</NavLink>
        </li>
        <li>
            <NavLink to='/allArtCraft' className={({ isActive }) =>
                isActive
                    ? "text-red-400 pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                    : "font-bold pb-1"
            }>
                All Art & Craft </NavLink>
        </li>

        <li>
            <NavLink to='/addArtCraft' className={({ isActive }) =>
                isActive
                    ? "text-red-400 pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                    : "font-bold"
            }>
                Add Craft Item </NavLink>
        </li>
        <li>
            <NavLink to='/myArtCraft' className={({ isActive }) =>
                isActive
                    ? "text-red-400 pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                    : "font-bold"
            }>
                My art & Craft List </NavLink>
        </li>

    </>
    const [theme, setTheme] = useState('light')
    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme]);

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully logged out!')
            })
            .catch(error => {
                toast.error(`${error.message}`)
            })
    }
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-400 dark:border-red-600"></div>
        </div>
    }
    return (
        <div className="bg-base-50 shadow-md my-1">
            <div className="navbar py-3 lg:pt-6 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    {/* <img className="w-14 rounded-lg mr-1 lg:mr-3" src="/logo.png" alt="" /> */}
                    <h3 className="text-sm md:text-2xl lg:text-3xl font-bold">Palette<span className="text-[#9ADE7B]">Bengal</span></h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 items-center ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-center gap-3 items-center">
                        <div className="dropdown dropdown-end">
                            {
                                user ? <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="User pic" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-20 bg-base-200 p-5 space-y-2 font-medium shadow menu menu-sm dropdown-content rounded-box w-52 text-sm">
                                        <li>Username: {user?.displayName}</li>
                                        <li><button onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                                </div>
                                    : <div className="flex gap-2 items-center">
                                        <Link to="/login"><button className="btn btn-outline btn-xs lg:btn-sm btn-success">LogIn </button></Link>
                                        <Link to="/register"><button className="btn btn-outline btn-xs lg:btn-sm btn-secondary">Register</button></Link>
                                    </div>
                            }
                        </div>
                        <div>
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input onClick={handleToggle} type="checkbox" className="theme-controller" />
                                {/* sun icon */}
                                <svg className="swap-off fill-current w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                {/* moon icon */}
                                <svg className="swap-on fill-current w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;