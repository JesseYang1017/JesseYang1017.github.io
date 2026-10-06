/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: "#263154",
        panel: "#fffdf4",
        line: "#8c9dcb",
        paper: "#fffdf4",
        muted: "#53617f",
        amber: "#d27339",
      },
    },
  },
  plugins: [],
};
