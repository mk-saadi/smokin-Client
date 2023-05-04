import React from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import { RiSendPlaneFill } from "react-icons/ri";

const Home = () => {
    const chef = useLoaderData([]);
    console.log(chef[0].recipe2img);

    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url("https://d1f28u9l1tudce.cloudfront.net/beb-hero-butterburger-got-its-name.jpg")`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl sm:text-5xl md:text-7xl font-bold font-mono text-slate-100">
                            It is even better than an <br /> expensive cookery book
                        </h1>

                        <br />
                        <div className="flex text-center justify-center">
                            <input
                                type="text"
                                placeholder="Search your favorite chefs"
                                className="input input-bordered  input-info font-mono w-full max-w-3xl rounded-e-none bg-slate-200 text-gray-800"
                            />
                            <button className="btn btn-info rounded-none rounded-e-md">
                                <FaSearch className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <main className="my-44">
                <section className="mb-28">
                    <h2 className="font-mono text-4xl text-center text-gray-600 mb-4">
                        Our top selling Recipes
                    </h2>
                    <div className="carousel mx-36 text-gray-600 text-center">
                        <div
                            id="item1"
                            className="carousel-item w-full flex flex-col"
                        >
                            <img
                                src={chef[0].recipe1img}
                                className="object-cover"
                                style={{ height: "500px", width: "100%" }}
                            />
                            <br />
                            <h3>Recipe: {chef[0].recipe1}</h3>
                        </div>
                        <div
                            id="item2"
                            className="carousel-item w-full flex flex-col"
                        >
                            <img
                                src={chef[0].recipe2img}
                                className="object-cover"
                                style={{ height: "500px", width: "100%" }}
                            />
                            <br />
                            <h3>Recipe: {chef[0].recipe2}</h3>
                        </div>
                        <div
                            id="item3"
                            className="carousel-item w-full flex flex-col"
                        >
                            <img
                                src={chef[0].recipe3img}
                                className="object-cover"
                                style={{ height: "500px", width: "100%" }}
                            />
                            <br />
                            <h3>Recipe: {chef[0].recipe3}</h3>
                        </div>
                        <div
                            id="item4"
                            className="carousel-item w-full flex flex-col"
                        >
                            <img
                                src={chef[0].recipe4img}
                                className="object-cover"
                                style={{ height: "500px", width: "100%" }}
                            />
                            <br />
                            <h3>Recipe: {chef[0].recipe4}</h3>
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a
                            href="#item1"
                            className="btn btn-xs"
                        >
                            1
                        </a>
                        <a
                            href="#item2"
                            className="btn btn-xs"
                        >
                            2
                        </a>
                        <a
                            href="#item3"
                            className="btn btn-xs"
                        >
                            3
                        </a>
                        <a
                            href="#item4"
                            className="btn btn-xs"
                        >
                            4
                        </a>
                    </div>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 mx-10">
                    {chef.map((cf) => (
                        <Chefs
                            key={cf.id}
                            cf={cf}
                        ></Chefs>
                    ))}
                </section>
                <section className="bg-rose-100 p-3 mt-24 mx-14">
                    <div className="border-[1px] border-rose-400 sm:px-28 md:px-32 px-14  py-20 text-center">
                        <p className="text-rose-400 font-mono text-xl">Our newsletter</p>
                        <h3 className="font-mono text-xl sm:text-2xl md:text-3xl mb-14 text-gray-600">
                            Subscribe to our newsletter & keep up with our latest recipes and
                            organized workshops.
                        </h3>
                        <div className="flex">
                            <input
                                className="placeholder:italic placeholder:text-slate-400 block bg-transparent w-full border border-rose-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none font-mono"
                                placeholder="Enter your email address here"
                                type="email"
                                name="search"
                            />
                            <button className="btn btn-error rounded-none">
                                <RiSendPlaneFill className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
