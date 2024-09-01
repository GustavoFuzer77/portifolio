import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor:{
        "night": "#28096b",
        "morning": "#3498db",
      },
      colors: {
        "night": "#28096b",
        "morning": "#3498db",
      },
    },
  },
  plugins: [],
};
export default config;
