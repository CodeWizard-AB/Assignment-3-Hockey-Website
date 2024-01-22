/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}"];
export const theme = {
	extend: {
		colors: {
			btn: "#FF4240",
			primary: "#131318",
		},
	},	
};
export const plugins = [require("daisyui")];
