/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 4 Official Brand Theme Colors
        "primary": "#FF5500",           // Vibrant Orange
        "brand-orange": "#FF5500",     // Vibrant Orange
        "secondary": "#0066FF font",      // Electric Blue
        "brand-blue": "#0066FF",       // Electric Blue
        "brand-pink": "#FF8CB7",       // Soft Healing Pink
        "brand-yellow": "#FFCC00",     // Warm Sunshine Yellow

        "black-bg": "#0B0F17",          // Deep Charcoal Black
        "black-card": "#131924",        // Dark Card Panel
        "black-border": "#1E2638",      // High Contrast Dark Border

        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-dark": "#ffffff",
        "on-dark-muted": "#94A3B8",

        "surface": "#ffffff",
        "surface-dark": "#0B0F17",
        "surface-container": "#0B0F17",
        "surface-container-low": "#131924",

        "background": "#ffffff",
        "on-surface": "#0B0F17",
        "on-surface-variant": "#334155",
        "outline": "#E2E8F0",
        "outline-dark": "#1E2638"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "xxl": "20px",
        "full": "9999px"
      },
      spacing: {
        "stack-md": "24px",
        "container-max": "1200px",
        "unit": "8px",
        "stack-lg": "48px",
        "gutter": "24px",
        "margin-desktop": "40px",
        "stack-sm": "12px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        "headline-md": ["24px", { lineHeight: "32px" }],
        "body-md": ["16px", { lineHeight: "24px" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.02em" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.04em" }]
      }
    },
  },
  plugins: [],
}
