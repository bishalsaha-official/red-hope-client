import { Link } from "react-router-dom";

const ContentManagement = () => {
    return (
        <div className="max-w-10/12 mx-auto mt-5 rounded-2xl shadow-sm">
            <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                <h1 className="text-2xl font-bold text-white mb-5">Content Management</h1>
            </div>
            <div className="my-5 mx-5">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-bold mb-2">Status:</h2>
                    <Link to="/dashboard/content-management/add-blog">
                        <button className="btn btn-info text-white">Add Blog</button>
                    </Link>
                </div>
                <select defaultValue="" className="select select-secondary w-full">
                    <option value="" disabled>Status</option>
                    <option value="draft">draft</option>
                    <option value="published">published</option>
                </select>
            </div>
        </div>
    );
};

export default ContentManagement;