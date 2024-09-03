module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
        //自定義顏色
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
      //給所有的container置中、padding為2
    },
    screens: {
      sm: "640px",
      md: "768px",
      //重新定義預設的斷點
    },
  },
  plugins: [],
};