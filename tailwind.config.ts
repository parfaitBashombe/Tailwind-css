import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#000000",
      },
      screens:{
        'widescreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw':'(min-aspect-ratio:13/20)'},
      },
      keyframes:{
        'open-menu':{
          '0%':{transform: 'scaleY(0)'},
          '80%':{transform: 'scaleY(1.2)'},
          '100%':{transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu':'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
