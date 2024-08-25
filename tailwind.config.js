import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				"2xl": "1400px"
			}
		},
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
				"red-red": "#ff4401",
				"red-red-80": "#ff6934",
				"red-red-90": "#ff571a",
				"secondary-color-background": "#fff",
				tomato: "#e64f1a",
				dimgray: {
					"100": "#525c63",
					"200": "#5a5043",
					"300": "#574d42",
				},
				darkslategray: {
					"100": "#444f5f",
					"200": "#46475b",
					"300": "#335248",
					"400": "#473e3b",
				},
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				xl: "20px",
				mini: "15px",
				"6xs": "7px",
			},
			fontFamily: {
				"regular-10": "'Source Sans Pro'",
				rubik: "Rubik",
				sans: [...fontFamily.sans]
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
			},
		}
	},
};

export default config;