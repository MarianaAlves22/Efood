import {
  PresentationCategoria,
  PresentationContainer,
  PresentationPrato
} from './styles'

export type Props = {
  restaurant: Restaurant
}
const Presentation = ({ restaurant }: Props) => (
  <PresentationContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <PresentationCategoria>{restaurant.tipo}</PresentationCategoria>
      <PresentationPrato>{restaurant.titulo}</PresentationPrato>
    </div>
  </PresentationContainer>
)

export default Presentation
