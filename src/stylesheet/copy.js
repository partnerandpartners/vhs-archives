import breakpoints from './breakpoints'

const fonts = {
  karla: {
    fontFamily: "'Karla', sans-serif",
  },
  blocus: {
    fontFamily: "'Blocus', serif",
  },
}

const copy = {
  h1: {
    fontSize: '20px',
    ...fonts.karla,
  },
  h2: {
    fontSize: '36px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    ...fonts.karla,
  },
  h3: {
    fontSize: '17px',
    ...fonts.karla,
  },
  h4: {
    fontSize: '20px',
    ...fonts.karla,
    [breakpoints.desktop]: {
      fontSize: '24px',
    },
  },
  h5: {
    textTransform: 'uppercase',
    fontSize: '13px',
    letterSpacing: '1px',
    lineHeight: '1em',
    ...fonts.karla,
  },
  p: {
    fontSize: '20px',
    fontWeight: 'bold',
    ...fonts.karla,
  },
  aLarge: {
    fontSize: '36px',
    lineHeight: '1.2em',
    ...fonts.blocus,
  },
  pLarge: {
    fontSize: '36px',
    lineHeight: '1.2em',
    ...fonts.karla,
  },
}

export default { ...fonts, ...copy }
