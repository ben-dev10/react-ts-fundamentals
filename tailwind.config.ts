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
    extend: {},
  },
  plugins: [defaultPlugin,function ({ addUtilities }) {
      const newUtilities = {
        '.color-red': {
          'color': 'red',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },],
} satisfies Config

export default config
  