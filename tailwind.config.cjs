/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		// Badge colors
		'bg-blue-100', 'text-blue-800',
		'bg-red-100', 'text-red-800',
		'bg-green-100', 'text-green-800',
		'bg-yellow-100', 'text-yellow-800',
		'bg-purple-100', 'text-purple-800',
		'bg-pink-100', 'text-pink-800',
		'bg-indigo-100', 'text-indigo-800',
		'bg-gray-100', 'text-gray-800',
	],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
	themes: ["cupcake"], // wireframe 대신 cupcake 테마 사용
	darkTheme: "cupcake", // 다크 모드도 cupcake로
	logs: false,
	}
}
