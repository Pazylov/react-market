/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				card: ' 0 4px 20px 0 rgba(0, 0, 0, 0.1);',
			},
			colors: {
				whiskySour: ' #e8aa31',
				mauiMist: '#ecf1f2',
			},
			fontFamily: {
				default: ['Montserrat', 'sans-serif'],
			},
			gridTemplateColumns: {
				sidebar: '20% 1fr',
			},
			gridTemplateRows: {
				images: '1fr, 25%',
			},
		},
	},
	plugins: [],
}
