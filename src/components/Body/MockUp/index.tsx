import {
  CardContainer,
  CardRestaurant,
  ContainerDescritivo,
  Image,
  Infos,
  LineSection,
  RatingStar
} from './styles'

import { Link, useLocation } from 'react-router-dom'
import RestaurantRatingImg from '../../../assets/images/star.png'
import Tag from '../../Tag'

type Props = {
  title: string
  description: string
  infos: string[]
  nota: string
  image: string
  background: 'light' | 'dark'
}

const MockUp = ({ title, description, infos, nota, image }: Props) => {
  const location = useLocation()

  const buttonText =
    location.pathname === '/Perfil' ? 'Adicionar ao carrinho' : 'Saiba mais'

  return (
    <div className="container">
      <CardContainer>
        <CardRestaurant>
          <Image style={{ backgroundImage: `url(${image})` }} />
          <Infos>
            {infos.map((infos) => (
              <Tag key={infos}>{infos}</Tag>
            ))}
          </Infos>
          <ContainerDescritivo>
            <LineSection>
              <h3 className="tituloCard">{title}</h3>
              <div className="Rating">
                <h3 className="nota">{nota}</h3>
                <RatingStar
                  style={{ backgroundImage: `url(${RestaurantRatingImg})` }}
                />
              </div>
            </LineSection>
            <p>{description}</p>
            <Link to="/Perfil">
              <Tag size="big">{buttonText}</Tag>
            </Link>
          </ContainerDescritivo>
        </CardRestaurant>
      </CardContainer>
    </div>
  )
}

export default MockUp
