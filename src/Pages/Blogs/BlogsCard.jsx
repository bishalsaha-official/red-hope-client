import { Link } from "react-router-dom";

const BlogsCard = ({ blog }) => {
    const { title, image, content, _id } = blog;
    const sliceContent = content.length > 100 ? content.slice(0, 100) + "..." : content;

    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img className="w-full h-48 object-cover" src={image} alt={title}
            />
            <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
                <p className="text-gray-600 mb-4">{sliceContent}</p>
                <button className="btn bg-[#EF3D32] text-white">
                    <Link to={`/blogs/${_id}`}> View Details</Link>
                </button>
            </div>
        </div>
    );
};

export default BlogsCard;