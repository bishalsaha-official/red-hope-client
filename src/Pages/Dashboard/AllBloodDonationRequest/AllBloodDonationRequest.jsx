import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllBloodDonationRequest = () => {
    const axiosSecure = useAxiosSecure()

    const { data: donationRequest = [] } = useQuery({
        queryKey: ['donationRequest'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/donation-request/all')
            return res.data;
        }
    })

    return (
        <div className="max-w-10/12 mx-auto mt-5 rounded-2xl shadow-sm">
            <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                <h1 className="text-2xl font-bold text-white mb-5">All Donation Request</h1>
            </div>
            <div className="my-5 mx-5">
                <h2 className="text-xl font-bold mb-2">Status:</h2>
                <select defaultValue="Pick a language" className="select select-secondary w-full">
                    <option value="">Status</option>
                    <option value="pending">pending</option>
                    <option value="inprogress">inprogress</option>
                    <option value="done">done</option>
                    <option value="canceled">canceled</option>
                </select>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-center">
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
                        <tbody className="font-semibold text-center capitalize">
                            {
                                donationRequest.map((donation, index) => <tr key={index}>
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
                                                <button className="btn btn-success btn-sm text-white">{donation.status}...</button>
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
        </div>
    );
};

export default AllBloodDonationRequest;