import React from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import FoodDetail from "../foodDetail/FoodDetail";

const Home = () => {
    const chef = useLoaderData([]);
    console.log(chef);

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url("https://d1f28u9l1tudce.cloudfront.net/beb-hero-butterburger-got-its-name.jpg")`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="grid grid-cols-2">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-slate-100 text-left">
                            It is even better than an expensive cookery book
                        </h1>

                        <br />
                        <div className="flex text-center justify-center">
                            <input
                                type="text"
                                placeholder="Search your favorite chefs"
                                className="input input-bordered  input-info w-full max-w-xs rounded-e-none"
                            />
                            <button className="btn btn-info rounded-none rounded-e-md">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {chef.map((cf) => (
                        <FoodDetail
                            key={cf.id}
                            cf={cf}
                        ></FoodDetail>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
