import plugin from "tailwindcss/plugin"
import {fontFamily} from "tailwindcss/defaultTheme"


export const defaultPlugin = plugin(
    // 1. base layer utilities from index.css file
    function({addBase}){
        addBase({
            ":root": {
                "--background": "0 0% 100%",
                "--foreground": "222.2 47.4% 11.2%",
                "--muted": "210 40% 96.1%",
                "--muted-foreground": "215.4 16.3% 46.9%",
                "--border": "214.3 31.8% 91.4%",
                "--primary": "222.2 47.4% 11.2%",
                "--primary-foreground": "210 40% 98%",
                "--secondary": "210 40% 96.1%",
                "--secondary-foreground": "222.2 47.4% 11.2%",
                // "--accent": "210 40% 96.1%",
                // "--accent": "212 206% 240%",
                "--accent": "#fa1f63",
                "--accent-foreground": "222.2 47.4% 11.2%",
                "--destructive": "0 100% 50%",
                "--destructive-foreground": "210 40% 98%",
                "--ring": "215 20.2% 65.1%",
                "--radius": "0.5rem",

                "--card": "0 0% 100%",
                "--card-foreground": "222.2 47.4% 11.2%",
            },
            ".dark": {
                "--background": "224 71% 4%",
                "--foreground": "213 31% 91%",
                "--muted": "223 47% 11%",
                "--muted-foreground": "215.4 16.3% 56.9%",
                "--accent": "216 34% 17%",
                "--accent-foreground": "210 40% 98%",
                "--border": "216 34% 17%",
                "--primary": "210 40% 98%",
                "--primary-foreground": "222.2 47.4% 1.2%",
                "--secondary": "222.2 47.4% 11.2%",
                "--secondary-foreground": "210 40% 98%",
                "--destructive": "0 63% 31%",
                "--destructive-foreground": "210 40% 98%",
                "--ring": "216 34% 17%",
                "--radius": "0.5rem",
                
                "--card": "224 71% 4%",
                "--card-foreground": "213 31% 91%",
            },
        })

        addBase({
            "*": {
                "@apply border-border":{},
            },
            body:{
                "color":""
            }
        })
    },
    
    // 2. extending tailwind with utility classes
    {
        theme:{
            // put classes here to extend 
            extend:{
                textColor:{
                    "accent1": "var(--accent)"
                },
                colors: {
                    border: "hsl(var(--border))",
                    input: "hsl(var(--input))",
                    ring: "hsl(var(--ring))",
                    background: "hsl(var(--background))",
                    foreground: "hsl(var(--foreground))",
                    primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    },
                    secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                    },
                    destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                    },
                    muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                    },
                    accent: {
                    // DEFAULT: "hsl(var(--accent))",
                    DEFAULT: "var(--accent)",
                    foreground: "hsl(var(--accent-foreground))",
                    },
                    popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                    },
                    card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                    },
                },
                borderRadius: {
                    lg: `var(--radius)`,
                    md: `calc(var(--radius) - 2px)`,
                    sm: "calc(var(--radius) - 4px)",
                },
                fontFamily: {
                    sans: ["var(--font-sans)", ...fontFamily.sans],
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
                },
                animation: {
                    "accordion-down": "accordion-down 0.2s ease-out",
                    "accordion-up": "accordion-up 0.2s ease-out",
                },
            }
        }
    }
)