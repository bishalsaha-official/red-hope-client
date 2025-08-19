import useAdmin from "../../../Hooks/useAdmin";
import useVolunteer from "../../../Hooks/useVolunteer";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import DonorDashboard from "../DonorDashboard/DonorDashboard";
import VolunteerDashboard from "../VolunteerDashboard/VolunteerDashboard";

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isVolunteer] = useVolunteer();

    return (
        <>
            {
                isAdmin ?
                    <AdminDashboard></AdminDashboard> :
                    isVolunteer ?
                        <VolunteerDashboard></VolunteerDashboard> :
                        <DonorDashboard></DonorDashboard>
            }
        </>
    );
};

export default Dashboard;