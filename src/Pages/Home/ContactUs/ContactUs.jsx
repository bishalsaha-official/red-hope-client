import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contactBg from '../../../assets/home/contactBg.jpg'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ContactUs = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const res = await axiosPublic.post('/contacts', data)
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Thanks for reaching out! The RedHope team will contact you soon.",
                showConfirmButton: false,
                timer: 2000
            });
            reset()
        }
        return res.data
    };

    return (
        <section style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactBg})`, }} className={"py-16 bg-cover bg-center bg-no-repeat"}>
            <div className="max-w-10/12 mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#EF3D32] mb-4">Get in Touch</h2>
                    <p className="text-white mb-8">Reach out to RedHope for support, feedback, or to join our mission to save lives.</p>
                    <div className="text-white space-y-4">
                        <p className="text-xl "><FaLocationDot className="inline-block"></FaLocationDot> 123 Blood Bank Road, Khulna, Bangladesh</p>
                        <p className="text-xl"><FaPhoneAlt className="inline-block"></FaPhoneAlt> +880 1234 567890</p>
                        <p className="text-xl"><MdEmail className="inline-block"></MdEmail> support@redhope.org</p>
                    </div>
                </div>

                {/* RIGHT SIDE: CONTACT FORM */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register('name', { required: true })}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-red-400"
                            />
                            {errors.name && <span className="text-[#EF3D32]text-sm">Name is required</span>}
                        </div>

                        <div>
                            <input
                                type="tel"
                                placeholder="Your Phone Number"
                                {...register('phone', { required: true })}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-red-400"
                            />
                            {errors.phone && <span className="text-[#EF3D32] text-sm">Phone number is required</span>}
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register('email', { required: true })}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-red-400"
                            />
                            {errors.email && <span className="text-[#EF3D32] text-sm">Email is required</span>}
                        </div>

                        <div>
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                {...register('message', { required: true })}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-red-400"
                            />
                            {errors.message && <span className="text-[#EF3D32] text-sm">Message is required</span>}
                        </div>

                        <button type="submit" className="w-full bg-[#EF3D32] text-white py-3 rounded-lg hover:bg-red-600 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;