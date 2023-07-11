/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/hero.jpeg')",
        "hero-mobile":
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/hero.jpeg')",
        power: "url('/power.jpg')",
        instructor: "url('/instructor-2.jpeg')",
        group: "url('/group.jpeg')",
      },
    },
  },
  plugins: [],
};
