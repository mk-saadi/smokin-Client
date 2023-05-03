import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const displayName = form.name.value;
        const password = form.password.value;

        console.log(`name: ${displayName} \n email: ${email}\n password: ${password}`);

        createUser(email, password, displayName)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-slate-600">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-t-[1px] border-slate-500">
                        <form
                            onSubmit={handleRegister}
                            className="card-body"
                        >
                            {/* displayName */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="your name"
                                    className="input input-bordered"
                                />
                            </div>
                            {/* photoURL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="your name"
                                    className="input input-bordered"
                                />
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
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
                            <div className="form-control mt-6">
                                <button
                                    className="btn btn-info rounded-none font-bold text-white"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <Link
                            className="text-center -mt-4"
                            to="/login"
                        >
                            <button className="hover:underline text-info bg-transparent border-0 mb-7 text-xs opacity-80">
                                Already have an account?
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
