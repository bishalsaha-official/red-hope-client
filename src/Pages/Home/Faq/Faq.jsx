const Faq = () => {
    return (
        <div className="max-w-10/12 mx-auto my-15">
            <h2 className="text-2xl md:text-4xl font-bold text-[#EF3D32] mb-10 text-center">FAQ</h2>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How can I donate blood through RedHope?</div>
                <div className="collapse-content text-sm">You can register as a donor by creating an account and filling in your blood group and location. When someone nearby needs blood, you’ll receive a notification to help.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I request blood for someone else?</div>
                <div className="collapse-content text-sm">Yes! You can submit a blood request on behalf of friends or family members by providing patient details and hospital information in the request form.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How quickly can I find a donor in an emergency?</div>
                <div className="collapse-content text-sm">RedHope instantly matches your request with registered donors nearby. Most requests receive responses within minutes, depending on donor availability.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Does RedHope charge for blood donation?</div>
                <div className="collapse-content text-sm">No. RedHope is a completely free community-driven platform. Donors volunteer without any payment, and the platform does not take any fees.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I ensure the donor’s blood is safe?</div>
                <div className="collapse-content text-sm">RedHope encourages donors to donate only after a recent medical check-up. Hospitals and blood banks also run mandatory screening before transfusion.</div>
            </div>
        </div>
    );
};

export default Faq;