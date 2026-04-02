module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx}"],
     theme: {
       extend: {
         colors: {
           primary: "#82B540",
           "primary-dark": "#6a9a32",
           "primary-light": "#f0f7e6",
           dark: "#1C1C1C",
           muted: "#6B7280",
           border: "#E5E7EB",
           surface: "#F7F7F9",
           card: "#FFFFFF",
         },
         fontFamily: {
           heading: ["Syne", "sans-serif"],
           body: ["DM Sans", "sans-serif"],
         },
         borderRadius: {
           card: "12px",
           btn: "8px",
         },
         boxShadow: {
           card: "0 2px 12px rgba(0,0,0,0.07)",
           "card-hover": "0 8px 30px rgba(0,0,0,0.12)",
         },
       },
     },
     plugins: [],
   }
