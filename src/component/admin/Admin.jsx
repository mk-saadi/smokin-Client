import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Admin = () => {
    return (
        <div className="bg-slate-200">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Admin;
