import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      keyframes: {
        rise: {
          "0%": {
            transform: "rotate(180deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        set: {
          "0%": {
            transform: "rotate(0)"
          },
          "100%": {
            transform: "rotate(180deg)"
          }
        }
      },
      animation: {
        rise: "rise 0.6s forwards",
        set: "set 0.6s forwards"
      }
    }
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        '.linear-transition-colors': {
          transitionDuration: '0.2s',
          transitionTimingFunction: 'linear',
          transitionProperty: 'color, fill, background-color',
        }
      })
    })
  ]
} satisfies Config;
