import { Link } from "react-router-dom";
import profile from "../../assets/logo/profile.png"
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";


const BloodDonationRequestCard = ({ donation }) => {
    const { _id, fullAddress, recipientName, bloodGroup, donationDate, donationTime } = donation;
    return (
        <div className="card-body shadow-xl">
            {/* Profile Image */}
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={profile} alt="Recipient" />
                    </div>
                </div>
                <div>
                    <h2 className="card-title text-lg">  {recipientName}</h2>
                    <p className="text-sm text-gray-600">{bloodGroup} Blood</p>
                </div>
            </div>

            {/* Details */}
            <div className="mt-4 space-y-1">
                <p className="text-xl">
                    <span className="font-semibold"><FaLocationDot className="inline-block"></FaLocationDot> </span>{" "}{fullAddress}
                </p>
                <p className="text-xl">
                    <span className="font-semibold"><CiCalendarDate className="inline-block"></CiCalendarDate> </span>{" "} {donationDate}
                </p>
                <p className="text-xl">
                    <span className="font-semibold"><IoMdTime className="inline-block"></IoMdTime> </span>{" "} {donationTime}
                </p>
            </div>

            {/* View Button */}
            <div className="card-actions justify-end mt-4">
                <Link to={`/donation/${_id}`} >
                    <button className="btn bg-[#EF3D32] text-white btn-sm">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default BloodDonationRequestCard;