import type {Config} from "tailwindcss"
import {defaultPlugin} from "./src/lib/tw-plugin-default"


const config =  {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "index.html",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  plugins: [defaultPlugin,function ({ addUtilities }) {
      const newUtilities = {
        '.color-red': {
          'color': 'red',
        },
        '.transform-origin-left-bottom': {
          'transform-origin': 'left bottom',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },],
} satisfies Config

export default config
  