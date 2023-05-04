/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(`email${email}\n password${password}`);

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-slate-600">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  border-t-[1px] border-slate-500">
                        <form
                            onSubmit={handleLogin}
                            className="card-body"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="enter email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="enter password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="flex justify-left items-center gap-2 text-left">
                                <input
                                    className="checkbox checkbox-info w-5 h-5"
                                    name="accept"
                                    type="checkbox"
                                ></input>
                                <label className="text-sm">
                                    <p>Remember me</p>
                                </label>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <button className="flex justify-center items-center btn btn-outline gap-1">
                                    <FcGoogle /> Google
                                </button>
                                <button className="flex justify-center items-center btn btn-outline gap-1">
                                    <FaGithub /> Github
                                </button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info rounded-none font-bold text-white">
                                    Login
                                </button>
                            </div>
                        </form>
                        <Link
                            className="text-center -mt-4"
                            to="/register"
                        >
                            <button className="hover:underline text-info bg-transparent border-0 mb-7 text-xs opacity-80">
                                Don't have an account?
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
