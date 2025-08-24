import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDonor = () => {
    const axiosPublic = useAxiosPublic()
    const {data: donors = []} = useQuery({
        queryKey: ['donors'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users/donor')
            return res.data
        }
    })
    return [donors]
};

export default useDonor;