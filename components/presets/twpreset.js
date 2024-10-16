module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
      },
      // Use for accessible frontend components
      boxShadow: {
        'focus-ring': '0 0 0 0.75rem blue',
      },
      screens: {
        sm: "480px", // 30rem
        md: "768px", // 48rem
        lg: "976px", // 61rem
        xl: "1024px", // 64rem
        xxl: "1440px" // 90rem
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
        
        // Black
        'F00': '#000000',
        'F10': '#202020',
        'F20': '#242424',
        'F30': '#303030',
        'F40': '#363636',
        'F50': '#4D4D4D',
        'F60': '#666666',
        'F70': '#808080',
        'F80': '#999999',
        'F90': '#B3B3B3',
        'F100': '#CCCCCC',
        'F110': '#E6E6E6',
        
        // Blue
        'G00': '#4D80EE',
        'G10': '#6693F0',
        'G20': '#7FA6F2',
        'G30': '#99BAF4',
        'G40': '#B2CDF6',
        'G50': '#CCDEF8',
        'G60': '#E5F1FA',
        'G70': '#EAF3FB',
        'G80': '#EEF5FB',
        'G90': '#F3F7FC',
        'G100': '#F7FAFD',

        // Lavender
        H00: '#4C4AA5',
        H10: '#5D5BAE',
        H20: '#6E6CB6',
        H30: '#7F7DBF',
        H40: '#908EC7',
        H50: '#A19FD0',
        H60: '#B2B0D8',
        H70: '#C3C1E1',
        H80: '#D4D2E9',
        H90: '#E5E3F2',
        H100: '#EFEEF5',
        H110: '#F6F5FA',
      }
    }
  },
}