import Efood from '../../../models/Efood'
import MockUp from '../MockUp'
import { MockListContainer, MockUpListItem } from './styles'

export type Props = {
  title: string
  background: 'light' | 'dark'
  efoods: Efood[]
}

const MockUpList = ({ background, title, efoods }: Props) => (
  <div className="container">
    <MockListContainer background={background}>
      <h2>{title}</h2>
      <MockUpListItem background={background}>
        {efoods.map((efood) => (
          <MockUp
            key={efood.id}
            title={efood.title}
            description={efood.description}
            infos={efood.infos}
            nota={efood.nota}
            image={efood.image}
            background={'light'}
          />
        ))}
      </MockUpListItem>
    </MockListContainer>
  </div>
)

export default MockUpList
