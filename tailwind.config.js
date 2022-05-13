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
				'primary-1': '#6933FF',
				'primary-2': '#2F00B3',
				'secondary-1': '#FFEE32',
				'secondary-2': '#B3A512',
			},
		},
	},
	plugins: [],
};
