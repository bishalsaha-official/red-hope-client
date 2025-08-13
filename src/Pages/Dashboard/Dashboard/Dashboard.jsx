import useAuth from "../../../Hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth()

    return (
        <div>
            <h2>Welcome Back, {user.displayName}</h2>
        </div>
    );
};

export default Dashboard;