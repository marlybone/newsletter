import defaultTheme from "tailwindcss/defaultTheme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import svgToDataUri from "mini-svg-data-uri";
import colors from "tailwindcss/colors";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
      },
      height: {
        custom: "29rem",
        big: "37rem",
      },
      width: {
        larger: "68rem",
        large: "400px",
        big: "360px",
      },
      colors: {
        primary: "#FBF9F1",
        footer: "#E5E1DA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
          animation: {
            first: "moveVertical 30s ease infinite",
            second: "moveInCircle 20s reverse infinite",
            third: "moveInCircle 35s linear infinite",
            fourth: "moveHorizontal 40s ease infinite",
            fifth: "moveInCircle 20s ease infinite",
            sixth: "moveDiagnal 45s reverse infinite"
          },
          keyframes: {
            moveDiagnal: {
              "0%": {
                transform: "translateY(-30%) translateX(10%)  rotate(0deg)" ,
              },
              "50%": {
                transform: "translateY(45%) translateX(50%) rotate(180deg)",
              },
              "100%": {
                transform: "translateY(-30%) translateX(10%) rotate(360deg)" ,
              },
            },
            moveHorizontal: {
              "0%": {
                transform: "translateX(-50%) translateY(-10%)",
              },
              "50%": {
                transform: "translateX(50%) translateY(10%)",
              },
              "100%": {
                transform: "translateX(-50%) translateY(-10%)",
              },
            },
            moveInCircle: {
              "0%": {
                transform: "rotate(0deg)",
              },
              "50%": {
                transform: "rotate(180deg)",
              },
              "100%": {
                transform: "rotate(360deg)",
              },
            },
            moveVertical: {
              "0%": {
                transform: "translateY(-50%)",
              },
              "50%": {
                transform: "translateY(50%)",
              },
              "100%": {
                transform: "translateY(-50%)",
              },
            },
          },
        }
      },

  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
