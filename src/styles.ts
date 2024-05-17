import { createGlobalStyle } from 'styled-components'

export const cores = {
  text: '#E66767',
  background: '#FFF8F2',
  headerFooter: '#FFEBD9',
  cards: '#FFFFFF',
  yellow: '#FFB930'
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
    background-color: ${cores.background};
    color: ${cores.text}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 1025px) {
      max-width: 100%;
      margin: auto;
    }
  }
`
