/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./pages/**/*.{js,jsx}",
"./components/**/*.{js,jsx}",
"./app/**/*.{js,jsx}",
],
theme: {
extend: {
fontFamily: {
display: ["Poppins", "ui-sans-serif", "system-ui"],
body: ["Inter", "ui-sans-serif", "system-ui"],
},
colors: {
neon: {
green: "#00f5a0",
blue: "#00d9f5",
purple: "#a78bfa",
},
},
boxShadow: {
glow: "0 0 30px rgba(0,217,245,0.25)",
},
backgroundImage: {
grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
hero: "radial-gradient(60% 60% at 50% 0%, rgba(0,217,245,0.12) 0%, transparent 60%), radial-gradient(60% 60% at 80% 20%, rgba(167,139,250,0.12) 0%, transparent 60%), radial-gradient(60% 60% at 20% 20%, rgba(0,245,160,0.12) 0%, transparent 60%)",
},
animation: {
pulseSlow: "pulse 4s ease-in-out infinite",
}
},
},
plugins: [],
};