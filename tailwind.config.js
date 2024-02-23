/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false,
  content: [
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sbComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px", // 30rem
        md: "768px", // 48rem
        lg: "976px", // 61rem
        xl: "1440px", // 90rem
      },
      fontFamily: {
        'neue-montreal': ['"Neue Montreal"', 'sans-serif']
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 700,
        'light': 300,
      },
      fontStyle: {
        italic: 'italic',
        normal: 'normal',
      },
      colors: {
        // Dark green
        'A00': '#1B4444',
        'A10': '#325757',
        'A20': '#496969',
        'A30': '#5F7C7C',
        'A40': '#768F8F',
        'A50': '#8DA1A1',
        'A60': '#A4B4B4',
        'A70': '#BBC7C7',
        'A80': '#D1DADA',
        'A90': '#DDE3E3',
        'A100': '#E8ECEC',
        'A110': '#F4F6F6',

        // Green
        'B00': '#66DD95',
        'B10': '#75E0A0',
        'B20': '#85E4AA',
        'B30': '#94E7B5',
        'B40': '#A3EBBF',
        'B50': '#B3EECA',
        'B60': '#C2F1D5',
        'B70': '#D1F5DF',
        'B80': '#E0F8EA',
        'B90': '#F0FCF4',
        'B100': '#F7FDFA',

        // Grey
        'C00': '#EFEFEF',
        'C10': '#F1F1F1',
        'C20': '#F2F2F2',
        'C30': '#F4F4F4',
        'C40': '#F5F5F5',
        'C50': '#F7F7F7',
        'C60': '#F9F9F9',
        'C70': '#FAFAFA',
        'C80': '#FCFCFC',
        'C90': '#FDFDFD',
        'C100': '#FEFEFE',

        // Red
        'D00': '#E55D5D',
        'D10': '#E86D6D',
        'D20': '#EA7D7D',
        'D30': '#ED8E8E',
        'D40': '#EF9E9E',
        'D50': '#F2AEAE',
        'D60': '#F5BEBE',
        'D70': '#F5BEBE',
        'D80': '#FADFDF',
        'D90': '#FCEFEF',
        'D100': '#FEF7F7',

        // Yellow
        'E00': '#FFFBD6',
        'E10': '#FFFBDA',
        'E20': '#FFFCDE',
        'E30': '#FFFCE2',
        'E40': '#FFFDE6',
        'E50': '#FFFDEB',
        'E60': '#FFFDEF',
        'E70': '#FFFEF3',
        'E80': '#FFFEF7',
        'E90': '#FFFFFB',
        'E100': '#FFFFFD',
      }
    }
  },
  plugins: [],
}

