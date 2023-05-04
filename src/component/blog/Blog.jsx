/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { FaFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
    return (
        <div className="min-h-screen mx-20 pt-8">
            <div
                className="mt-16  bg-slate-300 "
                ref={ref}
            >
                <Accordion
                    transition={{ duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)" }}
                >
                    <AccordionItem>
                        {({ open }) => (
                            <>
                                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                                    <span className="text-left text-gray text-xl">
                                        1. The differences between uncontrolled and controlled
                                        components?
                                    </span>
                                    <svg
                                        className={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </AccordionHeader>

                                <AccordionBody>
                                    <div className="p-5 font-light">
                                        <p className="mb-3 text-gray-500">
                                            In React, there are two ways to handle form input:
                                            controlled components and uncontrolled components.
                                        </p>
                                        <p className="mb-3 text-gray-500">
                                            Uncontrolled components are components where the form
                                            data is handled by the DOM itself. The input fields in
                                            uncontrolled components are directly bound to the DOM
                                            element, and React has no control over its value or
                                            behavior. Uncontrolled components can be faster because
                                            they do not require any additional code to manage the
                                            state of the form, but they have a few limitations:
                                        </p>
                                        <div className="overflow-x-auto mb-3">
                                            <table className="table w-full  table-zebra ">
                                                <tbody>
                                                    <tr>
                                                        <th>1</th>
                                                        <td>
                                                            It is harder to implement custom input
                                                            validation logic.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>2</th>
                                                        <td>
                                                            It is harder to implement conditional
                                                            rendering based on the form values.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>3</th>
                                                        <td>
                                                            The form data is managed by the DOM, not
                                                            by React, so it can be harder <br /> to
                                                            integrate with the rest of your React
                                                            application.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-3 text-gray-500">
                                            Controlled components, on the other hand, are components
                                            where the form data is handled by React. In a controlled
                                            component, the value of the input field is controlled by
                                            the component's state. When the user types something
                                            into the input field, an onChange event is triggered,
                                            which updates the component's state, causing it to
                                            re-render. Controlled components have a few benefits:
                                        </p>
                                        <div className="overflow-x-auto">
                                            <table className="table w-full  table-zebra ">
                                                <tbody>
                                                    <tr>
                                                        <th>1</th>
                                                        <td>
                                                            You can easily implement custom input
                                                            validation logic.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>2</th>
                                                        <td>
                                                            You can easily implement conditional
                                                            rendering based on the form values.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>3</th>
                                                        <td>
                                                            The form data is managed by React, so it
                                                            is easier to <br /> integrate with the
                                                            rest of your React application.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ open }) => (
                            <>
                                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                                    <span className="text-left text-gray text-xl">
                                        2. How to validate React props using PropTypes
                                    </span>
                                    <svg
                                        className={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </AccordionHeader>

                                <AccordionBody>
                                    <div className="p-5 font-light">
                                        <p className="mb-3 text-gray-500">
                                            In React, PropTypes is a library used for validating the
                                            props passed to a component. It allows developers to
                                            specify the type of each prop and whether it is required
                                            or not.
                                        </p>
                                        <p className="mb-3 text-gray-500">
                                            If a prop with an incorrect type or that is required is
                                            not passed to the component, a warning will be shown in
                                            the console. This can help catch bugs early on and make
                                            components more robust.
                                        </p>
                                    </div>
                                </AccordionBody>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ open }) => (
                            <>
                                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                                    <span className="text-left text-gray text-xl">
                                        3. the difference between nodejs and express js.
                                    </span>
                                    <svg
                                        className={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </AccordionHeader>

                                <AccordionBody>
                                    <div className="p-5 font-light">
                                        <p className="mb-3 text-gray-500">
                                            Node.js is a runtime environment for executing
                                            JavaScript code outside of a web browser, allowing
                                            developers to build server-side applications using
                                            JavaScript. It provides a platform-independent way of
                                            building server-side applications that can be run on any
                                            operating system. Node.js provides a set of core
                                            modules, such as HTTP, File System, and Process, to
                                            facilitate server-side development. Node.js can be used
                                            for various purposes, such as building web servers,
                                            RESTful APIs, real-time applications, and command-line
                                            tools.
                                        </p>
                                        <p className="mb-3 text-gray-500">
                                            Express.js, on the other hand, is a web application
                                            framework built on top of Node.js. It provides a set of
                                            features and tools to build web applications, such as
                                            routing, middleware, templates, and more. Express.js
                                            simplifies the process of building web applications by
                                            providing a high-level API that abstracts away many of
                                            the lower-level details of building a web server. It
                                            also allows developers to easily integrate with other
                                            Node.js modules and tools.
                                        </p>
                                        <p className="mb-3 text-gray-500">
                                            In summary, while Node.js provides the runtime
                                            environment for executing JavaScript on the server,
                                            Express.js
                                        </p>
                                    </div>
                                </AccordionBody>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ open }) => (
                            <>
                                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                                    <span className="text-left text-gray text-xl">
                                        4. What is a custom hook, and why will you create a custom
                                        hook?
                                    </span>
                                    <svg
                                        className={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </AccordionHeader>

                                <AccordionBody>
                                    <div className="p-5 font-light">
                                        <p className="mb-3 text-gray-500">
                                            In React, a custom hook is a reusable function that
                                            contains some logic and state that can be shared across
                                            multiple components. Custom hooks can be created by
                                            combining existing React hooks, such as useState,
                                            useEffect, useContext, and others, and provide a way to
                                            encapsulate and reuse functionality in a more organized
                                            and modular way.
                                        </p>
                                        <p className="mb-3 text-gray-500">
                                            Creating a custom hook can help simplify and abstract
                                            away complex logic and state management that is repeated
                                            across multiple components. It can also help improve
                                            code reusability and maintainability, making it easier
                                            to refactor and test.
                                        </p>
                                        <p className="mb-3 text-gray-500">
                                            For example, if you have some state and logic that are
                                            used across multiple components, you can create a custom
                                            hook that encapsulates that state and logic, and then
                                            use it in all those
                                        </p>
                                    </div>
                                </AccordionBody>
                            </>
                        )}
                    </AccordionItem>
                </Accordion>
            </div>
            <Pdf
                targetRef={ref}
                filename="code-example.pdf"
            >
                {({ toPdf }) => (
                    <button
                        className="flex gap-2 btn btn-info rounded-none mt-8 mb-20 text-white"
                        onClick={toPdf}
                    >
                        <FaFilePdf className="text-xl" /> Download Pdf
                    </button>
                )}
            </Pdf>
        </div>
    );
};

export default Blog;
