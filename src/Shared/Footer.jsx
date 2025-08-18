import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">RedHope</h2>
                    <p className="text-sm leading-6">
                        A community-powered platform to find, request, and donate blood safely and quickly.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-[#EF3D32]">Home</Link></li>
                        <li><Link to="/" className="hover:text-[#EF3D32]">About</Link></li>
                        <li><Link to="/search-page" className="hover:text-[#EF3D32]">Find Donors</Link></li>
                        <li><Link to="/dashboard/my-donation-requests" className="hover:text-[#EF3D32]">Request Blood</Link></li>
                        <li><Link to="/" className="hover:text-[#EF3D32]">Contact</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-[#EF3D32]">FAQ</Link></li>
                        <li><Link to="/" className="hover:text-[#EF3D32]">Privacy Policy</Link></li>
                        <li><Link to="/" className="hover:text-[#EF3D32]">Terms & Conditions</Link></li>
                        <li><Link to="/blogs" className="hover:text-[#EF3D32]">Blog</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <ul className="text-sm space-y-2">
                        <li><FaLocationDot className="inline-block"></FaLocationDot> 123 Blood Bank Road, Khulna, Bangladesh</li>
                        <li><FaPhoneAlt className="inline-block"></FaPhoneAlt> +880 1234 567890</li>
                        <li><MdEmail className="inline-block"></MdEmail> support@redhope.org</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} RedHope. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;