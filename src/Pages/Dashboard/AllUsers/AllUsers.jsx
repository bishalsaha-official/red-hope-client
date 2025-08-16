import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { deleteUserAccount } = useAuth()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    // Make Admin User
    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Make Admin this user From Donor ",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updateRole = { role: 'admin' }
                const res = await axiosSecure.patch(`/users/admin/${id}`, updateRole)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Updated",
                        text: "This Donor is now On Admin",
                        icon: "success"
                    });
                }
            }
        });
    }

    // Make Volunteer User
    const handleMakeVolunteer = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Make Volunteer this user From Donor ",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updateRole = { role: 'volunteer' }
                const res = await axiosSecure.patch(`/users/volunteer/${id}`, updateRole)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Updated",
                        text: "This Donor is now On Volunteer",
                        icon: "success"
                    });
                }
            }
        });
    }

    // Make Block User
    const handleUserBlock = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Block This User",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Block it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updateRole = { status: 'block' }
                const res = await axiosSecure.patch(`/users/block/${id}`, updateRole)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Blocked",
                        text: "This user has been blocked",
                        icon: "success"
                    });
                }
            }
        });
    }

    // Make Unblock User
    const handleUserUnBlock = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Unblock This User",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Unblock"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updateRole = { status: 'active' }
                const res = await axiosSecure.patch(`/users/unblock/${id}`, updateRole)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Blocked",
                        text: "This user has been Active Again",
                        icon: "success"
                    });
                }
            }
        });
    }

    // Delete The User
    const handleDeleteUser = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure you want to delete this user",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteUserAccount()
                    .then(async () => {
                        const res = await axiosSecure.delete(`/user/${id}`)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been delete",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div className="max-w-10/12 mx-auto mt-5 rounded-2xl shadow-sm">
            <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                <h1 className="text-2xl font-bold text-white mb-5">All Users</h1>
            </div>
            <div className="my-5 mx-5">
                <h2 className="text-xl font-bold mb-2">Status:</h2>
                <select defaultValue="" className="select select-secondary w-full" >
                    <option value="" disabled>Status</option>
                    <option value="active">active</option>
                    <option value="blocked">blocked</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            users.map((user, index) => <tr key={user._id} >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={user.image} alt="Users Photo" />
                                        </div>
                                    </div>
                                </td>
                                <td className="capitalize">{user.name}</td>
                                <td>{user.email}</td>
                                <td className="capitalize">{user.role}</td>
                                <td className={`capitalize font-semibold ${user.status === 'active' ? 'text-green-500' : 'text-blue-950'}`}> {user.status}</td>
                                <td>
                                    <div className="flex flex-col gap-1">
                                        <button onClick={() => handleMakeVolunteer(user._id)} className="btn btn-xs btn-info text-white">Volunteer</button>
                                        <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs btn-success text-white">Admin</button>
                                        {
                                            user.status === 'active' ?
                                                <button onClick={() => handleUserBlock(user._id)} className="btn btn-xs btn-warning text-white">Block</button> :
                                                <button onClick={() => handleUserUnBlock(user._id)} className="btn btn-xs btn-warning text-white">Unblock</button>
                                        }
                                        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-xs btn-error text-white">Delete</button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;