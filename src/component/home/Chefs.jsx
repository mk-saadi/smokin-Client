/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chefs = ({ cf }) => {
    const { id, picture, name, experience, likes } = cf;
    return (
        <div className="relative border-[2px] border-sky-700 rounded-md p-4 bg-sky-100 shadow-md hover:-translate-y-1.5 duration-150 hover:shadow-lg hover:drop-shadow-md">
            <img
                style={{ height: "auto", width: "300px", objectFit: "cover" }}
                className="rounded-md shadow-md object-center"
                src={picture}
                alt=""
            />
            <p className="text-2xl sm:2xl text-gray-800 font-bold">
                Chef's Name: <span className="font-mono">{name}</span>
            </p>
            <p className="font-bold text-gray-600 mt-3">Experience: {experience}</p>
            <p className="flex justify-left items-center text-gray-600 font-bold">
                Likes: <FaHeart className="mx-1 text-rose-500"></FaHeart>
                {likes}
            </p>
            <Link to={`/chef/${id}`}>
                <button className="btn btn-info w-[100%] text-white font-bold hover:scale-95 shadow-md mt-8 bottom-0">
                    View Chef's Recipes
                </button>
            </Link>
        </div>
    );
};

export default Chefs;
