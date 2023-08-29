/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#F25422', //color orange
					secondary: '#EC7C15',
					accent: '#12141E', //footer color

					'base-100': '#ffffff',
					'base-200': '#757B82',
					'base-300': '#C7C7C7',
				},
			},
		],
	},
};
