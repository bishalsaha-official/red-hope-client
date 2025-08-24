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
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllBloodDonationRequest from "../Pages/Dashboard/AllBloodDonationRequest/AllBloodDonationRequest";
import ContentManagement from "../Pages/Dashboard/ContentManagement/ContentManagement";
import AddBlog from "../Pages/Dashboard/AddBlog/AddBlog";
import BloodDonationRequest from "../Pages/BloodDonationRequest/BloodDonationRequest";
import BloodDonationDetails from "../Pages/BloodDonationRequest/BloodDonationDetails";
import SearchPage from "../Pages/SearchPage/SearchPage";
import Blogs from "../Pages/Blogs/Blogs";
import BlogsDetails from "../Pages/Blogs/BlogsDetails";

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
                path: '/search-donor',
                element: <SearchPage></SearchPage>
            },
            {
                path: '/blood-donation-request',
                element: <BloodDonationRequest></BloodDonationRequest>
            },
            {
                path: '/blood-donation-request/:id',
                element: <PrivateRoutes><BloodDonationDetails></BloodDonationDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://red-hope-server.vercel.app/donation-request/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/blogs/:id',
                element: <BlogsDetails></BlogsDetails>,
                loader: ({ params }) => fetch(`https://red-hope-server.vercel.app/blogs/${params.id}`)
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
            // User Donor Routes
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
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
            },

            // Admin Routes
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/all-donation-requests',
                element: <AllBloodDonationRequest></AllBloodDonationRequest>
            },
            {
                path: '/dashboard/content-management',
                element: <ContentManagement></ContentManagement>
            },
            {
                path: '/dashboard/content-management/add-blog',
                element: <AddBlog></AddBlog>
            }
        ]
    }
]);