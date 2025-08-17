import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";

const ContentManagement = () => {
    const axiosPublic = useAxiosPublic()
    const [filterBlogs, setFilterBlogs] = useState("")

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs')
            return res.data;
        }
    })

    // Update Blog status
    const handleStatusPublish = async (id) => {
        const updateStatus = { status: 'published' }
        const res = await axiosPublic.patch(`/blogs/${id}`, updateStatus)
        if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Blog has been published now",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handleStatusUnPublish = async (id) => {
        const updateStatus = { status: 'draft' }
        const res = await axiosPublic.patch(`/blogs/${id}`, updateStatus)
        if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Blog has been draft now",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    // Delete Blog
    const handleDeleteBlog = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure you want to delete this Blog",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/blogs/${id}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Blog has been delete now",
                        icon: "success"
                    });
                    refetch()
                }
            }
        });
    }

    // Filter by (published or draft)
    const filterBlogsdata = filterBlogs ? blogs.filter(blog => blog.status === filterBlogs) : blogs

    return (
        <div className="max-w-10/12 mx-auto mt-5 rounded-2xl shadow-sm">
            <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                <h1 className="text-2xl font-bold text-white mb-5">Content Management</h1>
            </div>
            <div className="my-5 mx-5">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-bold mb-2">Status:</h2>
                    <Link to="/dashboard/content-management/add-blog">
                        <button className="btn btn-info text-white">Add Blog</button>
                    </Link>
                </div>
                <select defaultValue="" onChange={(e) => setFilterBlogs(e.target.value)} className="select select-secondary w-full">
                    <option value="" disabled>Status</option>
                    <option value="draft">draft</option>
                    <option value="published">published</option>
                </select>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Thumbnail</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="capitalize">
                            {
                                filterBlogsdata.map((blog, index) => <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={blog.image} alt="Avatar" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{blog.title}</td>
                                    <td>{blog.status}</td>
                                    <td>
                                        <div className="flex items-center gap-1">
                                            {
                                                blog.status === 'published' ?
                                                    <button onClick={() => handleStatusUnPublish(blog._id)} className="btn btn-sm btn-accent text-white">UnPublish</button>
                                                    :
                                                    <button onClick={() => handleStatusPublish(blog._id)} className="btn btn-sm btn-success text-white">Publish</button>
                                            }
                                            <button onClick={() => handleDeleteBlog(blog._id)} className="btn btn-sm btn-warning text-white">Delete</button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContentManagement;