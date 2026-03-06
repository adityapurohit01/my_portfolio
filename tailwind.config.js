/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          cyan: "#00f3ff",
          purple: "#9d4edd",
          pink: "#ff007f"
        },
        clay: {
          100: "#f0f4f8",
          200: "#e1e8f0",
          800: "#1a1e23",
          900: "#0f1215"
        }
      },
      boxShadow: {
        'clay-light': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'clay-light-inner': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
        'clay-dark': '8px 8px 16px #0d1012, -8px -8px 16px #1b2028',
        'clay-dark-inner': 'inset 6px 6px 12px #0a0c0e, inset -6px -6px 12px #14181c',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
        'glass-gradient-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))'
      }
    },
  },
  plugins: [],
};
