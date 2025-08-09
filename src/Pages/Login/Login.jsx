import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
                    <h2 className="text-2xl font-bold text-[#EF3D32] mb-4 text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* Email */}
                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered w-full" />
                        {errors.email && <p className="text-[#EF3D32] text-sm">Email is required</p>}

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
                        {errors.password?.type === "pattern" && (
                            <p className="text-[#EF3D32] font-semibold mt-2">Password must be at least 6 characters long and include uppercase, lowercase, number, and special character</p>
                        )}

                        <button type="submit" className="w-full bg-[#EF3D32] hover:bg-red-700 text-white py-2 rounded">
                            Login
                        </button>
                    </form>
                    <p className="text-center my-5">Dont have an account? <Link className="text-[#EF3D32]" to='/register'>Register</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;