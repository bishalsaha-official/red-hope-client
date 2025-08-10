import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Await, Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import donor from '../../assets/register/donor.jpg'

const Register = () => {
    const [upazilas, setUpazilas] = useState([])
    const [districts, setDistricts] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch("password");
    const axiosPublic = useAxiosPublic()
    const image_hosting_key = import.meta.env.VITE_Image_Hosting_Key;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/public/upazilas.json')
            .then(res => res.json())
            .then(data => {
                setUpazilas(data[2].data)
            })
    }, [])

    useEffect(() => {
        fetch('/public/districts.json')
            .then(res => res.json())
            .then(data => {
                setDistricts(data[2].data)
            })
    }, [])

    const onSubmit = async (data) => {
        console.log(data)
        // image hosting
        const imageFile = { image: data.image[0] }
        const imgRes = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if (!imgRes.data.success) {
            Swal.fire({
                icon: "error",
                title: "Image upload failed",
                text: "Please try again."
            });
            return;
        }
        const imageUrl = imgRes.data.data.display_url;

        // create user
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                // update profile
                updateUserProfile(data.name, imageUrl)
                    .then(async () => {
                        console.log('Updated Profile')
                        // Send User Information to the database
                        const userInformation = {
                            email: data.email,
                            name: data.name,
                            image: imageUrl,
                            bloodGroup: data.bloodGroup,
                            district: data.district,
                            upazila: data.upazila,
                            role: "donor",
                            status: "active"
                        };
                        const res = await axiosPublic.post('/users', userInformation);
                        console.log("Backend Response:", res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Donor registered successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong",
                    text: error.message
                });
            })
    }


    return (
        <section className="min-h-screen flex items-center justify-center p-4 bg-[#FAF3E0]">
            <div className="max-w-5xl bg-[#F7F7F7] rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left side image */}
                <div className="hidden md:block">
                    <img src={donor}
                        alt="Donate Blood"
                        className="w-full h-full object-cover" />
                </div>

                {/* Right side form */}
                <div className="p-6 md:p-10">
                    <h2 className="text-2xl font-bold text-[#EF3D32] mb-4 text-center">Join as a Donor</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <input type="text" placeholder="Full Name" {...register("name", { required: true })} className="input input-bordered w-full" />
                        {errors.name && <p className="text-[#EF3D32] text-sm">Name is required</p>}

                        {/* Email */}
                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered w-full" />
                        {errors.email && <p className="text-[#EF3D32] text-sm">Email is required</p>}

                        {/* Photo */}
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full file-input-secondary" />
                        {errors.image && <p className="text-[#EF3D32] text-sm">Photo is required</p>}

                        {/* Blood Group */}
                        <select {...register("bloodGroup", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Blood Group</option>
                            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                        </select>
                        {errors.bloodGroup && <p className="text-[#EF3D32] text-sm">Blood group is required</p>}

                        {/* District */}
                        <select {...register("district", { required: true })} className="select select-bordered w-full">
                            <option value="">Select District</option>
                            {
                                districts.map(district => <option key={district.id}>{district.name}</option>)
                            }
                        </select>
                        {errors.district && <p className="text-[#EF3D32] text-sm">District is required</p>}

                        {/* Upazila */}
                        <select {...register("upazila", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Upazila</option>
                            {
                                upazilas.map(upazila => <option key={upazila.id}>{upazila.name}</option>)
                            }
                        </select>
                        {errors.upazila && <p className="text-[#EF3D32] text-sm">Upazila is required</p>}

                        {/* Password */}
                        <input type="password" placeholder="Password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                        })} className="input input-bordered w-full" />
                        {errors.password?.type === "required" && (
                            <p className="text-[#EF3D32] font-semibold mt-2">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-[#EF3D32] font-semibold mt-2">Password must be 6 characters</p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-[#EF3D32] font-semibold mt-2">Password must be less than 20 characters</p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-[#EF3D32] font-semibold mt-2">Password must be at least 6 characters long and include uppercase, lowercase, number, and special character</p>
                        )}

                        {/* Confirm Password */}
                        <input type="password" placeholder="Confirm Password" {...register("confirm_password", { required: true, validate: value => value === password })} className="input input-bordered w-full" />
                        {errors.confirm_password && <p className="text-[#EF3D32] text-sm">Passwords do not match</p>}

                        <button type="submit" className="w-full bg-[#EF3D32] hover:bg-red-700 text-white py-2 rounded">
                            Register
                        </button>
                    </form>
                    <p className="text-center my-5">Already registered as a donor? <Link className="text-[#EF3D32]" to='/login'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Register;