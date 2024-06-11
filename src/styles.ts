import { createGlobalStyle } from 'styled-components'

export const cores = {
  red: '#E66767',
  lightPink: '#FFF8F2',
  pink: '#FFEBD9',
  white: '#FFFFFF',
  yellow: '#FFB930'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '821px',
  mobile: '430px',
  iphone11: '414px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${cores.lightPink};
    color: ${cores.red}
  }
`
