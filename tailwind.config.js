/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
			},
			backgroundImage: {
				mainBgImage: "url('/main/main-bg.jpg')",
			},
			translate: {
				50: '-50%',
			},
			screens: {
				xs: '576px',
			},
			boxShadow: {
				card: '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
				btn: '0 4px 20px 0 rgba(232, 170, 49, 0.43)',
				btnHover: '0px 4px 20px 5px rgba(255, 187, 54, 0.8)',
			},
			colors: {
				whiskySour: ' #e8aa31',
				mauiMist: '#ecf1f2',
				accent: '#141414',
			},
			fontFamily: {
				default: ['Montserrat', 'sans-serif'],
			},
			gridTemplateColumns: {
				sidebar: '23% 1fr',
				bigSidebar: '30% 1fr',
			},
			gridTemplateRows: {
				images: '1fr, auto',
			},
		},
	},
	plugins: [],
}
