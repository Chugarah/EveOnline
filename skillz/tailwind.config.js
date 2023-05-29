/* This is a configuration file for Tailwind CSS, a popular CSS framework. The `content` property
specifies the files that Tailwind should scan for classes to include in the final CSS output. The
`theme` property allows for customization of various aspects of the framework, such as adding new
background images. The `plugins` property can be used to add additional functionality to Tailwind.
The comment at the top of the file is a JSDoc annotation that specifies the type of the exported
object. */
/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
};
