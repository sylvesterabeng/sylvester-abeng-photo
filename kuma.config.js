import { createTheme } from '@kuma-ui/core'

const theme = createTheme({
  breakpoints: {
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  colors: {
    neutral: {
      500: '#212226',
      400: '#343840',
      300: '#5F6673',
      200: '#b7bec4',
      100: '#e8e7e3',
    },
    brand: '#B80F0A',
  },
  fontSizes: {
    sm: '12px',
    rg: '14px',
    md: '16px',
    lg: '20px',
    xl: '32px',
    xxl: '40px',
    xxxl: '64px',
    heroLg: '80px',
  },
  radii: {
    sm: '4px',
    rg: '8px',
  },
  sizes: {
    header: '160px',
  },
})

export default theme
