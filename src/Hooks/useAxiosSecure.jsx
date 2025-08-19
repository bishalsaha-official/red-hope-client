import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://red-hope-server.vercel.app'
})

const useAxiosSecure = () => {
    const { logoutUser } = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
        if (status === 401 || status === 403) {
            await logoutUser()
            navigate('/login')
        }
        return Promise.reject(error);
    });


    return axiosSecure;
};

export default useAxiosSecure;