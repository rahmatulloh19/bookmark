/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			screens: {
				mm: "375px",
				md: "768px",
				lg: "1024px",
				xl: "1148px",
			},
			container: {
				center: true,
				padding: "32px",
				screens: {
					DEFAULT: "1148px",
				},
			},
			colors: {
				mainColor: "#242a45",
				mainBgColor: "#5267df",
				buttonBgColor: "#fa5959",
			},
		},
	},
	darkMode: false,

	plugins: [require("daisyui")],
};
