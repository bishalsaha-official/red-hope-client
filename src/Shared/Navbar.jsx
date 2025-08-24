import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo/icon.png'
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import './navbar.css'

const Navbar = () => {
    const { user, logoutUser } = useAuth()

    const handleSignOut = () => {
        logoutUser()
            .then(() => {
                Swal.fire({
                    title: "You’ve been signed out. Have a great day",
                    icon: "success",
                    draggable: true
                });
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blood-donation-request">Donation requests</NavLink></li>
        <li><NavLink to="/search-donor">Search donor</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>

    return (
        <>
            <div className="navbar bg-base-100 py-5 px-5 fixed z-10 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-xl text-[#212121]">
                            {links}
                        </ul>
                    </div>
                    <Link>
                        <div className="flex items-center gap-1.5">
                            <img src={logo} width={50} height={50} alt="Logo" />
                            <h2 className="text-xl md:text-3xl font-bold"><span className="text-[#EF3D32]">RED</span>HOPE</h2>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-xl text-[#212121]">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user.email ?
                            <>
                                <div className="dropdown dropdown-end cursor-pointer">
                                    <div tabIndex={0} role="button" className="m-1">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={user?.photoURL} />
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content bg-[#FFF2F2] menu rounded-box z-1 w-52 p-3 shadow-lg">
                                        <li className="mb-3 text-xl"><Link to="/dashboard">Dashboard</Link></li>
                                        <li><button onClick={handleSignOut} className="btn bg-[#EF3D32] text-white">SignOut</button></li>
                                    </ul>
                                </div>
                            </> :
                            <Link to="/login">
                                <button className="btn bg-[#EF3D32] text-white p-5">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;