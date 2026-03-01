import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          light: "#1B2838",
        },
        viola: {
          DEFAULT: "#8E44AD",
          light: "#A569BD",
          dark: "#7D3C98",
        },
        arancione: {
          DEFAULT: "#E67E22",
          light: "#F39C12",
          dark: "#D35400",
        },
        verde: {
          DEFAULT: "#27AE60",
          light: "#2ECC71",
          dark: "#1E8449",
        },
        grigio: {
          bg: "#F8F9FA",
          border: "#E5E7EB",
          text: "#6B7280",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        input: "8px",
        button: "24px",
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0,0,0,0.07), 0 10px 15px rgba(0,0,0,0.05)",
        hover: "0 8px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.06)",
        glass: "0 8px 32px rgba(0,0,0,0.08)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        "count-up": "count-up 2s ease-out forwards",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
