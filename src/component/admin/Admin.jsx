import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Admin = () => {
    return (
        <div className="bg-slate-200">
            <Header />
            <div className="mt-[4.4rem]">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Admin;
