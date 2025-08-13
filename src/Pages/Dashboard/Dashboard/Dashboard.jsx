import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: recentDonation = [] } = useQuery({
        queryKey: ['recentDonation', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/donation-request/recent?email=${user.email}`)
            return res.data
        }
    })

    return (
        <div className="max-w-10/12 mx-auto mt-5 py-5 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-5 p-5">Welcome Back, {user.displayName}</h2>
            <div className="text-center p-5 mb-6 bg-[#E57373]" >
                <h1 className="text-2xl font-bold text-white mb-5">My Recent Donation Request</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Recipient Name</th>
                                <th>Recipient Location</th>
                                <th>Donation Date & Time</th>
                                <th>Hospital Name</th>
                                <th>Blood Group</th>
                                <th>Donation Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="font-semibold capitalize">
                            {
                                recentDonation.map((donation, index) => <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{donation.recipientName}</td>
                                    <td>{donation.district},<br /> {donation.upazila}</td>
                                    <td>{donation.donationDate}, <br /> {donation.donationTime}</td>
                                    <td>{donation.hospitalName}</td>
                                    <td>{donation.bloodGroup}</td>
                                    <td>
                                        {
                                            donation.status === "inprogress" ?
                                                <>
                                                    <div className="flex gap-2 flex-col">
                                                        <button className="btn btn-xs btn-success text-white">Done</button>
                                                        <button className="btn btn-xs btn-warning text-white">Cancel</button>
                                                    </div>
                                                    <div>
                                                        <small>{donation.requesterName}</small><br />
                                                        <small>{donation.requesterEmail}</small>
                                                    </div>
                                                </>
                                                :
                                                <button className="btn btn-success btn-sm text-white">{donation.status}</button>
                                        }
                                    </td>
                                    <td>
                                        <div className="flex flex-col gap-2">
                                            <button className="btn btn-xs btn-info text-white">View</button>
                                            <button className="btn btn-xs btn-accent text-white">Edit</button>
                                            <button className="btn btn-xs btn-error text-white">Delete</button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center">
                <Link to='/dashboard/my-donation-requests'>
                    <button className="btn btn-outline btn-secondary">View All Request</button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;