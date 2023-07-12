/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }
      
            'md': '980px',
            // => @media (min-width: 980px) { ... }
      
            'lg': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            fontFamily: {
                'header': ['Bebas Neue', 'sans-serif']
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}

