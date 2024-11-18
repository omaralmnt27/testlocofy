/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "w-background": "#fff",
        azul: "rgba(24, 15, 64, 0.9)",
        "grey-aaa": "#595959",
        black: "#000",
        "grey-aa-large": "#949494",
        blue: "#4200ff",
        "text-color": "#1a1a1a",
        midnightblue: "rgba(24, 15, 64, 0.8)",
        whitesmoke: "#f6f7f9",
        "secondary-300": "#90a3bf",
        "primary-500": "#3563e9",
        "secondary-500": "#1a202c",
        lightsteelblue: "rgba(195, 212, 233, 0.4)",
        cornflowerblue: "rgba(92, 175, 252, 0.3)",
        "information-500": "#54a6ff",
        royalblue: "rgba(53, 99, 233, 0.3)",
        gray: {
          "100": "#1c1c1c",
          "200": "rgba(255, 255, 255, 0.52)",
          "300": "rgba(255, 255, 255, 0.21)",
        },
        lavender: "rgba(240, 237, 255, 0.8)",
        dimgray: "#525252",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        "open-sans": "'Open Sans'",
        inter: "Inter",
        suranna: "Suranna",
        "medium-type14": "'Plus Jakarta Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "51xl": "70px",
      },
    },
    fontSize: {
      base: "16px",
      "2xs": "11px",
      sm: "14px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      xl: "20px",
      xs: "12px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
