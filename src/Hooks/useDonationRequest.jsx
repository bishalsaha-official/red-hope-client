import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDonationRequest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: donationRequest = [] } = useQuery({
        queryKey: ['donation', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/donation-request?email=${user.email}`)
            return res.data
        }
    })
    return [donationRequest]
};

export default useDonationRequest;