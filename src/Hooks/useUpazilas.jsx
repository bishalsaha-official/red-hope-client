import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useUpazilas = () => {
    const axiosPublic = useAxiosPublic()

    const { data: upazilas = [] } = useQuery({
        queryKey: ['upazilas'],
        queryFn: async () => {
            const res = await axiosPublic.get('/upazilas')
            return res.data
        }
    })
    return [upazilas]
};

export default useUpazilas;