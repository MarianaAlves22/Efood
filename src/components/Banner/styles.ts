import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

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
