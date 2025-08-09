import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const password = watch("password");
    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
            style={{ backgroundImage: "linear-gradient(rgba(239, 61, 50, 0.8), rgba(239, 61, 50, 0.8)), url('https://images.unsplash.com/photo-1604909052951-6248bda01018')" }}>
            <div className="max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left side image */}
                <div className="hidden md:block">
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                        alt="Donate Blood"
                        className="w-full h-full object-cover" />
                </div>

                {/* Right side form */}
                <div className="p-6 md:p-10">
                    <h2 className="text-2xl font-bold text-[#EF3D32] mb-4 text-center">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <input type="text" placeholder="Full Name" {...register("name", { required: true })} className="input input-bordered w-full" />
                        {errors.name && <p className="text-[#EF3D32] text-sm">Name is required</p>}

                        {/* Email */}
                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered w-full" />
                        {errors.email && <p className="text-[#EF3D32] text-sm">Email is required</p>}

                        {/* Photo */}
                        <input type="file" {...register("photo", { required: true })} className="file-input file-input-bordered w-full" />
                        {errors.photo && <p className="text-[#EF3D32] text-sm">Photo is required</p>}

                        {/* Blood Group */}
                        <select {...register("bloodGroup", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Blood Group</option>
                            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                        </select>
                        {errors.bloodGroup && <p className="text-[#EF3D32] text-sm">Blood group is required</p>}

                        {/* District */}
                        <select {...register("district", { required: true })} className="select select-bordered w-full">
                            <option value="">Select District</option>
                            <option>Dhaka</option>
                            <option>Chattogram</option>
                            <option>Khulna</option>
                        </select>
                        {errors.district && <p className="text-[#EF3D32] text-sm">District is required</p>}

                        {/* Upazila */}
                        <select {...register("upazila", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Upazila</option>
                            <option>Mirpur</option>
                            <option>Gulshan</option>
                            <option>Banani</option>
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
                            register
                        </button>
                    </form>
                    <p className="text-center my-5">Already have as donor? <Link className="text-[#EF3D32]" to='/login'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Register;