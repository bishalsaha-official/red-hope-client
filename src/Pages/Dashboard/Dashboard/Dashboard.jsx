import AdminDashboard from "../AdminDashboard/AdminDashboard";
import DonorDashboard from "../DonorDashboard/DonorDashboard";

const Dashboard = () => {

    const isAdmin = true;

    return (
        <>
            {
                isAdmin ?
                    <>
                        <AdminDashboard></AdminDashboard>
                    </>
                    :
                    <>
                        <DonorDashboard></DonorDashboard>
                    </>
            }
        </>
    );
};

export default Dashboard;