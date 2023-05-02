/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import ActiveLink from "../active/ActiveLink";

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100 border-b-2 border-sky-500">
            <div className="navbar-start">
                <Link
                    to="/"
                    className="text-white outline outline-1 rounded px-4 outline-sky-400 font-extrabold ml-2 drop-shadow-lg text-xl"
                >
                    SMOKI'N
                </Link>
            </div>
            <div className="navbar-center grid sm:text-sm sm:flex sm:gap-4 text-center">
                <ActiveLink to="/">HOME</ActiveLink>
                <ActiveLink to="/blog">BLOG</ActiveLink>
                <ActiveLink to="/recipes">RECIPES</ActiveLink>
                <ActiveLink to="/shop">SHOP</ActiveLink>
            </div>
            <div className="navbar-end">
                {user ? (
                    <Link to="/">
                        <button className="rounded-none btn btn-info text-white">Logout</button>
                    </Link>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="rounded-none btn btn-info text-white">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="rounded-none btn btn-info text-white">
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
