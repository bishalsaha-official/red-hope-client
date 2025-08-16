import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDonationRequest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: donationRequest = [], refetch } = useQuery({
        queryKey: ['donation', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donation-request?email=${user.email}`)
            return res.data
        }
    })
    return [donationRequest, refetch]
};

export default useDonationRequest;