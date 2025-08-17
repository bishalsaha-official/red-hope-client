import { useLoaderData } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const BlogsDetails = () => {
    const { title, image, date, time, content } = useLoaderData()

    return (
        <div className="max-w-4xl mx-auto pt-28">
            <div className="p-5 shadow-sm rounded-2xl my-5">
                <div className="mb-6">
                    <img src={image} alt={title} className="w-full h-[400px] object-cover rounded-2xl shadow-md" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                    <span className="mr-4"><MdDateRange className="inline-block text-xl"></MdDateRange> {date}</span>
                    <span><FaClock className="inline-block text-xl"></FaClock> {time}</span>
                </div>

                <div className="prose max-w-none text-gray-700 leading-relaxed">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default BlogsDetails;