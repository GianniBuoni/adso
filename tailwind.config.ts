import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  daisyui: {
    themes: [
      {
        gianni: {
          primary: "#c084fc",
          secondary: "#fb923c",
          accent: "#fda4af",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          info: "#99f6e4",
          success: "#86efac",
          warning: "#fde68a",
          error: "#f472b6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
