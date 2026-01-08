/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'serif'],
      },
      colors: {
        'book-bg': '#2a2a2a',      // Medium dark gray
        'page': '#000000',         // Black page
        'page-dark': '#0a0a0a',    // Slightly lighter black
        'ink': '#ffffff',          // White text
        'ink-light': '#b0b0b0',    // Light gray for accents
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        book: {
          primary: '#8b7355',      // Warm brown
          secondary: '#5a4a3a',    // Dark brown
          accent: '#c9a961',       // Gold accent
          neutral: '#2c2416',      // Ink color
          'base-100': '#f8f6f0',   // Page color
          'base-200': '#e8e6e0',   // Darker page
          'base-300': '#d8d6d0',   // Even darker
          'base-content': '#2c2416', // Ink text
          info: '#6b8cae',
          success: '#7a9a7e',
          warning: '#c9a961',
          error: '#a85c5c',
        },
      },
    ],
  },
};
