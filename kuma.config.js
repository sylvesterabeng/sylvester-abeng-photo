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
      100: '#F2F2F2',
    },
    brand: '#B80F0A',
  },
  // 1.25 scale
  fontSizes: {
    sm: '0.8rem',
    rg: '1rem',
    md: '1.25rem',
    lg: '1.563rem',
    xl: '1.953rem',
    xxl: '2.441rem',
    xxxl: '3.052rem',
    xxxxl: '3.815rem',
    heroLg: '120px',
    heroXl: '136px',
  },
  radii: {
    sm: '3px',
  },
  sizes: {
    header: '100px',
  },
})

export default theme
