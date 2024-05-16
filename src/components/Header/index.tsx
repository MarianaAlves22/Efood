import { Link, useLocation } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import {
  Carrinho,
  HeaderBar,
  HeaderContainer,
  Image,
  Logo,
  Text
} from './styles'

export type Props = {
  background: 'light' | 'dark'
}

const Header = ({ background }: Props) => {
  const location = useLocation()

  const titleText =
    location.pathname === '/Perfil'
      ? ''
      : 'Viva experiências gastronômicas no conforto da sua casa'

  const titleRestaurante = location.pathname === '/Perfil' ? 'Restaurantes' : ''
  const titleCarrinho =
    location.pathname === '/Perfil' ? '0 produto(s) no carrinho' : ''

  return (
    <HeaderBar className="container">
      <Image
        style={{ backgroundImage: `url(${fundo})` }}
        background={background}
      >
        <div className="container">
          <HeaderContainer>
            <Logo>{titleRestaurante}</Logo>
            <Link to="/">
              <img className="imageLink" src={logo} alt="EFOOD logo" />
            </Link>
            <Carrinho>{titleCarrinho}</Carrinho>
          </HeaderContainer>
          <Text>{titleText}</Text>
        </div>
      </Image>
    </HeaderBar>
  )
}

export default Header
