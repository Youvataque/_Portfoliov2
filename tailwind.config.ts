import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        '2xl': '2000px'
      },
      fontSize: {
        'md' : '16px',
        '3.5xl' : ['35px', "1.2"],
        '4xl' : ['45px', "1.2"],
        '8xl': ['80px', "1.2"],
      },
      colors : {
        background: "#11131F",
        foreground: "#141726",
        primary: "#D6E1FF",
        secondary: "#9EB1FF",
        borderColor : "#304384",
        elementColor : "#182449",
        accentColor : "#1d2e62",
      },
      borderRadius: {
        
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        grid: "grid 15s linear infinite",
      },
      borderWidth: {
        DEFAULT: "1px",
        "0.5": "0.1px",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config