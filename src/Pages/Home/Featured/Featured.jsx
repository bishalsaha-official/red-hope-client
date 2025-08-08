import { LuNotebookPen } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { BiInjection } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";


const Featured = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-10/12 mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#EF3D32] mb-4">How Donation Works</h2>
                <p className="text-gray-600 mb-12 text-lg">
                    Giving blood is simple, safe, and life-changing. Here's how you can donate through RedHope.
                </p>

                <div className="grid gap-10 md:grid-cols-4">
                    <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300" >
                        <div className="text-5xl mb-4 inline-block"><p><LuNotebookPen></LuNotebookPen></p></div>
                        <h3 className="text-xl font-semibold text-[#EF3D32] mb-2">Register as a Donor</h3>
                        <p className="text-gray-700 text-sm">Sign up and complete your blood donor profile to join our community.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300" >
                        <div className="text-5xl mb-4 inline-block"><p><FaSearch></FaSearch></p></div>
                        <h3 className="text-xl font-semibold text-[#EF3D32] mb-2">Find or Receive Requests</h3>
                        <p className="text-gray-700 text-sm">Browse nearby requests or be contacted by those in urgent need.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300" >
                        <div className="text-5xl mb-4 inline-block"><p><BiInjection></BiInjection></p></div>
                        <h3 className="text-xl font-semibold text-[#EF3D32] mb-2">Donate Safely</h3>
                        <p className="text-gray-700 text-sm">Visit the hospital or donation center at the scheduled time and donate.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300" >
                        <div className="text-5xl mb-4 inline-block"><p><GiConfirmed></GiConfirmed></p></div>
                        <h3 className="text-xl font-semibold text-[#EF3D32] mb-2">Confirm & Inspire</h3>
                        <p className="text-gray-700 text-sm">Mark your donation as complete and inspire others to save lives too.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;