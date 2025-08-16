import { useLoaderData } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const BloodDonationDetails = () => {
    const request = useLoaderData()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleUpdateItem = async (id) => {
        const updateInfo = {
            status: "inprogress"
        }
        const res = await axiosPublic.patch(`/donation-request/${id}`, updateInfo)
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                title: "Done, Blood donation request is now In Progress.",
                icon: "success",
                draggable: true
            });
        }
    }

    return (
        <div className="max-w-5xl mx-auto mb-5 pt-28 px-4">
            <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-[#EF3D32] text-white p-6 text-center">
                    <p><FaRegCircleUser className="font-bold text-5xl text-white mx-auto"></FaRegCircleUser></p>
                    <h2 className="text-3xl font-bold mt-4">{request.bloodGroup} Blood Request</h2>
                    <p className="text-sm opacity-90"> Emergency Blood Request Details</p>
                </div>

                {/* Details */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <p><span className="font-semibold text-gray-700">Requester Name:</span> {request.requesterName}</p>
                        <p><span className="font-semibold text-gray-700">Requester Email:</span> {request.requesterEmail}</p>
                        <p><span className="font-semibold text-gray-700">Recipient Name:</span> {request.recipientName}</p>
                        <p><span className="font-semibold text-gray-700">Donation Date:</span> {request.donationDate}</p>
                        <p><span className="font-semibold text-gray-700">Donation Time:</span> {request.donationTime}</p>
                    </div>
                    <div className="space-y-3">
                        <p><span className="font-semibold text-gray-700">Hospital:</span> {request.hospitalName}</p>
                        <p><span className="font-semibold text-gray-700">Address:</span> {request.fullAddress}</p>
                        <p><span className="font-semibold text-gray-700">District:</span> {request.district}</p>
                        <p><span className="font-semibold text-gray-700">Upazila:</span> {request.upazila}</p>
                        <p><span className="font-semibold text-gray-700">Message:</span> {request.requestMessage}</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 flex justify-center">
                    <button
                        onClick={() => document.getElementById('my_modal_5').showModal()}
                        className="btn btn-error px-8 text-white text-lg font-semibold rounded-lg">
                        Donate Now
                    </button>
                </div>
                {/* Modal */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <p className="py-2 text-xl text-center">Please review your details before confirming</p>
                        <form method="dialog" className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    value={user.displayName}
                                    readOnly
                                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    value={user.email}
                                    readOnly
                                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                                />
                            </div>

                            {/* Modal actions */}
                            <div className="modal-action justify-center gap-5">
                                <button onClick={() => handleUpdateItem(request._id)} type="submit" className="btn  btn-success text-white"> Confirm </button>
                                <button type="button" className="btn  btn-error text-white" onClick={() => document.getElementById("my_modal_5").close()}>Close </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>

    );
};

export default BloodDonationDetails;