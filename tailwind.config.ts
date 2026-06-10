import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#99f5de",
          300: "#5ce9c8",
          400: "#2dd4af",
          500: "#14b896",
          600: "#0a9278",
          700: "#0b7562",
          800: "#0d5e50",
          900: "#0e4e43",
          950: "#042e28",
        },
        // Medical Green
        medical: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        // Primary Teal
        primary: {
          DEFAULT: "#0a7261",
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#99f5de",
          300: "#5ce9c8",
          400: "#2dd4af",
          500: "#14b896",
          600: "#0a9278",
          700: "#0a7261",
          800: "#0d5e50",
          900: "#0e4e43",
          950: "#042e28",
          foreground: "#ffffff",
        },
        // Secondary Gold
        secondary: {
          DEFAULT: "#c5a028",
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#c5a028",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
          foreground: "#ffffff",
        },
        // Neutrals
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "medium": "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 40px -10px rgba(0, 0, 0, 0.07)",
        "strong": "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 60px -20px rgba(0, 0, 0, 0.1)",
        "brand": "0 4px 20px -4px rgba(10, 114, 97, 0.3)",
        "brand-lg": "0 8px 30px -6px rgba(10, 114, 97, 0.4)",
        "gold": "0 4px 20px -4px rgba(197, 160, 40, 0.3)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0a7261 0%, #14b896 100%)",
        "gradient-brand-dark": "linear-gradient(135deg, #042e28 0%, #0a7261 100%)",
        "gradient-gold": "linear-gradient(135deg, #c5a028 0%, #facc15 100%)",
        "gradient-hero": "linear-gradient(135deg, #0a7261 0%, #0d5e50 50%, #042e28 100%)",
        "gradient-light": "linear-gradient(135deg, #f0fdf9 0%, #ccfbef 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 40% 20%, #0a7261 0px, transparent 50%), radial-gradient(at 80% 0%, #14b896 0px, transparent 50%), radial-gradient(at 0% 50%, #042e28 0px, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-down": "fadeDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
