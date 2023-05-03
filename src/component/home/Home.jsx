import React from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const chef = useLoaderData([]);
    console.log(chef);

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
                                className="input input-bordered  input-info font-mono w-full max-w-3xl rounded-e-none"
                            />
                            <button className="btn btn-info rounded-none rounded-e-md">
                                <FaSearch className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
