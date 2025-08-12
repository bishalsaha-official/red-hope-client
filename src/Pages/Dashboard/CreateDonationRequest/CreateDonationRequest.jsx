import { useForm } from "react-hook-form";
import useDistrict from "../../../Hooks/useDistrict";
import useUpazilas from "../../../Hooks/useUpazilas";
import useAuth from "../../../Hooks/useAuth";

const CreateDonationRequest = () => {
    const [upazilas] = useUpazilas()
    const [districts] = useDistrict()
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        reset()
    };

    return (
        <div className="max-w-9/12 mx-auto my-10 shadow-sm rounded-3xl">
            <div className="text-center p-5 mb-6 bg-[#E57373] rounded-t-3xl" >
                <h1 className="text-2xl font-bold text-white">Create Donation Request</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-5">
                {/* Name and email row */}
                <div className="grid md:grid-cols-2 gap-5 mb-3">
                    {/* requester name */}
                    <div className="form-control">
                        <label className="label font-bold">Requester Name:</label>
                        <input
                            {...register('requesterName')}
                            defaultValue={user.displayName}
                            readOnly
                            placeholder="Requester Name"
                            className="input input-secondary text-xl w-full"
                        />
                    </div>

                    {/* requester email */}
                    <div className="form-control">
                        <label className="label font-bold">Requester Email:</label>
                        <input
                            {...register('requesterEmail')}
                            defaultValue={user.email}
                            readOnly
                            placeholder="Requester Email"
                            className="input input-secondary text-xl w-full"
                        />
                    </div>
                </div>

                {/* Recipient Name & Blood group row */}
                <div className="grid md:grid-cols-2 gap-5 mb-3">
                    {/* recipient name */}
                    <div className="form-control">
                        <label className="label font-bold">Recipient Name:</label>
                        <input
                            {...register('recipientName', { required: true })}
                            placeholder="Recipient Name"
                            className="input input-secondary text-xl w-full"
                        />
                        {errors.recipientName && <p>Please enter recipient name</p>}
                    </div>

                    {/* blood group */}
                    <div className="form-control">
                        <label className="label font-bold">Select Blood Group:</label>
                        <select {...register('bloodGroup', { required: true })} defaultValue="" className="select select-secondary w-full text-xl">
                            <option value="" disabled>Select Blood Group</option>
                            {bloodGroups.map((bg, index) => (
                                <option key={index} value={bg}>{bg}</option>
                            ))}
                        </select>
                        {errors.bloodGroup && <p>Please select blood group</p>}
                    </div>
                </div>

                {/* District and Upazila Row */}
                <div className="grid md:grid-cols-2 gap-5 mb-3">
                    {/* Recipient District */}
                    <div className="form-control">
                        <label className="label font-bold">District:</label>
                        <select {...register("district", { required: true })} className="select select-secondary w-full text-xl">
                            <option value="">Select District</option>
                            {
                                districts.map((district, index) => <option key={index} value={district.name}>{district.name}</option>)
                            }
                        </select>
                        {errors.district && <p>Please select district group</p>}
                    </div>
                    {/* Recipient upazila */}
                    <div className="form-control">
                        <label className="label font-bold">Upazila:</label>
                        <select {...register("upazila", { required: true })} className="select select-secondary w-full text-xl">
                            <option value="">Select Upazila</option>
                            {
                                upazilas.map((upazila, index) => <option key={index} value={upazila.name}>{upazila.name}</option>)
                            }
                        </select>
                        {errors.upazila && <p>Please select upazila group</p>}
                    </div>
                </div>

                {/* Hospital and Address Row */}
                <div className="grid md:grid-cols-2 gap-5 mb-3">
                    {/* hospital name */}
                    <div className="form-control">
                        <label className="label font-bold">Hospital Name:</label>
                        <input
                            {...register('hospitalName', { required: true })}
                            placeholder="Hospital Name"
                            className="input input-secondary text-xl w-full"
                        />
                        {errors.hospitalName && <p>Please enter hospital name</p>}
                    </div>
                    {/* full address */}
                    <div className="form-control">
                        <label className="label font-bold">Full Address:</label>
                        <input
                            {...register('fullAddress', { required: true })}
                            placeholder="Full Address"
                            className="input input-secondary text-xl w-full"
                        />
                        {errors.fullAddress && <p>Please enter full address</p>}
                    </div>
                </div>

                {/* Donation Date and Time row */}
                <div className="grid md:grid-cols-2 gap-5 mb-3">
                    {/* donation date */}
                    <div className="form-control">
                        <label className="label font-bold">Donation Date:</label>
                        <input
                            type="date"
                            {...register('donationDate', { required: true })}
                            className="input input-secondary text-xl w-full"
                        />
                        {errors.donationDate && <p>Please select donation date</p>}
                    </div>
                    {/* donation time */}
                    <div className="form-control">
                        <label className="label font-bold">Donation time:</label>
                        <input
                            type="time"
                            {...register('donationTime', { required: true })}
                            className="input input-secondary text-xl w-full"
                        />
                        {errors.donationTime && <p>Please select donation time</p>}
                    </div>
                </div>

                {/* Request message row */}
                <div className="form-control mb-3">
                    {/* request message */}
                    <label className="label font-bold">Request Message:</label>
                    <textarea
                        {...register('requestMessage', { required: true })}
                        placeholder="Request message"
                        className="textarea textarea-secondary text-xl w-full"
                    />
                    {errors.requestMessage && <p>Please enter request message</p>}
                </div>
                <button type="submit" className="btn btn-secondary w-full">Request Now</button>
            </form>
        </div>
    );
};

export default CreateDonationRequest;