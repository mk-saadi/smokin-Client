/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import ActiveLink from "../active/ActiveLink";
import { MdOutlineNoFood } from "react-icons/md";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => console.log(error));
    };

    return (
        <div className="navbar bg-slate-100 border-b-2 border-sky-500 grid grid-cols-2 sm:flex fixed top-0 opacity-95 z-50">
            <div className="navbar-start order-1">
                <Link
                    to="/"
                    className="text-gray-800 outline outline-1 px-4 outline-sky-400 font-extrabold ml-2 drop-shadow-lg text-xl flex justify-center items-center gap-2 py-2 rounded-none font-mono"
                >
                    <MdOutlineNoFood className="sm:text-2xl text-xl md:text-4xl"></MdOutlineNoFood>
                    SMOKI'N
                </Link>
            </div>
            <div className="navbar-center text-gray-800 text-sm sm:text-sm flex gap-8 sm:gap-4 text-center sm:order-2 md:order-2 order-last mt-4  ml-16 sm:m-0 md:m-0 lg:m-0">
                <ActiveLink to="/">HOME</ActiveLink>
                <ActiveLink to="/blog">BLOG</ActiveLink>
                <ActiveLink to="/recipes">RECIPES</ActiveLink>
                <ActiveLink to="/shop">SHOP</ActiveLink>
            </div>
            <div className="navbar-end order-3 ml-20 sm:m-0 md:m-0 lg:m-0">
                {user ? (
                    <>
                        <Link to="/">
                            <button
                                className="sm:px-4 text-xs sm:text-sm md:text-base rounded-none btn btn-info btn-sm text-white"
                                onClick={handleLogOut}
                            >
                                Logout
                            </button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="sm:px-4 text-xs sm:text-sm md:text-base rounded-none  btn btn-info btn-sm text-white">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="sm:px-4 text-xs sm:text-sm md:text-base rounded-none btn btn-info btn-sm text-white">
                                Register
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
