import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./component/home/Home";
import Admin from "./component/admin/Admin";
import AuthProvider from "./context/AuthProvider";
import Login from "./component/authentication/Login";
import Register from "./component/authentication/Register";
import ChefDetail from "./component/chefDetail/ChefDetail";
import Blog from "./component/blog/Blog";
import PrivateRoute from "./component/private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Admin />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://chef-app-server-mk-saadi.vercel.app/chef"),
            },
            {
                path: "/chef/:id",
                element: (
                    <PrivateRoute>
                        <ChefDetail />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://chef-app-server-mk-saadi.vercel.app/chef/${params.id}`),
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </React.StrictMode>
);
