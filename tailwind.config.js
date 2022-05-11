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
				'primary-1': '#D62828',
				'primary-2': '#003049',
				'secondary-1': '#F77F00',
				'secondary-2': '#FCBF49',
			},
		},
	},
	plugins: [],
};
