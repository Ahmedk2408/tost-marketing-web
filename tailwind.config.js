/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#8d2424',
                    gold: '#c69d54',
                    navy: '#013961',
                    cream: '#f5f1e8',
                    beige: '#e8dcc4',
                    charcoal: '#2d2d2d',
                    offwhite: '#fafaf8',
                }
            },
            fontFamily: {
                heading: ['Playfair Display', 'Georgia', 'serif'],
                body: ['Inter', '-apple-system', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
