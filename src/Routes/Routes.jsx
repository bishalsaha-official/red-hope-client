import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Dashboard/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import MyDonationRequest from "../Pages/Dashboard/DonationRequest/MyDonationRequest";
import CreateDonationRequest from "../Pages/Dashboard/CreateDonationRequest/CreateDonationRequest";
import DashboardLayout from "../Layouts/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/my-donation-requests',
                element: <MyDonationRequest></MyDonationRequest>
            },
            {
                path: '/dashboard/create-donation-request',
                element: <CreateDonationRequest></CreateDonationRequest>
            }
        ]
    }
]);