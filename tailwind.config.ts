import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'custom': '9rem', // 256px
      },
      height: {
        'custom': '9rem', // 256px
      },
      boxShadow: {
        'custom-light': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      borderColor: {
        'light-black': 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
