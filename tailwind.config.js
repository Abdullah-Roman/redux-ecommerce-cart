// const flowbite = require("flowbite-react/tailwind");
import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    fontFamily: {
      pop: ["Poppins"],
    },
    extend: {},
  },
  // plugins: [require("flowbite/plugin")],
};
