import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";

const Profile = () => {
    const { updateUserProfile } = useAuth()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [isEditing, setIsEditing] = useState(false);
    const image_hosting_key = import.meta.env.VITE_Image_Hosting_Key;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const [profile, refetch] = useUser()
    const { register, handleSubmit, reset } = useForm();

    // Update profile
    const onSubmit = async (data) => {
        console.log(data)
        let imageUrl = profile.image;
        if (data.image && data.image.length > 0) {
            const imageFile = { image: data.image[0] }
            const imgRes = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            if (!imgRes.data.success) {
                Swal.fire({ icon: "error", title: "Image upload failed" });
                return;
            }
            imageUrl = imgRes.data.data.display_url;
        }

        await updateUserProfile(data.name, imageUrl)
            .then(async () => {
                const userInformation = {
                    name: data.name,
                    image: imageUrl,
                    bloodGroup: data.bloodGroup,
                    district: data.district,
                    upazila: data.upazila
                }

                const res = await axiosSecure.patch(`/users/${profile._id}`, userInformation)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Profile updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                    setIsEditing(false);
                }
            })


    };

    return (
        <div className="max-w-8/12 mx-auto mt-10 shadow-sm rounded-3xl">
            <div>
                <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                    <h1 className="text-2xl font-bold text-white mb-5">My Profile</h1>
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={profile.image} alt="profile" />
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
                            <button type="submit" className="btn btn-success text-white" >
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