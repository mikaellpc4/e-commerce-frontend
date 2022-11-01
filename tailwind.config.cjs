module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: {
            transform: "translateY(-10%)"
          },
          to: {
            transform: "translateY(0%)"
          }
        },
        fadeIn: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        fadeOut: {
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          }
        }
      },
      animation: {
        drop: 'slideDown .3s ease-in-out forwards, fadeIn .3s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
