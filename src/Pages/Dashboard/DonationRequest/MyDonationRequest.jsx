import { Link } from "react-router-dom";
import useDonationRequest from "../../../Hooks/useDonationRequest";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const MyDonationRequest = () => {
    const [donationRequest, refetch] = useDonationRequest()
    const axiosSecure = useAxiosSecure()

    // Update Donation Status inprogress to done
    const handleStatusDone = async (id) => {
        const updateStatus = { status: 'done' }
        const res = await axiosSecure.patch(`/donation-request/${id}`, updateStatus)
        if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Donation status has been done",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    // Update Donation Status inprogress to cancel
    const handleStatusCancel = async (id) => {
        const updateStatus = { status: 'cancel' }
        const res = await axiosSecure.patch(`/donation-request/${id}`, updateStatus)
        if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Donation status has been Canceled",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    // Delete Request 
    const handleDeleteRequest = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure you want to delete this Request",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/donation-request/all/${id}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Donation request has been delete now",
                        icon: "success"
                    });
                    refetch()
                }
            }
        });
    }

    // Filter donation status
    const [filterStatus, setFilterStatus] = useState("")
    const filterDonationRequest = filterStatus ? donationRequest.filter(donation => donation.status === filterStatus) : donationRequest;

    return (
        <div className="max-w-10/12 mx-auto mt-5 rounded-2xl shadow-sm">
            <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                <h1 className="text-2xl font-bold text-white mb-5">My Donation Request</h1>
            </div>
            <div className="my-5 mx-5">
                <h2 className="text-xl font-bold mb-2">Status:</h2>
                <select defaultValue="" className="select select-secondary w-full" onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="" disabled>Status</option>
                    <option value="pending">pending</option>
                    <option value="inprogress">inprogress</option>
                    <option value="done">done</option>
                    <option value="cancel">cancel</option>
                </select>
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
                                filterDonationRequest.map((donation, index) => <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{donation.recipientName}</td>
                                    <td>{donation.division},<br /> {donation.district}</td>
                                    <td>{donation.donationDate}, <br /> {donation.donationTime}</td>
                                    <td>{donation.hospitalName}</td>
                                    <td>{donation.bloodGroup}</td>
                                    <td>
                                        {
                                            donation.status === "inprogress" ?
                                                <>
                                                    <div className="flex gap-2 flex-col">
                                                        <button onClick={() => handleStatusDone(donation._id)} className="btn btn-xs btn-success text-white">Done</button>
                                                        <button onClick={() => handleStatusCancel(donation._id)} className="btn btn-xs btn-warning text-white">Cancel</button>
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
                                            <button className="btn btn-xs btn-info text-white">
                                                <Link to={`/blood-donation-request/${donation._id}`}>View</Link>
                                            </button>
                                            <button onClick={() => handleDeleteRequest(donation._id)} className="btn btn-xs btn-error text-white">Delete</button>
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

export default MyDonationRequest;