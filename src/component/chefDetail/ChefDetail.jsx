import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./chef.css";

const ChefDetail = () => {
    const cf = useLoaderData();

    const [checkedItems1, setCheckedItems1] = useState({});
    const [checkedItems2, setCheckedItems2] = useState({});
    const [checkedItems3, setCheckedItems3] = useState({});
    const [checkedItems4, setCheckedItems4] = useState({});

    return (
        <div className="pt-1">
            <div className="border-[2px] m-12 sm:m-16 grid grid-cols-1 sm:grid-cols-2 border-sky-500 shadow-md drop-shadow-md bg-slate-300 rounded-md">
                <div className="mt-16 flex flex-col justify-center items-center">
                    <img
                        className="w-2/4 rounded sm:w-4/6 shadow-md"
                        src={cf.picture}
                        alt=""
                    />
                    <p className="text-3xl mt-2 font-mono font-bold text-gray-600">{cf.name}</p>
                </div>
                <div className="mt-32 text-sm text-gray-600">
                    <p style={{ whiteSpace: "pre-line" }}>
                        About <span className="text-rose-500">{cf.name}</span>: {cf.bio}
                    </p>
                    <p className="mt-3">Experience: {cf.experience} of experience</p>
                    <p className="flex justify-left items-center my-3">
                        Likes: <FaHeart className="mx-1 text-rose-500"></FaHeart>
                        {cf.likes}
                    </p>
                    <p className="mb-3">
                        Top Recipes: <span className="hover:text-rose-500">{cf.recipe1}</span>,
                        {"  "}
                        <span className="hover:text-rose-500">{cf.recipe2}</span>,{"  "}
                        <span className="hover:text-rose-500">{cf.recipe3}</span>,{"  "}
                        <span className="hover:text-rose-500">{cf.recipe4}</span>.
                    </p>
                </div>
            </div>
            <h2 className="text-center text-4xl text-gray-600 font-mono -mb-6">
                Top recipes of <span className="text-rose-500">{cf.name}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-12 sm:m-16 ">
                <div className="border border-gray-400 rounded-md p-4">
                    <img
                        style={{ width: "400px", height: "300px", objectFit: "cover" }}
                        src={cf.recipe1img}
                        className="w-1/2 md:w-1/2 rounded-md mb-3 shadow"
                    />
                    <p className="text-xl text-gray-600 mb-4">Recipe Name: {cf.recipe1}</p>
                    <p className="text-2xl text-gray-500 mb-4">Ingredients:</p>
                    <div className="bg-base-100 text-gray-200 p-2 rounded">
                        {cf.recipe1info.split("\n").map((line, index) => (
                            <div key={index}>
                                <input
                                    className="checkbox checkbox-info w-4 h-4 mr-2"
                                    type="checkbox"
                                    checked={checkedItems1[index]}
                                    onChange={() =>
                                        setCheckedItems1({
                                            ...checkedItems1,
                                            [index]: !checkedItems1[index],
                                        })
                                    }
                                />
                                <span className={checkedItems1[index] ? "checked" : ""}>
                                    {line}
                                </span>
                                <hr className="w-full bg-red-400 border-[1px] my-2 border-gray-300" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border border-gray-400 rounded-md p-4">
                    <img
                        style={{ width: "400px", height: "300px", objectFit: "cover" }}
                        src={cf.recipe2img}
                        className="w-1/2 md:w-1/2 rounded-md mb-3 shadow"
                    />
                    <p className="text-xl text-gray-600 mb-4">Recipe Name: {cf.recipe2}</p>
                    <p className="text-2xl text-gray-500 mb-4">Ingredients:</p>
                    <div className="bg-base-100 text-gray-200 p-2 rounded">
                        {cf.recipe2info.split("\n").map((line, index) => (
                            <div key={index}>
                                <input
                                    className="checkbox checkbox-info w-4 h-4 mr-2"
                                    type="checkbox"
                                    checked={checkedItems2[index]}
                                    onChange={() =>
                                        setCheckedItems2({
                                            ...checkedItems2,
                                            [index]: !checkedItems2[index],
                                        })
                                    }
                                />
                                <span className={checkedItems2[index] ? "checked" : ""}>
                                    {line}
                                </span>
                                <hr className="w-full bg-red-400 border-[1px] my-2 border-gray-300" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border border-gray-400 rounded-md p-4">
                    <img
                        style={{ width: "400px", height: "300px", objectFit: "cover" }}
                        src={cf.recipe3img}
                        className="w-1/2 md:w-1/2 rounded-md mb-3 shadow"
                    />
                    <p className="text-xl text-gray-600 mb-4">Recipe Name: {cf.recipe3}</p>
                    <p className="text-2xl text-gray-500 mb-4">Ingredients:</p>
                    <div className="bg-base-100 text-gray-200 p-2 rounded">
                        {cf.recipe3info.split("\n").map((line, index) => (
                            <div key={index}>
                                <input
                                    className="checkbox checkbox-info w-4 h-4 mr-2"
                                    type="checkbox"
                                    checked={checkedItems3[index]}
                                    onChange={() =>
                                        setCheckedItems3({
                                            ...checkedItems3,
                                            [index]: !checkedItems3[index],
                                        })
                                    }
                                />
                                <span className={checkedItems3[index] ? "checked" : ""}>
                                    {line}
                                </span>
                                <hr className="w-full bg-red-400 border-[1px] my-2 border-gray-300" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border border-gray-400 rounded-md p-4">
                    <img
                        style={{ width: "400px", height: "300px", objectFit: "cover" }}
                        src={cf.recipe4img}
                        className="w-1/2 md:w-1/2 rounded-md mb-3 shadow"
                    />
                    <p className="text-xl text-gray-600 mb-4">Recipe Name: {cf.recipe4}</p>
                    <p className="text-2xl text-gray-500 mb-4">Ingredients:</p>
                    <div className="bg-base-100 text-gray-200 p-2 rounded">
                        {cf.recipe4info.split("\n").map((line, index) => (
                            <div key={index}>
                                <input
                                    className="checkbox checkbox-info w-4 h-4 mr-2"
                                    type="checkbox"
                                    checked={checkedItems4[index]}
                                    onChange={() =>
                                        setCheckedItems4({
                                            ...checkedItems4,
                                            [index]: !checkedItems4[index],
                                        })
                                    }
                                />
                                <span className={checkedItems4[index] ? "checked" : ""}>
                                    {line}
                                </span>
                                <hr className="w-full bg-red-400 border-[1px] my-2 border-gray-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetail;
