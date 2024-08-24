/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-2": "#1e252b",
        "dark-3": "#262d34",
        "secondary-color-secondary-3": "#97989d",
        "secondary-color-background-2": "#f7f7f7",
        "dark-4": "#2c353d",
        "secondary-color-secondary-4": "#858ead",
        "blue-blue-80": "#5d95e8",
        "secondary-color-secondary-5": "#c5d0e6",
        "secondary-color-secondary-6": "#f4f6f8",
        "purple-purple-10": "#f0f1fe",
        "purple-purple-20": "#e0e2fd",
        dimgray: {
          "100": "#525c63",
          "200": "#5a5043",
          "300": "#574d42",
        },
        "red-red-80": "#ff6934",
        tomato: "#e64f1a",
        "secondary-color-background": "#fff",
        darkslategray: {
          "100": "#444f5f",
          "200": "#46475b",
          "300": "#335248",
          "400": "#473e3b",
        },
        "red-red": "#ff4401",
        "red-red-90": "#ff571a",
      },
      spacing: {},
      fontFamily: {
        "regular-10": "'Source Sans Pro'",
        rubik: "Rubik",
      },
      borderRadius: {
        xl: "20px",
        mini: "15px",
        "6xs": "7px",
      },
    },
    fontSize: {
      "3xs": "0.625rem",
      xs: "0.75rem",
      base: "1rem",
      "4xs": "0.563rem",
      sm: "0.875rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      lg: "1.125rem",
      inherit: "inherit",
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    },
  },
  plugins: [],
}
