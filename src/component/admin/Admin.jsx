import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../footer/Footer";

const Admin = () => {
    return (
        <div className="bg-slate-200">
            <Header />
            <div>
                <Outlet />
                <Footer />
                <Toaster
                    toastOptions={{
                        className: "",
                        style: {
                            border: "1px solid #713200",
                            padding: "16px",
                            color: "#713200",
                            fontWeight: "bolder",
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Admin;
