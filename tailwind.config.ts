import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ink: "#17171B",
        white: "#FFFFFF",
        gray: {
          50: "#FAFAFB",
          100: "#F3F3F5",
          200: "#E7E7EA",
          300: "#D2D2D8",
          400: "#A6A6B0",
          500: "#7C7C88",
          600: "#5A5A66",
          700: "#3D3D46",
          800: "#252529",
          900: "#17171B",
        },
        brand: {
          purple: "#39103F",
          plum: "#5C1443",
          magenta: "#8A1442",
          crimson: "#B31834",
          red: "#D91A1E",
        },
      },
      fontFamily: {
        display: [
          "'Space Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        body: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(115deg, #39103F 0%, #6E1543 35%, #A5171F 70%, #D91A1E 100%)",
        "brand-gradient-soft":
          "linear-gradient(115deg, rgba(57,16,63,0.06) 0%, rgba(217,26,30,0.06) 100%)",
        "brand-radial":
          "radial-gradient(circle at 30% 20%, rgba(217,26,30,0.18), transparent 45%), radial-gradient(circle at 75% 75%, rgba(57,16,63,0.35), transparent 55%)",
      },
      boxShadow: {
        brand: "0 8px 30px -8px rgba(139,20,66,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        helixDrift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        helix: "helixDrift 14s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
