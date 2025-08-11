import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <>
            <div className="flex min-h-screen w-full">
                {/* Aside */}
                <aside className="w-72 bg-[#E57373] text-white p-6">
                    <div className="flex items-center gap-2.5 mb-10">
                        <h2 className="text-xl font-bold">RED HOPE</h2>
                    </div>
                    <ul className="menu uppercase w-full font-semibold">
                        <li className="text-xl"><NavLink to='/dashboard/profile'><CgProfile></CgProfile> Profile</NavLink></li>
                    </ul>

                    <div className="border-t border-white my-6"></div>

                    {/* Shared */}
                    <ul className="menu uppercase font-semibold">
                        <li className="text-xl"><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
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

export default Dashboard;