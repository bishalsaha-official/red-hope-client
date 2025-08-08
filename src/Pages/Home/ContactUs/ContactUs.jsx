import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {

        const { register, handleSubmit, reset, formState: { errors } } = useForm();
        const onSubmit = (data) => {
            console.log('Contact Form Data:', data);
            reset();
            // You can POST this data to your backend or send email via nodemailer
        };

        return (
            <section className="py-16 bg-cover bg-center bg-no-repeat bg-[#FCE0DF]" >
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    {/* LEFT SIDE */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Get in Touch</h2>
                        <p className="text-gray-700 mb-8">Reach out to RedHope for support, feedback, or to join our mission to save lives.</p>
                        <div className="text-gray-800 space-y-4">
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
                                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    {...register('phone', { required: true })}
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-red-400"
                                />
                                {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    {...register('email', { required: true })}
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-red-400"
                                />
                                {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                            </div>

                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    rows="4"
                                    {...register('message', { required: true })}
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-red-400"
                                />
                                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    };

    export default ContactUs;