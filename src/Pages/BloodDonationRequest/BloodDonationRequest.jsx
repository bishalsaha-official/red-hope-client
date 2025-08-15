import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BloodDonationRequestCard from "./BloodDonationRequestCard";

const BloodDonationRequest = () => {
    const axiosPublic = useAxiosPublic()
    const { data: donationsRequest = [] } = useQuery({
        queryKey: ['donation-request'],
        queryFn: async () => {
            const res = await axiosPublic.get('http://localhost:5000/donation-request?status=pending')
            return res.data;
        }
    })

    return (
        <div className="max-w-10/12 mx-auto pt-28">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
                {
                    donationsRequest.map(donation => <BloodDonationRequestCard key={donation._id} donation={donation}></BloodDonationRequestCard>)
                }
            </div>
        </div>
    );
};

export default BloodDonationRequest;