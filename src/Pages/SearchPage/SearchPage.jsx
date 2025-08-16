import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useUpazilas from "../../Hooks/useUpazilas";
import useDistrict from "../../Hooks/useDistrict";
import { useState } from "react";
import BloodDonationRequestCard from "../BloodDonationRequest/BloodDonationRequestCard";

const SearchPage = () => {
    const axiosPublic = useAxiosPublic()
    const [districts] = useDistrict()
    const [upazilas] = useUpazilas()
    const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

    // Load Pending Request
    const { data: searchResult = [] } = useQuery({
        queryKey: ['search'],
        queryFn: async () => {
            const res = await axiosPublic.get('/donation-request?status=pending')
            return res.data;
        }
    })

    const [district, setDistrict] = useState("")
    const [upazila, setUpazila] = useState("")
    const [bg, setBg] = useState("")
    const [filtered, setFiltered] = useState([])

    const handleSearch = e => {
        e.preventDefault()

        const result = searchResult.filter((res) => {
            return (
                res.district === district &&
                res.upazila === upazila &&
                res.bloodGroup === bg
            );
        })
        setFiltered(result)
    }



    return (
        <div className="max-w-10/12 mx-auto py-28">
            <h2 className="text-2xl font-bold mb-4">Search Pending Requests</h2>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="grid md:grid-cols-4 gap-4 bg-base-200 p-5 rounded-xl" >
                {/* District */}
                <select className="select select-bordered" value={district} onChange={(e) => setDistrict(e.target.value)}>
                    <option value="">Select District</option>
                    {
                        districts.map((district, index) => <option key={index} value={district.name}>{district.name}</option>)
                    }
                </select>

                {/* Upazila */}
                <select className="select select-bordered" value={upazila} onChange={(e) => setUpazila(e.target.value)}>
                    <option value="">Select Upazila</option>
                    {
                        upazilas.map((upazila, index) => <option key={index} value={upazila.name}>{upazila.name}</option>)
                    }
                </select>

                {/* Blood Group */}
                <select className="select select-bordered" value={bg} onChange={(e) => setBg(e.target.value)}>
                    <option value="">Blood Group</option>
                    {
                        bloodGroup.map((bg) => <option key={bg} value={bg}>{bg}</option>)
                    }
                </select>

                <button type="submit" className="btn bg-[#EF3D32] text-white">Search Now</button>
            </form>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
                {
                    filtered.map(donation => <BloodDonationRequestCard key={donation._id} donation={donation}></BloodDonationRequestCard>)
                }
            </div>


        </div>
    );
};

export default SearchPage;