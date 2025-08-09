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
                        <li><a href="/" className="hover:text-[#EF3D32]">Home</a></li>
                        <li><a href="/about" className="hover:text-[#EF3D32]">About</a></li>
                        <li><a href="/donors" className="hover:text-[#EF3D32]">Find Donors</a></li>
                        <li><a href="/request" className="hover:text-[#EF3D32]">Request Blood</a></li>
                        <li><a href="/contact" className="hover:text-[#EF3D32]">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/faq" className="hover:text-[#EF3D32]">FAQ</a></li>
                        <li><a href="/privacy" className="hover:text-[#EF3D32]">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-[#EF3D32]">Terms & Conditions</a></li>
                        <li><a href="/blog" className="hover:text-[#EF3D32]">Blog</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <ul className="text-sm space-y-2">
                        <li>📍 123 RedHope Street, Dhaka, BD</li>
                        <li>📞 +880 1234 567 890</li>
                        <li>✉️ support@redhope.org</li>
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