/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '8px 8px 20px 3px rgba(147, 147, 147, 0.13)',
			},
		},
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
