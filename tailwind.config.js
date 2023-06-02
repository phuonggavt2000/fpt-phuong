/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                alpha: "hsla(0 0% 100% / 0.7)",
                nav: "#555",
                skin: "#000000",
                primary: "#ff701d",
                secondary: "#32323d",
                "dark-alpha-50": "rgba(0 0 0/ 0.5)",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
