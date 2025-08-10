import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import donor from '../../assets/register/donor.jpg'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <section className="min-h-screen flex items-center justify-center p-4 bg-[#FAF3E0]">
            <div className="max-w-5xl bg-[#F7F7F7] items-center rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left side image */}
                <div className="hidden md:block">
                    <img src={donor} alt="Donate Blood" className="w-full h-full object-cover" />
                </div>
                {/* Right side form */}
                <div className="p-6 md:p-10">
                    <h2 className="text-2xl font-bold text-[#EF3D32] mb-4 text-center">Donor Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* Email */}
                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered w-full" />
                        {errors.email && <p className="text-[#EF3D32] text-sm">Email is required</p>}

                        {/* Password */}
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className="input input-bordered w-full" />
                        {errors.password?.type === "required" && (
                            <p className="text-[#EF3D32] font-semibold mt-2">Password is required</p>
                        )}

                        <button type="submit" className="w-full bg-[#EF3D32] hover:bg-red-700 text-white py-2 rounded">
                            Login
                        </button>
                    </form>
                    <p className="text-center my-5">No account yet? <Link className="text-[#EF3D32]" to='/register'>Register</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;