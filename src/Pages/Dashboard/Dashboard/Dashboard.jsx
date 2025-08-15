import AdminDashboard from "../AdminDashboard/AdminDashboard";
import DonorDashboard from "../DonorDashboard/DonorDashboard";
import VolunteerDashboard from "../VolunteerDashboard/VolunteerDashboard";

const Dashboard = () => {

    const isAdmin = true;
    const volunteer = true;

    return (
        <>
            {
                isAdmin ?
                    <AdminDashboard></AdminDashboard> :
                    volunteer ?
                        <VolunteerDashboard></VolunteerDashboard> :
                        <DonorDashboard></DonorDashboard>
            }
        </>
    );
};

export default Dashboard;