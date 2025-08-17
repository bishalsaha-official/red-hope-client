import moment from "moment/moment";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddBlog = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_key = import.meta.env.VITE_Image_Hosting_Key;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const imgRes = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if (!imgRes.data.success) {
            Swal.fire({
                icon: "error",
                title: "Image upload failed",
                text: "Please try again."
            });
            return;
        }
        const imageUrl = imgRes.data.data.display_url;

        const blogInfo = {
            title: data.title,
            image: imageUrl,
            date: moment().format("MMM Do YY"),
            time: moment().format('LT'),
            content: data.blogText,
            status: "draft"
        }

        const res = await axiosPublic.post('/blogs', blogInfo)
        if (res.data.insertedId) {
            reset()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your blog has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="max-w-9/12 mx-auto my-10 shadow-sm rounded-3xl">
            <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                <h1 className="text-2xl font-bold text-white">Add Blog</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-5" >
                {/* Title */}
                <div className="form-control mb-3">
                    <label className="label font-bold">Blog Title:</label>
                    <input
                        type="text"
                        {...register("title", { required: true })}
                        placeholder="Enter blog title"
                        className="input input-secondary text-xl w-full"
                    />
                    {errors.title && <p>Please provide blog title</p>}
                </div>

                {/* Thumbnail */}
                <div className="form-control mb-3">
                    <label className="label font-bold">Thumbnail Image:</label>
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-secondary w-full"
                    />
                    {errors.image && <p>Please provide thumbnail</p>}
                </div>

                {/* Description */}
                <div className="form-control mb-3">
                    {/* request message */}
                    <label className="label font-bold">Content:</label>
                    <textarea
                        {...register('blogText', { required: true })}
                        placeholder="Type here..."
                        className="textarea textarea-secondary text-xl w-full"
                    />
                    {errors.blogText && <p>Please enter Description</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-info w-full text-white">
                    Create Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlog;