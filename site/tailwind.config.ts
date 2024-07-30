import type { Config } from "tailwindcss";

const colorPrimary = {
  DEFAULT: '#fc87a5',
  light50: '#fff3f6',
  light100: '#ffe8ec',
  light200: '#ffdce3',
  light300: '#ffd0da',
  light400: '#ffc4d1',
  light500: '#ffb8c8',
  light600: '#ffacbf',
  light700: '#ffa0b6',
  light800: '#fe94ae',
  light900: '#fc87a5',
  dark50: '#030101',
  dark100: '#16060a',
  dark200: '#2d131a',
  dark300: '#47212b',
  dark400: '#62313d',
  dark500: '#7e4151',
  dark600: '#9c5165',
  dark700: '#bb6379',
  dark800: '#db758f',
  dark900: '#fc87a5'
};

const colorDark = {
  DEFAULT: '#2d2d2d',
  light50: '#e8e8e8',
  light100: '#d1d1d1',
  light200: '#bababa',
  light300: '#a4a4a4',
  light400: '#8f8f8f',
  light500: '#7a7a7a',
  light600: '#656565',
  light700: '#525252',
  light800: '#3f3f3f',
  light900: '#2d2d2d'
};

const lightText = '#ffffff';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colorPrimary,
        text: colorDark,

        navbar: {
          bg: colorPrimary['light50'],
          indicator: colorPrimary['DEFAULT'],
          sidebarbg: colorPrimary['light50']
        },

        logobg: colorPrimary['DEFAULT'],
        logofg: colorDark['DEFAULT'],

        footer: {
          bg: colorDark['light700'],
          text: lightText,
        }
      },
      fontFamily: {
        'sans': ['roboto', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
