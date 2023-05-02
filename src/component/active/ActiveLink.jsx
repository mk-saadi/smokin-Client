import React from "react";
import "./active.css";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
