import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";

const AdminDashboard = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    // Admin stats
    const { data: stats = {} } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })

    return (
        <div className="max-w-10/12 mx-auto mt-5 py-5 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-5 p-5">Welcome Back, {user.displayName}</h2>
            <div className="grid grid-cols-3 gap-5 px-5">
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] p-10 text-white rounded-2xl">
                    <div>
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">{stats.users}</h2>
                        <p className="text-xl font-bold">Users</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] p-10 text-white rounded-2xl">
                    <div>
                        <BiDonateHeart className="text-3xl"></BiDonateHeart>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">{stats.donationRequest}</h2>
                        <p className="text-xl font-bold">Donation Request</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;