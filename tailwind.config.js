module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				body: 'Roboto',
				display: '"Press Start 2P"',
			},
			colors: {
				'primary-1': '#FFFFFF',
				'primary-2': '#00171F',
				'secondary-1': '#007EA7',
				'secondary-2': '#003459',
			},
		},
	},
	plugins: [],
};
