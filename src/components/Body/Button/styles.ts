import styled from 'styled-components'
import { cores } from '../../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${cores.headerFooter};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  padding: 8px;
`

export const ButtnLink = styled(Link)`
  width: 304px;
  height: 24px;
  background-color: ${cores.headerFooter};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  padding: 8px;
`
