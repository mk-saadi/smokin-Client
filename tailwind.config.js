/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            mono: ["'Berkshire Swash', cursive"],
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
