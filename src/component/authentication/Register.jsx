import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const displayName = form.name.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(`name: ${displayName} \n email: ${email}\n password: ${password}`);

        setError("");

        if (password !== confirm) {
            toast.error("password did not match!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        } else if (password.length < 6) {
            toast.error("password must be at least 6 characters long!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        createUser(email, password, displayName)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
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
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    required
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
                                    required
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>
                            {/* confirm */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    required
                                    name="confirm"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="flex justify-center items-center gap-2 mt-3">
                                <input
                                    className="checkbox checkbox-info w-5 h-5"
                                    name="accept"
                                    onClick={handleAccepted}
                                    type="checkbox"
                                ></input>
                                <label className="text-sm">
                                    Accept{" "}
                                    <span className="text-info link text">
                                        Terms and Conditions
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor=""
                                    className="text-error text-sm"
                                >
                                    {error}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    disabled={!accepted}
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
