import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const isAdmin = true;

    return (
        <>
            <div className="flex min-h-screen w-full">
                {/* Aside */}
                <aside className="w-80 bg-[#E57373] text-white p-6">
                    <div className="flex items-center gap-2.5 mb-10">
                        <h2 className="text-xl font-bold">RED HOPE</h2>
                    </div>
                    {
                        isAdmin ?
                            <ul className="menu uppercase w-full font-semibold">
                                <li><NavLink to='/dashboard/profile'> <CgProfile className="text-xl"></CgProfile> Profile</NavLink> </li>
                                <li><NavLink to='/dashboard/allUsers'> <CgProfile className="text-xl"></CgProfile> All Users</NavLink> </li>
                                <li><NavLink to='/dashboard/my-donation-requests'> <CgProfile className="text-xl"></CgProfile>My Donation Request </NavLink></li>
                                <li><NavLink to='/dashboard/create-donation-request'> <CgProfile className="text-xl"></CgProfile>Create Donation Request </NavLink></li>
                            </ul> :
                            <ul className="menu uppercase w-full font-semibold">
                                <li><NavLink to='/dashboard/profile'> <CgProfile className="text-xl"></CgProfile> Profile</NavLink> </li>
                                <li><NavLink to='/dashboard/my-donation-requests'> <CgProfile className="text-xl"></CgProfile>My Donation Request </NavLink></li>
                                <li><NavLink to='/dashboard/create-donation-request'> <CgProfile className="text-xl"></CgProfile>Create Donation Request </NavLink></li>
                            </ul>
                    }

                    <div className="border-t border-white my-6"></div>

                    {/* Shared */}
                    <ul className="menu uppercase font-semibold">
                        <li><NavLink to="/"> <FaHome className="text-xl"></FaHome> Home</NavLink> </li>
                    </ul>
                </aside>
                {/* Main Content */}
                <main className="bg-[#FFF2F2] w-full mx-auto">
                    <Outlet></Outlet>
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;