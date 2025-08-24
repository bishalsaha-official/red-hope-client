import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import useDivisions from "../../Hooks/useDivisions";
import useDonor from "../../Hooks/useDonor";
import DonorCard from "./DonorCard";

const SearchPage = () => {
    const axiosPublic = useAxiosPublic()
    const [divisions] = useDivisions()
    const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    const [donors] = useDonor()

    const [division, setDivision] = useState("")
    const [bg, setBg] = useState("")
    const [eligible, setEligible] = useState("")

    const [filteredDonors, setFilteredDonors] = useState([]);


    return (
        <div className="max-w-10/12 mx-auto py-28">
            <h2 className="text-2xl font-bold mb-4">Search Available Donor</h2>

            {/* filter Option */}
            <div className="grid md:grid-cols-4 gap-4 bg-base-200 p-5 rounded-xl" >
                {/* Division */}
                <select className="select select-bordered" value={division} onChange={(e) => setDivision(e.target.value)}>
                    <option value="">Select Division</option>
                    {
                        divisions.map((division, index) => <option key={index} value={division.name}>{division.name}</option>)
                    }
                </select>

                {/* Blood Group */}
                <select className="select select-bordered" value={bg} onChange={(e) => setBg(e.target.value)}>
                    <option value="">Blood Group</option>
                    {
                        bloodGroup.map((bg) => <option key={bg} value={bg}>{bg}</option>)
                    }
                </select>

                {/* Eligible */}
                <select className="select select-bordered" value={eligible} onChange={(e) => setEligible(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Eligible">Eligible</option>
                </select>

                <button className="btn bg-[#EF3D32] text-white">Search Now</button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
                {
                    donors.map(donor => <DonorCard key={donor.id} donor={donor}></DonorCard>)
                }
            </div>


        </div>
    );
};

export default SearchPage;