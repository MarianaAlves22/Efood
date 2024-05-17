import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  height: 280px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 1025px) {
      max-width: 72%;
      margin: auto;
    }
  }

  h3 {
    font-size: 32px;
    font-weight: 100;
    color: ${cores.cards};
    padding-top: 25px;
    margin-left: 171px;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${cores.cards};
    padding-top: 156px;
    padding-bottom: 32px;
    margin-left: 171px;
  }
`
