/* eslint-disable @typescript-eslint/no-var-requires */

// const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "false",
  theme: {
    extend: {
      // NOTE: 본 템플릿은 대부분이 모노톤으로 이루어져 있습니다. primary 컬러만 수정하여 사용하시는 것을 권장드립니다.
      colors: {
        GRAY_LIGHT: "#495057",
        GRAY: "#495057",
        GRAY_HEAVY: "#495057",
        GRAY_EXTRAHEAVY: "#495057",
        BLACK: "#f1f3f5",
        /**
         * @description selection(드래그 블록)에 사용되는 컬러입니다.
         */
        PRIMARY_LIGHT: "#FFF2CC",

        /**
         * @description 자기소개의 이름 부분, code tag의 darkmode에 사용되는 컬러입니다.
         */
        PRIMARY: "#FFD966",

        /**
         * @description code tag, link hover icon에 사용되는 컬러입니다.
         */
        PRIMARY_HEAVY: "#F4B183",

        /**
         * @description 페이지 최상단 gradient의 시작 컬러입니다.
         */
        GRADIENT_FROM: "#FFD95A",

        /**
         * @description 페이지 최상단 gradient의 종료 컬러입니다.
         */
        GRADIENT_TO: "#FFF7D4",
      },
    },
  },
  plugins: [],
};
