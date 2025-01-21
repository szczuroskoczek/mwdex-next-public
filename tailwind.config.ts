import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tomorrow"],
        outstand: ['"Fugaz One"'],
      },
      colors: {
        mwdf: {
          50: "#FAF3F2",
          100: "#F5E7E6",
          200: "#E6C4C0",
          300: "#D7A09A",
          400: "#BA594F",
          500: "#9C1203",
          600: "#8C1003",
          700: "#5E0B02",
          800: "#460801",
          900: "#2F0501",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
