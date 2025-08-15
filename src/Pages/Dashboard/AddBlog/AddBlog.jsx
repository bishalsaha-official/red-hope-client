import { useForm } from "react-hook-form";
import { useRef, useMemo, useState } from 'react';
import JoditEditor from 'jodit-react';

const AddBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...'
    }), []);

    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <div className="max-w-9/12 mx-auto my-10 shadow-sm rounded-3xl">
            <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                <h1 className="text-2xl font-bold text-white">Add Blog</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-5" >
                {/* Title */}
                <div className="form-control mb-3">
                    <label className="label font-bold">Blog Title</label>
                    <input
                        type="text"
                        {...register("title", { required: true })}
                        placeholder="Enter blog title"
                        className="input input-bordered w-full"
                    />
                    {errors.title && <p>Please provide blog title</p>}
                </div>

                {/* Thumbnail */}
                <div className="form-control mb-3">
                    <label className="label font-bold">Thumbnail Image</label>
                    <input
                        type="file"
                        {...register("thumbnail", { required: true })}
                        className="file-input file-input-bordered w-full"
                    />
                    {errors.thumbnail && <p>Please provide thumbnail</p>}
                </div>

                {/* Rich Text Editor */}
                <div className="form-control">
                    <label className="label font-bold">Content</label>
                    <JoditEditor
                        config={config}
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onChange={(newContent) => {
                            setContent(newContent);
                            setValue("content", newContent);
                        }}
                    ></JoditEditor>
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