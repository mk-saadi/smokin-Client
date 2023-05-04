import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError();

    const navigate = useNavigate();
    const handleGoB = () => {
        navigate(-1);
    };
    return (
        <section className="flex items-center justify-center h-screen px-20 bg-slate-100">
            <div className="flex flex-col justify-center items-center pt-4">
                <img
                    className="h-[33rem] w-[64rem] ml-4"
                    src="https://i.ibb.co/4VQCgk8/killer-404.png"
                    alt="killer-404"
                />
                <Link
                    onClick={handleGoB}
                    to="/"
                    className="flex gap-2 btn btn-info rounded-none mt-8 mb-20 text-white w-2/5 text-center"
                >
                    Back to homepage
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
