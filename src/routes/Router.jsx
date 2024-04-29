import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddArtCraft from "../pages/AddArtCraft";
import MyArtCraft from "../pages/MyArtCraft";
import AllArtCraft from "../pages/AllArtCraft";
import ViewDetails from "../pages/ViewDetails";
import UpdateItem from "../pages/UpdateItem";
import CategoryWiseCard from "../pages/CategoryWiseCard";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://palette-of-bengal-server.vercel.app/allCraft')
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
                </PrivateRoute>,
            },
            {
                path: '/allArtCraft',
                element: <AllArtCraft />,
                loader: () => fetch('https://palette-of-bengal-server.vercel.app/allCraft')
            },
            {
                path: '/allCraft/:id',
                element: <PrivateRoute>
                    <ViewDetails />
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://palette-of-bengal-server.vercel.app/allCraft/${params.id}`)
            },
            {
                path: '/updateItem/:id',
                element: <PrivateRoute><UpdateItem /></PrivateRoute>,
                loader:({params}) => fetch(`https://palette-of-bengal-server.vercel.app/updateItem/${params.id}`)
            },
            {
                path: '/allCategories/:sub_categoryname',
                element: <PrivateRoute >
                    <CategoryWiseCard />
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://palette-of-bengal-server.vercel.app/allCategories/${params.sub_categoryname}`)
            }
        ]
    }
])

export default router;