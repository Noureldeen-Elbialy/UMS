import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import Login from "../pages/Login/Login";
import MasterLayout from "../components/Layouts/MasterLayout";
import Home from "../pages/Home/Home";
import UsersList from "../pages/UsersList/UsersList";
import AddUser from "../pages/AddUser/AddUser";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login/>} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoute><MasterLayout /></ProtectedRoute>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="users" element={<UsersList/>} />
            <Route path="user/:func" element={<AddUser/>} />
            <Route path="profile" element={<Profile/>} />
        </Route>
        <Route path="*" element={<h2>notfound</h2>} />
    </>
))
export default router;