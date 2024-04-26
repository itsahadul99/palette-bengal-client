import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddArtCraft from "../pages/AddArtCraft";
import MyArtCraft from "../pages/MyArtCraft";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/addArtCraft',
                element: 
                <PrivateRoute>
                    <AddArtCraft />
                </PrivateRoute>
            },
            {
                path: '/myArtCraft',
                element: <PrivateRoute> 
                    <MyArtCraft />
                </PrivateRoute>
            }
        ]
    }
])

export default router;