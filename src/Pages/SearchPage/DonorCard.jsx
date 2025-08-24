import profile from '../../assets/logo/profile.png'

const DonorCard = ({ donor }) => {
    const { name, email, bloodGroup, division, district, eligible } = donor;
    return (
        <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden border border-gray-200">
            {/* Image */}
            <figure className="px-4 pt-4">
                <img src={profile} alt={name} className="w-24 h-24 rounded-full object-cover" />
            </figure>

            {/* Card Body */}
            <div className="card-body items-start text-left p-4">
                {/* Name and Blood Group */}
                <h2 className="card-title text-lg font-bold">{name} <span className="text-red-600 ml-2">({bloodGroup})</span></h2>

                {/* Division & District */}
                <p className="text-gray-600">{division}, {district}</p>

                {/* Email */}
                <p className="text-gray-500 text-sm">✉️ {email}</p>

                {/* Eligibility Status */}
                <div className="mt-2">
                    {eligible ? (
                        <span className="badge badge-success gap-2">✅ Eligible</span>
                    ) : (
                        <span className="badge badge-error gap-2">❌ Not Eligible</span>
                    )}
                </div>

                {/* Donate Button */}
                {eligible && (
                    <button className="btn btn-sm btn-primary mt-3 w-full">Donate</button>
                )}
            </div>
        </div>
    );
};

export default DonorCard;