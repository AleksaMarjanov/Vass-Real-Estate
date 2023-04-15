/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
        "./components/**/*.{html,js,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
    ],
    theme: {
        extend: {
            borderStyle: ["hover"],
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
            },
            keyframes: {
                "0%": { opacity: 0 },
                "100%": { opacity: 100 },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-out forwards',
            }, colors: {
                "primary-black": "#000407",
                "secondary-black": "#16161640",
                "secondary-white": "#c7c7c7",
                "darker-white": "#E8ECEB",
                "darker-white1": "#F5F7F7",
                "secondary-yellow": "#EDB518",
                "secondary-red": "#79031D",
                "kinda-red": "#0A62D0",
                "nice-blue": "#178CA4",
                "secondary-blue": "#115173",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};
