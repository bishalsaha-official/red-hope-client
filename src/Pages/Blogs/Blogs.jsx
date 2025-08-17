import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
    const axiosPublic = useAxiosPublic()
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs/publish?status=published')
            return res.data
        }
    })

    return (
        <div className="max-w-10/12 mx-auto pt-28">
            <h2 className="text-2xl text-center font-bold my-5">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-5 my-5">
                {
                    blogs.map(blog => <BlogsCard blog={blog} key={blog._id}></BlogsCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;