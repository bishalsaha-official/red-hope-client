import { CgProfile } from "react-icons/cg";
import { FaHome, FaUsers, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { BiDonateHeart, BiSolidDonateBlood } from "react-icons/bi";
import { IoCreateOutline } from "react-icons/io5";
import { MdAddToDrive, MdAddLocationAlt } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../Hooks/useAdmin";
import useVolunteer from "../Hooks/useVolunteer";
import './dashboard.css'
import { useState } from "react";

const DashboardLayout = () => {
    const [isAdmin] = useAdmin();
    const [isVolunteer] = useVolunteer();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div id="dashboard" className="flex min-h-screen w-full">
                <div className="md:hidden flex items-center justify-between bg-[#E57373] text-white px-4 py-3">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <GiHamburgerMenu className="text-2xl" />
                    </button>
                </div>
                {/* Aside */}
                <aside className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 bg-[#E57373] text-white p-6 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                    <div className="hidden md:flex items-center gap-2.5 mb-10">
                        <h2 className="text-xl font-bold">RED HOPE</h2>
                    </div>
                    {
                        isAdmin ?
                            <ul className="menu uppercase w-full font-semibold">
                                <li><NavLink to='/dashboard/profile'> <CgProfile className="text-xl"></CgProfile> Profile</NavLink> </li>
                                <li><NavLink to='/dashboard/allUsers'> <FaUsers className="text-xl"></FaUsers> All Users</NavLink> </li>
                                <li><NavLink to='/dashboard/all-donation-requests'> <BiDonateHeart className="text-xl"></BiDonateHeart>All Donation Request </NavLink></li>
                                <li><NavLink to='/dashboard/my-donation-requests'> <BiSolidDonateBlood className="text-xl"></BiSolidDonateBlood>My Donation Request </NavLink></li>
                                <li><NavLink to='/dashboard/create-donation-request'> <IoCreateOutline className="text-xl"></IoCreateOutline>Create Donation Request </NavLink></li>
                                <li><NavLink to='/dashboard/content-management'> <MdAddToDrive className="text-xl"></MdAddToDrive>Content Management </NavLink></li>
                            </ul>
                            :
                            isVolunteer ?
                                <ul className="menu uppercase w-full font-semibold">
                                    <li><NavLink to='/dashboard/profile'> <CgProfile className="text-xl"></CgProfile> Profile</NavLink> </li>
                                    <li><NavLink to='/dashboard/all-donation-requests'> <BiDonateHeart className="text-xl"></BiDonateHeart>All Donation Request </NavLink></li>
                                    <li><NavLink to='/dashboard/my-donation-requests'> <BiSolidDonateBlood className="text-xl"></BiSolidDonateBlood>My Donation Request </NavLink></li>
                                    <li><NavLink to='/dashboard/create-donation-request'> <IoCreateOutline className="text-xl"></IoCreateOutline>Create Donation Request </NavLink></li>
                                    <li><NavLink to='/dashboard/content-management'> <MdAddToDrive className="text-xl"></MdAddToDrive>Content Management </NavLink></li>
                                </ul>
                                :
                                <ul className="menu uppercase w-full font-semibold">
                                    <li><NavLink to='/dashboard/profile'> <CgProfile className="text-xl"></CgProfile> Profile</NavLink> </li>
                                    <li><NavLink to='/dashboard/my-donation-requests'> <BiSolidDonateBlood className="text-xl"></BiSolidDonateBlood>My Donation Request </NavLink></li>
                                    <li><NavLink to='/dashboard/create-donation-request'> <IoCreateOutline className="text-xl"></IoCreateOutline>Create Donation Request </NavLink></li>
                                </ul>
                    }

                    <div className="border-t border-white my-6"></div>

                    {/* Shared */}
                    <ul className="menu uppercase font-semibold">
                        <li><NavLink to="/"> <FaHome className="text-xl"></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/blood-donation-request"> <MdAddLocationAlt className="text-xl"></MdAddLocationAlt> Blood Donation Request</NavLink> </li>
                        <li><NavLink to="/search-page"> <FaSearch className="text-xl"></FaSearch > Search Donor</NavLink> </li>
                    </ul>
                </aside>

                {/* Overlay for Mobile */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/40 md:hidden" onClick={() => setIsOpen(false)} />
                )}

                {/* Main Content */}
                <main className="bg-white w-full mx-auto">
                    <Outlet></Outlet>
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;