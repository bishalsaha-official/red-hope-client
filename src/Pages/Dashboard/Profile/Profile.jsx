import { QueryClient, useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [isEditing, setIsEditing] = useState(false);

    const { data: profile = {}, } = useQuery({
        queryKey: ['profile', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data
        }
    })

    const { register, handleSubmit, reset } = useForm();

    // Update profile
    const onSubmit = async (data) => {
        console.log(data)
    };

    return (
        <div className="max-w-8/12 mx-auto mt-10 bg-white rounded-3xl">
            <div>
                <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                    <h1 className="text-2xl font-bold text-white mb-5">My Profile</h1>
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={profile.image} alt="avatar" />
                            </div>
                        </div>
                    </div>
                    {
                        !isEditing ?
                            <button className="btn btn-warning text-white btn-sm" onClick={() => setIsEditing(true)} > Edit Profile </button>
                            :
                            <button className="btn btn-warning text-white btn-sm" onClick={() => { setIsEditing(false); reset(profile); }}> Cancel</button>

                    }
                </div>

                {/* Form */}
                <form className="p-6 space-y-4" onSubmit={handleSubmit(onSubmit)} >
                    {/* Name */}
                    <div className="form-control">
                        <label className="label font-bold">Name:</label>
                        <input
                            type="text"
                            {...register("name")}
                            disabled={!isEditing}
                            defaultValue={profile.name}
                            className="input text-xl input-bordered w-full"
                        />
                    </div>

                    {/* Email (always disabled) */}
                    <div className="form-control">
                        <label className="label font-bold">Email Address:</label>
                        <input
                            type="email"
                            {...register("email")}
                            disabled
                            defaultValue={profile.email}
                            className="input text-xl input-bordered w-full"
                        />
                    </div>

                    {/* Image URL */}
                    {
                        isEditing ?
                            <input
                                type="file"
                                {...register("image")}
                                disabled={!isEditing}
                                className="file-input file-input-bordered w-full file-input-error"
                            /> : ''
                    }

                    {/* District, Upazila, blood group row */}
                    <div className="grid md:grid-cols-3 gap-5">
                        {/* District */}
                        <div className="form-control">
                            <label className="label font-bold">District:</label>
                            <input
                                type="text"
                                {...register("district")}
                                disabled={!isEditing}
                                defaultValue={profile.district}
                                className="input text-xl input-bordered w-full"
                            />
                        </div>

                        {/* Upazila */}
                        <div className="form-control">
                            <label className="label font-bold">Upazila:</label>
                            <input
                                type="text"
                                {...register("upazila")}
                                disabled={!isEditing}
                                defaultValue={profile.upazila}
                                className="input text-xl input-bordered w-full"
                            />
                        </div>

                        {/* Blood Group */}
                        <div className="form-control">
                            <label className="label font-bold">Blood Group:</label>
                            <input
                                type="text"
                                {...register("bloodGroup")}
                                disabled={!isEditing}
                                defaultValue={profile.bloodGroup}
                                className="input text-xl input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    {isEditing && (
                        <div className="pt-4">
                            <button className="btn btn-success text-white" type="submit">
                                Save Changes
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Profile;